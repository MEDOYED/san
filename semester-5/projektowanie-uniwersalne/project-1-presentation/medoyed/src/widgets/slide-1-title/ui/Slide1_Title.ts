import PptxGenJS from "pptxgenjs";

import type { TitleSlideDataTypes } from "../config/types/types";
// import type { Position } from "../config/types/types";
import type { Position } from "@shared/types/types";

// /**
//  * Інтерфейс для даних титульного слайду
//  */
// export interface TitleSlideData {
//   firstName: string;
//   lastName: string;
//   description: string;
//   photoPath?: string;
//   photoAltText?: string;
// }

// /**
//  * Типи для позиціонування елементів на слайді
//  */
// interface Position {
//   x: number;
//   y: number;
//   w: number;
//   h: number;
// }

/**
 * Конфігурація стилів для титульного слайду
 * Всі кольори відповідають WCAG 2.1 рівню AAA для контрастності
 */
const SLIDE_CONFIG = {
  background: {
    color: "FFFFFF", // Білий фон для максимального контрасту
  },
  font: {
    family: "Arial", // Стандартний, легко читабельний шрифт
  },
  title: {
    fontSize: 48,
    color: "000000", // Чорний текст (контраст 21:1 на білому - WCAG AAA)
    position: { x: 1, y: 0.3, w: 8, h: 1 } as Position,
    bold: true,
  },
  subtitle: {
    fontSize: 36,
    color: "333333", // Темно-сірий (контраст 12.6:1 - WCAG AAA)
    position: { x: 1, y: 1.1, w: 8, h: 0.8 } as Position,
  },
  description: {
    fontSize: 20,
    color: "555555", // Середньо-сірий (контраст 7:1 - WCAG AAA для великого тексту)
    position: { x: 1, y: 1.8, w: 8, h: 0.6 } as Position,
  },
  photo: {
    position: { x: 3.75, y: 2.5, w: 2.5, h: 2.5 } as Position,
    placeholderBg: "F0F0F0", // Світло-сірий фон для placeholder
    placeholderTextColor: "666666", // Контраст 5.7:1 (WCAG AA для великого тексту)
  },
} as const;

/**
 * Типізований слайд
 */
type Slide = ReturnType<PptxGenJS["addSlide"]>;

/**
 * Helper функція для додавання стилізованого тексту
 */
function addStyledText(
  slide: Slide,
  text: string,
  options: {
    position: Position;
    fontSize: number;
    color: string;
    bold?: boolean;
    align?: "left" | "center" | "right";
    valign?: "top" | "middle" | "bottom";
  }
): void {
  slide.addText(text, {
    x: options.position.x,
    y: options.position.y,
    w: options.position.w,
    h: options.position.h,
    fontSize: options.fontSize,
    color: options.color,
    fontFace: SLIDE_CONFIG.font.family,
    align: options.align || "center",
    valign: options.valign || "top",
    bold: options.bold || false,
  });
}

/**
 * Додає фото профілю або placeholder
 */
function addProfilePhoto(
  pres: PptxGenJS,
  slide: Slide,
  photoPath?: string,
  altText?: string
): void {
  const photoConfig = SLIDE_CONFIG.photo;

  if (photoPath) {
    // Якщо є реальне фото - додаємо його
    try {
      slide.addImage({
        path: photoPath,
        x: photoConfig.position.x,
        y: photoConfig.position.y,
        w: photoConfig.position.w,
        h: photoConfig.position.h,
        sizing: {
          type: "contain",
          w: photoConfig.position.w,
          h: photoConfig.position.h,
        },
      });

      // Додаємо невидимий текст для screen readers (якщо PptxGenJS підтримує)
      if (altText) {
        slide.addText(altText, {
          x: photoConfig.position.x,
          y: photoConfig.position.y,
          w: photoConfig.position.w,
          h: photoConfig.position.h,
          fontSize: 1,
          color: "FFFFFF", // Невидимий текст для доступності
        });
      }
    } catch (error) {
      console.error("Błąd ładowania zdjęcia:", error);
      // У випадку помилки показуємо placeholder
      addPhotoPlaceholder(pres, slide);
    }
  } else {
    // Якщо фото немає - показуємо placeholder
    addPhotoPlaceholder(pres, slide);
  }
}

/**
 * Додає placeholder для фото
 */
function addPhotoPlaceholder(pres: PptxGenJS, slide: Slide): void {
  const photoConfig = SLIDE_CONFIG.photo;

  // Додаємо прямокутник як фон для placeholder
  slide.addShape(pres.ShapeType.rect, {
    x: photoConfig.position.x,
    y: photoConfig.position.y,
    w: photoConfig.position.w,
    h: photoConfig.position.h,
    fill: { color: photoConfig.placeholderBg },
    line: { color: "CCCCCC", width: 1 }, // Тонка рамка для візуального відокремлення
  });

  // Додаємо текст в центрі placeholder
  slide.addText("Miejsce na zdjęcie\nprofilowe", {
    x: photoConfig.position.x,
    y: photoConfig.position.y + photoConfig.position.h / 2 - 0.3,
    w: photoConfig.position.w,
    h: 0.6,
    fontSize: 16,
    color: photoConfig.placeholderTextColor,
    align: "center",
    valign: "middle",
    fontFace: SLIDE_CONFIG.font.family,
  });
}

/**
 * Валідує дані для титульного слайду
 */
function validateSlideData(data: TitleSlideDataTypes): void {
  if (!data.firstName?.trim()) {
    throw new Error("Imię jest polem obowiązkowym");
  }

  if (!data.lastName?.trim()) {
    throw new Error("Nazwisko jest polem obowiązkowym");
  }

  if (!data.description?.trim()) {
    throw new Error("Opis jest polem obowiązkowym");
  }

  // Попередження про занадто довгий текст
  if (data.description.length > 100) {
    console.warn(
      `⚠️ Opis jest za długi (${data.description.length} znaków). Zalecane do 100 znaków.`
    );
  }
}

/**
 * Створює титульний слайд презентації з високим контрастом
 * та врахуванням принципів універсального дизайну.
 *
 * Accessibility features:
 * - Контраст тексту відповідає WCAG 2.1 AAA (21:1 для заголовку)
 * - Використання стандартного шрифту Arial для легкого читання
 * - Альтернативний текст для зображень
 * - Великі розміри шрифтів (мінімум 20pt)
 * - Чітка візуальна ієрархія
 *
 * @param pres - Екземпляр презентації PptxGenJS
 * @param data - Дані для відображення на слайді (ім'я, прізвище, опис, фото)
 * @returns Створений слайд для можливості подальшої роботи
 * @throws Error якщо обов'язкові поля не заповнені
 *
 * @example
 * ```typescript
 * const slideData: TitleSlideData = {
 *   firstName: "Максимко",
 *   lastName: "Іваненко",
 *   description: "Студент | Програміст | Мандрівник",
 *   photoPath: "./photos/profile.jpg",
 *   photoAltText: "Фото Максима Іваненка"
 * };
 * createSlide1(pres, slideData);
 * ```
 */
export function createSlide1(pres: PptxGenJS, data: TitleSlideDataTypes): Slide {
  // Валідуємо дані перед створенням слайду
  validateSlideData(data);

  // Створюємо новий слайд
  const slide = pres.addSlide();

  // Встановлюємо білий фон для максимального контрасту
  slide.background = SLIDE_CONFIG.background;

  // Додаємо ім'я (заголовок)
  addStyledText(slide, data.firstName, {
    position: SLIDE_CONFIG.title.position,
    fontSize: SLIDE_CONFIG.title.fontSize,
    color: SLIDE_CONFIG.title.color,
    bold: SLIDE_CONFIG.title.bold,
    align: "center",
  });

  // Додаємо прізвище (підзаголовок)
  addStyledText(slide, data.lastName, {
    position: SLIDE_CONFIG.subtitle.position,
    fontSize: SLIDE_CONFIG.subtitle.fontSize,
    color: SLIDE_CONFIG.subtitle.color,
    align: "center",
  });

  // Додаємо опис (текст про себе)
  addStyledText(slide, data.description, {
    position: SLIDE_CONFIG.description.position,
    fontSize: SLIDE_CONFIG.description.fontSize,
    color: SLIDE_CONFIG.description.color,
    align: "center",
  });

  // Додаємо фото профілю або placeholder
  addProfilePhoto(pres, slide, data.photoPath, data.photoAltText);

  return slide;
}
