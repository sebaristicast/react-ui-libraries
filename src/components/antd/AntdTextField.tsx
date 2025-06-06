import { Input, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const AntdTextField = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton.Input active style={{ width: 200, height: 36 }} />;
  }

  return (
    <Input
      placeholder={t("components.textField")}
      style={{ width: 200, height: 36 }}
    />
  );
};
