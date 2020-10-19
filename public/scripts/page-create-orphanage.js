//Create map
const map = L.map("mapid").setView([-23.0140601,-43.4674772], 15)

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

//Create icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]  
})

let marker

//Create and add marker
map.on('click', (event) => {    
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //Remove icon
    marker && map.removeLayer(marker)

    //Add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// Add a photo field
function addPhotoField(){
    // Obter o container de fotos #images
    const container = document.querySelector('#images')

    // Obter o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Realizar a duplicação da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ''){
        return 
    }

    //Limpar o campo antes de adicionar ao container de imagens
    input.value = ''

    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

function deletePhotoField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        // Limpar o valor do campo        
        span.parentNode.children[0].value = ''
        return
    }

    // Deletar o campo inteiro
    span.parentNode.remove()

}

// Select YES or NO
function toggleSelect(event){
    // Retirar a classe .active dos botões
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active')
    })

    // Colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o input hidden com valor selecionado   
    const input = document.querySelector('[name="open_on_weekends"]')
    
    // Verificar se SIM ou NÃO
    input.value = button.dataset.value

}

function validate(event) {

    // // Validar se lat e lng estão preenchidos (DESAFIO)
    // event.preventDefault()
    // alert('Selecione um ponto no mapa!')
}