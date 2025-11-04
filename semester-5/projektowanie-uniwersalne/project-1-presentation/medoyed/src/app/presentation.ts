import PptxGenJS from "pptxgenjs";

console.log("🚀 Початок створення презентації...");

const pres = new PptxGenJS();

// Простий тестовий слайд
const slide = pres.addSlide();
slide.addText("Привіт, світ!", {
  x: 1,
  y: 1,
  w: 8,
  h: 1,
  fontSize: 44,
  color: "2C3E50",
});

// Збереження файлу
pres
  .writeFile({ fileName: "output/test-presentation.pptx" })
  .then(() => {
    console.log("✅ Презентацію створено: output/test-presentation.pptx");
  })
  .catch((error) => {
    console.error("❌ Помилка:", error);
  });
