/*--=======Show SideBar========*/
const navMenu = document.getElementById('sidebar'),
navToggle = document.getElementById('nav-toggle'),
navClose =  document.getElementById('nav-close')


/*--======Sidebar Show====*/
/*Validation if constant exist */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}


/*--======Sidebar Hide======*/

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}




/*======Skills Tabs=====*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')


      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              const target = document.querySelector(tab.dataset.target)

              tabContent.forEach(tabContents => {
                  tabContents.classList.remove('skills__active')
              })

              target.classList.add('skills__active')

              
              tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')

          })
      })



/*========Mixitup filter portoflio=======*/

  
/*--======Input Animation======*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent =  this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})


