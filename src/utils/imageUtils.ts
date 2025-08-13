/**
 * Utility functions for handling image URLs, especially Google Drive URLs
 */

/**
 * Converts a Google Drive sharing URL to a direct image URL
 * @param url - The Google Drive sharing URL
 * @returns Direct image URL or original URL if not a Google Drive URL
 */
export function convertGoogleDriveUrl(url: string): string {
  if (!url) return '';
  
  // Check if it's a Google Drive URL
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
  if (driveMatch) {
    const fileId = driveMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  // Check if it's already a direct Google Drive image URL
  if (url.includes('drive.google.com/uc?export=view')) {
    return url;
  }
  
  // Return original URL if not a Google Drive URL
  return url;
}

/**
 * Checks if a URL is a valid image URL
 * @param url - The URL to check
 * @returns boolean indicating if the URL is valid for images
 */
export function isValidImageUrl(url: string): boolean {
  if (!url) return false;
  
  // Check if it's a Google Drive URL that needs conversion
  if (url.includes('drive.google.com/file/d/')) {
    return true; // We can convert this
  }
  
  // Check if it's already a direct image URL
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const hasImageExtension = imageExtensions.some(ext => 
    url.toLowerCase().includes(ext)
  );
  
  // Check if it's a data URL
  if (url.startsWith('data:image/')) {
    return true;
  }
  
  return hasImageExtension || url.includes('drive.google.com/uc?export=view');
}

/**
 * Gets a safe image URL for next/image component
 * @param url - The original image URL
 * @returns A safe URL for next/image or a fallback image
 */
export function getSafeImageUrl(url: string): string {
  if (!url) {
    return '/images/aboutus.png'; // Fallback image
  }
  
  // Convert Google Drive URLs
  if (url.includes('drive.google.com/file/d/')) {
    return convertGoogleDriveUrl(url);
  }
  
  // Return the URL if it's already safe
  return url;
} 