// const config = {
//     type: "carousel",
//     perView: 1
//   };
//     new Glide('.glide', config).mount()


const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll(".grid > img")
images.forEach(image => {
    image.addEventListener('click', e => { //posloucha kliky na kazdem obrazku v listu images
        lightbox.classList.add('active') //prida divu(id lightbox) tridu .active
        const pic = document.createElement('img') //vytvori obrazek
        pic.src = image.src //zdroj novyho obrazku stejny jako zdroj obrazku ktery zaznamenal klik
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(pic)  //pozice noveho elementu v kodu (hned za koncem lightboxu)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return // target = pozice kliku; currentTarget = matka tohoto event listeneru aka lightbox
    lightbox.classList.remove('active') // tedy kdyz klikame na obrazek lightbox se nezavre
})