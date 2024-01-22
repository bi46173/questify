import {
  MyFormsQuery,
  useDeleteFormMutation,
  useStarFormMutation,
} from "@/lib/graphql";
import { File, Star } from "lucide-react";
import dayjs from "dayjs";
import { Separator } from "../ui";
import Actions from "./Actions";
import { useBoolean } from "usehooks-ts";
import { toast } from "react-toastify";
import { cn } from "@/lib";
import { Loader } from "@/assets/svg";
import { useFormSelectors } from "@/store";

type FormType = MyFormsQuery["findManyForm"][number];

interface P {
  form: FormType;
}
export default function Form({ form }: P) {
  const { value: isPopoverOpen, toggle: togglePopover } = useBoolean(false);
  const editForm = useFormSelectors.use.loadForm();
  const formLoading = useFormSelectors.use.loading();
  const [deleteForm, { loading: deleteLoading }] = useDeleteFormMutation({
    variables: {
      formId: form.id,
    },
    onCompleted() {
      toast.success("Form was deleted successfully!");
    },
    onError() {
      toast.error("Something went wrong! Please try again later.");
    },
    update(cache) {
      const normalizedId = cache.identify({ id: form.id, __typename: "Form" });
      cache.evict({ id: normalizedId });
      cache.gc();
    },
  });
  const [starForm, { loading: loadingFavorite }] = useStarFormMutation({
    variables: {
      formId: form.id,
      favorite: !form.favorite,
    },
    onCompleted() {
      toast.success(
        `Form was ${form.favorite ? "added to" : "removed from"} favorites`
      );
    },
    onError() {
      toast.error("Something went wrong! Please try again later!");
    },
  });
  return (
    <div className="h-64 shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white">
      <div className="h-full flex flex-col gap-1">
        <div className="flex self-end p-2 w-8">
          {loadingFavorite ? (
            <Loader width={16} height={16} />
          ) : (
            <Star
              className={cn(
                "text-slate-700 hover:scale-110 cursor-pointer text-[12px] flex justify-end",
                form.favorite && "fill-amber-500 text-amber-500"
              )}
              strokeWidth={1.5}
              size={16}
              onClick={() => starForm()}
            />
          )}
        </div>
        <div className="h-2/3 flex justify-center items-center">
          <File size={72} className="text-gray-500" strokeWidth={0.5} />
        </div>
        <div className="h-1/3 flex flex-col gap-3 justify-end">
          <Separator />
          <div className="p-2">
            <div className="text-slate-700 whitespace-nowrap overflow-hidden text-ellipsis">
              {form.name}
            </div>
            <div className="text-slate-500 text-xs flex items-center justify-between gap-[1px]">
              <div>Created {dayjs(form.createdAt).format("MMM DD, YYYY")}</div>
              <Actions
                visible={isPopoverOpen}
                toggle={togglePopover}
                editLoading={formLoading}
                deleteLoading={deleteLoading}
                onEdit={() => editForm(form.id)}
                onDelete={() => void deleteForm()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
