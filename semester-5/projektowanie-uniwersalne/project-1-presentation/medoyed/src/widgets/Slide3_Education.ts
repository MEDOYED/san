import PptxGenJS from "pptxgenjs";

export function createSlide3(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Моя освіта", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  // Основний блок з інформацією про університет
  slide.addShape("rect", {
    x: 1,
    y: 1.5,
    w: 8,
    h: 1.5,
    fill: { color: "F0F0F0" },
    line: { color: "CCCCCC", width: 1 }
  });

  slide.addText("🎓 Університет", {
    x: 1.2,
    y: 1.7,
    w: 7.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("[Назва твого університету]", {
    x: 1.2,
    y: 2.2,
    w: 7.6,
    h: 0.3,
    fontSize: 18,
    color: "333333",
    fontFace: "Arial"
  });

  slide.addText("Факультет: [Твій факультет]", {
    x: 1.2,
    y: 2.6,
    w: 7.6,
    h: 0.3,
    fontSize: 16,
    color: "666666",
    fontFace: "Arial"
  });

  // Напрямок навчання
  slide.addShape("rect", {
    x: 1,
    y: 3.3,
    w: 8,
    h: 1.2,
    fill: { color: "F8F8F8" },
    line: { color: "CCCCCC", width: 1 }
  });

  slide.addText("📚 Спеціальність", {
    x: 1.2,
    y: 3.5,
    w: 7.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("Інформаційні технології / Комп'ютерні науки", {
    x: 1.2,
    y: 4,
    w: 7.6,
    h: 0.3,
    fontSize: 16,
    color: "333333",
    fontFace: "Arial"
  });

  // Курс та рік
  slide.addText("• Курс: [X] курс\n• Рік вступу: [202X]\n• Очікуваний рік випуску: [202X]", {
    x: 1,
    y: 4.8,
    w: 8,
    h: 1,
    fontSize: 16,
    color: "333333",
    lineSpacing: 24,
    fontFace: "Arial"
  });
}
