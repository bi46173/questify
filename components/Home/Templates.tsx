// import Image from "next/image";

import { useFormSelectors, useModalStoreSelectors } from "@/store";
import { Plus } from "lucide-react";

const templates = [
  {
    name: "RSVP",
    image: "images/rsvp.png",
    mapKey: "rsvp",
  },
  {
    name: "Contact information",
    image: "images/contact.png",
    mapKey: "contact",
  },
  {
    name: "Event registration",
    image: "images/registration.png",
    mapKey: "registration",
  },
];
export default function Templates() {
  const loadTemplate = useFormSelectors.use.loadTemplate();
  const openModal = useModalStoreSelectors.use.openModal();

  return (
    <div className="flex flex-col gap-2 text-gray-500 text-sm">
      Start a new form
      <div className="w-full flex flex-row flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <div
            className="flex flex-col items-center justify-center gap-2 w-[150px] h-[140px] shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white"
            onClick={openModal}
          >
            <Plus size={48} className="text-gray-500" strokeWidth={0.5} />
          </div>
          Blank
        </div>
        {templates.map((template, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div
              className="flex flex-col gap-2 w-[150px] h-[140px] shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white"
              onClick={() => loadTemplate(template.mapKey)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={template.image} alt="template" className="h-full" />
            </div>
            {template.name}
          </div>
        ))}
      </div>
    </div>
  );
}