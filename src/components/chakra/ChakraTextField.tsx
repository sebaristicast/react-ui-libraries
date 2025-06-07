import { Input, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraTextField = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="40px" width="200px" />;
  }

  return (
    <Input
      placeholder={t("components.textField")}
      width="200px"
      height="40px"
    />
  );
};
