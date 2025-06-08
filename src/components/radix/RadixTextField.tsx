import { Text } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

interface Props {
  isLoading?: boolean;
}

export const RadixTextField = ({ isLoading = false }: Props) => {
  const { t } = useTranslation();

  return (
    <Text>
      <input
        type="text"
        placeholder={t("components.textField")}
        disabled={isLoading}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid var(--gray-7)",
          width: "100%",
          fontSize: "14px",
          lineHeight: "20px",
          color: "var(--gray-12)",
          backgroundColor: "var(--gray-2)",
        }}
      />
    </Text>
  );
};
