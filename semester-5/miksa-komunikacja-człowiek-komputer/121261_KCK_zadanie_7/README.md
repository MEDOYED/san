# Laboratorium 7: Programowanie zdarzeniowe (Event-driven Programming)

**Przedmiot:** Komunikacja Człowiek-Komputer (KCK)  
**Prowadzący:** dr Wojciech Miksa  
**Student:** Maksym  
**Data wykonania:** 1 lutego 2026  
**Termin:** 2 lutego 2026

---

## 📋 Cel zadania

Zaprogramowanie prostego interfejsu zmieniającego kolory z wykorzystaniem paradygmatu programowania zdarzeniowego (event-driven programming).

## 🎯 Wymagania na ocenę 5

| Wymaganie | Status | Opis realizacji |
|-----------|--------|-----------------|
| Kod w języku obiektowym | ✅ | JavaScript ES6+ z klasą `ColorChanger` |
| Minimum 5 kolorów | ✅ | 6 predefiniowanych kolorów + custom color picker |
| Minimum 2 kontrolki | ✅ | Radio buttons, przyciski, color picker (4 typy) |
| Metoda onPaint | ✅ | Zaimplementowana metoda `onPaint(color)` |

## 🛠️ Technologie

- **HTML5** - semantyczna struktura dokumentu
- **CSS3** - responsywny design, animacje, transitions
- **JavaScript (ES6+)** - programowanie obiektowe, event handlers

## 📂 Struktura projektu

```
121261_KCK_zadanie_7/
├── color-changer-app/
│   ├── index.html          # Interfejs użytkownika
│   ├── style.css           # Stylizacja i animacje
│   ├── script.js           # Logika event-driven
│   └── README.md           # Dokumentacja techniczna
├── screenshot_1.png        # Zrzut ekranu - widok 1
├── screenshot_2.png        # Zrzut ekranu - widok 2
├── KCK_lab_7_WMiksa.pdf    # Treść zadania
└── README.md               # Ten plik

```

## 🎨 Funkcjonalność aplikacji

### Wybór kolorów
Aplikacja oferuje trzy sposoby zmiany koloru tła:

1. **Radio buttons** - 6 predefiniowanych kolorów:
   - 🔴 Czerwony (#e74c3c)
   - 🔵 Niebieski (#3498db)
   - 🟢 Zielony (#2ecc71)
   - 🟣 Fioletowy (#9b59b6)
   - 🟠 Pomarańczowy (#e67e22)
   - 🟡 Żółty (#f1c40f)

2. **Przycisk "Zastosuj kolor"** - aplikuje wybrany kolor z radio buttons

3. **Color picker** - wybór dowolnego koloru z palety barw

### Dodatkowe funkcje
- **Przycisk Reset** - przywraca domyślny kolor (#34495e)
- **Panel informacyjny** - wyświetla:
  - Aktualny kolor (kod HEX)
  - Licznik zmian koloru
  - Ostatnią wykonaną akcję
- **Skróty klawiszowe** - klawisz `R` resetuje kolor
- **Płynne animacje** - transition przy zmianie koloru (0.5s)

## 💡 Koncepcje programowania zdarzeniowego

### Event Loop
Aplikacja wykorzystuje Event Loop przeglądarki, który:
- Przetwarza zdarzenia asynchronicznie w kolejce
- Nie blokuje interfejsu użytkownika
- Reaguje na akcje użytkownika w czasie rzeczywistym

### Zaimplementowane Event Handlers

```javascript
// Kliknięcia przycisków
- onClick() → Zastosuj kolor, Reset, Zastosuj własny

// Zmiany wartości
- onChange() → Radio buttons

// Input w czasie rzeczywistym
- onInput() → Color picker (live preview)

// Klawiatura
- onKeyPress() → Skróty klawiszowe

// Mysz (demonstracja)
- onMouseMove() → Event loop demo
```

### Architektura obiektowa

```javascript
class ColorChanger {
    constructor()              // Inicjalizacja
    init()                     // Setup event listeners
    registerEventHandlers()    // Rejestracja wszystkich handlerów
    onPaint(color)            // Główna metoda zmiany koloru
    onApplyColor(event)       // Handler przycisku
    onReset(event)            // Handler resetu
    onRadioChange(event)      // Handler radio buttons
    // ... więcej event handlers
}
```

### Wzorzec Event-driven

1. **Zdarzenie** (Event) → użytkownik klika przycisk/wybiera kolor
2. **Kolejka** (Queue) → zdarzenie trafia do kolejki Event Loop
3. **Handler** (Callback) → wykonuje się odpowiednia funkcja
4. **Akcja** (Action) → zmiana koloru tła (onPaint)
5. **Update** (State) → aktualizacja stanu aplikacji

## 🚀 Uruchomienie

1. Otwórz folder projektu:
   ```bash
   cd color-changer-app/
   ```

2. Uruchom `index.html` w przeglądarce:
   - Podwójne kliknięcie na plik
   - Lub: `open index.html` (macOS)
   - Lub: `start index.html` (Windows)
   - Lub: `xdg-open index.html` (Linux)

**Nie wymaga instalacji** - działa bezpośrednio w przeglądarce!

## 📸 Zrzuty ekranu

W projekcie znajdują się dwa zrzuty ekranu pokazujące:
- `screenshot_1.png` - Interfejs z wybranymi kolorami
- `screenshot_2.png` - Działanie aplikacji z różnymi stanami

## 🎓 Wnioski

Projekt pokazuje praktyczne zastosowanie paradygmatu event-driven programming:

1. **Asynchroniczność** - aplikacja reaguje na zdarzenia bez blokowania UI
2. **Event Loop** - wszystkie interakcje przechodzą przez pętlę zdarzeń
3. **Separacja logiki** - event handlers oddzielone od logiki biznesowej
4. **Responsywność** - natychmiastowa reakcja na akcje użytkownika
5. **Programowanie obiektowe** - enkapsulacja w klasie JavaScript

JavaScript jako język oparty na zdarzeniach idealnie nadaje się do demonstracji tych koncepcji w kontekście web development.

## 📚 Źródła

- Materiały z wykładu dr Wojciecha Miksy
- MDN Web Docs - Event Handling
- JavaScript.info - Event Loop

---

**Wykonał:** Maksym  
**Data:** 01.02.2026  
**Uczelnia:** SAN (Wyższa Szkoła Informatyki Stosowanej i Zarządzania)
