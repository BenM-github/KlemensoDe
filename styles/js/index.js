/*
Main Fadeout:

Background Blend:

Smartphone nav:

Text Resize: 

Search function: 
*/

/////////////////////////////////////////////////////////////////////////
// var language = window.navigator.userLanguage || window.navigator.language;
// alert(language); //works IE/SAFARI/CHROME/FF
// it (italy), en-US (us englisch), 




/////////////////////////////////////////////////////////////////////////
const cookies_details = document.querySelector('#cookies-details')
const cookie_details_trigger = document.querySelector('#cookies-details-trigger')
var is_details_displayed = false

cookie_details_trigger.addEventListener('click', ()=> {
    if (is_details_displayed)
    {
        cookies_details.setAttribute("style", "display: none;")
        is_details_displayed = false
    }
    else
    {
        cookies_details.setAttribute("style", "display: flex;")
        is_details_displayed = true
    }
})

document.querySelector('#cookies-submit-all').addEventListener('click', ()=> {
    cookie_submit("all")
})
document.querySelector('#cookies-submit-selected').addEventListener('click', ()=> {
    cookie_submit("selceted")
})
document.querySelector('#cookies-submit-none').addEventListener('click', ()=> {
    cookie_submit("none")
})

function cookie_submit(mode) {
    const cookies_container = document.querySelector('#cookies')
    cookies_container.setAttribute("style", "pointer-events: none;")
    cookies_container.classList.add("cookies-confirmed")
    
    if (mode == "selected" || mode =="all")
    setCookie("cookie", true, 30)
}

function setCookie(cName, cValue, expirationDate) {
    let date = new Date()
    date.setTime(date.getTime() + (expirationDate * 24 * 60 * 60 * 1000))
    const expires = "expires=" + date.toUTCString()
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/"
}

function getCookie(cName) {
    const name = cName + "="
    const cDecoded = decodeURIComponent(document.cookie)
    const cArr = cDecoded.split("; ")
    let value
    cArr.forEach(val => {
        if (val.indexOf(name) === 00 ) value = val.substring(name.length)
    })
    return value
}

cookie_Message = () => {
    if (!getCookie("cookie"))
    document.querySelector('#cookies').style.display = "block"
}

window.addEventListener('load', cookie_Message())


/////////////////////////////////////////////////////////////////////////
// fadeout content to show background
const main = document.querySelector('main')
const header = document.querySelector('header')
//const nav = document.getElementById('small-screen-nav')
const footer = document.querySelector('footer')

const wrapper = document.querySelector("#wrapper")
const background = document.querySelector("#bg-img")
const background_tmp = document.querySelector("#bg-img-tmp")
const bg_trigger = document.querySelector("#bg-trigger")
const bg_info_box = document.querySelector("#bg-info-box")
const bg_gallery = document.querySelector("#bg-gallery")
let is_content_displayed = true

// toggles wrapper on and off so users can see the background and its info
bg_trigger.addEventListener('click', ()=> {
    if (is_content_displayed)
    {
        // header.setAttribute("style", "transition: all 3000ms ease 0s; opacity: 0")
        // main.setAttribute("style", "transition: all 3000ms ease 0s; opacity: 0")
        // footer.setAttribute("style", "transition: all 3000ms ease 0s; opacity: 0")
        wrapper.setAttribute("style", "transition: all 3000ms ease 0ms; opacity: 0; pointer-events: none;")
        bg_info_box.setAttribute("style", "transition: all 3000ms ease 0ms; opacity: 1")
        
        // changes content display status
        is_content_displayed = false
        bg_trigger.innerHTML = "--> zeige Website"
    }
    else
    {
        // header.setAttribute("style", "transition: all 3000ms ease 0s; opacity: 1")
        // main.setAttribute("style", "transition: all 3000ms ease 0s; opacity: 1")
        // footer.setAttribute("style", "transition: all 3000ms ease 0s; opacity: 1")
        wrapper.setAttribute("style", "transition: all 3000ms ease 0ms; opacity: 1; pointer-events: all;")
        bg_info_box.setAttribute("style", "transition: all 3000ms ease 0ms; opacity: 0")
        
        // changes content display status
        is_content_displayed = true
        bg_trigger.innerHTML = "--> zeige Bild"
    }
})


/////////////////////////////////////////////////////////////////////////
//blend background from one picture to another
const images = ["Klemens_Pusteblume.jpg", "Kuschelkaefer_0.jpg", "Martin_Ameise.jpg"]
const left_btn = document.querySelector("#bg-left-btn")
const right_btn = document.querySelector("#bg-right-btn")
let index = 0
const img_transition_time = 5000
    
// sets start background so the background is not empty for the time before the interval sets in
background.setAttribute("style", "transition: all 3000ms ease 0s; background-image: url(../styles/background/" + images[0]   + ");")
    
function change_bg_img(value) {
    if (value == 1 && index < images.length - 1 )
    {
        index += 1
    }
    else if (value == 1 && index == images.length - 1)
    {
        index = 0
    }
    else if (value == -1 && index > 0)
    {
        index += -1
    }
    else //(value == -1 && index == 0)
    {
        index = images.length - 1
    }

        
    background_tmp.setAttribute("style", "transition: all " + img_transition_time + "ms ease 0s; opacity: 1; background-image: url(../styles/background/" + images[index]   + ");")
    background.style.opacity = 0
    setTimeout(()=> {
        background.setAttribute("style", "transition: all " + img_transition_time + "ms ease 0s; opacity: 0; background-image: url(../styles/background/" + images[index]   + ");")
        background.style.opacity = 1
    }, img_transition_time)
}
    
setInterval(()=> {
    change_bg_img(+1)
}, 10000)
left_btn.addEventListener('click', ()=> {
    change_bg_img(-1)
})
right_btn.addEventListener('click', ()=> {
    change_bg_img(+1)
})
    /*
    */


// smartphone nav trigger       // there has to be a animation for the movement of the navigaiton
/*
const small_screen_nav = document.getElementsByClassName('small-screen-nav')
const small_screen_nav_trigger = document.getElementByClassName('')
var isNavDisplayed = false
small_screen_nav_trigger.addEventListener("click", ()=> {
    if (isNavDisplayed == false) {
        small_screen_nav.style.display = "block"
        isNavDisplayed = true
    } else {
        small_screen_nav.style.display = "none"
        isNavDisplayed = false
    }
})
*/


// text resize
const small = document.querySelector("#text-decrease-btn")
const normal = document.querySelector("#text-normal-btn")
const large = document.querySelector("#text-increase-btn")
const texts = document.querySelectorAll("article")

const num_of_texts = texts.length
let text_size = 1
const min_size = .7
const max_size = 1.5

function change_text_size (text_size)
{
    for (let i = 0; i < num_of_texts; i++)
    {
        texts[i].setAttribute("style", "font-size: " + text_size + "em;")
    }
}

small.addEventListener('click', ()=> {
    if (text_size >= min_size)
    {
        text_size -= 0.1
        change_text_size(text_size)
    }
})
normal.addEventListener('click', ()=> {
    if (text_size != 1)
    {
        text_size = 1
        change_text_size(text_size)
    }
})
large.addEventListener('click', ()=> {
    if (text_size <= max_size)
    {
        text_size += 0.1
        change_text_size(text_size)
    }
})


// search funciton
/*
    code
*/
