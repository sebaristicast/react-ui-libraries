import { Slider } from "@blueprintjs/core";
import { useState } from "react";
import type { ComponentProps } from "../../types/component-props";
import "@blueprintjs/core/lib/css/blueprint.css";

interface ExtendedComponentProps extends ComponentProps {
  isDarkMode?: boolean;
}

export const BlueprintSlider = ({
  isLoading,
  isDarkMode,
}: ExtendedComponentProps) => {
  const [value, setValue] = useState(0);

  return (
    <div
      className={isDarkMode ? "bp5-dark" : ""}
      style={{ width: "150px", padding: "4px 0", alignSelf: "center" }}
    >
      <Slider
        min={0}
        max={100}
        stepSize={1}
        labelStepSize={20}
        value={value}
        onChange={setValue}
        disabled={isLoading}
      />
    </div>
  );
};
