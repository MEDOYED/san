import PptxGenJS from "pptxgenjs";
import { HobbyImg } from "@shared/assets/img";
import { imageToBase64 } from "@shared/lib/imageToBase64";

export function createSlide4(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок
  slide.addText("Мої хоббі та інтереси", {
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

  slide.addText("🎮 [Хоббі 1]", {
    x: 1,
    y: 1.7,
    w: 3.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("[Опис хоббі - наприклад: геймінг, стратегічні ігри, кіберспорт]", {
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
    });
  }

  // Хоббі 3
  slide.addShape("rect", {
    x: 0.8,
    y: 3.3,
    w: 4,
    h: 1.5,
    fill: { color: "FFF3E0" },
    line: { color: "FF9800", width: 2 },
  });

  slide.addText("📚 [Хоббі 3]", {
    x: 1,
    y: 3.5,
    w: 3.6,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "000000",
    fontFace: "Arial",
  });

  slide.addText("[Опис хоббі - наприклад: читання, навчання нового, технічна література]", {
    x: 1,
    y: 4,
    w: 3.6,
    h: 0.7,
    fontSize: 14,
    color: "333333",
    fontFace: "Arial",
  });

  // Картинка для хоббі 3
  const image2 = imageToBase64(HobbyImg);
  if (image2) {
    slide.addImage({
      data: image2,
      x: 5.5,
      y: 3.3,
      w: 1.8,
      h: 1.5,
    });
  }

  // Нижній текст
  slide.addText("Мої хоббі допомагають мені розвиватися всебічно та знаходити баланс", {
    x: 1,
    y: 4.9,
    w: 8,
    h: 0.5,
    fontSize: 14,
    color: "666666",
    italic: true,
    align: "center",
    fontFace: "Arial",
  });
}
