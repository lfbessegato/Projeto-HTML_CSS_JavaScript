function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imagemt
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Luciano Bessegato, sério, usando óculos e jaqueta e camisa branca"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Luciano Bessegato sério, usando camisa preta"
    )
  }
}
