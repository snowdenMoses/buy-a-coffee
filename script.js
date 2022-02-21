

const mobileNav = document.querySelector('.mobile-nav')
const navImage = document.querySelector('.nav-image')
const navigation = document.querySelector('.navigation')
const navigation2 = document.querySelector('.navigation2')
const stickyList = document.querySelector('.nav-list')
const navList = document.querySelectorAll('#list')
const home = document.querySelector('.home')
const howItWorks = document.querySelector('.how-it-works')
const testimonials = document.querySelector('.testimonials')
const section4 = document.querySelector('.section4')
const section5 = document.querySelector('.section5')
const landingPageImage = document.querySelector('.landingPageImage')
const section2 = document.querySelector('.section2')
const section7 = document.querySelector('.section7')
const signupNav = document.querySelector('#signup')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const preloader = document.querySelector(".gif")
const sliders = document.querySelector('sliders')
const slider = document.querySelector('slider')
const sliderId = document.getElementById('sliderId')
// const navList = document.getElementById('list')



// // window.addEventListener("load",function(){
//     preloader.classList.add("hidden")
// })





mobileNav.addEventListener('click',()=>{
    stickyList.classList.toggle('show')
    let img = mobileNav.src;
    if (img.indexOf('menu-outline')!=-1) {
        navImage.src  = `images/close-outline.svg`

        stickyList.classList.toggle('nav-list_visible')
        navigation.classList.toggle('navigation_newStyle')
        

    }
    else {
                navImage.src  = `images/menu-outline.svg`
                stickyList.classList.toggle('nav-list_visible')
                navigation.classList.toggle('navigation_newStyle')
    }


})


howItWorks.addEventListener('click',()=>{
    section4.scrollIntoView({behavior:"smooth"})

})



testimonials.addEventListener('click',()=>{
    section5.scrollIntoView({behavior:"smooth"})

})


signupNav.addEventListener('click',()=>{
    section7.scrollIntoView({behavior:"smooth"})

})

home.addEventListener('click',()=>{
    landingPageImage.scrollIntoView({behavior:"smooth"})

})



// window.onload = changeImageR;

