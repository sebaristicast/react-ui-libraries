import { Slider, Box, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraSlider = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="28px" width="150px" />;
  }

  return (
    <Box width="150px" padding="4px 0" display="block" alignSelf="center">
      <Slider.Root defaultValue={[30]} min={0} max={100} colorPalette="blue">
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Root>
    </Box>
  );
};
