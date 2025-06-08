import { Form, Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ReactBootstrapTextField = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Placeholder xs={6} style={{ width: 200, height: 36 }} />;
  }

  return (
    <Form.Control
      type="text"
      placeholder={t("components.textField")}
      style={{ width: 200 }}
      className="form-control"
    />
  );
};
