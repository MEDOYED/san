<div align="center">

| Komunikacja Człowiek-Komputer | laboratorium              |
| ----------------------------- | ------------------------- |
| SAN                           |                           |
| Autor                         | Yaroslav Zubakha          |
| E-mail                        | 121261@student.san.edu.pl |
| Nr albumu                     | 121261                    |
| Data                          | 18.12.2025                |
| Wersja                        | 1.0                       |

<br>

# **Zadanie nr 1**

## Interfejs tekstowy (CLI)

</div>

<br>

> ## Opis zadania

Zaprojektowanie komend dla programu szyfrującego pliki.

Wymagane artefakty:

- Tekst pomocy
- Opis odpowiedzi na błędne wykonanie (min. 3 scenariusze)

<br>

---

## Tekst pomocy

```
NAZWA
    encrypt - program do szyfrowania i odszyfrowywania plików

SKŁADNIA
    encrypt [OPCJE] PLIK_WEJŚCIOWY [PLIK_WYJŚCIOWY]

OPIS
    Szyfruje lub odszyfrowuje pliki przy użyciu wybranego algorytmu
    zabezpieczonego hasłem. Jeśli nie podano nazwy pliku wyjściowego,
    program automatycznie tworzy PLIK_WEJŚCIOWY.enc (szyfrowanie)
    lub PLIK_WEJŚCIOWY.dec (deszyfrowanie).

OPCJE
    -e, --encrypt
        Tryb szyfrowania pliku wejściowego.

    -d, --decrypt
        Tryb deszyfrowania pliku wejściowego.

    -a, --algorithm ALGORYTM
        Wybór algorytmu szyfrowania.
        Dostępne: AES-256, AES-128, DES, 3DES, RSA-2048
        Domyślnie: AES-256

    -o, --output PLIK
        Zapis wyniku do wskazanego PLIKU zamiast domyślnej lokalizacji.

    -f, --force
        Wymusza nadpisanie pliku wyjściowego bez pytania.

    -v, --verbose
        Wyświetla szczegółowy postęp wykonywania operacji.

    -q, --quiet
        Ukrywa wszystkie komunikaty poza błędami.

    -h, --help
        Wyświetla pomoc i kończy działanie programu.

PRZYKŁADY UŻYCIA
    Szyfrowanie z domyślnym algorytmem:
        encrypt -e document.txt

    Deszyfrowanie z wybranym algorytmem:
        encrypt -d -a AES-128 secret.enc

    Szyfrowanie do określonego pliku:
        encrypt -e -o backup.enc data.txt

    Szyfrowanie z informacjami o postępie:
        encrypt -e -v report.pdf

UWAGI
    Hasło nigdy nie jest przekazywane jako parametr wiersza poleceń.
    Program poprosi o bezpieczne wprowadzenie hasła podczas działania.

    Aby przerwać operację w dowolnym momencie, naciśnij Ctrl+C.
```

<br>

---

## Obsługa błędów

### Scenariusz 1: Nieistniejący plik wejściowy

```
$ encrypt -e missing_file.txt

Błąd: Nie znaleziono pliku 'missing_file.txt'.
Sprawdź poprawność ścieżki i spróbuj ponownie.
Aby uzyskać pomoc, użyj 'encrypt --help'.
```

**Co wyjaśnia komunikat**: informuje o braku pliku, podając jego dokładną nazwę.
**Sugerowane działanie**: zweryfikować ścieżkę dostępu lub skorzystać z pomocy.

<br>

### Scenariusz 2: Nieobsługiwany algorytm szyfrowania

```
$ encrypt -e -a BLOWFISH document.txt

Błąd: Nierozpoznany algorytm 'BLOWFISH'.
Obsługiwane algorytmy: AES-256, AES-128, DES, 3DES, RSA-2048
Użyj 'encrypt -h' aby zobaczyć wszystkie opcje.
```

**Co wyjaśnia komunikat**: wskazany algorytm nie jest wspierany przez program.
**Sugerowane działanie**: przedstawia pełną listę dostępnych algorytmów.

<br>

### Scenariusz 3: Jednoczesne użycie sprzecznych opcji

```
$ encrypt -e -d document.txt

Błąd: Nie można jednocześnie używać --encrypt i --decrypt.
Wybierz jeden tryb działania.
```

**Co wyjaśnia komunikat**: wykryto konflikt między wzajemnie wykluczającymi się opcjami.
**Sugerowane działanie**: należy określić tylko jedną operację (szyfrowanie lub deszyfrowanie).

<br>

### Scenariusz 4: Nadpisanie istniejącego pliku

```
$ encrypt -e document.txt output.enc

Ostrzeżenie: Plik 'output.enc' już istnieje.
Czy nadpisać? (t/n): _
```

**Co wyjaśnia komunikat**: operacja może spowodować utratę istniejącego pliku.
**Sugerowane działanie**: użytkownik podejmuje decyzję lub używa flagi `-f` do automatycznego nadpisania.

<br>

### Scenariusz 5: Nieokreślony tryb działania

```
$ encrypt document.txt

Błąd: Nie określono typu operacji.
Użyj -e do szyfrowania lub -d do deszyfrowania.
Przykład: encrypt -e document.txt
```

**Co wyjaśnia komunikat**: brak informacji o zamierzonej operacji.
**Sugerowane działanie**: podaje konkretny przykład poprawnego wywołania.

<br>

---

## Dodatkowe funkcjonalności

**Proces wprowadzania hasła:**

```
$ encrypt -e document.txt
Wprowadź hasło: ••••••••••••
Potwierdź hasło: ••••••••••••
Szyfrowanie document.txt...
[████████████████████] 100%
Zakończono. Plik wyjściowy: document.txt.enc
```

**Anulowanie w trakcie wykonywania:**

```
$ encrypt -e large_file.iso
Wprowadź hasło: ••••••••
Szyfrowanie large_file.iso...
[████████░░░░░░░░░░░░] 42%
Naciśnij Ctrl+C aby przerwać operację.

^C
Operacja przerwana przez użytkownika.
Częściowy plik został usunięty.
```

**Tryb szczegółowy (verbose):**

```
$ encrypt -e -v report.pdf
Algorytm: AES-256
Plik wejściowy: report.pdf (2.4 MB)
Plik wyjściowy: report.pdf.enc
Wprowadź hasło: ••••••••
Generowanie klucza... gotowe
Szyfrowanie... 512 KB
Szyfrowanie... 1.0 MB
Szyfrowanie... 1.5 MB
Szyfrowanie... 2.0 MB
Szyfrowanie... 2.4 MB
Zapis pliku... gotowe
Ukończono w 1.2 sekundy
```
