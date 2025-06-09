import { Dialog, Button, Classes } from "@blueprintjs/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";
import "@blueprintjs/core/lib/css/blueprint.css";

interface ExtendedComponentProps extends ComponentProps {
  isDarkMode?: boolean;
}

export const BlueprintDialog = ({
  isLoading,
  isDarkMode,
}: ExtendedComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={isDarkMode ? "bp5-dark" : ""}>
      <Button
        loading={isLoading}
        onClick={handleOpen}
        text={t("components.dialog")}
      />
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        title={t("components.dialog")}
      >
        <div className={Classes.DIALOG_BODY}>
          <p>{t("components.textField")}</p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button onClick={handleClose} text="close" />
          </div>
        </div>
      </Dialog>
    </div>
  );
};
