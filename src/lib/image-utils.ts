/**
 * Get the correct image path based on the environment and base URL
 */
export const getImagePath = (imagePath: string): string => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In development, use the path as-is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base path from vite config
  const base = import.meta.env.BASE_URL || '/';
  // Ensure base ends with slash and cleanPath doesn't start with slash
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
};