import PptxGenJS from "pptxgenjs";
import path from "path";

/**
 * Slide 3: Co właściwie robię
 * Audio: slide-2.flac
 */
export function createSlide3(pres: PptxGenJS): ReturnType<PptxGenJS["addSlide"]> {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Co właściwie robię", {
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
  const text = [
    "Buduję strony internetowe. React, Typescript, Node.js.",
    "Założyłem agencję webową z kolegą.",
    "",
    "Obecnie w trakcie procesu czynienia jej opłacalną",
  ];

  slide.addText(text.join("\n"), {
    x: 0.5,
    y: 1.5,
    w: 4.5,
    h: 3.5,
    fontSize: 20,
    color: "333333",
    fontFace: "Arial",
    valign: "top",
    lineSpacing: 32,
  });

  // Зображення справа
  const imagePath = path.join(__dirname, "../app/assets/htmx-seeklogo.png");
  slide.addImage({
    path: imagePath,
    x: 5.5,
    y: 1.5,
    w: 3.5,
    h: 3.5,
    sizing: { type: "contain", w: 3.5, h: 3.5 },
    altText: "Kod HTMX nawiasy kątowe z ukośnikiem",
  });

  return slide;
}
