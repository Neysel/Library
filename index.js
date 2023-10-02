

// Burger handler

const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav')
const menuCloseItem = document.querySelector('.header_nav-close')
const menuLink = document.querySelector('.header__list')

burgerItem.addEventListener('click', () => {
  menu.classList.add('header__nav_active');
  register_menu.classList.remove('menu_display_block');
  log_out_menu.classList.remove('menu_display_block');
});

menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
});
menuLink.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
});

// HEADER DROP MENU

function register_drop_menu() {
register_menu.classList.toggle("menu_display_block")
menu.classList.remove('header__nav_active');
}

authorization.onclick =  () => {
register_drop_menu()
// alert()
}

sign_up.onclick = () => {
register()
}

authorized.onclick = () => {
log_out_menu.classList.toggle("menu_display_block")
menu.classList.remove('header__nav_active');
}

// close drop menu
const menuRoot = document.querySelector('.register_menu');
document.addEventListener('mousedown', (e) => {
 if (!menuRoot.contains(e.target) && !authorization.contains(e.target) && !authorized.contains(e.target) && !log_out_menu.contains(e.target)) {
  register_menu.classList.remove('menu_display_block')
  log_out_menu.classList.remove('menu_display_block')
 }
})

// close all menu
document.addEventListener('mousedown', (e) => {
if (!register_menu_open.contains(e.target) && !login_menu_open.contains(e.target) && !modal_profile.contains(e.target) && !buy_a_library_card.contains(e.target)) {
 register_menu_open.style = "display:none";
 grey_window.style = "display:none";
 login_menu_open.style = "display:none";
 modal_profile.style = "display:none";
 buy_a_library_card.style = "display:none";
 document.querySelector('body').style = "overflow: auto";
}
})

// REGISTRATION MENU

let register_button = document.querySelectorAll('.Register_text')

for (let key of register_button) {
key.onclick = () => {
  register_menu.classList.remove('menu_display_block')
  register_menu_open.style = "display:block";
  grey_window.style = "display:block";
  login_menu_open.style = "display:none";
  document.querySelector('body').style = "overflow: hidden"
}
}

let close_btn = document.querySelectorAll('.close_btn') 
for ( let key of close_btn) {
key.onclick = () => {
  register_menu_open.style = "display:none";
  grey_window.style = "display:none";
  login_menu_open.style = "display:none";
  modal_profile.style =  "display:none"
  buy_a_library_card.style = "display:none"
  document.querySelector('body').style = "overflow: auto";
}
}



document.querySelector('.get_card button.sign_up').onclick = () => {
register_menu.classList.remove('menu_display_block')
register_menu_open.style = "display:block";
grey_window.style = "display:block";
}




// LOG IN MENU 
let log_in_button = document.querySelectorAll('.Log_in')

for (let key of log_in_button) {
key.onclick = () => {
  register_menu.classList.remove('menu_display_block')
  login_menu_open.style = "display:block";
  grey_window.style = "display:block";
  register_menu_open.style = "display:none";
  document.querySelector('body').style = "overflow: hidden"
}
}




// lOCAL STORAGE REGISTER

var inputFirst_name = document.querySelector('input[name="First_name"]');
var inputLast_name = document.querySelector('input[name="Last_name"]');
var inputEmail = document.querySelector('input[name="E-mail"]');
var inputPassword = document.querySelector('input[name="Password"]');

var obj = {
first_name: 'f',
last_name: 'l',
Email:"mail@mail.com",
Password: 'ssssssssss',
CardNumber: '11111111111'
};


let form_submit = document.querySelector('input[type="submit"].button')
localStorage.setItem(1, JSON.stringify(obj))


form_submit.addEventListener('click', regisration ,false)

function regisration(event) {
obj.first_name = inputFirst_name.value
obj.last_name = inputLast_name.value
obj.Email = inputEmail.value
obj.Password = inputPassword.value
obj.CardNumber = Math.trunc(Math.random() * (10**11)).toString(16)
obj.arrBooks = []

let serialObj = JSON.stringify(obj)

let count = 0

for(let i = 0; i <= localStorage.length; i++) {
  
  if(count < localStorage.key(i)) {
    count = +localStorage.key(i)
  }
  
}


for(let j = 0; j <= localStorage.length; j++) {
  
  let obj2 = JSON.parse(localStorage.getItem(localStorage.key(j)))

   if (obj.Email === obj2.Email) {
    alert ('The user with this Email is already registered')
    event.preventDefault()
    break
  } else if (j === localStorage.length-1 && obj.Email !== obj2.Email && inputFirst_name.value !== '' && inputPassword.value !== '' && inputEmail.value !== '' && inputLast_name.value !=='' && inputPassword.value.length >= 8) {
    

    localStorage.setItem(count+1, serialObj);
    

    let inputEmailReg = document.querySelector('input[name="E-mail"]');
    let inputPasswordReg = document.querySelector('input[name="Password');
    
    for(let k = 0; k <= localStorage.length; k++) {
      let current = JSON.parse(localStorage.getItem(localStorage.key(k)))
       if (inputEmailReg.value === current.Email && inputPasswordReg.value === current.Password
        ) {
        console.log('success_reg')
        enter_account(k)
        event.preventDefault()
          // alert(k)
        alert(`Registration completed successful
        Login - ${inputEmail.value}
        Password - ${inputPassword.value}
        `)
        location.reload()
        break
      
        } else continue
      }
      break
    
  } continue
}
}


// LOG IN LOCAL STORAGE

// check login
if(sessionStorage.getItem('authorization') === 'true') {
enter_account_change_elems()
}


var inputEmailOrCard = document.querySelector('input[name="Email_or_card"]');
var inputPasswordLogin = document.querySelector('input[name="password_login');
let form_submit_login = document.querySelector('input[type="submit"][value="Log in"]')

// Внутри написананя функция чтобы вызывать  event.preventDefault()
form_submit_login.addEventListener("click", login, false);

function login(event) {
// event.preventDefault()
  for(let i = 0; i <= localStorage.length; i++) {
 
    let current = JSON.parse(localStorage.getItem(localStorage.key(i)))
    // alert(i)
    // alert(localStorage.length-1)
     if (inputEmailOrCard.value === current.Email && inputPasswordLogin.value === current.Password || 
      inputEmailOrCard.value === current.CardNumber  && 
      inputPasswordLogin.value === current.Password 
      ) {
      console.log('success')
      enter_account(i)
      location.reload()
      event.preventDefault()
      break
    }  else if (inputEmailOrCard.value === '' || inputPasswordLogin.value === '' || inputPasswordLogin.value.length <= 8) {
      break;
    } else if (i === localStorage.length-1) {
      if (inputEmailOrCard.value !== current.Email || inputPasswordLogin.value !== current.Password || 
        inputEmailOrCard.value !== current.CardNumber  || 
        inputPasswordLogin.value !== current.Password)
        alert('Login, card number, or password entered incorrectly')
      event.preventDefault()
      break
    } else continue
      
    
} 
// return false
// location.reload()
// 
}  


function enter_account(key) {
Reload_current_session_acc(key)
Visits(key)
checkBooksEnter(key)
enter_account_change_elems()
}

function enter_account_change_elems() {

sessionStorage.setItem('authorization', true)
let current_account = JSON.parse(sessionStorage.getItem('current'))
authorization.style = 'display: none'
let Name_Initials = current_account.first_name[0].toUpperCase() + current_account.last_name[0].toUpperCase()
authorized.innerHTML = Name_Initials
authorized.style = 'display: table-cell'

let Full_Name = current_account.first_name + ' ' + current_account.last_name


document.querySelector('.modal_profile_left .initials').innerHTML = Name_Initials

document.querySelector('.modal_profile_left .full_name').innerHTML = Full_Name


authorized.title = current_account.first_name+' '+current_account.last_name
let profile_to_card = document.querySelector('.log_out_menu .profile')

profile_to_card.style = 'font-size: 12px'
profile_to_card.innerHTML = current_account.CardNumber

let visitsHTML = document.querySelectorAll('.status_item .visits')
for (let elems of visitsHTML) {
elems.innerHTML = current_account.visits
}

document.querySelector('div.card .cardNumber').innerHTML = current_account.CardNumber


checkBooksSession()
checkOwnedBooks()
checkLibraryCard()
}



function Reload_current_session_acc(key) {
sessionStorage.setItem('current', localStorage.getItem(localStorage.key(key)))
sessionStorage.setItem('current_key', key)
}



function logout() {
sessionStorage.setItem('authorization', false)
authorization.style = 'display: block'
authorized.style = 'display: none'
log_out_menu.style = 'display: none'
let profile_to_card = document.querySelector('.log_out_menu .profile')
profile_to_card.style = 'font-size: 15px'
profile_to_card.innerHTML = 'Profile'
let buy_button = document.querySelectorAll('.buy_book')
for(let elem of buy_button) {
  elem.innerHTML = 'Buy'
  elem.removeAttribute('disabled')
}
check_card_button.style = 'display: inline-flex'
library_card_status_check.style = 'display: none' 

location.reload()
}






document.querySelector('.log_out_menu .Log_out').onclick = () => {
logout()
}


// MY PROFILE 


let My_Profile_buttons = document.querySelectorAll('.My_profile')
for (let elem of My_Profile_buttons){
elem.onclick = () => {
  modal_profile.style = "display:flex";
  grey_window.style = "display:block";
  login_menu_open.style = "display:none";
  register_menu_open.style = "display:none";
  document.querySelector('body').style = "overflow: hidden";
}
}


function Visits(key) {
  let current_account = JSON.parse(localStorage.getItem(localStorage.key(key)))

  if (current_account.visits == null) {
    current_account.visits = 1
  } else current_account.visits += 1


  let acc = JSON.stringify(current_account)

  localStorage.setItem(localStorage.key(key), acc)

  Reload_current_session_acc(key)
 
}

function checkBooksEnter(key) {
  let current_account = JSON.parse(localStorage.getItem(localStorage.key(key)))


  if (current_account.books_owned == null) {
    current_account.books_owned = 0
  } 
  let acc = JSON.stringify(current_account)

  localStorage.setItem(localStorage.key(key), acc)

  Reload_current_session_acc(key)
}

function checkBooksSession() {

let current_session_account = JSON.parse(sessionStorage.getItem('current'))
if (current_session_account.books_owned == null) {
  current_session_account.books_owned = 0
} 

let booksHTML = document.querySelectorAll('.status_item .books_count')
for (let elem of booksHTML) {
  elem.innerHTML = current_session_account.books_owned
}

}

let copyButton = document.querySelector('div.card img')
copyButton.title = 'Copy'

copyButton.onclick = () => {
let current_account = JSON.parse(sessionStorage.getItem('current')) 

navigator.clipboard.writeText(current_account.CardNumber).then(
  () => { alert('Copied!')
  },
  () => {
    alert('Please try again')
  },
);
}


// SLIDER ABOUT

let slider_about = document.querySelectorAll('.slider_button_item');
let buttons = document.querySelectorAll('.slider_button_item');
let buttons_color = document.querySelectorAll('.slider_button_item .elem')

// let count  = 0
let currentSlideId 

function checkCount() {

}

function check_buttons() {

  for (let i = 1; i <=5; i++) {
    let p = document.querySelector(`#r${i}`)
    if (p.checked === true) {
      currentSlideId = i
    }
  }
// if (count === 0 && r1.checked === true) {
//   r1.checked = true;
// } else if (count === -475) {
//   r2.checked = true;
// } else if (count === -(475*2)) {
//   r3.checked = true;
// } else if (count === -(475*3)) {
//   r4.checked = true;
// } else if (count === -(475*4)) {
//   r5.checked = true;
// }

}

document.querySelector('.slider_button_about_left').onclick = () => {
  check_buttons()
  if (currentSlideId > 1) {
    let p = document.querySelector(`#r${currentSlideId-1}`)
    p.checked = true
  } 
}

document.querySelector('.slider_button_about_right').onclick = () => {
check_buttons()
if (currentSlideId < 5) {
  let p = document.querySelector(`#r${currentSlideId+1}`)
  p.checked = true
} 

}


// FAVOURITES BOOKS BUY / OWN
let buy_buttons = document.querySelectorAll('.buy_book')

for(let key of buy_buttons) {
key.onclick = () => {
  if(sessionStorage.getItem('authorization') !== 'true') {
    login_menu_open.style = "display:block";
    grey_window.style = "display:block";
    register_menu_open.style = "display:none";
    document.querySelector('body').style = "overflow: hidden";
  } else {
    // for(let button of buy_buttons) {
      // button.onclick = () => {
        buy_a_library_card.style = 'display:block'
        grey_window.style = "display:block";
        document.querySelector('body').style = "overflow: hidden";
        buying_book(key)
      // }
    }
  // }
}

}



function addBook() {

}


// buy form
let submit_button = document.querySelector(".buy_button_price input")

function slice_and_check(e, num) {

let for_name = document.querySelector(`.data_buy_card label[for=${e.name}]`)

if (num === 0) {
  if (e.value) {
    
    for_name.classList.add('green_check')
  } else {
    for_name.classList.remove('green_check')
  }
} else {
  e.value=e.value.substring(0, num)
  if (e.value.length === num) {
    for_name.classList.add('green_check')
  } else {
    for_name.classList.remove('green_check')
  }
}
  
checkGreen()
}

function checkGreen() {
var labels = document.querySelectorAll('.data_buy_card div label')

for (let key of labels) {
  if(key.classList.contains('green_check')) {
    submit_button.removeAttribute("disabled")
  } else 
  submit_button.setAttribute("disabled", ""); 
  if (submit_button.hasAttribute("disabled")) {
    break
  }
}  
}

function exp_code_next(e) {
if (e.value.length >= 2) {
document.querySelector('input[name=exp_code]:last-child').select()
}
}

function exp_code_prev(e) {
if (e.value.length === 0) {
  document.querySelector("body > div > div.buy_a_library_card > div.buy_card_wrapper > form > div:nth-child(2) > input:nth-child(2)").select()
    }
}





function buying_book(e) {
submit_button.onclick  = () => {

  let key = sessionStorage.getItem('current_key')
  let current_local = JSON.parse(localStorage.getItem(localStorage.key(key)))

  if (current_local.books_owned == null || current_local.books_owned === 0) {
    current_local.books_owned = 1
  } else 
  current_local.books_owned += 1


  if (current_local.arrBooks == null) {
    let arrBooks = []
    arrBooks.push(e.id)
    current_local.arrBooks = arrBooks

  } else {
    current_local.arrBooks.push(e.id)
  }

  let acc = JSON.stringify(current_local)
  localStorage.setItem(localStorage.key(key), acc)
  
  Reload_current_session_acc(key)
  checkOwnedBooks() 
}
}

function checkOwnedBooks() {
let key = sessionStorage.getItem('current_key')
let current_local = JSON.parse(localStorage.getItem(localStorage.key(key)))
if (current_local.arrBooks) {
  let accArray = current_local.arrBooks
  for(let elem of accArray) {

    let document_button = document.querySelector(`#${elem}`)
    document_button.setAttribute("disabled", "");
    document_button.innerHTML = 'Own'

    let Rented_books = document.querySelector('.Rented_books ul')
      let name_of_book =  document.querySelector(`.${elem} .book_header_minor`).innerHTML
      let author_of_book = document.querySelector(`.${elem} span.author`).innerHTML
  
      Rented_books.innerHTML += `<li>${name_of_book}, ${author_of_book}</li>`
  }
}

}








// FADE IN / FADE OUT IN FAVOURITES



let books_spring = document.querySelector('.books_spring');
let books_winter = document.querySelector('.books_winter');
let books_autumn = document.querySelector('.books_autumn');
let books_summer =  document.querySelector('.books_summer');


let opacity = 1 



function set_opacity() {
books_winter.style.opacity = opacity;
books_autumn.style.opacity = opacity;
books_summer.style.opacity = opacity;
books_spring.style.opacity = opacity;
}

function fadeIn() {

let fadeIn = setInterval(() => {
  if (opacity <= 0) {
    clearInterval(fadeIn);
    opacity = 0
  }
  set_opacity()
   opacity -= 0.1;
}, 10); 
}

function fadeOut() {
let fadeOut = setInterval(() => {
  if (opacity >= 1) {
    clearInterval(fadeOut);
    opacity = 1
  } else if(opacity < 1) {
    opacity += 0.1;
    set_opacity()
  }
}, 10); 
}




document.querySelector('input[value="Spring"]').onchange = function() {
opacity = 1
fadeIn()

setTimeout(() => {
  clearInterval(fadeIn);
  books_winter.style = 'display: none';
  books_autumn.style = 'display: none';
  books_summer.style = 'display: none';
  books_spring.style = 'display: flex';  
  set_opacity();



  fadeOut()

}, 400);

    
}

document.querySelector('input[value="Winter"]').onchange = function() { 
opacity = 1
fadeIn()
      
setTimeout(() => {
  clearInterval(fadeIn);
  books_winter.style = 'display: flex';
      books_spring.style = 'display: none';
      books_autumn.style = 'display: none';
      books_summer.style = 'display: none';
  set_opacity();



  fadeOut()

}, 400);
    

}
document.querySelector('input[value="Summer"]').onchange = function() {
opacity = 1
fadeIn()
setTimeout(() => {
  clearInterval(fadeIn);
  books_summer.style = 'display: flex';
  books_winter.style = 'display: none';
  books_autumn.style = 'display: none';
  books_spring.style = 'display: none';
  set_opacity();



  fadeOut()

}, 400);
  

}

document.querySelector('input[value="Autumn"]').onchange = function() {
opacity = 1
fadeIn()
setTimeout(() => {
  clearInterval(fadeIn);
  books_autumn.style = 'display: flex';
  books_winter.style = 'display: none';
  books_summer.style = 'display: none';
  books_spring.style = 'display: none';
  set_opacity();



  fadeOut()

}, 400);
}


// CHECK THE CARD 

var readers_card_name = document.querySelector('input[name="readers_name"]')

var readers_card_number = document.querySelector('input[name="card_number"]')

check_card_button.onclick = () => {
 for(let i = 0; i < localStorage.length; i++) {
  

  var currentlocal = JSON.parse(localStorage.getItem(localStorage.key(i)))

  if (currentlocal.first_name === readers_card_name.value && 
    currentlocal.CardNumber === readers_card_number.value) {
      // alert('success')
      check_card_button.style = 'display: none'
      library_card_status_check.style = 'display: inline-flex' 
    
      setTimeout(() => {
        check_card_button.style = 'display: inline-flex'
        library_card_status_check.style = 'display: none' ;
        // none
        readers_card_name.value = ''
        readers_card_number.value = ''
      }, 10000 )
      break
    } else if (i === localStorage.length-1) {
      // alert('Incorrect')
    }
}
}

function checkLibraryCard() {
let current_account = JSON.parse(sessionStorage.getItem('current'))
// let current_local = JSON.parse(localStorage.getItem(localStorage.key(key)))
let readers_name = current_account.first_name
let card_number = current_account.CardNumber
// alert(current_account.first_name)
document.querySelector('.find_card_left_elem h3').innerHTML = 'Your Library card'
let Readers_input = document.querySelector("form > div.brown_color > input[type=text]:nth-child(2)");
let Card_input = document.querySelector("form > div.brown_color > input[type=text]:nth-child(3)")

Readers_input.value = readers_name[0].toUpperCase() + readers_name.slice(1)
Readers_input.setAttribute('disabled','')
Card_input.value = card_number
Card_input.setAttribute('disabled','')

check_card_button.style = 'display: none'
library_card_status_check.style = 'display: inline-flex' 

document.querySelector('.get_card h3').innerHTML = 'Visit your profile'
document.querySelector('.get_card div').innerHTML = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.'
// document.querySelector('.get_card .sign_up').style = 'display: none'
// document.querySelector('.get_card .log_in').style = 'display: none'

document.querySelector('.get_card .buttons').innerHTML = '<button type="button" class="My_profile">Profile</button>'
}


// localStorage.setItem("email", inputEmail.value);



// localStorage.setItem("myKey", serialObj)


// ну то есть ты сохраняешь и вытаскиваешь спискок пользователей. и уже с ним работаешь. как найти активного? выбирай:

// сохранить его данные отдельно в свою строку в локалсторадже. и при перезагрузке проверять чо там?
// сохранить отдельно индекс активного пользователя и по нему найти его в списке.
// добавить каждому пользователю атрибут "яАктивный = false/true" и при загрузке списка проверять у кого он включен.
// еще какие то варианты, которые сходу не пришил в голову.
