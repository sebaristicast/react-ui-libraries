import { Slider, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const AntdSlider = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton.Input active style={{ width: 150, height: 28 }} />;
  }

  return (
    <div
      style={{
        width: 150,
        padding: "4px 0",
        display: "block",
        alignSelf: "center",
      }}
    >
      <Slider
        defaultValue={30}
        aria-label={t("components.slider")}
        tooltip={{ formatter: (value) => `${value}%` }}
      />
    </div>
  );
};
