import { initialFormData, templateMapper } from "./../../types/initialData";
import { FormDetailsSlice, ItemSlice, ThemeSlice, initialTheme } from "@/types";
import { toast } from "react-toastify";
import { StateCreator } from "zustand";
import { openFormModal, saveForm } from "../actions";
export const createFormDetailsSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  FormDetailsSlice
> = (set, get) => ({
  id: 0,
  name: "Untitled Form",
  isFavorite: false,
  selectedComponent: "formHeader",
  editMode: true,
  loading: false,
  updateFormDetails: (prop, value) =>
    set((state) => ({
      ...state,
      [prop]: value,
    })),
  resetForm: () => {
    set((state) => ({
      ...state,
      theme: initialTheme,
      ...initialFormData,
    }));
  },
  saveForm: async () => {
    if (!get().items.length)
      return toast.info("At least one form item is required");
    await saveForm();
  },
  loadTemplate: (template) => {
    if (!["rsvp", "contact", "registration"].includes(template)) return;
    const templateData = templateMapper[template];
    set((state) => ({
      ...state,
      ...templateData,
    }));
    openFormModal();
  },
});
