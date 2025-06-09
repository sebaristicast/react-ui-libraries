import { Layer, Box, Button, Heading, Skeleton } from "grommet";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";
import { useState } from "react";

export const GrommetDialog = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <Skeleton height="200px" width="300px" />;
  }

  return (
    <Box>
      <Button
        primary
        label={t("components.dialog")}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <Layer
          modal
          position="center"
          onEsc={() => setIsOpen(false)}
          onClickOutside={() => setIsOpen(false)}
        >
          <Box pad="medium" gap="medium" width={{ min: "300px" }}>
            <Heading level={3} margin="none">
              {t("components.dialog")}
            </Heading>

            <Box>{t("components.textField")}</Box>

            <Box direction="row" gap="small" justify="end">
              <Button primary label="Close" onClick={() => setIsOpen(false)} />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};
