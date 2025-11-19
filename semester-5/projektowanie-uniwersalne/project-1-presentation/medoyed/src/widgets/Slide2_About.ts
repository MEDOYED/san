import PptxGenJS from "pptxgenjs";
import { HobbyImg } from "@shared/assets/img";
import { FrontendImg } from "@shared/assets/img";
import { imageToBase64 } from "@shared/lib/imageToBase64";

export function createSlide2(pres: PptxGenJS): void {
  const slide = pres.addSlide();

  // Додаємо заголовок слайду для доступності
  slide.slideNumber = { x: 0, y: 0 };

  // Білий фон
  slide.background = { color: "FFFFFF" };

  // Заголовок слайду
  slide.addText("O mnie", {
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
    "• Imię: Maksym Mokriakov",
    "• Wiek: 20 lat",
    "• Miasto: Łódź",
    "• Kierunek: Informatyka",
    "• Zainteresowania: programowanie, łucznictwo",
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
  const image1 = imageToBase64(FrontendImg);
  if (image1) {
    slide.addImage({
      data: image1,
      x: 5.6,
      y: 1,
      w: 3.3,
      h: 2,
      altText: "Ilustracja przedstawiająca nowoczesne technologie frontend - kolorowe ikony frameworków i narzędzi webowych",
    });
  }

  // Друга картинка (праворуч внизу)
  // const image2 = imageToBase64(HobbyImg);
  // if (image2) {
  //   slide.addImage({
  //     data: image2,
  //     x: 8,
  //     y: 3,
  //     w: 1.5,
  //     h: 1.5,
  //   });
  // }

  // Додатковий опис
  slide.addText("Interesuję się technologiami i tworzeniem aplikacji webowych", {
    x: 1,
    y: 4.4,
    w: 6.5,
    h: 0.8,
    fontSize: 16,
    color: "555555",
    italic: true,
    fontFace: "Arial",
    align: "center",
  });

  // Додаємо аудіо озвучку слайду
  slide.addMedia({
    type: "audio",
    path: "src/app/audio/slide-2.mp3",
    x: 0.1,
    y: 0.1,
    w: 0.5,
    h: 0.5,
  });
}
