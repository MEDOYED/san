# KCK Laboratorium 7 - Programowanie zdarzeniowe (Event-driven Programming)

**Student:** Maksym  
**Data:** 1 lutego 2026  
**Prowadzący:** Wojciech Miksa

## Opis projektu

Aplikacja webowa demonstrująca koncepcję programowania zdarzeniowego (event-driven programming) poprzez interaktywny interfejs do zmiany kolorów tła.

## Wykorzystane technologie

- **HTML5** - struktura strony
- **CSS3** - stylizacja i animacje
- **JavaScript (ES6+)** - logika aplikacji, programowanie obiektowe

## Spełnienie wymagań

### ✅ Kod w języku obiektowym
- Wykorzystano klasę `ColorChanger` w JavaScript
- Zastosowano encapsulację i metody obiektowe

### ✅ Minimum 5 kolorów
Aplikacja oferuje 6 predefiniowanych kolorów:
1. Czerwony (#e74c3c)
2. Niebieski (#3498db)
3. Zielony (#2ecc71)
4. Fioletowy (#9b59b6)
5. Pomarańczowy (#e67e22)
6. Żółty (#f1c40f)

Plus możliwość wyboru dowolnego koloru z color pickera.

### ✅ Minimum 2 kontrolki
Aplikacja zawiera:
1. **Radio buttons** - do wyboru predefiniowanych kolorów
2. **Przyciski akcji** - "Zastosuj kolor", "Reset"
3. **Color picker** - do wyboru własnego koloru
4. **Dodatkowy przycisk** - "Zastosuj własny"

### ✅ Metoda onPaint
Zaimplementowana metoda `onPaint(color)`, która:
- Zmienia kolor tła strony
- Aktualizuje stan aplikacji
- Zwiększa licznik zmian

## Koncepcje programowania zdarzeniowego

### Event Loop
- Aplikacja wykorzystuje Event Loop przeglądarki
- Wszystkie zdarzenia są przetwarzane asynchronicznie
- Kod jest nieblokujący

### Event Handlers
Zaimplementowane obsługi zdarzeń:
- `onApplyColor()` - kliknięcie przycisku "Zastosuj"
- `onReset()` - kliknięcie przycisku "Reset"
- `onRadioChange()` - zmiana wyboru radio button
- `onColorPickerInput()` - zmiana w color pickerze
- `onKeyPress()` - skróty klawiszowe (R = reset)
- `onMouseMove()` - demonstracja event loop

## Uruchomienie

Otwórz plik `index.html` w przeglądarce internetowej.

## Funkcjonalności

- Zmiana koloru tła poprzez kliknięcie radio button
- Zmiana koloru poprzez przycisk "Zastosuj kolor"
- Wybór własnego koloru z palety
- Reset do koloru domyślnego
- Wyświetlanie statystyk (aktualny kolor, liczba zmian)
- Płynne animacje przejść kolorów
- Responsywny design
- Skróty klawiszowe

## Struktura plików

```
color-changer-app/
├── index.html      # Struktura HTML
├── style.css       # Stylizacja
├── script.js       # Logika aplikacji (Event-driven)
└── README.md       # Dokumentacja
```
