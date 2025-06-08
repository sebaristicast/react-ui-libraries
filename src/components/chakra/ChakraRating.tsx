import { Box, RatingGroup, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraRating = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton width="120px" height="24px" />;
  }

  return (
    <Box width="120px" padding="4px 0" display="block" alignSelf="center">
      <RatingGroup.Root
        count={5}
        defaultValue={3}
        size="sm"
        colorPalette="teal"
        aria-label={t("components.rating")}
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>
    </Box>
  );
};
