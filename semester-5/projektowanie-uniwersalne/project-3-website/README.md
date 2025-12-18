# Portfolio Maksyma Mokriakova - Prezentacja Mojej Osoby

Projekt 3 - Projektowanie Uniwersalne
Społeczna Akademia Nauk, 2025

## Opis projektu

Dwupoziomowa witryna internetowa "Prezentacja mojej osoby" stworzona z naciskiem na **dostępność cyfrową** zgodnie z wytycznymi **WCAG 2.1 Level AA**.

Witryna zawiera informacje z wcześniejszych projektów prezentacyjnych, przedstawiając portfolio osobiste studenta informatyki Maksyma Mokriakova.

## Struktura witryny

### Poziom 0 - Strona główna
- **index.html** - Strona tytułowa z danymi osobowymi, zdjęciem i interaktywnym menu

### Poziom 1 - Strony treści
- **about.html** - O mnie (zainteresowania, podstawowe informacje)
- **education.html** - Edukacja (kolegium, uniwersytet, rozwój kompetencji)
- **hobby.html** - Hobby (łucznictwo, siłownia)
- **skills.html** - Umiejętności programowania (języki, frameworki, narzędzia)
- **projects.html** - Projekty i osiągnięcia (UniPrint, Prospi.ai)
- **contact.html** - Kontakt (email, telefon, social media)

## Funkcje dostępności

### Zgodność z WCAG 2.1 Level AA

#### 1. Nawigacja klawiaturowa
- ✅ Pełna obsługa za pomocą klawiatury (Tab, Enter, Escape)
- ✅ Logiczna kolejność tabulacji
- ✅ Widoczne wskaźniki fokusa (outline 3px)

#### 2. Semantyczny HTML
- ✅ Użycie znaczników: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- ✅ Role ARIA: `banner`, `navigation`, `main`, `contentinfo`
- ✅ Logiczna hierarchia nagłówków (h1 → h2 → h3)

#### 3. ARIA atrybuty
- ✅ `aria-label` - Etykiety dla nawigacji
- ✅ `aria-current="page"` - Zaznaczenie aktualnej strony
- ✅ `aria-labelledby` - Powiązanie sekcji z nagłówkami
- ✅ `aria-expanded` - Stan rozwiniętego menu mobilnego

#### 4. Skip link
- ✅ "Przejdź do głównej treści" - link dla czytników ekranu
- ✅ Ukryty wizualnie, dostępny po naciśnięciu Tab

#### 5. Alt teksty
- ✅ Wszystkie obrazy mają opisowe atrybuty alt
- ✅ Figcaptions z dodatkowym kontekstem
- ✅ Obsługa błędów ładowania obrazów

#### 6. Kontrast kolorów
- ✅ Współczynnik kontrastu min. 4.5:1 (tekst normalny)
- ✅ Współczynnik kontrastu min. 3:1 (tekst duży)
- ✅ Wsparcie dla `prefers-contrast: high`

#### 7. Responsywność
- ✅ Mobile-first design
- ✅ Breakpoint: 768px
- ✅ Responsywne menu z hamburgerem
- ✅ Grid i Flexbox dla elastycznego layoutu

#### 8. Wsparcie dla preferencji użytkownika
- ✅ `prefers-reduced-motion` - Wyłączenie animacji
- ✅ `prefers-contrast: high` - Wysoki kontrast
- ✅ Lazy loading obrazów

#### 9. Interaktywne elementy
- ✅ Obszary klikalne min. 44x44px (mobile)
- ✅ Hover i focus states
- ✅ Smooth scroll
- ✅ Transitions z `prefers-reduced-motion`

#### 10. Progressive Enhancement
- ✅ Witryna działa bez JavaScript
- ✅ Graceful degradation
- ✅ CSS Grid/Flexbox z fallbacks

## Technologie

- **HTML5** - Semantyczny markup zgodny ze standardami W3C
- **CSS3** - Grid, Flexbox, Custom Properties (CSS Variables)
- **JavaScript ES6+** - Vanilla JS, brak zewnętrznych bibliotek
- **Responsive Web Design** - Mobile-first approach
- **WCAG 2.1 Level AA** - Standardy dostępności

## Struktura plików

```
project-3-website/
│
├── index.html                  # Strona główna
├── about.html                  # O mnie
├── education.html              # Edukacja
├── hobby.html                  # Hobby
├── skills.html                 # Umiejętności
├── projects.html               # Projekty
├── contact.html                # Kontakt
│
├── css/
│   └── styles.css              # Główny arkusz stylów (WCAG-compliant)
│
├── js/
│   └── main.js                 # Skrypty JS (accessibility-focused)
│
├── images/
│   ├── hobby-img.png           # Łucznictwo
│   ├── silownia.png            # Siłownia
│   └── front-end.png           # Technologie webowe
│
├── sitemap.html                # Wizualna mapa witryny
├── STRUKTURA-WITRYNY.txt       # Tekstowa mapa witryny
└── README.md                   # Ten plik
```

## Jak uruchomić witrynę

### Metoda 1: Bezpośrednie otwarcie w przeglądarce

1. Pobierz cały folder `project-3-website`
2. Kliknij dwukrotnie plik `index.html`
3. Witryna otworzy się w domyślnej przeglądarce

### Metoda 2: Live Server (Visual Studio Code)

1. Otwórz folder w VS Code
2. Zainstaluj rozszerzenie "Live Server"
3. Kliknij prawym przyciskiem myszy na `index.html`
4. Wybierz "Open with Live Server"

### Metoda 3: Python HTTP Server

```bash
cd project-3-website
python -m http.server 8000
# Otwórz: http://localhost:8000
```

### Metoda 4: Node.js HTTP Server

```bash
cd project-3-website
npx http-server
# Otwórz: http://localhost:8080
```

## Testowanie dostępności

### Narzędzia do testowania

1. **WAVE (Web Accessibility Evaluation Tool)**
   - Rozszerzenie Chrome/Firefox
   - URL: https://wave.webaim.org/

2. **Lighthouse (Chrome DevTools)**
   - F12 → Lighthouse → Accessibility
   - Sprawdza WCAG compliance

3. **axe DevTools**
   - Rozszerzenie Chrome/Firefox
   - Automatyczne testy dostępności

4. **Screen Readers**
   - NVDA (Windows) - Darmowy
   - JAWS (Windows) - Komercyjny
   - VoiceOver (macOS) - Wbudowany

### Testy manualne

1. **Nawigacja klawiaturowa**
   - Tab - Przejście do kolejnego elementu
   - Shift + Tab - Powrót do poprzedniego
   - Enter - Aktywacja linku/przycisku
   - Escape - Zamknięcie menu mobilnego

2. **Zoom**
   - Ctrl + Plus - Powiększenie (test do 200%)
   - Sprawdź czy layout się nie psuje

3. **Kontrast**
   - Włącz tryb wysokiego kontrastu w systemie
   - Sprawdź czytelność

4. **Mobile**
   - Otwórz DevTools → Toggle Device Toolbar
   - Testuj na różnych rozdzielczościach

## Funkcje JavaScript

### Responsywne menu mobilne
- Hamburger menu dla urządzeń < 768px
- Animacja transformacji hamburger → X
- Zamykanie po kliknięciu poza menu
- Zamykanie klawiszem Escape

### Accessibility features
- Skip link z smooth scroll
- Focus management (keyboard vs mouse)
- Live region dla ogłoszeń (screen readers)
- Walidacja obrazów (alt text)
- Lazy loading enhancement
- Detekcja preferencji użytkownika

### Performance
- Logowanie czasu ładowania strony
- Optymalizacja eventów (debounce)
- Graceful degradation

## Wsparcie przeglądarek

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## Źródła treści

Treść witryny pochodzi z:
- **Projekt 1** - Prezentacja PowerPoint
- **Projekt 2** - Dokument PDF/Typst
- Zdjęcia z folderu `project-2/images/`

## Autor

**Maksym Mokriakov**
- Email: mmax@gmail.com
- Telefon: +48 484 448 844
- GitHub: [github.com/MEDOYED](https://github.com/MEDOYED)
- LinkedIn: [linkedin.com/in/maksym](https://linkedin.com/in/maksym)

---

## Checklist przed wysłaniem

- [x] Wszystkie strony HTML utworzone
- [x] CSS z pełnym wsparciem dostępności
- [x] JavaScript z funkcjami accessibility
- [x] Obrazy skopiowane z project-2
- [x] Mapa witryny utworzona (HTML + TXT)
- [x] README z instrukcjami
- [x] Testowanie w różnych przeglądarkach
- [x] Walidacja HTML (W3C Validator)
- [x] Test WCAG 2.1 Level AA
- [x] Test responsywności
- [x] Test nawigacji klawiaturowej

## Licencja

© 2025 Maksym Mokriakov. Projekt edukacyjny - Społeczna Akademia Nauk.
