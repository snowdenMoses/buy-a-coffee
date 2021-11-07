

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
// const navList = document.getElementById('list')


mobileNav.addEventListener('click',()=>{
    

    let img = mobileNav.src;
    if (img.indexOf('menu-outline')!=-1) {
       

        navImage.src  = `images/close-outline.svg`
        navigation.style.display="none"
        navigation2.style.display="block"
        //stickyList.classList.toggle('sticky-nav')
         for(var i = 0; i<navList.length; i++){
           
       
            navList[i].style.display = "block"
           // stickyList.style.float = "left"
            
            

           // stickyList.classList.add('sticky-nav')

            

        }

                                            //Using forEach Loop
                                            //navList.forEach(element => {
                                            //element.style.display = "block"
                                            //stickyList.classList.add('sticky-nav')
                                            //});

        //navigation.classList.toggle('hidden')

    }
     else {
        navImage.src  = `images/menu-outline.svg`
        navigation2.style.display="none"
        // navigation.style.display="block"
        // navList.id.add('block')

       

        // for(const list of navList){
        //     alert(list.innerHTML)

        // }
        //navList.style.display = "block"


   }
//    navigation.style.display="inline-block"

})


// if(window.innerWidth>530){
//     navigation.style.display="inline-block"
//     navigation2.style.display="none"
//     alert("greater")
// }

 


// document.addEventListener('DOMContentLoaded',init)

// function init(){
//     let query = window.matchMedia("(max-width:600px)");

//     if(query.matches){
//         navigation.style.backgroundColor="red"
//     }

//     else{
//         navigation.style.backgroundColor="green"
//     }
// }


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


//Slider
let images=[];
let i = 0;
const slider0 = document.querySelector('.slider0')
const slider = document.querySelector('.slider')
const slider2 = document.querySelector('.slider2')

images[0] = 'images/Coffee3.jpg'
images[1] = 'images/Coffee4.jpg'
images[2] = 'images/Coffee5.jpg'
images[3] = 'images/Coffee6.jpg'



const allSliders = document.querySelectorAll('.slider')


const changeImageR = function(){
    // slider.style.transition = "0.9s"
    slider0.src=images[i]
    slider.src=images[i+1]
    slider2.src=images[i+2]
    if(i<images.length-1){
        i++;
    }
    else{
        i=0
    }

   setTimeout("changeImageR()",3000)
}





// const changeImageL = function(){
//     slider.src=images[i]
//     if(i<0){
//         i = images.length;
//     }
//     else{
//         i=0
//     }
// }


window.onload = changeImageR;

// right.addEventListener('click',changeImageR)
// left.addEventListener('click',changeImageL)



