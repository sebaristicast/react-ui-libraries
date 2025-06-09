import { Button, Skeleton } from "grommet";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const GrommetButton = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="36px" width="90px" />;
  }

  return (
    <Button
      primary
      label={t("components.button")}
      style={{ height: "36px", minWidth: "90px" }}
    />
  );
};
