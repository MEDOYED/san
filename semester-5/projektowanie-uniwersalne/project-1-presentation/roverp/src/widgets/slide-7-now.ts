import PptxGenJS from "pptxgenjs";

/**
 * Slide 7: Teraz
 * Audio: slide-6.flac
 */
export function createSlide7(pres: PptxGenJS): ReturnType<PptxGenJS["addSlide"]> {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Teraz", {
    x: 0.51,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Текст (центр)
  const text = "Żongluję projektami internetowymi, wymogami uczelni i problemami zdrowotnymi";

  slide.addText(text, {
    x: 1.5,
    y: 2.5,
    w: 7,
    h: 2,
    fontSize: 24,
    color: "333333",
    fontFace: "Arial",
    valign: "middle",
    align: "center",
    lineSpacing: 36,
  });

  return slide;
}
