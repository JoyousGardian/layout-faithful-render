
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper functions for chart data
export const getXAxisDataSet = (details: any) => {
  // This is a placeholder implementation
  // Replace with actual implementation based on your real-time data structure
  if (!details || !Array.isArray(details)) {
    return Array.from({ length: 12 }, (_, i) => `${i*2}h`);
  }
  
  return details.map((item: any) => item.time || '');
};

export const getYAxisDataSet = (details: any) => {
  // This is a placeholder implementation
  // Replace with actual implementation based on your real-time data structure
  if (!details || !Array.isArray(details)) {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 30 + 10));
  }
  
  return details.map((item: any) => item.value || 0);
};
