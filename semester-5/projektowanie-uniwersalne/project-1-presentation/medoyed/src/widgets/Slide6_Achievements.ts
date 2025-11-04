import PptxGenJS from "pptxgenjs";

export function createSlide6(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Мої проекти та досягнення", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  // Проект 1
  slide.addShape("rect", {
    x: 0.8,
    y: 1.4,
    w: 8.4,
    h: 1,
    fill: { color: "E8F5E9" },
    line: { color: "4CAF50", width: 1 }
  });

  slide.addText("🚀 [Назва проекту 1]", {
    x: 1,
    y: 1.6,
    w: 8,
    h: 0.3,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("[Короткий опис проекту - технології, результат]", {
    x: 1,
    y: 2,
    w: 8,
    h: 0.3,
    fontSize: 14,
    color: "333333",
    fontFace: "Arial"
  });

  // Проект 2
  slide.addShape("rect", {
    x: 0.8,
    y: 2.6,
    w: 8.4,
    h: 1,
    fill: { color: "E3F2FD" },
    line: { color: "2196F3", width: 1 }
  });

  slide.addText("💡 [Назва проекту 2]", {
    x: 1,
    y: 2.8,
    w: 8,
    h: 0.3,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("[Короткий опис проекту - технології, результат]", {
    x: 1,
    y: 3.2,
    w: 8,
    h: 0.3,
    fontSize: 14,
    color: "333333",
    fontFace: "Arial"
  });

  // Досягнення
  slide.addText("🏆 Досягнення:", {
    x: 0.8,
    y: 3.9,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  const achievements = [
    "• [Досягнення 1 - наприклад: участь у хакатоні, перемога в змаганні]",
    "• [Досягнення 2 - наприклад: сертифікат, курс]",
    "• [Досягнення 3 - наприклад: внесок в open-source проект]",
    "• [Досягнення 4]"
  ];

  slide.addText(achievements.join("\n"), {
    x: 1,
    y: 4.4,
    w: 8,
    h: 1.2,
    fontSize: 14,
    color: "333333",
    lineSpacing: 24,
    fontFace: "Arial"
  });
}
