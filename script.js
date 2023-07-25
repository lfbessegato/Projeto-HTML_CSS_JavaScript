function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  //pegar a tag imagemt
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos, jaqueta e camisa preta, sem barba e Fundo Azul")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e Fundo amarelo") 
  }
}
