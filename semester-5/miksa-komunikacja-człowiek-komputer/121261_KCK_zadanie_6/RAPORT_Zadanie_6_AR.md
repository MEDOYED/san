# Zadanie 6: Rozszerzona Rzeczywistość (AR)
**Student:** Maksym
**Przedmiot:** Komunikacja Człowiek-Komputer
**Prowadzący:** Dr Wojciech Miksa

---

## Opis 5 Funkcji Rozszerzonej Rzeczywistości dla Systemu Uniwersyteckiego

### Funkcja 1: 🧭 Nawigacja po kampusie uniwersyteckim

**Opis funkcjonalności:**
System AR wyświetla na ekranie urządzenia mobilnego lub okularach AR dynamiczne wskazówki nawigacyjne w czasie rzeczywistym.

**Wyświetlane elementy:**
- Strzałki kierunkowe 3D nakładane na obraz rzeczywisty
- Dystans do celu wyświetlany w metrach
- Szacowany czas dojścia
- Nazwa budynku i numer sali docelowej
- Podświetlenie właściwych drzwi/wejść przy zbliżaniu się

**Zastosowanie praktyczne:**
- Pomoc studentom pierwszego roku w orientacji na terenie uczelni
- Wsparcie dla gości i odwiedzających
- Szybkie znalezienie sal egzaminacyjnych w stresujących sytuacjach
- Nawigacja w dużych kampusach z wieloma budynkami

**Korzyści:**
- Zmniejszenie spóźnień na zajęcia
- Eliminacja zagubienia się na uczelni
- Oszczędność czasu
- Redukcja stresu związanego z poruszaniem się po nieznanym terenie

---

### Funkcja 2: 👤 Rozpoznawanie osób i informacje kontaktowe

**Opis funkcjonalności:**
System wykorzystuje technologię rozpoznawania twarzy do identyfikacji osób na terenie uczelni i wyświetlania informacji kontaktowych.

**Wyświetlane elementy:**
- Zielona ramka wokół rozpoznanej osoby
- Imię i nazwisko
- Stanowisko/funkcja (student, wykładowca, pracownik administracji)
- Przedmioty prowadzone (dla kadry dydaktycznej)
- Numer pokoju
- Godziny konsultacji
- Adres email
- Status dostępności (na podstawie kalendarza)

**Zastosowanie praktyczne:**
- Szybka identyfikacja wykładowców
- Znalezienie właściwej osoby do kontaktu
- Networking podczas konferencji uniwersyteckich
- Pomoc w zapamiętywaniu imion kolegów z roku

**Korzyści:**
- Ułatwienie komunikacji w środowisku akademickim
- Zmniejszenie barier społecznych
- Szybszy dostęp do informacji kontaktowych
- Wsparcie dla osób z problemami z pamięcią twarzy

**Uwagi dotyczące prywatności:**
System działa tylko dla osób, które wyraziły zgodę w systemie uczelnianym (opt-in).

---

### Funkcja 3: 🏢 Informacje o pomieszczeniach i zasobach

**Opis funkcjonalności:**
Po skierowaniu urządzenia na drzwi lub pomieszczenie, system automatycznie rozpoznaje lokalizację i wyświetla szczegółowe informacje o sali.

**Wyświetlane elementy:**
- Numer sali i jej przeznaczenie
- Aktualny status (wolna/zajęta)
- Bieżący plan zajęć (co się teraz odbywa)
- Następne wolne terminy
- Lista dostępnego wyposażenia (projektor, komputery, tablica interaktywna)
- Liczba miejsc (całkowita i aktualnie wolnych)
- Przycisk do szybkiej rezerwacji online

**Zastosowanie praktyczne:**
- Znajdowanie wolnych sal do nauki grupowej
- Sprawdzanie dostępności przed rezerwacją
- Weryfikacja lokalizacji zajęć
- Optymalizacja wykorzystania przestrzeni

**Korzyści:**
- Efektywne zarządzanie przestrzenią uczelni
- Redukcja konfliktów rezerwacyjnych
- Łatwy dostęp do informacji o wyposażeniu
- Możliwość natychmiastowej rezerwacji

---

### Funkcja 4: 📅 Wyświetlanie planu zajęć i przypomnień

**Opis funkcjonalności:**
System wyświetla spersonalizowany plan zajęć studenta jako nakładkę AR, stale widoczną w interfejsie.

**Wyświetlane elementy:**
- Harmonogram dnia z godzinami zajęć
- Nazwy przedmiotów i numery sal
- Przypomnienia o zbliżających się zajęciach (15 minut przed)
- Alerty o zmianach w planie (odwołane/przeniesione zajęcia)
- Deadline'y projektów i zadań domowych
- Licznik dni do egzaminów
- Statystyki obecności
- Nadchodzące terminy konsultacji

**Zastosowanie praktyczne:**
- Organizacja czasu studenta
- Unikanie spóźnień
- Przypominanie o ważnych terminach
- Planowanie czasu na naukę

**Korzyści:**
- Lepsza organizacja czasu
- Zmniejszenie liczby zapomnianych zajęć
- Świadomość nadchodzących deadline'ów
- Integracja całego życia akademickiego w jednym miejscu

**Personalizacja:**
System uczy się nawyków użytkownika i dostosowuje czas przypomnień.

---

### Funkcja 5: 📖 Dodatkowe informacje edukacyjne

**Opis funkcjonalności:**
System rozpoznaje obiekty, tablice, plakaty i inne elementy otoczenia, oferując rozszerzone treści multimedialne i materiały edukacyjne.

**Wyświetlane elementy:**
- Interaktywne modele 3D
- Filmy instruktażowe i animacje
- Automatyczne tłumaczenie tekstów
- Rozszerzone opisy i wyjaśnienia
- Linki do dodatkowych materiałów dydaktycznych
- Notatki innych studentów (collaborative learning)
- Automatyczne skanowanie i otwieranie QR kodów
- Historia budynków i obiektów na kampusie

**Zastosowanie praktyczne:**
- Wzbogacenie procesu nauczania
- Dostęp do materiałów bez szukania
- Wizualizacja skomplikowanych koncepcji
- Nauka kolaboratywna

**Przykłady użycia:**
- Skierowanie na diagram na tablicy → wyświetlenie animowanej wersji 3D
- Skierowanie na budynek → historia i ciekawostki
- Skierowanie na plakat naukowy → pełny artykuł i źródła
- Skierowanie na książkę → recenzje i dostępność w bibliotece

**Korzyści:**
- Głębsze zrozumienie materiału
- Natychmiastowy dostęp do wiedzy
- Wspieranie różnych stylów uczenia się
- Budowanie społeczności uczących się

---

## Wizualizacja Interfejsu AR

Poniżej przedstawiono wizualizację wszystkich pięciu funkcji działających jednocześnie w środowisku kampusu uniwersyteckiego:

**Obraz: AR_interface_visualization.png**

### Opis elementów wizualizacji:

1. **Górny pasek (Status Bar):**
   - Nazwa systemu: "AR System v1.0 | Uczelnia SAN"
   - Status GPS i poziom baterii

2. **Centrum - Nawigacja (żółta strzałka):**
   - Strzałka kierunkowa wskazująca trasę
   - Informacja: "→ Budynek A, Sala 315"
   - Dystans: "45m" z czarnym tłem dla czytelności

3. **Prawy górny róg - Plan dnia (fioletowa ramka):**
   - Harmonogram zajęć
   - Podświetlone ostrzeżenie o zbliżających się zajęciach
   - Przypomnienie o deadline projektu KCK

4. **Lewa strona - Informacje o sali (niebieska ramka):**
   - Sala: A-101, Laboratorium Komputerowe
   - Status: Wolna teraz, zajęta o 15:00
   - Liczba miejsc: 30

5. **Prawa strona - Rozpoznawanie osoby (zielona ramka):**
   - Wykryta osoba: Dr Jan Kowalski
   - Informacje: Wykładowca, przedmiot, pokój
   - Godziny konsultacji
   - Status dostępności

6. **Lewy dolny róg - Dodatkowe materiały (cyjanowa ramka):**
   - Lista dostępnych materiałów edukacyjnych
   - Model 3D, wirtualny spacer, dokumenty
   - Opcja interakcji

7. **Centrum - Skanowanie (cyjanowe kółka):**
   - Wizualizacja aktywnego skanowania obiektów
   - Pulsujące okręgi wskazujące punkt zainteresowania

8. **Dolny pasek - Legenda:**
   - Podsumowanie wszystkich aktywnych funkcji AR
   - Ikony dla szybkiej identyfikacji funkcji

---

## Technologie i implementacja

### Wymagane technologie:
- **ARCore** (Android) / **ARKit** (iOS) - platforma AR
- **Computer Vision** - rozpoznawanie twarzy i obiektów
- **Indoor GPS** / **Beacon Technology** - lokalizacja wewnątrz budynków
- **Cloud Database** - integracja z systemami uczelnianymi
- **Machine Learning** - personalizacja i predykcja
- **Real-time rendering** - płynne nakładanie grafiki

### Sprzęt:
- Smartfon z kamerą i GPS
- Okulary AR (opcjonalnie: Microsoft HoloLens, Magic Leap)
- Serwery uczelniane z API

### Bezpieczeństwo i prywatność:
- Szyfrowanie danych osobowych
- System opt-in dla rozpoznawania twarzy
- Zgodność z RODO
- Lokalne przetwarzanie wrażliwych danych

---

## Podsumowanie

Zaprezentowany system AR dla środowiska uniwersyteckiego integruje pięć kluczowych funkcji, które znacząco usprawniają życie akademickie:

1. **Nawigacja** - eliminuje problem zagubienia się
2. **Rozpoznawanie osób** - ułatwia komunikację
3. **Informacje o salach** - optymalizuje wykorzystanie przestrzeni
4. **Plan zajęć** - organizuje czas studenta
5. **Materiały edukacyjne** - wzbogaca proces nauczania

System został zaprojektowany z myślą o intuicyjności, minimalnym wysiłku poznawczym użytkownika i maksymalnej użyteczności w codziennym życiu akademickim.

**Wizualizacja przedstawia wszystkie funkcje działające równocześnie, demonstrując, jak różne warstwy informacji mogą koegzystować bez przytłaczania użytkownika.**

---

**Data:** 1 lutego 2026
**Narzędzia użyte do wizualizacji:** Python, PIL/Pillow
