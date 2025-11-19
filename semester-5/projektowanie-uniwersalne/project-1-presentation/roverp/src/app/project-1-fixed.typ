#import "@preview/touying:0.6.1": *
#import themes.metropolis: *

#import "content.typ": content

#let lang = "pl"

#set text(lang: lang)

#show: metropolis-theme.with(
  aspect-ratio: "16-9",
  footer: none,


  config-info(
    title: content.at(lang).slide_title.title,
    subtitle: content.at(lang).slide_title.subtitle,
    author: content.at(lang).slide_title.author,
    date: datetime.today(),
  ),
)

#title-slide()

= #content.at(lang).outline.title <touying:hidden>
#outline(title: none)

= #content.at(lang).h1

#for slide_content in content.at(lang).slides {
  if "image" in slide_content {
    [== #slide_content.heading]

    slide(
      composer: components.side-by-side,
    )[#slide_content.text][
      #align(center)[
        #slide_content.image
      ]
    ]
  } else {
    [== #slide_content.heading]

    slide_content.text
  }
}
