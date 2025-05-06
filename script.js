// display about page
const aboutPage = document.querySelector('.aboutClick')
const myAbout = document.querySelector('.myAbout')
aboutPage.addEventListener('click' , ()=>{
    myAbout.style.display = 'flex'
    if(sideMenu.style.position == 'absolute'){
        sideMenu.style.display = 'none'
        burgermenu.style.display = 'none'
        closeAbout.style.display = 'grid'
    }
})
const bkHome = document.querySelector('.homePage')
bkHome.addEventListener('click' , ()=>{
    myAbout.style.display = 'none'
    if(sideMenu.style.position == 'absolute'){
        sideMenu.style.display = 'none'
    }
})
const mailMe = document.querySelector('.myMailContact')
mailMe.addEventListener('click' , ()=>{
    location.href = 'mailto:festusakinboye@gmail.com'
})
const myResume = document.querySelector('.myResumeDownload')
myResume.addEventListener('click' , ()=>{
    location.href = 'myRESUME.pdf'
})
// hamburger menu
const burgermenu = document.querySelector('.hamburger')
const closeAbout = document.querySelector('.closeAbout')
const sideMenu = document.querySelector('.sec1')
burgermenu.addEventListener('click' , ()=>{
    sideMenu.style.display = (sideMenu.style.display == 'flex') ? 'none' : 'flex'
    sideMenu.style.position = 'absolute'
    sideMenu.style.right = '0px'
})
closeAbout.addEventListener('click' , ()=>{
    myAbout.style.display = 'none'
    burgermenu.style.display = 'block'
})

// window.addEventListener('load' , ()=>{
//     console.log('myabj')
//     if(myAbout.style.display = 'flex'){myAbout.style.display = 'flex'}
//     else{myAbout.style.display = 'none'}
// })