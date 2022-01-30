/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.nav__logo ` , {origin: 'left'})
sr.reveal(`.nav__links` , {origin: 'right'})
sr.reveal(`.anywhere__first`, {delay: 500})
sr.reveal(`.anywhere__second` , {origin: 'right'} , {delay: 600})
sr.reveal(`.productive__first `)
sr.reveal(`.productive__second`, {origin: 'right'})
sr.reveal(`.early__first , .cta , .footer__first, .footer__second , .footer__third, .footer__fourth` , {interval: 200} , {delay: 700})
sr.reveal(`.footer__first, .footer__second , .footer__third, .footer__fourth` , {interval: 200} , {delay: 700})