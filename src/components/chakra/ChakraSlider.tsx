import { Box, Skeleton, Slider, Theme } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraSlider = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton width="150px" height="28px" />;
  }

  return (
    <Theme colorPalette="teal">
      <Box width="150px" padding="4px 0" display="block" alignSelf="center">
        <Slider.Root defaultValue={[30]} aria-label={[t("components.slider")]}>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>
      </Box>
    </Theme>
  );
};
