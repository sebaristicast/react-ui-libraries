import { InputGroup, Intent } from "@blueprintjs/core";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";
import "@blueprintjs/core/lib/css/blueprint.css";

interface ExtendedComponentProps extends ComponentProps {
  isDarkMode?: boolean;
}

export const BlueprintTextField = ({
  isLoading,
  isDarkMode,
}: ExtendedComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={isDarkMode ? "bp5-dark" : ""}>
      <InputGroup
        disabled={isLoading}
        intent={Intent.PRIMARY}
        placeholder={t("components.textField")}
        onChange={(e) =>
          console.log("Blueprint text field changed:", e.target.value)
        }
      />
    </div>
  );
};
