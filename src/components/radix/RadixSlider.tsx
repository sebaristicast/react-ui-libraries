import * as Slider from "@radix-ui/react-slider";
import { useTranslation } from "react-i18next";

interface Props {
  isLoading?: boolean;
}

export const RadixSlider = ({ isLoading = false }: Props) => {
  const { t } = useTranslation();

  return (
    <Slider.Root
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        userSelect: "none",
        touchAction: "none",
        width: "200px",
        height: "20px",
      }}
      defaultValue={[50]}
      max={100}
      step={1}
      disabled={isLoading}
      aria-label={t("components.slider")}
    >
      <Slider.Track
        style={{
          backgroundColor: "var(--gray-a5)",
          position: "relative",
          flexGrow: 1,
          borderRadius: "9999px",
          height: "3px",
        }}
      >
        <Slider.Range
          style={{
            position: "absolute",
            backgroundColor: "var(--accent-9)",
            borderRadius: "9999px",
            height: "100%",
          }}
        />
      </Slider.Track>
      <Slider.Thumb
        className="radix-slider-thumb"
        style={{
          all: "unset",
          display: "block",
          width: "20px",
          height: "20px",
          backgroundColor: "var(--color-panel-solid)",
          boxShadow: "var(--shadow-3)",
          borderRadius: "var(--radius-3)",
          border: "1px solid var(--gray-a7)",
          cursor: "pointer",
          transition: "transform 200ms, background-color 200ms",
          transform: "translateY(-50%)",
        }}
      />
      <style>
        {`
          .radix-slider-thumb:hover {
            background-color: var(--gray-a3);
            transform: translateY(-50%) scale(1.1);
          }
          .radix-slider-thumb:focus {
            box-shadow: 0 0 0 2px var(--accent-a8);
          }
        `}
      </style>
    </Slider.Root>
  );
};
