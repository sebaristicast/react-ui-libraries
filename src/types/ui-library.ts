import type { ComponentType } from "react";
import type { ComponentProps } from "./component-props";

export type UILibraryType = 'main' | 'specialized' | 'enterprise';

export interface UILibraryMetrics {
  downloads: number;
  totalComponents: number;
}

export interface UILibraryInfo {
  name: string;
  description: string;
  logoUrl: string;
  metrics: {
    downloads: number;
    totalComponents: number;
  };
}

export interface UILibraryComponents {
  Button: ComponentType<ComponentProps>;
  TextField: ComponentType<ComponentProps>;
  Dialog: ComponentType<ComponentProps>;
  Rating: ComponentType<ComponentProps>;
  Slider: ComponentType<ComponentProps>;
} 