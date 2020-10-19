const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Create map
const map = L.map("mapid", options).setView([lat, lng], 15)

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//Create icon
const icon = L.icon({
iconUrl: "./images/map-marker.svg",
iconSize: [58, 68],
iconAnchor: [29, 68]
})

//Create and add marker
L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup)

// Image gallery
function selectImage(event) {
  const button = event.currentTarget    

  // Removendo todas as classes .active
  const buttons = document.querySelectorAll('.images button')
  buttons.forEach((button) => {
      button.classList.remove('active')
  })

  // Selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector('.orphanage-details > img')

  // Atualizar o container de imagem
  imageContainer.src = image.src

  // Adicionar a classe .active para o botão clicado
}
    