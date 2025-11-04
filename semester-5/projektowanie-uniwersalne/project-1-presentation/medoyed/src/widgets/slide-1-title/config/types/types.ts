/**
 * Інтерфейс для даних титульного слайду
 */
export interface TitleSlideDataTypes {
  firstName: string;
  lastName: string;
  description: string;
  photoPath?: string;
  photoAltText?: string;
}

/**
 * Типи для позиціонування елементів на слайді
 */
export interface Position {
  x: number;
  y: number;
  w: number;
  h: number;
}
