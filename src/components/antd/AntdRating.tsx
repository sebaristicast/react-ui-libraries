import { Rate, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const AntdRating = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton.Input active style={{ width: 160, height: 24 }} />;
  }

  return (
    <Rate
      defaultValue={3}
      style={{ fontSize: 20 }}
      aria-label={t("components.rating")}
    />
  );
};
