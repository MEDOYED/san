import PptxGenJS from "pptxgenjs";
import path from "path";

/**
 * Slide 8: Co mną kieruje
 * Audio: slide-7.flac
 */
export function createSlide8(pres: PptxGenJS): ReturnType<PptxGenJS["addSlide"]> {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Co mną kieruje", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Текст зліва
  const text = "Muszę zacząć zarabiać pieniądze dla siebie";

  slide.addText(text, {
    x: 0.5,
    y: 2.5,
    w: 4.5,
    h: 2,
    fontSize: 24,
    color: "333333",
    fontFace: "Arial",
    valign: "middle",
    lineSpacing: 32,
  });

  // Зображення справа
  const imagePath = path.join(__dirname, "../app/assets/money.png");
  slide.addImage({
    path: imagePath,
    x: 5.5,
    y: 1.5,
    w: 3.5,
    h: 3.5,
    sizing: { type: "contain", w: 3.5, h: 3.5 },
    altText: "Worek pieniędzy wypełniony monetami i dolarowymi banknotami ze znakiem wodnym",
  });

  return slide;
}
