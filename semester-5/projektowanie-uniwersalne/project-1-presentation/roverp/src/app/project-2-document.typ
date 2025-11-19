#set page(
  paper: "a4",
  margin: (x: 2.5cm, y: 2.5cm),
  numbering: "1",
  number-align: center,
)

#set text(
  font: "Arial",
  size: 12pt,
  lang: "pl",
)

#set heading(numbering: "1.")

#set par(
  justify: true,
  leading: 0.65em,
)

// Титульна сторінка
#align(center)[
  #v(3cm)

  #text(size: 24pt, weight: "bold")[
    O mnie
  ]

  #v(1cm)

  #text(size: 16pt)[
    Opis osobisty
  ]

  #v(1cm)

  #text(size: 14pt)[
    Yaroslav Zubakha
  ]

  #v(1cm)

  #text(size: 12pt)[
    Projekt 2 \
    Projektowanie Uniwersalne
  ]

  #v(1cm)

  #datetime.today().display()
]

#pagebreak()

// Spis treści
#outline(
  title: "Spis treści",
  indent: auto,
)

#pagebreak()

= Wprowadzenie

Niniejszy dokument przedstawia informacje o mojej osobie, moich zainteresowaniach,
celach oraz obecnej sytuacji życiowej. Jest to rozwinięcie prezentacji utworzonej
wcześniej, zawierające szczegółowe opisy poszczególnych aspektów mojego życia.

#pagebreak()

= Co właściwie robię

Obecnie zajmuję się budowaniem stron internetowych. Moją specjalnością są
nowoczesne technologie webowe, w szczególności React, TypeScript oraz Node.js.
Te narzędzia pozwalają mi tworzyć dynamiczne i responsywne aplikacje internetowe.

Wspólnie z kolegą założyliśmy agencję webową. To był naturalny krok w rozwoju
mojej kariery – chciałem nie tylko pracować jako programista, ale także
zrozumieć aspekty biznesowe tworzenia oprogramowania.

#figure(
  image("assets/htmx-seeklogo.png", width: 60%, alt: "Logo HTMX - nowoczesnego narzędzia do tworzenia dynamicznych aplikacji webowych bez użycia JavaScript"),
  caption: [Technologie webowe - HTMX],
) <fig-htmx>

Obecnie jesteśmy w trakcie procesu czynienia naszej agencji opłacalną. To
trudne wyzwanie – musimy nie tylko dostarczać jakościowe usługi, ale także
znaleźć klientów, zarządzać projektami i budować reputację na rynku.

Webdev to dziedzina, która wymaga ciągłego uczenia się. Technologie zmieniają
się szybko, pojawiają się nowe frameworki i narzędzia. Trzeba być na bieżąco,
aby dostarczać nowoczesne rozwiązania.

#pagebreak()

= Co chcę robić

Mimo że obecnie zajmuję się webdevem, pociąga mnie programowanie niższego poziomu.
Interesują mnie języki takie jak C i Go, oraz praca na poziomie systemowym.

Fascynuje mnie możliwość zmuszania komputerów do robienia dokładnie tego, czego
chcę. Nie tego, co jakaś korporacja uznała, że powinienem móc zrobić, ale
dokładnie tego, co zamierzam.

#figure(
  image("assets/terminal.png", width: 80%, alt: "Zrzut ekranu okna terminala z wierszem poleceń, przedstawiającego typowe środowisko pracy programisty systemowego"),
  caption: [Terminal - środowisko pracy programisty systemowego],
) <fig-terminal>

W programowaniu systemowym cenimy sobie kontrolę. Możliwość optymalizacji
każdego bajtu pamięci, każdej instrukcji procesora. To zupełnie inny sposób
myślenia niż w webdevie, gdzie często korzystamy z gotowych abstrakcji.

Chciałbym w przyszłości pracować nad projektami, które wymagają głębokiego
zrozumienia działania komputera. Może to być tworzenie systemów operacyjnych,
kompilatorów, czy niskopoziomowych narzędzi deweloperskich.

#pagebreak()

= Rzeczywistość

Niestety, większość mojego czasu poświęcam na webdev i uczelnianą papierkową
robotę. Zadania takie jak to – mają niewielką wartość praktyczną, ale zabierają
cenny czas.

#figure(
  image("assets/teams-logo.png", width: 40%, alt: "Logo Microsoft Teams - fioletowa ikona z literą T, symbolizująca platformę używaną do komunikacji uczelnianej"),
  caption: [Microsoft Teams - symbol uczelnianej biurokracji],
) <fig-teams>

Problem polega na tym, że jest za mało czasu na to, co rzeczywiście ma znaczenie.
Chciałbym się rozwijać w kierunku systemowym, ale codzienne obowiązki – projekty
klientów, zadania na uczelnię – pochłaniają całą energię.

To frustrujące, gdy wiesz, czym chcesz się zajmować, ale realia zmuszają Cię
do robienia czegoś innego. Jednak rozumiem, że to część procesu. Trzeba
przejść przez te etapy, aby osiągnąć to, czego się chce.

#pagebreak()

= Trening i zdrowie

Byłem bardzo zapalony do treningu siłowego w ubiegłym roku. Lubiłem stawać
się silniejszym i poprawiać swoje ciało. Trening dawał mi nie tylko lepszą
kondycję fizyczną, ale także mentalną siłę i dyscyplinę.

Niestety, nie byłem w stanie kontynuować tego tak bardzo, jak chciałem.
Głównym powodem były ciągłe problemy zdrowotne. Gdy ciągle jesteś chory,
trudno utrzymać regularny harmonogram treningowy.

Zdrowie to coś, co często bierzemy za pewnik, dopóki go nie stracimy.
Moje doświadczenia z chorobami nauczyły mnie, jak ważne jest dbanie o siebie
i nie ignorowanie sygnałów ciała.

#pagebreak()

= Teraz

Obecnie żongluję trzema rzeczami jednocześnie:

*Projekty internetowe* – praca nad zamówieniami klientów, rozwój naszej agencji,
utrzymanie istniejących projektów.

*Wymogi uczelni* – zadania, projekty, egzaminy. Wszystko to wymaga czasu i uwagi,
nawet jeśli nie zawsze ma praktyczną wartość.

*Problemy zdrowotne* – ciągłe zmaganie się z chorobami, wizyty u lekarzy,
próby powrotu do formy.

To trudne równoważenie. Każdy z tych obszarów wymaga uwagi, a doba ma tylko
24 godziny. Czasami czuję się przytłoczony ilością rzeczy do zrobienia.

Jednak uczę się zarządzania czasem i priorytetyzacji. Nie wszystko da się
zrobić, więc trzeba skupić się na tym, co najważniejsze.

#pagebreak()

= Co mną kieruje

#figure(
  image("assets/money.png", width: 50%, alt: "Wizualna reprezentacja pieniędzy lub symbolu finansowego, ilustrująca motywację do osiągnięcia niezależności ekonomicznej"),
  caption: [Motywacja finansowa - niezależność ekonomiczna],
) <fig-money>

Główną rzeczą, która mną kieruje w tej chwili, jest potrzeba zarabiania
pieniędzy dla siebie. To nie chodzi tylko o materialny dobrobyt – to o
niezależność i swobodę.

Chcę być w stanie podejmować decyzje o swoim życiu bez ograniczeń finansowych.
Chcę móc wybrać projekty, nad którymi pracuję, nie tylko te, które przynoszą
największy zysk.

Niezależność finansowa to także bezpieczeństwo. Możliwość stworzenia poduszki
finansowej, która pozwoli mi na eksperymenty i rozwijanie się w kierunkach,
które mnie interesują, nawet jeśli nie są natychmiast opłacalne.

#pagebreak()

= Podsumowanie

Jestem w punkcie życia, gdzie mam jasną wizję tego, czym chcę się zajmować,
ale droga do tego celu wymaga przejścia przez różne etapy. Webdev, studia,
problemy zdrowotne – wszystko to tymczasowe przeszkody na drodze do
osiągnięcia moich celów.

Najważniejsze to nie tracić z oczu tego, co chcę osiągnąć, i systematycznie
do tego dążyć. Każdy dzień to krok w odpowiednim kierunku, nawet jeśli
czasami jest to bardzo mały krok.
