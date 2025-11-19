import PptxGenJS from "pptxgenjs";

/**
 * Slide 1: Титульний слайд
 * Audio: slide-0.flac
 */
export function createSlide1(pres: PptxGenJS): ReturnType<PptxGenJS["addSlide"]> {
  const slide = pres.addSlide();

  // Білий фон для максимального контрасту
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Projekt 1", {
    x: 0.5,
    y: 2,
    w: 9,
    h: 1,
    fontSize: 54,
    bold: true,
    color: "000000",
    fontFace: "Arial",
    align: "center",
    valign: "middle",
  });

  // Підзаголовок
  slide.addText("Dostępna prezentacja", {
    x: 0.5,
    y: 3.2,
    w: 9,
    h: 0.8,
    fontSize: 32,
    color: "333333",
    fontFace: "Arial",
    align: "center",
    valign: "middle",
  });

  // Автор
  slide.addText("Yaroslav Zubakha", {
    x: 0.5,
    y: 4.2,
    w: 9,
    h: 0.6,
    fontSize: 24,
    color: "555555",
    fontFace: "Arial",
    align: "center",
    valign: "middle",
  });

  return slide;
}
