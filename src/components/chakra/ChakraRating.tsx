import { Box, RatingGroup, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraRating = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="24px" width="120px" />;
  }

  return (
    <Box>
      <RatingGroup.Root
        count={5}
        defaultValue={3}
        size="md"
        colorPalette="yellow"
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>
    </Box>
  );
};
