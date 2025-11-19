import PptxGenJS from "pptxgenjs";

export function createSlide6(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Додаємо заголовок слайду для доступності
  slide.slideNumber = { x: 0, y: 0 };

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Moje projekty i osiągnięcia", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Проект 1
  slide.addShape("rect", {
    x: 0.8,
    y: 1.2,
    w: 8.4,
    h: 1,
    fill: { color: "E8F5E9" },
    line: { color: "4CAF50", width: 1 },
  });

  slide.addText("🚀 UniPrint", {
    x: 1,
    y: 1.4,
    w: 8,
    h: 0.3,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("Opracowałem stronę internetową z konstruktorami produktów", {
    x: 1,
    y: 1.8,
    w: 8,
    h: 0.3,
    fontSize: 14,
    color: "333333",
    fontFace: "Arial",
  });

  // Проект 2
  slide.addShape("rect", {
    x: 0.8,
    y: 2.4,
    w: 8.4,
    h: 1,
    fill: { color: "E3F2FD" },
    line: { color: "2196F3", width: 1 },
  });

  slide.addText("💡 Prospi.ai", {
    x: 1,
    y: 2.6,
    w: 8,
    h: 0.3,
    fontSize: 18,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText(
    "Opracowywałem wykresy przedstawiające statystyki kampanii emailowych dla użytkowników na stronie",
    {
      x: 1,
      y: 3.0,
      w: 8,
      h: 0.3,
      fontSize: 14,
      color: "333333",
      fontFace: "Arial",
    }
  );

  // Досягнення
  slide.addText("🏆 Osiągnięcia:", {
    x: 0.8,
    y: 3.7,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  const achievements = [
    "• Osiągnięcie 1 - opracowałem, uruchomiłem, utrzymuję i dalej rozwijam UniPrint",
    "• Osiągnięcie 2 - Dzięki wykresom, które stworzyłem na Prospi.ai, zachowano 8% subskrypcji (63% -> 71% trzy miesiące po wykupieniu subskrypcji)",
    "• Osiągnięcie 3 - wkład w projekt open-source",
  ];

  slide.addText(achievements.join("\n"), {
    x: 1,
    y: 4.2,
    w: 8,
    h: 1.2,
    fontSize: 14,
    color: "333333",
    lineSpacing: 24,
    fontFace: "Arial",
  });

  // Додаємо аудіо озвучку слайду
  slide.addMedia({
    type: "audio",
    path: "src/app/audio/slide-6.mp3",
    x: 0.1,
    y: 0.1,
    w: 0.5,
    h: 0.5,
  });
}
