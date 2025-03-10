import { FormState } from "@/types";
import { FormType } from "./graphql";
import { v4 } from "uuid";

export const rsvp: FormState = {
  name: "Event RSVP",
  editMode: true,
  isFavorite: false,
  loading: false,
  selectedComponent: "formHeader",
  activeTab: 0,
  operation: "",
  theme: {
    Header: {
      fontSize: "24",
      fontFamily: "Open Sans",
      text: "<p><strong>Event RSVP</strong></p>",
      image: {
        name: "rsvp.jpg",
        type: "image/jpeg",
        initialDataUrl: "",
        dataUrl:
          "https://res.cloudinary.com/dfcbsf8um/image/upload/v1705866735/rsvp.jpg",
        origin: "client",
      },
    },
    Question: {
      fontSize: "16",
      fontFamily: "Open Sans",
    },
    Text: {
      fontSize: "14",
      fontFamily: "Open Sans",
      text: "<p>Event Address: 123 Your Street Your City, ST 12345</p>",
    },
    primaryColor: "#673ab7",
    secondaryColor: "#e1d8f1",
  },
  items: [
    {
      id: v4(),
      name: "<p>Can you attend?</p>",
      order: 1,
      origin: "client",
      section: 0,
      type: FormType.SingleChoice,
      required: true,
      options: [
        {
          id: v4(),
          value: "Yes, I'll be there",
          order: 1,
        },
        {
          id: v4(),
          value: "Sorry, can't make it",
          order: 2,
        },
      ],
    },
    {
      id: v4(),
      name: "<p>What are the names of people attending?</p>",
      order: 2,
      origin: "client",
      section: 0,
      type: FormType.Short,
      required: false,
      options: [],
    },
    {
      id: v4(),
      name: "<p>How did you hear about this event?</p>",
      order: 2,
      origin: "client",
      section: 0,
      type: FormType.SingleChoice,
      required: true,
      options: [
        {
          id: v4(),
          value: "Friend",
          order: 1,
        },
        {
          id: v4(),
          value: "Advertisement",
          order: 2,
        },
        {
          id: v4(),
          value: "Newsletter",
          order: 3,
        },
        {
          id: v4(),
          value: "Online",
          order: 4,
        },
      ],
    },
    {
      id: v4(),
      name: "<p>Comments/questions</p>",
      order: 3,
      origin: "client",
      section: 0,
      type: FormType.Long,
      required: false,
      options: [],
    },
  ],
};
export const orderRequest: FormState = {
  name: "Order request",
  editMode: true,
  isFavorite: false,
  loading: false,
  selectedComponent: "formHeader",
  activeTab: 0,
  operation: "",
  theme: {
    Text: {
      text: "<p>After you fill out this order request, we will contact you to go over details and availability before the order is completed. If you would like faster service and direct information on current stock and pricing please contact us at Contact us at (123) 456-7890 or no_reply@example.com</p>",
      fontSize: "14",
      fontFamily: "Open Sans",
    },
    Header: {
      text: "<p>Order request</p>",
      image: {
        name: "form-header-d6bd2c2a-4b6c-4360-87ae-38faed5f0e17",
        type: "",
        origin: "client",
        dataUrl:
          "http://res.cloudinary.com/dfcbsf8um/image/upload/v1706978090/d6bd2c2a-4b6c-4360-87ae-38faed5f0e17/vbn3buf7livkbnzblwi6.jpg",
        initialDataUrl: "",
      },
      fontSize: "24",
      fontFamily: "Open Sans",
    },
    Question: {
      fontSize: "16",
      fontFamily: "Open Sans",
    },
    primaryColor: "#6c1919",
    secondaryColor: "#f7f3f4",
  },
  items: [
    {
      id: v4(),
      name: "<p>Are you a new or existing customer?</p>",
      order: 1,
      required: false,
      type: FormType.SingleChoice,
      options: [
        {
          id: v4(),
          order: 1,
          value: "I am a new customer",
        },
        {
          id: v4(),
          order: 2,
          value: "I am an existing customer",
        },
      ],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>What is the item you would like to order?</p>",
      order: 2,
      required: false,
      type: FormType.Short,
      options: [],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>What color(s) would you like to order?</p>",
      order: 3,
      required: false,
      type: FormType.MultipleChoice,
      options: [
        {
          id: v4(),
          order: 1,
          value: "Color 1",
        },
        {
          id: v4(),
          order: 2,
          value: "Color 2",
        },
        {
          id: v4(),
          order: 3,
          value: "Color 3",
        },
        {
          id: v4(),
          order: 4,
          value: "Color 4",
        },
      ],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Your name</p>",
      order: 4,
      required: true,
      type: FormType.Short,
      options: [],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Phone number</p>",
      order: 5,
      required: true,
      type: FormType.Short,
      options: [],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Preferred contact method</p>",
      order: 6,
      required: false,
      type: FormType.MultipleChoice,
      options: [
        {
          id: v4(),
          order: 1,
          value: "Phone",
        },
        {
          id: v4(),
          order: 2,
          value: "Email",
        },
      ],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Questions and comments</p>",
      order: 7,
      required: false,
      type: FormType.Long,
      options: [],
      origin: "client",
    },
  ],
};
export const jobApplication: FormState = {
  name: "Job application",
  editMode: true,
  isFavorite: false,
  loading: false,
  selectedComponent: "formHeader",
  activeTab: 0,
  operation: "",
  theme: {
    Text: {
      text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sem odio. Sed commodo vestibulum leo, sit amet tempus odio consectetur in. Mauris dolor elit, dignissim mollis feugiat maximus, faucibus et eros.</p>",
      fontSize: "14",
      fontFamily: "Open Sans",
    },
    Header: {
      text: "<p>Job application</p>",
      image: {
        name: "job-application",
        type: "",
        origin: "client",
        dataUrl:
          "http://res.cloudinary.com/dfcbsf8um/image/upload/v1706977632/6a4c018f-c2f7-4342-86f3-7247a3425080/xde6zxrdglgqssljtfei.jpg",
        initialDataUrl: "",
      },
      fontSize: "24",
      fontFamily: "Open Sans",
    },
    Question: {
      fontSize: "16",
      fontFamily: "Open Sans",
    },
    primaryColor: "#1b7c6b",
    secondaryColor: "#d1e5e1",
  },
  items: [
    {
      id: v4(),
      name: "<p>Full name</p>",
      order: 1,
      required: true,
      type: FormType.Short,
      options: [],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Email</p>",
      order: 2,
      required: true,
      type: FormType.Short,
      options: [],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Phone number</p>",
      order: 3,
      required: true,
      type: FormType.Short,
      options: [],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Which position(s) are you interested in?</p>",
      order: 4,
      required: true,
      type: FormType.MultipleChoice,
      options: [
        {
          id: v4(),
          order: 1,
          value: "Position 1",
        },
        {
          id: v4(),
          order: 2,
          value: "Position 2",
        },
        {
          id: v4(),
          order: 3,
          value: "Position 3",
        },
      ],
      origin: "client",
    },
    {
      id: v4(),
      name: "<p>Submit your cover letter or resume</p>",
      order: 5,
      required: false,
      type: FormType.Long,
      options: [],
      origin: "client",
    },
  ],
};
