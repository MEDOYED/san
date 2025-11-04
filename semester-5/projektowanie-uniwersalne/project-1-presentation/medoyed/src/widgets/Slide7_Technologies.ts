import PptxGenJS from "pptxgenjs";

export function createSlide7(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Технології та інструменти", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  // Frontend
  slide.addShape("rect", {
    x: 0.5,
    y: 1.4,
    w: 4.3,
    h: 1.8,
    fill: { color: "E3F2FD" },
    line: { color: "2196F3", width: 2 }
  });

  slide.addText("🎨 Frontend", {
    x: 0.7,
    y: 1.6,
    w: 3.9,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("• HTML / CSS / SCSS\n• JavaScript / TypeScript\n• React / Vue / Angular\n• Tailwind CSS", {
    x: 0.7,
    y: 2.1,
    w: 3.9,
    h: 1,
    fontSize: 14,
    color: "333333",
    lineSpacing: 20,
    fontFace: "Arial"
  });

  // Backend
  slide.addShape("rect", {
    x: 5.2,
    y: 1.4,
    w: 4.3,
    h: 1.8,
    fill: { color: "E8F5E9" },
    line: { color: "4CAF50", width: 2 }
  });

  slide.addText("⚙️ Backend", {
    x: 5.4,
    y: 1.6,
    w: 3.9,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("• Node.js / Express\n• Python / Django\n• REST API\n• PostgreSQL / MongoDB", {
    x: 5.4,
    y: 2.1,
    w: 3.9,
    h: 1,
    fontSize: 14,
    color: "333333",
    lineSpacing: 20,
    fontFace: "Arial"
  });

  // DevOps та інструменти
  slide.addShape("rect", {
    x: 0.5,
    y: 3.5,
    w: 4.3,
    h: 1.8,
    fill: { color: "FFF3E0" },
    line: { color: "FF9800", width: 2 }
  });

  slide.addText("🔧 DevOps", {
    x: 0.7,
    y: 3.7,
    w: 3.9,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("• Git / GitHub\n• Docker\n• CI/CD\n• Linux", {
    x: 0.7,
    y: 4.2,
    w: 3.9,
    h: 1,
    fontSize: 14,
    color: "333333",
    lineSpacing: 20,
    fontFace: "Arial"
  });

  // Інші інструменти
  slide.addShape("rect", {
    x: 5.2,
    y: 3.5,
    w: 4.3,
    h: 1.8,
    fill: { color: "F3E5F5" },
    line: { color: "9C27B0", width: 2 }
  });

  slide.addText("🛠️ Інструменти", {
    x: 5.4,
    y: 3.7,
    w: 3.9,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  slide.addText("• VS Code\n• Figma\n• Postman\n• Jira / Trello", {
    x: 5.4,
    y: 4.2,
    w: 3.9,
    h: 1,
    fontSize: 14,
    color: "333333",
    lineSpacing: 20,
    fontFace: "Arial"
  });
}
