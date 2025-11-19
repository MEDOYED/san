import PptxGenJS from "pptxgenjs";

import { createSlide1 } from "@widgets/slide-1-title";
import { createSlide2 } from "@widgets/slide-2-outline";
import { createSlide3 } from "@widgets/slide-3-what-i-do";
import { createSlide4 } from "@widgets/slide-4-what-i-want";
import { createSlide5 } from "@widgets/slide-5-reality";
import { createSlide6 } from "@widgets/slide-6-training";
import { createSlide7 } from "@widgets/slide-7-now";
import { createSlide8 } from "@widgets/slide-8-what-drives-me";
import { addAudioToSlide } from "@shared/lib/addAudio";

console.log("🚀 Початок створення презентації...");

const pres = new PptxGenJS();

// Налаштування презентації з дотриманням вимог WCAG
pres.author = "Yaroslav Zubakha";
pres.company = "Uniwersytet Łódzki";
pres.subject = "Dostępna prezentacja";
pres.title = "Projekt 1";

// Створення всіх слайдів з аудіо
console.log("📄 Створення слайду 1: Титульний слайд");
const slide1 = createSlide1(pres);
addAudioToSlide(slide1, "slide-0.flac");

console.log("📄 Створення слайду 2: Treść");
const slide2 = createSlide2(pres);
addAudioToSlide(slide2, "slide-1.flac");

console.log("📄 Створення слайду 3: Co właściwie robię");
const slide3 = createSlide3(pres);
addAudioToSlide(slide3, "slide-2.flac");

console.log("📄 Створення слайду 4: Co chcę robić");
const slide4 = createSlide4(pres);
addAudioToSlide(slide4, "slide-3.flac");

console.log("📄 Створення слайду 5: Rzeczywistość");
const slide5 = createSlide5(pres);
addAudioToSlide(slide5, "slide-4.flac");

console.log("📄 Створення слайду 6: Trening");
const slide6 = createSlide6(pres);
addAudioToSlide(slide6, "slide-5.flac");

console.log("📄 Створення слайду 7: Teraz");
const slide7 = createSlide7(pres);
addAudioToSlide(slide7, "slide-6.flac");

console.log("📄 Створення слайду 8: Co mną kieruje");
const slide8 = createSlide8(pres);
addAudioToSlide(slide8, "slide-7.flac");

// Збереження файлу
const outputFileName = "output/yaroslav-presentation.pptx";

pres
  .writeFile({ fileName: outputFileName })
  .then(() => {
    console.log(`✅ Презентацію створено: ${outputFileName}`);
    console.log("\n💡 Всі слайди створені з дотриманням вимог WCAG:");
    console.log("   - Високий контраст (чорний текст на білому фоні)");
    console.log("   - Без автоматичних анімацій");
    console.log("   - Зрозуміла структура");
    console.log("   - Зручна навігація");
    console.log("   - Аудіо для кожного слайду");
  })
  .catch((error) => {
    console.error("❌ Помилка:", error);
  });
