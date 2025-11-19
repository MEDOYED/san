import PptxGenJS from "pptxgenjs";
import path from "path";

/**
 * Додає аудіо файл до слайду
 * @param slide - Слайд презентації
 * @param audioFileName - Назва аудіо файлу (наприклад, "slide-0.flac")
 */
export function addAudioToSlide(
  slide: ReturnType<PptxGenJS["addSlide"]>,
  audioFileName: string
): void {
  const audioPath = path.join(__dirname, "../../app/recordings", audioFileName);

  try {
    // Додаємо аудіо до слайду
    slide.addMedia({
      type: "audio",
      path: audioPath,
      x: 0.1,
      y: 5.3,
      w: 0.5,
      h: 0.5,
    });
  } catch (error) {
    console.warn(`⚠️ Не вдалося додати аудіо ${audioFileName}:`, error);
  }
}
