import { Button, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const AntdButton = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton.Button active style={{ width: 90, height: 36 }} />;
  }

  return (
    <Button type="primary" style={{ height: 36, minWidth: 90 }}>
      {t("components.button")}
    </Button>
  );
};
