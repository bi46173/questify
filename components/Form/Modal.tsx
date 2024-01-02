import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Header } from "./Header";
import { useBoolean } from "usehooks-ts";
import { ThemeCustomizer } from "./ThemeCustomizer";
import { useCreateFormSelectors } from "@/store";

interface P {
  visible: boolean;
  openFn: () => void;
  closeFn: () => void;
  saveFn?: () => void;
  side?: "left" | "right" | "top" | "bottom";
}

export const FullScreenModal = ({
  visible,
  openFn,
  closeFn,
  saveFn,
  side = "left",
}: P) => {
  const { value: themeCustomizer, toggle: toggleThemeCustomizer } =
    useBoolean(false);

  const resetTheme = useCreateFormSelectors.use.resetTheme();

  const handleModalClose = () => {
    closeFn();
    resetTheme();
  };
  return (
    <Sheet open={visible}>
      <SheetContent
        className="sm:max-w-full w-full h-full max-h-full p-0 flex flex-col gap-0 overflow-y-auto"
        side={side}
        onClose={handleModalClose}
        onEscapeKeyDown={handleModalClose}
      >
        <Header
          closeFn={handleModalClose}
          toggleThemeCustomizer={toggleThemeCustomizer}
        />
        <div className="h-full w-full">Form content</div>
        <ThemeCustomizer
          visible={themeCustomizer}
          toggle={toggleThemeCustomizer}
        />
      </SheetContent>
    </Sheet>
  );
};
