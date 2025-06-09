import { RangeInput, Box, Skeleton } from "grommet";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";
import { useState } from "react";

export const GrommetSlider = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(10);

  if (isLoading) {
    return <Skeleton height="24px" width="200px" />;
  }

  return (
    <Box width="200px">
      <RangeInput
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        min={0}
        max={100}
        style={{ height: "24px" }}
        aria-label={t("components.slider")}
      />
    </Box>
  );
};
