import { FormItem } from "@/types";
import {
  CreateFormDocument,
  CreateFormMutation,
  MyFormsDocument,
  FormDataDocument,
  FormDataQuery,
  UpdateFormMutation,
  UpdateFormDocument,
  UpdateFormItemsMutation,
  UpdateFormItemsDocument,
  DeleteFormItemsMutation,
  DeleteFormItemsDocument,
} from "@/lib/graphql";
import { apolloClient } from "@/lib/";
import { toast } from "react-toastify";
import {
  closeFormModal,
  resetForm,
  setLoading,
  getTheme,
  getItems,
  getFormDetails,
  getDeletedItems,
  thumbnail,
} from "./";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { gql } from "@apollo/client";

export const prepareCreateItems = (items: FormItem[]) =>
  items.map((item) => ({
    id: item.id,
    name: item.name,
    order: item.order,
    required: item.required,
    items: item.options,
    type: item.type,
    image: item.image,
  }));
export const prepareUpsertItems = (items: FormItem[]) =>
  items.map((item) => ({
    where: {
      id: item.id,
    },
    create: {
      id: item.id,
      name: item.name,
      order: item.order,
      required: item.required,
      items: item.options,
      type: item.type,
      image: item.image,
    },
    update: {
      name: {
        set: item.name,
      },
      order: {
        set: item.order,
      },
      required: {
        set: item.required,
      },
      image: {
        set: item.image,
      },
      items: item.options,
    },
  }));

export const saveForm = async () => {
  setLoading(true);
  try {
    const theme = getTheme();
    const formDetails = getFormDetails();
    const formItems = getItems();
    const response = await apolloClient.mutate<CreateFormMutation>({
      mutation: CreateFormDocument,
      variables: {
        data: {
          id: uuidv4(),
          name: formDetails.name,
          FormItems: {
            data: prepareCreateItems(formItems),
          },
          style: theme,
          favorite: formDetails.favorite,
        },
      },
      refetchQueries: [
        {
          query: MyFormsDocument,
        },
      ],
    });
    toast.success("Form created successfully!");
    closeFormModal();
    resetForm();
    setLoading(false);
    void handleThumbnailUpdate(
      response.data?.insert_Form_one?.id,
      theme.secondaryColor
    );
  } catch (error) {
    setLoading(false);
    console.error("Error saving form:", error);
    toast.error(
      "Something went wrong! Make sure you're using an unique name and try again."
    );
  }
};
export const editForm = async (formId?: string) => {
  if (!formId) return;
  setLoading(true);
  thumbnail().set(formId);
  try {
    const theme = getTheme();
    const formDetails = getFormDetails();
    const formItems = getItems();
    const deletedItems = getDeletedItems();
    await apolloClient.mutate<UpdateFormMutation>({
      mutation: UpdateFormDocument,
      variables: {
        id: formId,
        name: formDetails.name,
        style: theme,
        favorite: formDetails.favorite,
      },
    });
    await apolloClient.mutate<UpdateFormItemsMutation>({
      mutation: UpdateFormItemsDocument,
      variables: {
        data: formItems.map((item) => ({
          id: item.id,
          name: item.name,
          order: item.order,
          required: item.required,
          image: item.image,
          type: item.type,
          formId: formId,
          items: item.options ?? [],
        })),
      },
    });
    if (deletedItems.length > 0) {
      await apolloClient.mutate<DeleteFormItemsMutation>({
        mutation: DeleteFormItemsDocument,
        variables: {
          ids: deletedItems,
        },
      });
    }
    toast.success("Form updated successfully!");
    closeFormModal();
    resetForm();
    setLoading(false);
    void handleThumbnailUpdate(formId, theme.secondaryColor);
  } catch (error) {
    setLoading(false);
    console.error("Error saving form:", error);
    toast.error(
      "Something went wrong! Make sure you're using an unique name and try again."
    );
  }
};
export const loadFormData = async (id: string) => {
  try {
    const { data: { Form_by_pk } = {} } =
      await apolloClient.query<FormDataQuery>({
        query: FormDataDocument,
        variables: {
          formId: id,
        },
        fetchPolicy: "network-only",
      });
    return Form_by_pk;
  } catch (e) {
    toast.error("Something went wrong! Please try again later!");
    console.log(e);
  }
};

const handleThumbnailUpdate = async (
  formId?: string,
  backgroundColor?: string
) => {
  if (!formId) return;
  const { data } = await axios.post("/api/screenshot", {
    formId: formId,
    fullpage: true,
    backgroundColor,
  });
  const thumbnailFragment = gql`
    fragment Thumbnail on Form {
      thumbnail
    }
  `;

  if (!data.formId || !data.imageUrl) return;

  apolloClient.cache.writeFragment({
    id: `Form:${data.formId}`,
    fragment: thumbnailFragment,
    data: {
      thumbnail: data.imageUrl,
    },
  });
  thumbnail().set();
};
