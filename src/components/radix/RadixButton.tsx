import { Button } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

interface Props {
  isLoading?: boolean;
}

export const RadixButton = ({ isLoading = false }: Props) => {
  const { t } = useTranslation();

  return (
    <Button disabled={isLoading} variant="solid" size="2">
      {t("components.button")}
    </Button>
  );
};
