import PptxGenJS from "pptxgenjs";

export type Slide = ReturnType<PptxGenJS["addSlide"]>;

/**
 * Типи для позиціонування елементів на слайді
 */
export interface Position {
  x: number;
  y: number;
  w: number;
  h: number;
}
