import PptxGenJS from "pptxgenjs";

export function createSlide8(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Додаємо заголовок слайду для доступності
  slide.slideNumber = { x: 0, y: 0 };

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Kontakt", {
    x: 0.5,
    y: 0.8,
    w: 9,
    h: 0.7,
    fontSize: 36,
    bold: true,
    color: "000000",
    align: "center",
    fontFace: "Arial",
  });

  // Блок контактів
  slide.addShape("rect", {
    x: 2,
    y: 2,
    w: 6,
    h: 2.5,
    fill: { color: "F5F5F5" },
    line: { color: "CCCCCC", width: 1 },
  });

  // Email
  slide.addText("📧 Email:", {
    x: 2.5,
    y: 2.3,
    w: 2,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("mmax@gmail.com", {
    x: 4.5,
    y: 2.3,
    w: 3,
    h: 0.4,
    fontSize: 16,
    color: "333333",
    fontFace: "Arial",
  });

  // GitHub
  slide.addText("💻 GitHub:", {
    x: 2.5,
    y: 2.9,
    w: 2,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("github.com/MEDOYED", {
    x: 4.5,
    y: 2.9,
    w: 3,
    h: 0.4,
    fontSize: 16,
    color: "333333",
    fontFace: "Arial",
  });

  // LinkedIn
  slide.addText("🔗 LinkedIn:", {
    x: 2.5,
    y: 3.5,
    w: 2,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("linkedin.com/in/maksym", {
    x: 4.5,
    y: 3.5,
    w: 3,
    h: 0.4,
    fontSize: 16,
    color: "333333",
    fontFace: "Arial",
  });

  // Телефон (опціонально)
  slide.addText("📱 Telefon:", {
    x: 2.5,
    y: 4.1,
    w: 2,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("+48 484 448 844", {
    x: 4.5,
    y: 4.1,
    w: 3,
    h: 0.4,
    fontSize: 16,
    color: "333333",
    fontFace: "Arial",
  });

  // Заключна фраза
  slide.addText("Dziękuję za uwagę!", {
    x: 2,
    y: 4.8,
    w: 6,
    h: 0.6,
    fontSize: 24,
    bold: true,
    color: "000000",
    align: "center",
    fontFace: "Arial",
  });

  // Додаємо аудіо озвучку слайду
  slide.addMedia({
    type: "audio",
    path: "src/app/audio/slide-8.mp3",
    x: 0.1,
    y: 0.1,
    w: 0.5,
    h: 0.5,
  });
}
