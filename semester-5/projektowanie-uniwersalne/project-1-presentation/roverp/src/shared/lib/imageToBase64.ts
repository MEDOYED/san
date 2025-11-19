import fs from "fs";
import path from "path";

/**
 * Конвертує зображення в Base64 data URL для використання в PptxGenJS
 *
 * @param imagePath - Відносний шлях від src/ або абсолютний шлях до зображення
 * @returns Base64 data URL або undefined якщо файл не знайдено
 *
 * @example
 * ```typescript
 * const base64Image = imageToBase64("shared/assets/img/photo.png");
 * slide.addImage({ data: base64Image });
 * ```
 */
export function imageToBase64(imagePath: string): string | undefined {
  try {
    // Якщо шлях відносний, розв'язуємо від src/
    const resolvedPath = path.isAbsolute(imagePath)
      ? imagePath
      : path.resolve(__dirname, "../../", imagePath);

    // Читаємо файл
    const imageBuffer = fs.readFileSync(resolvedPath);

    // Визначаємо MIME type за розширенням
    const ext = path.extname(resolvedPath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
    };

    const mimeType = mimeTypes[ext] || "image/png";

    // Конвертуємо в Base64 data URL
    const base64 = imageBuffer.toString("base64");
    return `data:${mimeType};base64,${base64}`;
  } catch (error) {
    console.error(`❌ Помилка завантаження зображення ${imagePath}:`, error);
    return undefined;
  }
}

/**
 * Перевіряє чи існує зображення
 */
export function imageExists(imagePath: string): boolean {
  try {
    const resolvedPath = path.isAbsolute(imagePath)
      ? imagePath
      : path.resolve(__dirname, "../../", imagePath);
    return fs.existsSync(resolvedPath);
  } catch {
    return false;
  }
}
