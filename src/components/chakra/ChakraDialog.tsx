import { Dialog, Button, useDisclosure, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraDialog = ({ isLoading }: ComponentProps) => {
  const { open, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="36px" width="90px" />;
  }

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        {t("components.dialog")}
      </Button>

      <Dialog.Root open={open} onOpenChange={onClose}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>{t("components.dialog")}</Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body pb={6}>{t("components.dialogContent")}</Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};
