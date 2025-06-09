import { Button, Intent } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";
import "@blueprintjs/core/lib/css/blueprint.css";

interface ExtendedComponentProps extends ComponentProps {
  isDarkMode?: boolean;
}

export const BlueprintButton = ({
  isLoading,
  isDarkMode,
}: ExtendedComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={isDarkMode ? "bp5-dark" : ""}>
      <Button
        intent={Intent.PRIMARY}
        loading={isLoading}
        text={t("components.button")}
        onClick={() => console.log("Blueprint button clicked")}
      />
    </div>
  );
};
