import { Button, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraButton = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="36px" width="90px" />;
  }

  return (
    <Button colorScheme="blue" height="36px" minWidth="90px">
      {t("components.button")}
    </Button>
  );
};
