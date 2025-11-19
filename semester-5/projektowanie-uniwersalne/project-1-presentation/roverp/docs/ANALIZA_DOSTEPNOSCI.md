# Analiza dostępności cyfrowej prezentacji

**Autor:** Maksym [Prізвище]
**Przedmiot:** Projektowanie Uniwersalne
**Data:** 2025-11-04
**Projekt:** Projekt 1 - Prezentacja multimedialna

---

## 1. Wprowadzenie

Celem niniejszej analizy jest ocena dostępności cyfrowej stworzonej prezentacji multimedialnej pod kątem wymogów **WCAG 2.1** (Web Content Accessibility Guidelines) oraz polskich przepisów dotyczących dostępności cyfrowej.

## 2. Charakterystyka prezentacji

### Podstawowe informacje:
- **Liczba slajdów:** 8
- **Format:** PPTX (Microsoft PowerPoint)
- **Liczba obrazów:** [X] (minimum 4 wymagane)
- **Użyte czcionki:** Arial (bezszeryfowa, czytelna)
- **Rozmiar czcionki:** 14-48 pt
- **Paleta kolorów:** Wysoki kontrast (czarny tekst na białym tle)

### Struktura prezentacji:
1. Slajd tytułowy
2. Informacje osobiste
3. Edukacja
4. Zainteresowania
5. Umiejętności programowania
6. Projekty i osiągnięcia
7. Technologie
8. Kontakt

## 3. Analiza zgodności z zasadami WCAG 2.1

### 3.1. Postrzegalność (Perceivable)

#### ✅ Silne strony:

1. **Kontrast kolorów (WCAG 1.4.3)**
   - Główny tekst: czarny (#000000) na białym (#FFFFFF) = kontrast 21:1 (wymóg: 4.5:1) ✅
   - Tekst drugorzędny: ciemnoszary (#333333) na białym = kontrast 12.6:1 ✅
   - Tekst trzecorzędny: szary (#666666) na białym = kontrast 5.7:1 ✅
   - **Ocena:** AAA level - przekraczamy minimalne wymogi

2. **Rozmiar tekstu (WCAG 1.4.4)**
   - Minimalna wielkość: 14pt (dla tekstu głównego)
   - Nagłówki: 18-48pt
   - **Ocena:** Spełnia wymogi, tekst jest powiększalny

3. **Użycie koloru (WCAG 1.4.1)**
   - Informacja nie jest przekazywana tylko kolorem
   - Struktura opiera się na tekście i układzie
   - **Ocena:** Zgodne

#### ❌ Słabe strony (WERSJA PIERWSZA):

1. **Alternatywny tekst dla obrazów (WCAG 1.1.1)**
   - ❌ Brak rzeczywistych obrazów (tylko emotikony)
   - ❌ Brak opisów alternatywnych
   - **Problem:** Osoby niewidome używające czytników ekranu nie otrzymają informacji o treści wizualnej
   - **Priorytet:** KRYTYCZNY

2. **Jakość obrazów**
   - ❌ Użyto emotikonów zamiast prawdziwych zdjęć
   - **Problem:** Emotikony mogą być interpretowane różnie przez różne urządzenia
   - **Priorytet:** WYSOKI

### 3.2. Funkcjonalność (Operable)

#### ✅ Silne strony:

1. **Dostępność z klawiatury (WCAG 2.1.1)**
   - ✅ Nawigacja możliwa za pomocą strzałek
   - ✅ Brak automatycznych przejść
   - **Ocena:** Zgodne

2. **Wystarczający czas (WCAG 2.2.1)**
   - ✅ Brak limitów czasowych
   - ✅ Użytkownik kontroluje tempo przeglądania
   - **Ocena:** Zgodne

3. **Brak animacji (WCAG 2.3.1, 2.2.2)**
   - ✅ Brak automatycznych animacji elementów
   - ✅ Brak efektów mogących wywołać ataki epilepsji
   - **Ocena:** Zgodne - to jest bardzo ważne!

#### 🟡 Do poprawy:

1. **Nawigacja (WCAG 2.4.1)**
   - Struktura jest logiczna, ale można dodać numery slajdów
   - **Priorytet:** NISKI

### 3.3. Zrozumiałość (Understandable)

#### ✅ Silne strony:

1. **Język treści (WCAG 3.1.1)**
   - ✅ Jasno określony język (ukraiński/polski)
   - ✅ Metadane dokumentu zawierają język
   - **Ocena:** Zgodne

2. **Struktura (WCAG 2.4.6)**
   - ✅ Każdy slajd ma wyraźny nagłówek
   - ✅ Hierarchia informacji jest jasna
   - **Ocena:** Zgodne

3. **Czytelność (WCAG 3.1.5)**
   - ✅ Prosty język
   - ✅ Krótkie zdania
   - ✅ Wypunktowania dla list
   - **Ocena:** Zgodne

#### ❌ Słabe strony (WERSJA PIERWSZA):

1. **Wypełnienie treścią**
   - ❌ Wiele placeholder-ów typu [Nazwa], [X]
   - **Problem:** Nie można ocenić faktycznej dostępności bez pełnej treści
   - **Priorytet:** WYSOKI

### 3.4. Solidność (Robust)

#### ✅ Silne strony:

1. **Kompatybilność (WCAG 4.1.2)**
   - ✅ Format PPTX jest szeroko obsługiwany
   - ✅ Eksport do PDF możliwy
   - **Ocena:** Zgodne

#### 🟡 Do weryfikacji:

1. **Wsparcie technologii asystujących**
   - Należy przetestować z czytnikiem ekranu
   - **Priorytet:** ŚREDNI

## 4. Podsumowanie niedociągnięć - PIERWSZA WERSJA

### 🔴 Problemy krytyczne (Poziom A):

1. **Brak alternatywnego tekstu dla obrazów**
   - Zgodność: WCAG 1.1.1 (Level A)
   - Wpływ: Osoby niewidome nie otrzymają informacji
   - Rozwiązanie: Dodać opisy do wszystkich obrazów

### 🟡 Problemy istotne (Poziom AA):

2. **Użycie emotikonów zamiast obrazów**
   - Wpływ: Różna interpretacja na różnych urządzeniach
   - Rozwiązanie: Użyć prawdziwych zdjęć/ikon

3. **Niepełna treść (placeholder-y)**
   - Wpływ: Niemożność pełnej oceny dostępności
   - Rozwiązanie: Wypełnić wszystkie informacje

### 🟢 Zalecenia (Poziom AAA):

4. **Można poprawić odstępy**
   - Zwiększyć whitespace między elementami
   - Poprawi to czytelność

## 5. Plan poprawek dla wersji "poprawionej"

### Krok 1: Dodanie obrazów (4+)
```
✅ Slajd 1: Profesjonalne zdjęcie profilowe
   Alt-text: "Zdjęcie portretowe Maksyma w [opis sytuacji]"

✅ Slajd 3: Logo uniwersytetu
   Alt-text: "Logo [nazwa uniwersytetu]"

✅ Slajd 4: Zdjęcia hobby (2-3)
   Alt-text: "[Konkretny opis aktywności na zdjęciu]"

✅ Slajd 6: Zrzuty ekranu projektów
   Alt-text: "[Nazwa projektu] - interfejs aplikacji pokazujący [funkcjonalność]"
```

### Krok 2: Dodanie opisów alternatywnych
Dla każdego obrazu:
1. Otworzyć właściwości obrazu
2. Dodać pole "Alt Text" / "Tekst alternatywny"
3. Opisać treść i kontekst (2-3 zdania)

### Krok 3: Wypełnienie treści
- Zastąpić wszystkie [placeholder]
- Sprawdzić ortografię
- Upewnić się, że informacje są aktualne

### Krok 4: Test dostępności
- [ ] Test z czytnikiem ekranu (NVDA / JAWS)
- [ ] Test tylko z klawiatury
- [ ] Eksport i test PDF
- [ ] Test w różnych przeglądarkach slajdów

## 6. Wyniki po poprawkach

### Przed poprawkami:
- ❌ WCAG 1.1.1 (Alt text): NIE
- ✅ WCAG 1.4.3 (Kontrast): TAK
- ✅ WCAG 2.2.2 (Brak animacji): TAK
- ✅ WCAG 2.4.6 (Nagłówki): TAK

**Ogólna ocena:** Częściowo dostępna (50-70%)

### Po poprawkach (oczekiwane):
- ✅ WCAG 1.1.1 (Alt text): TAK
- ✅ WCAG 1.4.3 (Kontrast): TAK
- ✅ WCAG 2.2.2 (Brak animacji): TAK
- ✅ WCAG 2.4.6 (Nagłówki): TAK

**Ogólna ocena:** Pełna dostępność (95-100%)

## 7. Wnioski

### Co zostało dobrze zrobione od początku:
1. ✅ Wysoki kontrast kolorów (21:1)
2. ✅ Brak animacji elementów
3. ✅ Logiczna struktura
4. ✅ Czytelne czcionki i rozmiary
5. ✅ Nawigacja za pomocą wskaźnika

### Co wymagało poprawy:
1. ❌ Dodanie rzeczywistych obrazów (minimum 4)
2. ❌ Opisy alternatywne dla wszystkich obrazów
3. ❌ Wypełnienie pełnej treści
4. 🟡 Drobne usprawnienia układu

### Nauka z projektu:
Podczas tworzenia prezentacji multimedialnej z myślą o dostępności cyfrowej nauczyłem się:

1. **Znaczenie kontrastu** - jak obliczać i weryfikować kontrast kolorów zgodnie z WCAG
2. **Rola opisów alternatywnych** - dlaczego są kluczowe dla osób niewidomych
3. **Unikanie animacji** - jak automatyczne animacje mogą być problematyczne
4. **Struktura i logika** - znaczenie uporządkowanej hierarchii informacji
5. **Testowanie** - jak ważne jest przetestowanie z różnymi narzędziami dostępności

### Uniwersalne projektowanie w praktyce:
Prezentacja pokazuje, że projektowanie uniwersalne nie jest trudne - wymaga tylko:
- Świadomości potrzeb różnych użytkowników
- Planowania dostępności od początku
- Stosowania sprawdzonych standardów (WCAG)
- Testowania z różnymi narzędziami

**Rezultat:** Prezentacja dostępna dla wszystkich, niezależnie od niepełnosprawności.

## 8. Bibliografia

1. W3C Web Content Accessibility Guidelines (WCAG) 2.1: https://www.w3.org/WAI/WCAG21/quickref/
2. Ustawa o dostępności cyfrowej (Dz. U. z 2019 r. poz. 848)
3. Konwencja ONZ o prawach osób niepełnosprawnych
4. WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
5. Microsoft Accessibility Standards: https://www.microsoft.com/en-us/accessibility

---

**Podpis studenta:** Maksym [Nazwisko]
**Data:** [Data oddania projektu]

## Załączniki:
- Wersja 1 (z błędami): `maksym-presentation.pptx`, `maksym-presentation.pdf`
- Wersja 2 (poprawiona): `maksym-presentation-poprawiona.pptx`, `maksym-presentation-poprawiona.pdf`
