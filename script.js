// Fetching all needed variable
const myHome = document.querySelector('.homePage')
const aboutClick = document.querySelector('.aboutClick')
const projectsClick = document.querySelector('.projectsClick')
// Getting the pages
const firstPage = document.querySelector('.frontNameDiv')
const aboutPage = document.querySelector('.myAbout')
const myProjects = document.querySelector('.allProjects')
//Getting my dashboard menu
const myDashboard = document.querySelector('.sec1')
//Getting the Hamburger menus
const hamburger = document.querySelector('.hamburger')
const closePage = document.querySelectorAll('.closeAbout')

// Adding the event listeners to each pages
myHome.addEventListener('click',()=>{
    firstPage.style.display = 'flex'
    aboutPage.style.display = 'none'
    myProjects.style.display = 'none'
})
aboutClick.addEventListener('click',()=>{
    aboutPage.style.display = 'flex'
    firstPage.style.display = 'none'
    myProjects.style.display = 'none'
    if(myDashboard.style.position == 'absolute'){
        myDashboard.style.display = 'none'
        hamburger.style.display = 'none'
        const clAbt = document.getElementById('clAbt')
        clAbt.style.display = 'grid'
    }
})
projectsClick.addEventListener('click', ()=>{
    myProjects.style.display = 'flex'
    firstPage.style.display = 'none'
    aboutPage.style.display = 'none'
    if(myDashboard.style.position == 'absolute'){
        myDashboard.style.display = 'none'
        hamburger.style.display = 'none'
        const clPr = document.getElementById('clPr')
        clPr.style.display = 'grid'
    }
})
// The Hamburger Menu
hamburger.addEventListener('click', ()=>{
    myDashboard.style.display = (myDashboard.style.display == 'flex') ? 'none' : 'flex'
    myDashboard.style.position = 'absolute'
    myDashboard.style.right = '0%'

})
// Page close menu
closePage.forEach((menu)=>{
    menu.addEventListener('click' , ()=>{
        firstPage.style.display = 'flex'
        myProjects.style.display = 'none'
        aboutPage.style.display = 'none'
        hamburger.style.display = 'block'
    })
})
