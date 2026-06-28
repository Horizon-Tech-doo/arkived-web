import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GITHUB_URL = "https://github.com/Horizon-Tech-doo/arkived";
export const RELEASES_URL = "https://github.com/Horizon-Tech-doo/arkived/releases/latest";
