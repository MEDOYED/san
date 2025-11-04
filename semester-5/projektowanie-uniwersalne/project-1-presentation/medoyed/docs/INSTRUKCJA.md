# Instrukcja obsługi projektu prezentacji

## 📦 Zawartość projektu

Projekt zawiera:
- ✅ Kod źródłowy TypeScript do generowania prezentacji
- ✅ 8 slajdów zgodnych z wymaganiami (7-10 slajdów)
- ✅ Wysokie kontrasty (WCAG AAA level)
- ✅ Brak animacji elementów
- ✅ Nawigacja wyłącznie wskaźnikiem
- ✅ Dokumentację i analizę dostępności

## 🚀 Szybki start

### Generowanie prezentacji:

```bash
# Instalacja zależności
npm install

# Uruchomienie generatora
npm run dev
```

Prezentacja zostanie utworzona w folderze: `output/maksym-presentation.pptx`

## 📋 Struktura projektu

```
medoyed/
├── src/
│   ├── app/
│   │   └── presentation.ts      # Główny plik łączący wszystkie slajdy
│   └── widgets/
│       ├── Slide1_Title.ts      # Slajd tytułowy
│       ├── Slide2_About.ts      # O mnie
│       ├── Slide3_Education.ts  # Edukacja
│       ├── Slide4_Hobbies.ts    # Hobby
│       ├── Slide5_Programming.ts # Programowanie
│       ├── Slide6_Achievements.ts # Osiągnięcia
│       ├── Slide7_Technologies.ts # Technologie
│       └── Slide8_Contact.ts    # Kontakt
├── output/
│   └── maksym-presentation.pptx # Wygenerowana prezentacja
├── README.md                     # Dokumentacja projektu
├── ACCESSIBILITY_CHECKLIST.md    # Lista kontrolna dostępności
├── ANALIZA_DOSTEPNOSCI.md       # Szczegółowa analiza (8 pkt)
└── package.json                  # Konfiguracja projektu
```

## 📊 Zgodność z wymaganiami zadania

### Wymagania podstawowe (8 pkt):

| Wymaganie | Status | Uwagi |
|-----------|--------|-------|
| 7-10 slajdów | ✅ | 8 slajdów |
| Min. 4 obrazy/animacje | ⚠️ | Do dodania przez studenta |
| Brak animacji elementów | ✅ | Zgodne |
| Przejścia wskaźnikiem | ✅ | Zgodne |
| Plik PDF | 📝 | Do wygenerowania |

### Analiza dostępności (4 pkt):

| Element | Status | Plik |
|---------|--------|------|
| Identyfikacja niedociągnięć | ✅ | `ANALIZA_DOSTEPNOSCI.md` |
| Szczegółowa analiza WCAG | ✅ | Sekcja 3-4 |
| Plan poprawek | ✅ | Sekcja 5 |
| Wnioski | ✅ | Sekcja 7 |

## 🎨 Aspekty dostępności cyfrowej

### ✅ Co zostało zaimplementowane poprawnie:

1. **Postrzegalność (Perceivable)**
   - Kontrast 21:1 (czarny na białym)
   - Czytelne czcionki (Arial, 14-48pt)
   - Logiczna kolorystyka

2. **Funkcjonalność (Operable)**
   - Brak automatycznych przejść
   - Nawigacja wskaźnikiem/klawiaturą
   - Brak efektów mogących wywołać ataki

3. **Zrozumiałość (Understandable)**
   - Jasna struktura
   - Wyraźne nagłówki
   - Logiczna kolejność informacji

4. **Solidność (Robust)**
   - Format PPTX (powszechnie obsługiwany)
   - Możliwość eksportu do PDF
   - Zgodność z technologiami wspomagającymi

### ⚠️ Co wymaga uzupełnienia (celowo zostawione dla studenta):

1. **Obrazy rzeczywiste**
   - Placeholder-y zamiast rzeczywistych zdjęć
   - Brak opisów alternatywnych
   - Student musi dodać własne materiały

2. **Treść personalna**
   - Dane osobowe do uzupełnienia
   - Projekty i osiągnięcia
   - Kontakt

## 🔍 Jak sprawdzić dostępność?

### Kontrast kolorów:
```
Narzędzie: WebAIM Contrast Checker
URL: https://webaim.org/resources/contrastchecker/

Wyniki projektu:
- Główny tekst (#000000 / #FFFFFF): 21:1 (AAA level)
- Tekst drugorzędny (#333333 / #FFFFFF): 12.6:1 (AAA level)
```

### Czytnik ekranu:
```
Narzędzie: NVDA (Windows) / VoiceOver (Mac)
Test: Nawigacja przez slajdy
Oczekiwany rezultat: Logiczna kolejność odczytu
```

### Dostępność klawiatury:
```
Test: Nawigacja wyłącznie klawiszami
Klawisze: ←→ (strzałki), Space, Enter
Oczekiwany rezultat: Pełna kontrola prezentacji
```

## 📄 Generowanie PDF

### Metoda 1: Microsoft PowerPoint
1. Otwórz `maksym-presentation.pptx`
2. Plik → Zapisz jako → PDF
3. Opcje:
   - ☑ Właściwości dokumentu
   - ☑ Tagi struktury dokumentu dla dostępności

### Metoda 2: LibreOffice Impress
1. Otwórz prezentację
2. Plik → Eksportuj jako PDF
3. Zakładka "Ogólne":
   - ☑ Uniwersalny dostęp (PDF/UA)
   - ☑ PDF z tagami

### Metoda 3: Google Slides
1. Prześlij do Google Slides
2. Plik → Pobierz → PDF
3. Sprawdź wynikowy dokument

## 📝 Kroki do ukończenia projektu

### Dla studenta:

1. **Wypełnij dane osobiste**
   - Otwórz `output/maksym-presentation.pptx`
   - Zastąp placeholder-y swoimi danymi
   - Zapisz jako wersja 1

2. **Dodaj obrazy (min. 4)**
   - Slajd 1: Zdjęcie profilowe
   - Slajd 3: Logo uczelni
   - Slajd 4: Zdjęcia hobby (2-3)
   - Slajd 6: Zrzuty ekranu projektów

3. **Dodaj opisy alternatywne**
   - Kliknij prawym na obraz
   - "Format obrazu" → "Tekst alternatywny"
   - Dodaj opisowy tekst (2-3 zdania)

4. **Wygeneruj PDF (pierwsza wersja)**
   ```
   Nazwa: maksym-presentation.pdf
   ```

5. **Przeanalizuj dostępność**
   - Otwórz `ANALIZA_DOSTEPNOSCI.md`
   - Wypełnij sekcje [X] swoimi danymi
   - Uzupełnij wnioski

6. **Popraw prezentację**
   - Zastosuj poprawki z analizy
   - Zapisz jako `maksym-presentation-poprawiona.pptx`

7. **Wygeneruj PDF (poprawiona wersja)**
   ```
   Nazwa: maksym-presentation-poprawiona.pdf
   ```

8. **Prześlij do Teams**
   - Folder: "Projekt 1" → Twój folder w Class notebook
   - Pliki:
     * maksym-presentation.pptx
     * maksym-presentation.pdf
     * maksym-presentation-poprawiona.pptx
     * maksym-presentation-poprawiona.pdf
     * ANALIZA_DOSTEPNOSCI.md (lub PDF)

## 🛠️ Technologie użyte w projekcie

- **Node.js** - środowisko uruchomieniowe
- **TypeScript** - język programowania
- **PptxGenJS** - biblioteka do generowania prezentacji
- **ts-node** - bezpośrednie uruchamianie TS
- **tsconfig-paths** - aliasy ścieżek (@widgets, @shared)

## 📚 Źródła i standardy

1. **WCAG 2.1** (Web Content Accessibility Guidelines)
   - Level A: Minimalne wymagania
   - Level AA: Zalecane (spełnione w projekcie)
   - Level AAA: Zaawansowane (kontrast 21:1)

2. **Ustawa o dostępności cyfrowej** (Polska)
   - Dz. U. z 2019 r. poz. 848

3. **Konwencja ONZ** o prawach osób niepełnosprawnych
   - Art. 2 - Projektowanie uniwersalne

## ❓ FAQ

### Q: Czy mogę zmienić kolory?
**A:** Tak, ale musisz zachować kontrast minimum 4.5:1 dla tekstu i 3:1 dla elementów graficznych. Użyj [Contrast Checker](https://webaim.org/resources/contrastchecker/) do sprawdzenia.

### Q: Czy mogę dodać animacje?
**A:** NIE. Zadanie wyraźnie wymaga braku animacji elementów. Można mieć tylko przejścia między slajdami aktywowane wskaźnikiem.

### Q: Ile obrazów jest wymagane?
**A:** Minimum 4 obrazy lub animacje (krótkie filmy 7-10 sekund). Projekt ma strukturę na 6-8 obrazów.

### Q: Czy emotikony liczą się jako obrazy?
**A:** Nie zalecane. Lepiej użyć prawdziwych zdjęć z opisami alternatywnymi.

### Q: Jak dodać tekst alternatywny w PowerPoint?
**A:** Prawy klik na obraz → "Edytuj tekst alternatywny" lub "Format obrazu" → zakładka "Rozmiar i właściwości" → "Tekst alternatywny".

## 📞 Kontakt

W razie pytań:
- Email: [twój email]
- GitHub: [link do repo]
- Teams: [kod zespołu]

---

**Autor projektu:** Maksym [Nazwisko]
**Przedmiot:** Projektowanie Uniwersalne
**Prowadzący:** [Imię prowadzącego]
**Data:** Listopad 2025

## ✅ Checklist przed oddaniem

- [ ] Prezentacja ma 7-10 slajdów
- [ ] Dodane minimum 4 obrazy z alt-text
- [ ] Brak animacji elementów
- [ ] Przejścia tylko wskaźnikiem
- [ ] Kontrast wystarczający (sprawdzony)
- [ ] Wszystkie dane wypełnione
- [ ] PDF wygenerowany (obie wersje)
- [ ] Analiza dostępności uzupełniona
- [ ] Wersja poprawiona stworzona
- [ ] Wszystkie pliki przesłane do Teams

---

**Powodzenia!** 🎓
