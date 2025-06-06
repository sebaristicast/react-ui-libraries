export type UILibraryType = 'main' | 'specialized' | 'enterprise';

export interface UILibraryMetrics {
  downloads: number;
  totalComponents: number;
}

export interface UILibraryInfo {
  name: string;
  description: string;
  metrics: {
    downloads: number;
    totalComponents: number;
  };
}

export interface UILibraryComponents {
  Button: React.ComponentType<{ isLoading?: boolean }>;
  TextField: React.ComponentType<{ isLoading?: boolean }>;
  Dialog: React.ComponentType<{ isLoading?: boolean }>;
  Rating: React.ComponentType<{ isLoading?: boolean }>;
  Slider: React.ComponentType<{ isLoading?: boolean }>;
} 