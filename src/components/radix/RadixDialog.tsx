import { useState } from "react";
import { Dialog, Button, Text, Flex, Heading } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

interface Props {
  isLoading?: boolean;
}

export const RadixDialog = ({ isLoading = false }: Props) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button disabled={isLoading} variant="solid" size="2">
          {t("components.dialog")}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>
          <Heading size="4" mb="2" trim="start">
            {t("components.dialog")}
          </Heading>
        </Dialog.Title>

        <Dialog.Description size="2" mb="4">
          <Text as="p" size="2" color="gray">
            Dialog Content Description
          </Text>
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Close
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
