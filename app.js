/*
Cookie Managing

Language Select

Search function
*/

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
// var language = window.navigator.userLanguage || window.navigator.language;
// alert(language); //works IE/SAFARI/CHROME/FF
// it (italy), en-US (us englisch), 



/////////////////////////////////////////////////////////////////////////
// search funciton
/*
    code
*/