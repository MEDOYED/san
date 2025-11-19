import PptxGenJS from "pptxgenjs";

/**
 * Slide 6: Trening
 * Audio: slide-5.flac
 */
export function createSlide6(pres: PptxGenJS): ReturnType<PptxGenJS["addSlide"]> {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Trening", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Текст (центр)
  const text = [
    "Byłem bardzo zapalony do treningu siłowego w ubiegłym roku.",
    "Lubiłem stawać się silniejszym i poprawiać swoje ciało.",
    "",
    "Nie byłem w stanie kontynuować tego tak bardzo, jak chciałem w zeszłym roku.",
    "Ciągle byłem chory",
  ];

  slide.addText(text.join("\n"), {
    x: 1.5,
    y: 2,
    w: 7,
    h: 3,
    fontSize: 20,
    color: "333333",
    fontFace: "Arial",
    valign: "top",
    align: "center",
    lineSpacing: 32,
  });

  return slide;
}
