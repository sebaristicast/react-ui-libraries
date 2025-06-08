import { Button, Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ReactBootstrapButton = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Placeholder.Button xs={4} style={{ width: 90, height: 36 }} />;
  }

  return (
    <Button
      variant="primary"
      style={{ minWidth: 90, height: 36 }}
      className="btn-primary"
    >
      {t("components.button")}
    </Button>
  );
};
