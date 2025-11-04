/**
 * Експорт шляхів до зображень
 *
 * ВАЖЛИВО: Експортуємо шлях як рядок, а не сам файл,
 * тому що Node.js не може напряму імпортувати PNG файли
 */

import path from "path";

// Експортуємо абсолютний шлях до зображення
export const HobbyImg = path.join(__dirname, "hobby-img.png");
