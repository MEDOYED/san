import PptxGenJS from "pptxgenjs";

/**
 * Типи для позиціонування елементів на слайді
 */
export interface Position {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Типізований слайд
 */
export type Slide = ReturnType<PptxGenJS["addSlide"]>;

/**
 * Опції для стилізації тексту
 */
export interface TextStyleOptions {
  position: Position;
  fontSize: number;
  color: string;
  bold?: boolean;
  align?: "left" | "center" | "right";
  valign?: "top" | "middle" | "bottom";
  fontFace?: string;
  italic?: boolean;
  underline?: boolean;
}

/**
 * Конфігурація стилів за замовчуванням
 */
export const DEFAULT_STYLES = {
  fontFamily: "Arial",
  backgroundColor: "FFFFFF",
  colors: {
    black: "000000",
    darkGray: "333333",
    gray: "555555",
    lightGray: "666666",
  },
} as const;

/**
 * Helper функція для додавання стилізованого тексту
 *
 * @param slide - Слайд PptxGenJS
 * @param text - Текст для відображення
 * @param options - Опції стилізації тексту
 *
 * @example
 * ```typescript
 * addStyledText(slide, "Привіт світ", {
 *   position: { x: 1, y: 1, w: 8, h: 1 },
 *   fontSize: 24,
 *   color: "000000",
 *   bold: true,
 *   align: "center"
 * });
 * ```
 */
export function addStyledText(
  slide: Slide,
  text: string,
  options: TextStyleOptions
): void {
  slide.addText(text, {
    x: options.position.x,
    y: options.position.y,
    w: options.position.w,
    h: options.position.h,
    fontSize: options.fontSize,
    color: options.color,
    fontFace: options.fontFace || DEFAULT_STYLES.fontFamily,
    align: options.align || "center",
    valign: options.valign || "top",
    bold: options.bold || false,
    italic: options.italic || false,
    underline: options.underline || false,
  });
}

/**
 * Центрує текст по горизонталі на слайді
 *
 * @param y - Позиція по вертикалі
 * @param height - Висота текстового блоку
 * @param width - Ширина текстового блоку (за замовчуванням 8)
 * @returns Position об'єкт з центрованою позицією
 */
export function centerHorizontal(
  y: number,
  height: number,
  width: number = 8
): Position {
  const x = (10 - width) / 2; // Припускаємо стандартну ширину слайду 10 дюймів
  return { x, y, w: width, h: height };
}

/**
 * Створює позицію для тексту на всю ширину слайду
 *
 * @param y - Позиція по вертикалі
 * @param height - Висота текстового блоку
 * @param margin - Відступи з боків (за замовчуванням 1)
 * @returns Position об'єкт
 */
export function fullWidth(
  y: number,
  height: number,
  margin: number = 1
): Position {
  return {
    x: margin,
    y,
    w: 10 - margin * 2,
    h: height,
  };
}
