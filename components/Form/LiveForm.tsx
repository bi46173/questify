import { FormType } from "@/lib/graphql";
import { FormItem, Theme } from "@/types";
import {
  LiveShortComponent,
  LiveLongComponent,
  LiveOneChoice,
  LiveMultiChoice,
  LiveLinearScale,
  LiveDate,
  LiveDropdown,
  HeaderImage,
  LiveHeader,
} from "./Items";

const componentMapper = {
  [FormType.Short]: LiveShortComponent,
  [FormType.Long]: LiveLongComponent,
  [FormType.SingleChoice]: LiveOneChoice,
  [FormType.MultipleChoice]: LiveMultiChoice,
  [FormType.LinearScale]: LiveLinearScale,
  [FormType.Date]: LiveDate,
  [FormType.Dropdown]: LiveDropdown,
};

interface P {
  theme: Theme;
  items: FormItem[];
}

export default function LiveForm({ theme, items }: P) {
  return (
    <>
      <HeaderImage theme={theme} />
      <LiveHeader theme={theme} />
      {items
        .sort((a, b) => a.order - b.order)
        .map((item) => {
          const DynamicComponent = componentMapper[item.type];
          return <DynamicComponent key={item.id} item={item} theme={theme} />;
        })}
    </>
  );
}
