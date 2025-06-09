import { Button, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useState } from "react";
import type { ComponentProps } from "../../types/component-props";
import "@blueprintjs/core/lib/css/blueprint.css";

interface ExtendedComponentProps extends ComponentProps {
  isDarkMode?: boolean;
}

export const BlueprintRating = ({
  isLoading,
  isDarkMode,
}: ExtendedComponentProps) => {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  return (
    <div
      className={isDarkMode ? "bp5-dark" : ""}
      style={{ display: "flex", gap: "4px" }}
    >
      {[...Array(totalStars)].map((_, index) => (
        <Button
          key={index}
          minimal
          disabled={isLoading}
          onClick={() => setRating(index + 1)}
        >
          <Icon
            icon={IconNames.STAR}
            color={index < rating ? "#FFB366" : "#BFCCD6"}
          />
        </Button>
      ))}
    </div>
  );
};
