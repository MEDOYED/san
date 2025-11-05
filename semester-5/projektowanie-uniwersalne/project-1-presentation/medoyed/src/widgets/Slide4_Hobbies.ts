import PptxGenJS from "pptxgenjs";
import { HobbyImg } from "@shared/assets/img";
import { SilowniaImg } from "@shared/assets/img";
import { imageToBase64 } from "@shared/lib/imageToBase64";

export function createSlide4(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Додаємо заголовок слайду для доступності
  slide.slideNumber = { x: 0, y: 0 };

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Moje hobby i zainteresowania", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.7,
    fontSize: 32,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  // Хоббі 1
  slide.addShape("rect", {
    x: 0.8,
    y: 1.5,
    w: 4,
    h: 1.5,
    fill: { color: "E8F5E9" },
    line: { color: "4CAF50", width: 2 },
  });

  slide.addText("🎯 Łucznictwo", {
    x: 1,
    y: 1.7,
    w: 3.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("Strzelam z łuku na 30 i 60 metrów", {
    x: 1,
    y: 2.2,
    w: 3.6,
    h: 0.7,
    fontSize: 14,
    color: "333333",
    fontFace: "Arial",
  });

  // Картинка для хоббі 1
  const image1 = imageToBase64(HobbyImg);
  if (image1) {
    slide.addImage({
      data: image1,
      x: 5.5,
      y: 1.5,
      w: 1.8,
      h: 1.5,
      altText: "Zdjęcie tarcze strzelniczej z łucznictwa - widoczne kolorowe kręgi docelowe i strzały",
    });
  }

  // Хоббі 2
  slide.addShape("rect", {
    x: 0.8,
    y: 3.3,
    w: 4,
    h: 1.5,
    fill: { color: "FFF3E0" },
    line: { color: "FF9800", width: 2 },
  });

  slide.addText("💪 Siłownia", {
    x: 1,
    y: 3.5,
    w: 3.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("Lubię podnosić ciężary", {
    x: 1,
    y: 4,
    w: 3.6,
    h: 0.7,
    fontSize: 14,
    color: "333333",
    fontFace: "Arial",
  });

  // Картинка для хоббі 2
  const image2 = imageToBase64(SilowniaImg);
  if (image2) {
    slide.addImage({
      data: image2,
      x: 5.5,
      y: 3.3,
      w: 1.8,
      h: 1.5,
      altText: "Widok sali siłowni z hantlami i sprzętem do ćwiczeń",
    });
  }

  // Нижній текст
  slide.addText("Moje hobby pomaga mi rozwijać się wszechstronnie i znajdować równowagę", {
    x: 1,
    y: 4.9,
    w: 8,
    h: 0.5,
    fontSize: 14,
    color: "555555",
    italic: true,
    align: "center",
    fontFace: "Arial",
  });
}
