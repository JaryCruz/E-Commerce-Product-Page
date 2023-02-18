const mobileMenu = document.querySelector('[data-mobile-menu]')
const btnMobile = document.querySelector('[data-btn-mobile]')
const body = document.querySelector('body')
const btnCart = document.querySelector('[data-btn-cart]')
const cart = document.querySelector('[data-cart]')
const mainImg = document.querySelector('[data-main-img]')
const lightboxGallery = document.querySelector('[data-lightbox-gallery]')
const btnClose = document.querySelector('[data-btn-close]')
const btnNext = document.querySelectorAll('[data-btn-next]')
const btnPrev = document.querySelectorAll('[data-btn-prev]')
const imgSlider = document.querySelectorAll('.img-slider')
const imgMobileSlider = document.querySelectorAll('.img-mobile-slider')
const btnMinus = document.querySelector('[data-btn-minus]')
const btnPlus = document.querySelector('[data-btn-plus]')
const itemCount = document.querySelector('[data-item-count]')
const btnAddCart = document.querySelector('[data-btn-add-cart]')
const cartContent = document.querySelector('[data-cart-content]')
const cartEmpty = document.querySelector('[data-cart-empty')
const shoesCount = document.querySelector('[data-shoes-count]')
const totalPrice = document.querySelector('[data-total]')
const btnTrash = document.querySelector('[data-btn-trash]')
const btnCheckout = document.querySelector('[data-btn-checkout]')
const miniImg = document.querySelectorAll('[data-thumbnail]')
const countNotify = document.querySelector('[data-count-notify]')

const shoesPrice = 125
let current = 0
let totalItems = 0
let total = 0

// Switch the image based on the thumbnail clicked
miniImg.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    let thumbnailValue = thumbnail.dataset.thumbnail
    mainImg.src = `../images/image-product-${thumbnailValue}.jpg`
  })
})

// Open or Close Mobile Menu
btnMobile.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  btnMobile.classList.toggle('active')
  body.classList.toggle('no-overflow')
})

// Toggle Cart
btnCart.addEventListener('click', () => {
  cart.classList.toggle('hidden')
})

// Close The Lightbox Gallery
btnClose.addEventListener('click', () => {
  lightboxGallery.classList.add('hidden')
})

// Open The Lightbox Gallery
mainImg.addEventListener('click', () => {
  lightboxGallery.classList.remove('hidden')
})

btnMinus.addEventListener('click', () => {
  if (itemCount.innerText < 1) return
  totalItems--
  itemCount.innerText = totalItems
  countNotify.innerText = totalItems
})

btnPlus.addEventListener('click', () => {
  totalItems++
  itemCount.innerText = totalItems
  countNotify.innerText = totalItems
})

btnAddCart.addEventListener('click', () => {
  updateCart()
  shoesCount.innerText = totalItems
  total = Number(totalItems * shoesPrice)
  totalPrice.innerText = `$${total}.00`
})

// Reset all values 
btnTrash.addEventListener('click', () => {
  itemCount.innerText = '0'
  totalItems = 0
  updateCart()
})

btnCheckout.addEventListener('click', () => {
  cart.classList.add('hidden')
})

btnPrev.forEach(btn => {
  btn.addEventListener('click', function () {
    if (current === 0) {
      current = imgSlider.length;
    }
    slideLeft()
  })
})

btnNext.forEach(btn => {
  btn.addEventListener('click', function () {
    if (current === imgSlider.length - 1) {
      current =- 1
    }
    slideRight()
  })
})

// Make sure there's at least 1 in the cart
function updateCart() {
  if (itemCount.innerText < 1) {
    cartEmpty.classList.remove('hidden')
    cartContent.classList.add('hidden')
    countNotify.classList.add('hidden')
  } else {
    cartEmpty.classList.add('hidden')
    cartContent.classList.remove('hidden')
    countNotify.classList.remove('hidden')
  }
}

function reset() {
  imgSlider.forEach(img => {
    img.style.display = 'none'
  })
  imgMobileSlider.forEach(img => {
    img.style.display = 'none'
  })
}

function initSlide() {
  reset()
  imgSlider[0].style.display = 'block'
  imgMobileSlider[0].style.display = 'block'
}

function slideLeft() {
  reset()
  imgSlider[current - 1].style.display = 'block'
  imgMobileSlider[current - 1].style.display = 'block'
  current--
}

function slideRight() {
  reset()
  imgSlider[current + 1].style.display = 'block'
  imgMobileSlider[current + 1].style.display = 'block'
  current++
}

initSlide()