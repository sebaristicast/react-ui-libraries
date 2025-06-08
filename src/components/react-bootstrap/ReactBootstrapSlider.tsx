import { Form, Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ReactBootstrapSlider = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Placeholder xs={6} style={{ width: 150, height: 28 }} />;
  }

  return (
    <div style={{ width: 150, padding: "4px 0", alignSelf: "center" }}>
      <Form.Range
        defaultValue={30}
        aria-label={t("components.slider")}
        className="form-range"
      />
    </div>
  );
};
