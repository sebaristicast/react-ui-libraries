import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Skeleton,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

export const ChakraDialog = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton width="100px" height="36px" />;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          width="100px"
          height="36px"
          variant="surface"
          colorPalette="teal"
        >
          {t("components.dialog")}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" backdropFilter="blur(2px)" />
        <Dialog.Positioner
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Dialog.Content
            bg="bg.surface"
            borderRadius="xl"
            boxShadow="xl"
            maxW="md"
            mx="4"
            width="full"
          >
            <Dialog.Header borderBottomWidth="1px" p="4">
              <Dialog.Title fontWeight="semibold">
                {t("components.dialog")}
              </Dialog.Title>
              <Dialog.CloseTrigger
                asChild
                position="absolute"
                top="3"
                right="3"
              >
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>

            <Dialog.Body p="4">Dialog Content Description</Dialog.Body>

            <Dialog.Footer
              borderTopWidth="1px"
              p="4"
              display="flex"
              justifyContent="flex-end"
              gap="2"
            >
              <Dialog.ActionTrigger asChild>
                <Button variant="surface" colorPalette="teal">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button variant="surface" colorPalette="teal">
                Accept
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
