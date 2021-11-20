

const mobileNav = document.querySelector('.mobile-nav')
const navImage = document.querySelector('.nav-image')
const navigation = document.querySelector('.navigation ul')
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



window.addEventListener("load",()=>{
    preloader.classList.add("hidden")
})



mobileNav.addEventListener('click',()=>{
    stickyList.classList.toggle('show')
    let img = mobileNav.src;
    if (img.indexOf('menu-outline')!=-1) {
        navImage.src  = `images/close-outline.svg`
    }
    else {
                navImage.src  = `images/menu-outline.svg`
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


//Navbar change and become sticky after scrolling to section2
// window.addEventListener('scroll',()=>{
//     const sectionHeight = section2.clientHeight
//     if(pageYOffset>section2.offsetTop){
//         navigation.classList.add('navigation2')
//     }
//     else{

//         navigation.classList.remove('navigation2')
//     }
    
// })

let x=0
right.addEventListener("click",()=>{
    if(x > "-300"){

        x = x-100
        // alert("Hello World")
        sliders.style.right= x + "%"

    }
})

left.addEventListener("click",()=>{
    if(x < 0){

        x = x+100
        // alert("Hello World")
        sliders.style.left= x + "%"

    }
})


//Slider
let images=[];
let i = 0;
// const slider0 = document.querySelector('.slider0')
// const slider2 = document.querySelector('.slider2')

images[0] = 'images/Coffee3.jpg'
images[1] = 'images/Coffee4.jpg'
images[2] = 'images/Coffee5.jpg'
images[3] = 'images/Coffee6.jpg'



const allSliders = document.querySelectorAll('.slider')


const changeImageR = function(){
    // slider.style.transition = "0.9s"
    slider.src=images[i]
    // slider.src=images[i+1]
    // slider2.src=images[i+2]
    if(i<images.length-1){
        i++;
    }
    else{
        i=0
    }

   setTimeout("changeImageR()",3000)
}



// window.onload = changeImageR;

