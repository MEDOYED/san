import PptxGenJS from "pptxgenjs";
import path from "path";

/**
 * Slide 4: Co chcę robić
 * Audio: slide-3.flac
 */
export function createSlide4(pres: PptxGenJS): ReturnType<PptxGenJS["addSlide"]> {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Co chcę robić", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Текст зліва
  const text = [
    "Pociąga mnie programowanie niższego poziomu. C, Go, praca systemowa.",
    "",
    "Lubię zmuszać komputery do robienia dokładnie tego, czego chcę,",
    "a nie tego, co jakaś korporacja uznała, że powinienem móc zrobić.",
  ];

  slide.addText(text.join("\n"), {
    x: 0.5,
    y: 1.5,
    w: 4.5,
    h: 3.5,
    fontSize: 20,
    color: "333333",
    fontFace: "Arial",
    valign: "top",
    lineSpacing: 32,
  });

  // Зображення справа
  const imagePath = path.join(__dirname, "../app/assets/terminal.png");
  slide.addImage({
    path: imagePath,
    x: 5.5,
    y: 1.5,
    w: 3.5,
    h: 3.5,
    sizing: { type: "contain", w: 3.5, h: 3.5 },
    altText: "Okno terminala pokazujące kod konfiguracyjny Nix",
  });

  return slide;
}
