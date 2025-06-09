import { TextInput, Box, Skeleton } from "grommet";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const GrommetTextField = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="36px" width="200px" />;
  }

  return (
    <Box width="200px">
      <TextInput
        placeholder={t("components.textField")}
        style={{ height: "36px" }}
      />
    </Box>
  );
};
