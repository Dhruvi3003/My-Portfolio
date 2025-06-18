/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// ========== MENU SHOW ==========
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 
// ========== MENU HIDE ==========
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
var swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    contactProject = document.getElementById('contact-project')

const sendEmail = (e) => {
    e.preventDefault()
    // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '' || contactProject.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        // Add and remove error
        contactMessage.classList.add('color-red')
        // Show message
        contactMessage.textContent = 'Write all the input fields 📩'
    }
    else{
        // serviceID - templateId- #form - publicKey
        emailjs.sendForm('service_2uzr1xh','template_9cdwnnm','#contact-form','Tu5Xv2DbOj53ArhjX')
        .then(() =>{
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✅'
            // Remove message after five seconds
            setTimeout(() =>
            {
                contactMessage.textContent = ''
            }, 5000)
            // Clear input fields   

        },(error) => {
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })

        // to clear input fields
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)   

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme',
    iconTheme = 'ri-sun-line'
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
    getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the current theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is higher than 50 viewport height, add the scroll-header class 
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true //Animations repeat
})
scrollReveal.reveal(`.home__data, .projects__container, .footer__container`)
scrollReveal.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
scrollReveal.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`,{origin: 'left'})
scrollReveal.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`,{origin: 'right'})
scrollReveal.reveal(`.qualification__content, .services__card`,{interval: 100})
