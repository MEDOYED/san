#set document(title: "Maksym Mokriakov - Portfolio", author: "Maksym Mokriakov")
#set page(
  paper: "a4",
  margin: (top: 2.5cm, bottom: 2.5cm, left: 2cm, right: 2cm),
  header: context [
    #if counter(page).get().first() > 1 [
      #set text(size: 9pt, fill: gray)
      #align(right)[Maksym Mokriakov - Portfolio]
      #line(length: 100%, stroke: 0.5pt + gray)
    ]
  ],
  footer: context [
    #if counter(page).get().first() > 1 [
      #set text(size: 9pt)
      #line(length: 100%, stroke: 0.5pt + gray)
      #align(center)[#counter(page).display("1")]
    ]
  ]
)

#set text(font: "New Computer Modern", lang: "pl", size: 11pt)
#set par(justify: true, leading: 0.65em)
#set heading(numbering: none)

// Strona tytułowa
#align(center)[
  #v(3cm)
  #text(size: 42pt, weight: "bold")[Maksym\ Mokriakov]

  #v(1cm)
  #text(size: 18pt)[Student | Programista | Łucznik]

  #v(2cm)
  #figure(
    image("images/hobby-img.png", width: 50%),
    caption: [Autor z łukiem - selfie podczas treningu łuczniczego w lesie]
  )

  #v(1cm)
  #text(size: 14pt)[Portfolio osobiste]

  #v(0.5cm)
  #text(size: 12pt)[Projekt 2 - Projektowanie Uniwersalne]

  #v(0.5cm)
  #text(size: 12pt)[2025]
]

#pagebreak()

// O mnie
= O mnie

Nazywam się *Maksym Mokriakov*, mam 20 lat i mieszkam w Łodzi. Jestem studentem trzeciego roku informatyki na Społecznej Akademii Nauk. Moimi głównymi zainteresowaniami są programowanie i łucznictwo, które pozwalają mi rozwijać zarówno umiejętności techniczne, jak i fizyczne.

#figure(
  image("images/front-end.png", width: 60%),
  caption: [Ilustracja przedstawiająca technologie webowe - monitor z kodem, chmura, ikony React i narzędzia programistyczne]
)

Pasjonuję się technologiami internetowymi i tworzeniem aplikacji webowych. W szczególności interesuje mnie rozwój frontend oraz backend aplikacji, a także projektowanie przyjaznych dla użytkownika interfejsów. Stale poszerzam swoją wiedzę o nowe frameworki i narzędzia programistyczne.

== Podstawowe informacje

- *Imię i nazwisko:* Maksym Mokriakov
- *Wiek:* 20 lat
- *Miasto:* Łódź, Polska
- *Kierunek studiów:* Informatyka
- *Główne zainteresowania:* programowanie, łucznictwo, technologie webowe

Interesuję się tworzeniem nowoczesnych aplikacji internetowych, które łączą atrakcyjny design z funkcjonalnością i wydajnością. W wolnym czasie rozwijam swoje umiejętności poprzez pracę nad osobistymi projektami oraz udział w projektach open-source.

#pagebreak()

= Moja edukacja

Moja droga edukacyjna w dziedzinie informatyki rozpoczęła się w Kolegium Technologicznym Politechniki Lwowskiej, gdzie zdobyłem podstawy inżynierii komputerowej. Obecnie kontynuuję naukę na poziomie akademickim.

== Kolegium

*Kolegium Technologiczne Politechniki Lwowskiej*

Kierunek: *Inżynieria komputerowa*

W czasie nauki w kolegium zdobyłem solidne podstawy z zakresu architektury komputerów, programowania niskopoziomowego oraz podstaw sieci komputerowych. To doświadczenie pozwoliło mi zrozumieć fundamenty, na których opiera się współczesna informatyka.

== Uniwersytet

*Społeczna Akademia Nauk*

Kierunek: *Informatyka*

- *Rok studiów:* 3
- *Rok rozpoczęcia:* 2023
- *Przewidywany rok ukończenia:* 2027

Studia na Społecznej Akademii Nauk pozwalają mi rozwijać umiejętności w zakresie tworzenia aplikacji webowych, baz danych, inżynierii oprogramowania oraz zarządzania projektami IT. Program studiów obejmuje zarówno aspekty teoretyczne, jak i praktyczne zastosowania informatyki.

== Rozwój kompetencji

Oprócz formalnej edukacji, regularnie poszerzam swoją wiedzę poprzez:
- Kursy online z zakresu nowoczesnych technologii webowych
- Udział w projektach open-source
- Samodzielną naukę nowych frameworków i języków programowania
- Śledzenie najnowszych trendów w branży IT

#pagebreak()

= Moje hobby i zainteresowania

Poza programowaniem, aktywnie rozwijam swoje zainteresowania związane ze sportem i aktywnością fizyczną. Uważam, że równowaga między pracą umysłową a fizyczną jest kluczowa dla wszechstronnego rozwoju.

#figure(
  grid(
    columns: 2,
    gutter: 2em,
    image("images/hobby-img.png", width: 100%),
    image("images/silownia.png", width: 100%)
  ),
  caption: [Moje główne hobby: Po lewej - autor celujący z łuku podczas treningu w lesie. Po prawej - trening siłowy z hantlami w siłowni]
)

== Łucznictwo

Łucznictwo to moja główna pasja poza programowaniem. Strzelam z łuku na dystansach 30 i 60 metrów, co wymaga nie tylko precyzji i koncentracji, ale także cierpliwości i systematyczności - cech, które przydają się również w programowaniu.

*Dlaczego łucznictwo?*
- Rozwija koncentrację i cierpliwość
- Uczy systematyczności i dyscypliny
- Pozwala odpocząć od pracy przy komputerze
- Daje satysfakcję z mierzalnego postępu

== Siłownia

Regularne treningi siłowe stanowią ważną część mojej rutyny. Lubię podnosić ciężary, co pomaga mi utrzymać dobrą kondycję fizyczną i równowagę między pracą umysłową a fizyczną.

*Korzyści z treningów:*
- Poprawa kondycji fizycznej i zdrowia
- Zwiększenie energii i produktywności
- Redukcja stresu
- Rozwój dyscypliny i wytrwałości

== Równowaga w życiu

Moje hobby pomaga mi rozwijać się wszechstronnie i znajdować równowagę między różnymi aspektami życia. Zarówno łucznictwo, jak i treningi siłowe uczą mnie wytrwałości, systematyczności i dążenia do celów - wartości, które przenoszę również do mojej pracy programistycznej.

#pagebreak()

= Umiejętności programowania

Posiadam ponad 2 lata doświadczenia w programowaniu, podczas których rozwijałem umiejętności w różnych technologiach i narzędziach. Specjalizuję się w tworzeniu aplikacji webowych, ze szczególnym uwzględnieniem nowoczesnych frameworków JavaScript.

== Języki programowania

*JavaScript / TypeScript* - poziom zaawansowany

JavaScript jest moim głównym językiem programowania. Posługuję się nim zarówno po stronie frontend, jak i backend. TypeScript wykorzystuję w większości projektów komercyjnych ze względu na bezpieczeństwo typów i lepsze wsparcie dla dużych aplikacji.

*Java* - poziom podstawowy

Poznałem podstawy programowania obiektowego w Javie podczas studiów. Rozumiem fundamentalne koncepcje OOP i potrafię tworzyć proste aplikacje.

== Frameworki i biblioteki

=== Frontend
- *React* - mój główny framework do tworzenia interfejsów użytkownika
- *Next.js* - wykorzystuję do tworzenia aplikacji z renderowaniem po stronie serwera
- *Redux, Zustand* - zarządzanie stanem aplikacji
- *Tailwind CSS* - mój ulubiony framework CSS do szybkiego stylowania

=== Backend
- *Node.js* - środowisko uruchomieniowe JavaScript
- *Express* - framework do tworzenia API
- *REST API* - projektowanie i implementacja interfejsów RESTful

== Bazy danych
- PostgreSQL - relacyjna baza danych
- MongoDB - NoSQL baza danych

== Narzędzia deweloperskie

*Kontrola wersji:*
- Git - zaawansowana znajomość
- GitHub - hosting kodu i współpraca

*DevOps:*
- Docker - konteneryzacja aplikacji
- CI/CD - podstawy automatyzacji deploymentu
- Linux - praca w środowisku serwerowym

*Narzędzia projektowe:*
- VS Code - główne środowisko programistyczne
- Figma - współpraca z designerami
- Postman - testowanie API
- Jira / Trello - zarządzanie projektami

== Doświadczenie

Posiadam *ponad 2 lata* aktywnego doświadczenia w programowaniu, podczas których pracowałem nad różnymi projektami - od osobistych inicjatyw, przez projekty open-source, po komercyjne aplikacje webowe.

#pagebreak()

= Moje projekty i osiągnięcia

Przez ostatnie lata aktywnie rozwijałem swoje umiejętności poprzez pracę nad różnymi projektami. Poniżej przedstawiam najważniejsze z nich oraz osiągnięcia, którymi się szczycę.

== Projekt: UniPrint

*Opis projektu:*

UniPrint to kompleksowa platforma internetowa, którą opracowałem od podstaw. Strona wyposażona jest w zaawansowane konstruktory produktów, które pozwalają użytkownikom na personalizację zamówień w czasie rzeczywistym.

*Zakres odpowiedzialności:*
- Projektowanie architektury aplikacji
- Implementacja frontend i backend
- Wdrożenie i uruchomienie produkcyjne
- Bieżące utrzymanie i rozwój platformy

*Technologie użyte:* React, Next.js, Node.js, PostgreSQL, Docker

== Projekt: Prospi.ai

*Opis projektu:*

Prospi.ai to platforma do zarządzania kampaniami emailowymi. Byłem odpowiedzialny za opracowanie zaawansowanych wykresów i wizualizacji danych, które przedstawiają statystyki kampanii emailowych dla użytkowników.

*Mój wkład:*

Stworzyłem interaktywne wykresy i dashboardy analityczne, które umożliwiają użytkownikom lepsze zrozumienie efektywności ich kampanii marketingowych.

== Osiągnięcia

=== Osiągnięcie 1: Sukces UniPrint

Samodzielnie opracowałem, uruchomiłem i nadal utrzymuję platformę UniPrint. Projekt obsługuje realnych użytkowników i generuje przychody. Odpowiadam za całą infrastrukturę techniczną, od kodu po deployment.

=== Osiągnięcie 2: Wpływ na retencję w Prospi.ai

Dzięki stworzonym przeze mnie wykresom analitycznym, platforma Prospi.ai zaobserwowała *wzrost retencji subskrypcji o 8%* (z 63% do 71% po trzech miesiącach od wykupienia subskrypcji). Lepsze zrozumienie danych przez użytkowników przełożyło się na większe zaangażowanie i lojalność.

=== Osiągnięcie 3: Wkład w projekty open-source

Aktywnie uczestniczę w społeczności open-source, dzieląc się swoim kodem i pomagając innym programistom. Przyczyniłem się do rozwoju kilku projektów, zgłaszając poprawki błędów i nowe funkcjonalności.

== Dalsze plany

Planuję dalej rozwijać swoje umiejętności poprzez:
- Naukę nowych technologii (obecnie interesuję się Rust i Go)
- Rozbudowę istniejących projektów o nowe funkcjonalności
- Zwiększenie aktywności w projektach open-source
- Zdobycie doświadczenia w architekturze mikroserwisów

#pagebreak()

= Kontakt

Jestem otwarty na współpracę, nowe projekty oraz możliwości rozwoju zawodowego. Jeśli chcesz się ze mną skontaktować, poniżej znajdziesz wszystkie niezbędne informacje.

== Dane kontaktowe

*Email:* #link("mailto:mmax@gmail.com")[mmax\@gmail.com]

Najszybszy sposób komunikacji. Odpowiadam zazwyczaj w ciągu 24 godzin.

*Telefon:* +48 484 448 844

Dostępny w godzinach 9:00 - 18:00 od poniedziałku do piątku.

*GitHub:* #link("https://github.com/MEDOYED")[github.com/MEDOYED]

Zapraszam do przejrzenia moich projektów i kodu źródłowego.

*LinkedIn:* #link("https://linkedin.com/in/maksym")[linkedin.com/in/maksym]

Mój profil zawodowy, gdzie można znaleźć więcej informacji o moim doświadczeniu.

== O czym możemy rozmawiać?

Chętnie nawiążę kontakt w sprawach dotyczących:
- Ofert pracy lub projektów freelance
- Współpracy przy projektach open-source
- Wymiany doświadczeń programistycznych
- Konsultacji technicznych
- Możliwości stażu lub praktyk

== Znajdź mnie w sieci

Jestem aktywny na platformach społecznościowych związanych z programowaniem:
- GitHub - gdzie publikuję swój kod
- LinkedIn - profil zawodowy
- Stack Overflow - pomagam innym programistom

#v(2cm)

#align(center)[
  #text(size: 16pt, weight: "bold")[Dziękuję za uwagę!]

  #v(1cm)

  #text(size: 11pt)[
    Czekam na wiadomość od Ciebie.
  ]
]
