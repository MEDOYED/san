import PptxGenJS from "pptxgenjs";

export function createSlide5(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Додаємо заголовок слайду для доступності
  slide.slideNumber = { x: 0, y: 0 };

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Umiejętności programowania", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Мови програмування
  slide.addText("💻 Języki programowania:", {
    x: 0.8,
    y: 1.3,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  const languages = ["• JavaScript / TypeScript - poziom zaawansowany", "• Java - poziom podstawowy"];

  slide.addText(languages.join("\n"), {
    x: 1.2,
    y: 1.4,
    w: 7.6,
    h: 1.5,
    fontSize: 16,
    color: "333333",
    lineSpacing: 22,
    fontFace: "Arial",
  });

  // Frameworks та бібліотеки
  slide.addText("🔧 Frameworki i narzędzia:", {
    x: 0.8,
    y: 2.6,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  const frameworks = [
    "• React / Next.js",
    "• Node.js / Express",
    "• Git / GitHub",
    "• Docker",
    "• tailwind, redux, zustand",
  ];

  slide.addText(frameworks.join("\n"), {
    x: 1.2,
    y: 3.1,
    w: 7.6,
    h: 1.3,
    fontSize: 16,
    color: "333333",
    lineSpacing: 22,
    fontFace: "Arial",
  });

  // Досвід
  slide.addText("⏱️ Doświadczenie w programowaniu: 2+ lata", {
    x: 1,
    y: 4.7,
    w: 8,
    h: 0.4,
    fontSize: 16,
    color: "555555",
    fontFace: "Arial",
  });

  // Додаємо аудіо озвучку слайду
  slide.addMedia({
    type: "audio",
    path: "src/app/audio/slide-5.mp3",
    x: 0.1,
    y: 0.1,
    w: 0.5,
    h: 0.5,
  });
}
