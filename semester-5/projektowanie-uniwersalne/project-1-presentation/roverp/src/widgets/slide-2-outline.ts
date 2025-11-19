import PptxGenJS from "pptxgenjs";

/**
 * Slide 2: Зміст (Outline)
 * Audio: slide-1.flac
 */
export function createSlide2(pres: PptxGenJS): ReturnType<PptxGenJS["addSlide"]> {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Treść", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 36,
    bold: true,
    color: "000000",
    fontFace: "Arial",
    align: "center",
  });

  // Список змісту
  const outlineItems = [
    "1. Co właściwie robię",
    "2. Co chcę robić",
    "3. Rzeczywistość",
    "4. Trening",
    "5. Teraz",
    "6. Co mną kieruje",
  ];

  slide.addText(outlineItems.join("\n"), {
    x: 2,
    y: 1.8,
    w: 6,
    h: 3,
    fontSize: 24,
    color: "333333",
    fontFace: "Arial",
    align: "left",
    valign: "top",
    lineSpacing: 40,
  });

  return slide;
}
