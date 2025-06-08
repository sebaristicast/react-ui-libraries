import { Button, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraButton = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton width="90px" height="36px" />;
  }

  return (
    <Button variant="surface" height="36px" minWidth="90px" colorPalette="teal">
      {t("components.button")}
    </Button>
  );
};
