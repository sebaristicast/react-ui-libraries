import { Input, Skeleton, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraTextField = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton width="200px" height="56px" />;
  }

  return (
    <Box width="200px">
      <Input
        variant="outline"
        placeholder={t("components.textField")}
        paddingX="4"
        paddingY="2"
        colorPalette="teal"
      />
    </Box>
  );
};
