import PptxGenJS from "pptxgenjs";

export function createSlide2(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок слайду
  slide.addText("Про мене", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial"
  });

  // Основний текст з інформацією
  const aboutText = [
    "• Ім'я: Максим [Прізвище]",
    "• Вік: [Твій вік]",
    "• Місто: [Твоє місто]",
    "• Напрямок: Інформаційні технології",
    "• Захоплення: програмування, [інші хоббі]"
  ];

  slide.addText(aboutText.join("\n"), {
    x: 1,
    y: 1.5,
    w: 8,
    h: 3,
    fontSize: 20,
    color: "333333",
    lineSpacing: 32,
    fontFace: "Arial",
    valign: "top"
  });

  // Іконка або декоративний елемент
  slide.addText("👤", {
    x: 8.5,
    y: 1.5,
    w: 1,
    h: 1,
    fontSize: 48,
    align: "center"
  });

  // Додатковий опис (можна змінити)
  slide.addText("Студент з великою пристрастю до технологій та розробки програмного забезпечення", {
    x: 1,
    y: 4.8,
    w: 8,
    h: 0.8,
    fontSize: 16,
    color: "666666",
    italic: true,
    fontFace: "Arial",
    align: "center"
  });
}
