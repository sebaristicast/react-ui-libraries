import type { ComponentType } from "react";
import type { ComponentProps } from "../../types/component-props";

export type ExtendedComponentProps = ComponentProps & {
  isDarkMode: boolean;
};

export const withBlueprintDarkMode = (
  WrappedComponent: ComponentType<ExtendedComponentProps>,
  isDarkMode: boolean
): ComponentType<ComponentProps> => {
  const WithBlueprintDarkMode = (props: ComponentProps) => {
    return <WrappedComponent {...props} isDarkMode={isDarkMode} />;
  };

  return WithBlueprintDarkMode;
};
