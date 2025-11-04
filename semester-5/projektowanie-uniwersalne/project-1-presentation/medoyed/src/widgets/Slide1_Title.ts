import PptxGenJS from "pptxgenjs";

export function createSlide1(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Фон білий для максимального контрасту
  slide.background = { color: "FFFFFF" };

  // Заголовок - темний текст на світлому фоні (відмінний контраст)
  slide.addText("Максим", {
    x: 1,
    y: 1.5,
    w: 8,
    h: 1,
    fontSize: 48,
    bold: true,
    color: "000000",
    align: "center",
    fontFace: "Arial"
  });

  slide.addText("[Прізвище]", {
    x: 1,
    y: 2.5,
    w: 8,
    h: 0.8,
    fontSize: 36,
    color: "333333",
    align: "center",
    fontFace: "Arial"
  });

  // Підзаголовок
  slide.addText("Студент | Програміст | [Твоє хоббі]", {
    x: 1,
    y: 3.5,
    w: 8,
    h: 0.6,
    fontSize: 20,
    color: "666666",
    align: "center",
    fontFace: "Arial"
  });

  // Місце для фото (placeholder - ти додаси своє фото)
  slide.addText("📸", {
    x: 4,
    y: 4.5,
    w: 2,
    h: 1,
    fontSize: 72,
    align: "center"
  });

  // Альтернативний текст для доступності
  slide.addText("Фото профілю", {
    x: 3.5,
    y: 5.5,
    w: 3,
    h: 0.4,
    fontSize: 12,
    color: "999999",
    align: "center",
    fontFace: "Arial"
  });
}
