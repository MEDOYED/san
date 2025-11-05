import PptxGenJS from "pptxgenjs";

export function createSlide3(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Додаємо заголовок слайду для доступності
  slide.slideNumber = { x: 0, y: 0 };

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Moja edukacja", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Основний блок з інформацією про університет
  slide.addShape("rect", {
    x: 1,
    y: 1.5,
    w: 8,
    h: 1.5,
    fill: { color: "F0F0F0" },
    line: { color: "CCCCCC", width: 1 },
  });

  slide.addText("🎓 Kolegium", {
    x: 1.2,
    y: 1.7,
    w: 7.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("Kolegium Technologiczne Politechniki Lwowskiej", {
    x: 1.2,
    y: 2.2,
    w: 7.6,
    h: 0.3,
    fontSize: 18,
    color: "333333",
    fontFace: "Arial",
  });

  slide.addText("Inżynieria komputerowa", {
    x: 1.2,
    y: 2.6,
    w: 7.6,
    h: 0.3,
    fontSize: 16,
    color: "555555",
    fontFace: "Arial",
  });

  // Напрямок навчання
  slide.addShape("rect", {
    x: 1,
    y: 3.3,
    w: 8,
    h: 1.2,
    fill: { color: "F8F8F8" },
    line: { color: "CCCCCC", width: 1 },
  });

  slide.addText("📚 Uniwersytet", {
    x: 1.2,
    y: 3.5,
    w: 7.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("Społeczna Akademia Nauk / Informatyka ", {
    x: 1.2,
    y: 4,
    w: 7.6,
    h: 0.3,
    fontSize: 16,
    color: "333333",
    fontFace: "Arial",
  });

  // Курс та рік
  slide.addText(
    "• Rok studiów: 3   • Rok rozpoczęcia: 2023   • Przewidywany rok ukończenia: 2027",
    {
      x: 0.6,
      y: 4.5,
      w: 9,
      h: 1,
      fontSize: 16,
      color: "333333",
      lineSpacing: 24,
      fontFace: "Arial",
    }
  );
}
