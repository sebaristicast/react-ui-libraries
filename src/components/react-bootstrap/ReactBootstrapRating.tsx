import { Stack, Placeholder } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="20"
    height="20"
    fill={filled ? "#ffc107" : "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
    style={{ cursor: "pointer" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export const ReactBootstrapRating = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Placeholder xs={6} style={{ width: 160, height: 24 }} />;
  }

  return (
    <Stack direction="horizontal" gap={1} aria-label={t("components.rating")}>
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} filled={index < 3} />
      ))}
    </Stack>
  );
};
