import { Box, Skeleton } from "grommet";
import { Star } from "grommet-icons";
import { useTranslation } from "react-i18next";
import type { ComponentProps } from "../../types/component-props";

const StarRating = () => {
  return (
    <Box direction="row" gap="xsmall">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          color={index < 3 ? "brand" : "light-4"}
          size="medium"
        />
      ))}
    </Box>
  );
};

export const GrommetRating = ({ isLoading }: ComponentProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Skeleton height="24px" width="120px" />;
  }

  return (
    <Box aria-label={t("components.rating")}>
      <StarRating />
    </Box>
  );
};
