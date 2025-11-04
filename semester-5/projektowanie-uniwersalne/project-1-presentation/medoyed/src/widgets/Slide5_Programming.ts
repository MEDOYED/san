import PptxGenJS from "pptxgenjs";

export function createSlide5(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Навички програмування", {
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
  slide.addText("💻 Мови програмування:", {
    x: 0.8,
    y: 1.3,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  const languages = ["• JavaScript / TypeScript - просунутий рівень", "• Java - базовий рівень"];

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
  slide.addText("🔧 Frameworks та інструменти:", {
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
  slide.addText("⏱️ Досвід програмування: 2+ роки", {
    x: 1,
    y: 4.7,
    w: 8,
    h: 0.4,
    fontSize: 16,
    color: "666666",
    fontFace: "Arial",
  });
}
