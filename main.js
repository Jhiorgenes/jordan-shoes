let typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30,
})

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  reset: true,
})

ScrollReveal().reveal('.card', { delay: 200 })
ScrollReveal().reveal('.title', { delay: 200 })
