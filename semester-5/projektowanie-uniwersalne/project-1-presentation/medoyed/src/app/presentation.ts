import PptxGenJS from "pptxgenjs";
import { createSlide1 } from "@widgets/slide-1-title/ui/Slide1_Title";
// import type { TitleSlideData } from "@widgets/slide-1-title/ui/Slide1_Title";
// import { TitleSlideData } from "@widgets/slide-1-title/ui/Slide1_Title";

import { titleSlideData } from "@widgets/slide-1-title/config/constants/titleSlideData";

import { createSlide2 } from "@widgets/Slide2_About";
import { createSlide3 } from "@widgets/Slide3_Education";
import { createSlide4 } from "@widgets/Slide4_Hobbies";
import { createSlide5 } from "@widgets/Slide5_Programming";
import { createSlide6 } from "@widgets/Slide6_Achievements";
import { createSlide7 } from "@widgets/Slide7_Technologies";
import { createSlide8 } from "@widgets/Slide8_Contact";

console.log("🚀 Початок створення презентації...");

const pres = new PptxGenJS();

// Налаштування презентації з дотриманням вимог WCAG
pres.author = "Maksym";
pres.company = "[Твій університет]";
pres.subject = "Презентація про себе";
pres.title = "Моя презентація";

// Створення всіх слайдів
console.log("📄 Створення слайду 1: Титульний слайд");
createSlide1(pres, titleSlideData);

console.log("📄 Створення слайду 2: Про мене");
createSlide2(pres);

console.log("📄 Створення слайду 3: Освіта");
createSlide3(pres);

console.log("📄 Створення слайду 4: Хоббі");
createSlide4(pres);

console.log("📄 Створення слайду 5: Навички програмування");
createSlide5(pres);

console.log("📄 Створення слайду 6: Проекти та досягнення");
createSlide6(pres);

console.log("📄 Створення слайду 7: Технології та інструменти");
createSlide7(pres);

console.log("📄 Створення слайду 8: Контакти");
createSlide8(pres);

// Збереження файлу
const outputFileName = "output/maksym-presentation.pptx";

pres
  .writeFile({ fileName: outputFileName })
  .then(() => {
    console.log(`✅ Презентацію створено: ${outputFileName}`);
    console.log("\n📋 Наступні кроки:");
    console.log("1. Відкрий файл та заповни особисту інформацію");
    console.log("2. Додай свої фотографії");
    console.log("3. Зміни контактну інформацію");
    console.log("4. Експортуй в PDF");
    console.log("\n💡 Всі слайди створені з дотриманням вимог WCAG:");
    console.log("   - Високий контраст (чорний текст на білому фоні)");
    console.log("   - Без автоматичних анімацій");
    console.log("   - Зрозуміла структура");
    console.log("   - Зручна навігація");
  })
  .catch((error) => {
    console.error("❌ Помилка:", error);
  });
