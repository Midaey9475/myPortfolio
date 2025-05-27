// Storing needed component
const firstPage = document.querySelector('.frontNameDiv')
const aboutPage = document.querySelector('.myAbout')
const projectPage = document.querySelector('.allProjects')
const myDashboard = document.querySelector('.sec1')
//Storing the dashboard clicks
const homeClick = document.querySelector('.homePage')
const aboutClick = document.querySelector('.aboutClick')
const projectClick = document.querySelector('.projectsClick')
// Hamburger menu
const hamburger = document.querySelector('.hamburger')
const clPg = document.getElementById('clPg')
const allClose = document.querySelector('.allClose')
// Setting all variation needed
// 1. If all pages is hidden
const hidePages = ()=>{
    firstPage.style.display = 'none'
    aboutPage.style.display = 'none'
    projectPage.style.display = 'none'
}
// 2. If one page is visible
const displayPage = (page)=>{
    hidePages()
    page.style.display = 'flex'
}
//3. Reset dashboard
const resetDashboard = ()=>{
    myDashboard.style.display = 'none'
    clPg.style.display = 'none'
    allClose.style.display = 'none'
    hamburger.style.display = 'block'
}
// 4. toggle each pages
const togglePages = (page)=>{
    displayPage(page)
    if(myDashboard.style.position === 'absolute'){
        myDashboard.style.display = 'none'
        hamburger.style.display = (page === firstPage) ? 'block' : 'none'
        clPg.style.display = (page !== firstPage) ? 'grid' : 'none'
        allClose.style.display = 'none'
    }
}

// Set event listener
homeClick.addEventListener('click' , ()=> togglePages(firstPage))
aboutClick.addEventListener('click' , ()=> togglePages(aboutPage))
projectClick.addEventListener('click' , ()=> togglePages(projectPage))

hamburger.addEventListener('click' , ()=>{
    const showDashboard = (myDashboard.style.display == 'flex')
    myDashboard.style.display = showDashboard ? 'none' : 'flex'
    myDashboard.style.position = 'absolute'
    myDashboard.style.right = '0%'
    myDashboard.style.zIndex = '10'
    allClose.style.display = 'block'
})
clPg.addEventListener('click' , ()=>{
    const showDashboard = (myDashboard.style.display == 'flex')
    myDashboard.style.display = showDashboard ? 'none' : 'flex'
    clPg.style.display = 'none'
    allClose.style.display = 'block'
})
allClose.addEventListener('click' , ()=>{
    const subPages = aboutPage.style.display == 'flex' || projectPage.style.display == 'flex'
    myDashboard.style.display = 'none'
    allClose.style.display = 'none'
    hamburger.style.display = subPages ? 'none' : 'grid'
    clPg.style.display = !subPages ? 'none' : 'block'
})







// const pages = {
//   '#home': document.querySelector('.frontNameDiv'),
//   '#about': document.querySelector('.myAbout'),
//   '#projects': document.querySelector('.allProjects'),
// };

// const navLinks = {
//   home: document.querySelector('.homePage'),
//   about: document.querySelector('.aboutClick'),
//   projects: document.querySelector('.projectsClick'),
// };

// const myDashboard = document.querySelector('.sec1');
// const hamburger = document.querySelector('.hamburger');
// const allClose = document.querySelector('.allClose');
// const clPg = document.getElementById('clPg');

// // Utility Functions
// const hideAllPages = () => {
//   Object.values(pages).forEach((pg) => {
//     pg.classList.remove('active');
//   });
// };

// const showPage = (hash) => {
//   hideAllPages();
//   const page = pages[hash] || pages['#home'];
//   page.classList.add('active');
//   localStorage.setItem('activePage', hash);
  
//   if (myDashboard.style.position === 'absolute') {
//     myDashboard.style.display = 'none';
//     hamburger.style.display = (hash === '#home') ? 'block' : 'none';
//     clPg.style.display = (hash !== '#home') ? 'grid' : 'none';
//     allClose.style.display = 'none';
//   }
// };

// // Hash Change Listener
// window.addEventListener('hashchange', () => {
//   const hash = window.location.hash;
//   showPage(hash);
// });

// // On Load
// window.addEventListener('DOMContentLoaded', () => {
//   const savedHash = localStorage.getItem('activePage') || '#home';
//   window.location.hash = savedHash;
//   showPage(savedHash);
// });

// // Navigation Events
// navLinks.home.addEventListener('click', () => (window.location.hash = '#home'));
// navLinks.about.addEventListener('click', () => (window.location.hash = '#about'));
// navLinks.projects.addEventListener('click', () => (window.location.hash = '#projects'));

// // Hamburger & Dashboard
// hamburger.addEventListener('click', () => {
//   const isVisible = myDashboard.style.display === 'flex';
//   myDashboard.style.display = isVisible ? 'none' : 'flex';
//   allClose.style.display = isVisible ? 'none' : 'block';
//   myDashboard.style.position = 'absolute';
//   myDashboard.style.right = '0%';
//   myDashboard.style.zIndex = '10';
// });

// clPg.addEventListener('click', () => {
//   myDashboard.style.display = 'flex';
//   hamburger.style.display = 'none';
//   clPg.style.display = 'none';
//   allClose.style.display = 'block';
// });

// allClose.addEventListener('click', () => {
//   const currentHash = window.location.hash;
//   const isSubPage = currentHash === '#about' || currentHash === '#projects';
//   myDashboard.style.display = 'none';
//   allClose.style.display = 'none';
//   hamburger.style.display = isSubPage ? 'none' : 'block';
//   clPg.style.display = isSubPage ? 'grid' : 'none';
// });
