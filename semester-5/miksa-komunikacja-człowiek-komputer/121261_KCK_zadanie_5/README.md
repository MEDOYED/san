# Laboratorium 5: Interfejs głosowy - Automatyczna centrala telefoniczna

## Opis projektu
Diagramy sekwencji dla systemu IVR (Interactive Voice Response) obsługującego Społeczną Akademię Nauk.

## Pliki projektu

📁 **Pliki źródłowe (PlantUML):** `.puml`  
🖼️ **Wizualizacje (PNG):** `.png` - gotowe do prezentacji!

## Diagramy

### Diagram 1: Połączenie z Dziekanatem (Prosty przypadek)
**Pliki:** 
- Źródło: `diagram1_polaczenie_z_dziekanat.puml`
- Obraz: `diagram1_polaczenie_z_dziekanat.png`

**Opis:** Podstawowy scenariusz połączenia z działem bez wymagania weryfikacji tożsamości.

**Funkcje:**
- Wybór języka (Polski/English)
- Nawigacja przez menu głosowe
- Bezpośrednie połączenie z wybranym działem
- Uprzejme komunikaty
- Zwięzłe instrukcje

---

### Diagram 2: Połączenie z Księgowością (Z weryfikacją)
**Pliki:**
- Źródło: `diagram2_polaczenie_z_ksiegowosc.puml`
- Obraz: `diagram2_polaczenie_z_ksiegowosc.png`

**Opis:** Scenariusz wymagający weryfikacji tożsamości ze względu na wrażliwość danych finansowych.

**Funkcje:**
- Weryfikacja przez numer PESEL
- Potwierdzenie wprowadzonych danych przez użytkownika
- Sprawdzenie w bazie danych
- Połączenie dopiero po pomyślnej weryfikacji
- Komunikaty dostosowane do kontekstu

**Przypadek rozszerzający:**
- Weryfikacja tożsamości wymagana dla działów z danymi wrażliwymi

---

### Diagram 3: Sprawdzenie statusu płatności (Angielski + alternatywna weryfikacja)
**Pliki:**
- Źródło: `diagram3_sprawdzenie_statusu_platnosci.puml`
- Obraz: `diagram3_sprawdzenie_statusu_platnosci.png`

**Opis:** Scenariusz w języku angielskim z weryfikacją przez datę urodzenia i automatyczną odpowiedzią.

**Funkcje:**
- Obsługa w języku angielskim
- Weryfikacja przez datę urodzenia (alternatywa do PESEL)
- Automatyczne udzielenie informacji (bez łączenia z pracownikiem)
- Potwierdzenie zakończenia obsługi
- Możliwość dalszej interakcji

**Przypadki rozszerzające:**
- Alternatywna metoda weryfikacji (data urodzenia)
- Automatyczna obsługa zapytania (bez przekierowania)
- Wielojęzyczność systemu

---

### Diagram 4 (Bonus): Obsługa błędów weryfikacji
**Pliki:**
- Źródło: `diagram_bledy_weryfikacji.puml`
- Obraz: `diagram_bledy_weryfikacji.png`

**Opis:** Diagram pokazujący obsługę sytuacji wyjątkowych i błędów.

**Funkcje:**
- Obsługa niewyraźnej wymowy
- Prośba o powtórzenie
- Maksymalna liczba prób (2-3)
- Alternatywne metody weryfikacji
- Informacja o innych kanałach kontaktu (email, wizyta osobista)
- Zachowanie uprzejmego tonu podczas błędów

---

## Zasady projektowania uwzględnione w diagramach

### 1. Kooperatywność i uprzejmość
- Wszystkie komunikaty systemu są uprzejme ("Dzień dobry", "Proszę", "Dziękuję")
- System oferuje pomoc i alternatywy

### 2. Zorientowanie na cel
- Szybkie przeprowadzenie użytkownika do celu
- Minimalna liczba kroków do wykonania zadania

### 3. Uwzględnienie kontekstu
- System pamięta wybrany język
- System nie prosi ponownie o informacje już podane
- Komunikaty dostosowane do sytuacji (weryfikacja, błąd, sukces)

### 4. Zwięzłość
- Krótkie, jasne komunikaty
- Konkretne opcje wyboru
- Brak zbędnych informacji

### 5. Kolejność (turn-taking)
- Jasne rozdzielenie, kto mówi
- System czeka na odpowiedź użytkownika
- Potwierdzenia wprowadzonych danych

---

## Unikanie typowych błędów

✅ **Diagramy unikają:**
- Niejasności i wieloznaczności (konkretne instrukcje)
- Powtarzania pytań o podane już informacje
- Nadmiernych potwierdzeń (tylko gdy konieczne)
- Braku zwięzłości (komunikaty są krótkie)

---

## Wymagania spełnione dla oceny 5.0

✅ 3 poprawne diagramy sekwencji dla różnych przypadków użycia  
✅ Uwzględnienie weryfikacji tożsamości (PESEL i data urodzenia)  
✅ Obsługa języka polskiego i angielskiego  
✅ Przypadki rozszerzające (weryfikacja dla Księgowości)  
✅ Bonus: Obsługa błędów i sytuacji wyjątkowych  

---

## Jak przeglądać diagramy

### ✅ Gotowe wizualizacje (PNG)
Wszystkie diagramy są już wygenerowane jako pliki `.png` i gotowe do przeglądania!

**Otwórz w systemie:**
```bash
# Linux
xdg-open diagram1_polaczenie_z_dziekanat.png
xdg-open diagram2_polaczenie_z_ksiegowosc.png
xdg-open diagram3_sprawdzenie_statusu_platnosci.png
xdg-open diagram_bledy_weryfikacji.png

# Lub po prostu otwórz folder w menedżerze plików
```

**Otwórz w przeglądarce:**
```bash
firefox *.png
# lub
google-chrome *.png
```

---

## Jak regenerować diagramy (opcjonalnie)

Jeśli zmodyfikujesz pliki `.puml`, możesz regenerować obrazy:

### Opcja 1: Lokalne generowanie (zalecane)
```bash
# Używając PlantUML jar (wymaga Java)
java -jar /tmp/plantuml.jar -tpng *.puml
```

### Opcja 2: Online (PlantUML Server)
1. Otwórz: http://www.plantuml.com/plantuml/uml/
2. Skopiuj zawartość pliku `.puml`
3. Wklej i zobacz diagram

### Opcja 3: VS Code
1. Zainstaluj rozszerzenie "PlantUML"
2. Otwórz plik `.puml`
3. Użyj Alt+D do podglądu

---

## Autor
Wykonane dla: Wojciech Miksa (wmiksa@san.edu.pl)  
Przedmiot: Komunikacja Człowiek-Komputer  
Zadanie: Laboratorium 5 - Interfejs głosowy
