import { Theme, FormItem, SubItem, InitialFormData } from "./form";
import { v4 as uuidv4 } from "uuid";
import {
  rsvp,
  orderRequest,
  jobApplication,
  employeeSurvey,
  travelSurvey,
  healthAssessment,
  petAdoptionInquiry,
  volunteerInterestForm,
  demographicInformation,
  patientSatisfactionSurvey,
  socialMediaUsage,
  onlineShoppingExperience,
} from "@/lib/templates";
import { FormState } from "./";
import { FormItemType_Enum } from "@/lib/graphql";

export const iconProps = {
  size: 20,
  className: "text-slate-700 hover:scale-110 cursor-pointer",
  strokeWidth: 1.5,
};

export const initialFormData: InitialFormData = {
  id: "",
  items: [],
  deletedItems: [],
  name: "Untitled Form",
  loading: false,
  isFavorite: false,
  editMode: true,
  selectedComponent: "formHeader",
  activeTab: 0,
  operation: "",
};

export const initialTheme: Theme = {
  Header: {
    fontSize: "24",
    fontFamily: "Open Sans",
    text: "Untitled form",
  },
  Question: {
    fontSize: "16",
    fontFamily: "Open Sans",
  },
  Text: {
    fontSize: "14",
    fontFamily: "Open Sans",
    text: "Description",
  },
  primaryColor: "#673ab7",
  secondaryColor: "#e1d8f1",
};

const generateOptions = (type: FormItemType_Enum) => {
  switch (type) {
    case FormItemType_Enum.LinearScale:
      return {
        options: [
          {
            id: uuidv4(),
            value: "1",
            order: 1,
            label: "Label",
          },
          {
            id: uuidv4(),
            value: "10",
            order: 2,
            label: "Label",
          },
        ],
      };
    case FormItemType_Enum.SingleChoice:
    case FormItemType_Enum.MultipleChoice:
    case FormItemType_Enum.Dropdown:
      return {
        options: [
          {
            id: uuidv4(),
            value: "Option 1",
            order: 1,
          },
          {
            id: uuidv4(),
            value: "Option 2",
            order: 2,
          },
        ],
      };
    default:
      return {
        options: [],
      };
  }
};

export const newInputItem: (
  type: FormItemType_Enum,
  lastOrder?: number
) => FormItem = (type, lastOrder = 0) => ({
  id: uuidv4(),
  name: type === FormItemType_Enum.Text ? "" : "Question",
  order: lastOrder + 1,
  origin: "client",
  section: 0,
  type,
  required: false,
  ...generateOptions(type),
});
export const newSubItem: (lastOrder?: number) => SubItem = (lastOrder = 0) => ({
  id: uuidv4(),
  value: `Option ${lastOrder + 1}`,
  order: lastOrder + 1,
});

export const templateMapper: Record<string, FormState> = {
  rsvp,
  orderRequest,
  jobApplication,
  employeeSurvey,
  travelSurvey,
  healthAssessment,
  petAdoptionInquiry,
  volunteerInterestForm,
  demographicInformation,
  patientSatisfactionSurvey,
  socialMediaUsage,
  onlineShoppingExperience,
};
