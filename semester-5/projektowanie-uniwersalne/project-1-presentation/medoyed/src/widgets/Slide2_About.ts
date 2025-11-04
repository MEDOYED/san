import PptxGenJS from "pptxgenjs";
import { HobbyImg } from "@shared/assets/img";
import { imageToBase64 } from "@shared/lib/imageToBase64";

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
    fontFace: "Arial",
  });

  // Основний текст з інформацією
  const aboutText = [
    "• Ім'я: Максим Мокряков",
    "• Вік: 20 років",
    "• Місто: Łódź",
    "• Напрямок: Інформаційні технології",
    "• Захоплення: програмування, стрільба з луку",
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
    valign: "top",
  });

  // Перша картинка (праворуч вгорі)
  const image1 = imageToBase64(HobbyImg);
  if (image1) {
    slide.addImage({
      data: image1,
      x: 8,
      y: 1,
      w: 1.5,
      h: 1.5,
    });
  }

  // Друга картинка (праворуч внизу)
  const image2 = imageToBase64(HobbyImg);
  if (image2) {
    slide.addImage({
      data: image2,
      x: 8,
      y: 3,
      w: 1.5,
      h: 1.5,
    });
  }

  // Додатковий опис
  slide.addText("Цікавлюсь технологіями та розробкою програмного забезпечення", {
    x: 1,
    y: 4.4,
    w: 6.5,
    h: 0.8,
    fontSize: 16,
    color: "666666",
    italic: true,
    fontFace: "Arial",
    align: "center",
  });
}
