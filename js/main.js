/*--------------- navigation menu ----------------- */
(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.toggle("open");
        fadeOutEffect();
    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        bodyScrollingToggle();
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300);
    }

    /*----------- attach an event handler to document  ---------- */
    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains('link-item')){
            if(event.target.hash !== ""){
                event.preventDefault();
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add(".hide");
                document.querySelector(".section.active").classList.remove("active");
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
                if(navMenu.classList.contains("open")){
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow"); 
                    hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hash === item.hash){
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("inner-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                window.location.hash = hash;
            }
        }
    })
})();

// about tab 
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow")
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
    
})();

/* --------------- portfolio filter and popup ----------------- */
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    /* filter portfolio items */
    filterContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", 'outer-shadow');

            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) =>{
                if(target === item.getAttribute("data-category") || target === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    
    })

    /* --------------- hide all section expect active ----------------- */
    
})();

window.addEventListener("load", () =>{
    // preload
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display = "none";
    }, 600)
})
function funq()
{
    var j= document.querySelector(".nav-menu");
    j.style.display="none";
}
function funz()
{
    var j= document.querySelector(".nav-menu")
    j.style.display="block";
}
