import { useState } from "react";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

interface Props {
  isLoading?: boolean;
}

export const RadixRating = ({ isLoading = false }: Props) => {
  const [rating, setRating] = useState(0);
  const { t } = useTranslation();

  return (
    <div
      className="flex gap-1"
      role="radiogroup"
      aria-label={t("components.rating")}
    >
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={rating >= value}
          disabled={isLoading}
          onClick={() => setRating(value)}
          className="text-yellow-400 disabled:opacity-50"
        >
          {rating >= value ? (
            <StarFilledIcon width="20" height="20" />
          ) : (
            <StarIcon width="20" height="20" />
          )}
        </button>
      ))}
    </div>
  );
};
