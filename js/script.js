var cart = document.getElementById('cart');
var billing = document.getElementById('billing');
var completed = document.getElementById('completed');

var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');

var title = document.getElementById('checkout_title');

window.onload = cart_section;

function cart_section(){
    cart.style.display = 'block';
    billing.style.display = 'none';
    completed.style.display = 'none';

    link1.classList.add('active');
    link2.classList.remove('active');
    link3.classList.remove('active');

    title.innerHTML = 'Shopping Cart';
}

function billing_section(){
    cart.style.display = 'none';
    billing.style.display = 'block';
    completed.style.display = 'none';

    link1.classList.remove('active');
    link2.classList.add('active');
    link3.classList.remove('active');

    title.innerHTML = 'Billing Information';
}

function completed_section(){
    cart.style.display = 'none';
    billing.style.display = 'none';
    completed.style.display = 'block';

    link1.classList.remove('active');
    link2.classList.remove('active');
    link3.classList.add('active');

    title.innerHTML = 'Completed'
}


// ***** Developer Workflow Script *****
// Card Image
let card_input = document.getElementById("card_image");
let card_image_name = document.getElementById("card_image_name")
card_input.addEventListener("change", ()=>{
    card_image_name.innerText = card_input.files[0].name;
});

// Banner Image
let banner_input = document.getElementById("banner_image");
let banner_image_name = document.getElementById("banner_image_name")
banner_input.addEventListener("change", ()=>{
    banner_image_name.innerText = banner_input.files[0].name;
})

// Video Preview
let video_input = document.getElementById("video_preview");
let video_name = document.getElementById("video_name")
video_input.addEventListener("change", ()=>{
    video_name.innerText = video_input.files[0].name;
})


var item1 = document.getElementById('site_url');
var item2 = document.getElementById('site_details');
var item3 = document.getElementById('file_uploads');
var item4 = document.getElementById('selling_option');

var link1 = document.getElementById('nav_link1');
var link2 = document.getElementById('nav_link2');
var link3 = document.getElementById('nav_link3');
var link4 = document.getElementById('nav_link4');

window.onload = section1;

function section1(){
    item1.style.display = 'block';
    item2.style.display = 'none';
    item3.style.display = 'none';
    item4.style.display = 'none';

    link1.classList.add('active');
    link1.classList.remove('disabled');
    link2.classList.remove('active');
    link2.classList.add('disabled');
    link3.classList.remove('active');
    link3.classList.add('disabled');
    link4.classList.remove('active');
    link4.classList.add('disabled');
}

function section2(){
    item1.style.display = 'none';
    item2.style.display = 'block';
    item3.style.display = 'none';
    item4.style.display = 'none';

    link1.classList.remove('active');
    link1.classList.add('disabled');
    link2.classList.add('active');
    link2.classList.remove('disabled');
    link3.classList.remove('active');
    link3.classList.add('disabled');
    link4.classList.remove('active');
    link4.classList.add('disabled');
}

function section3(){
    item1.style.display = 'none';
    item2.style.display = 'none';
    item3.style.display = 'block';
    item4.style.display = 'none';

    link1.classList.remove('active');
    link1.classList.add('disabled');
    link2.classList.remove('active');
    link2.classList.add('disabled');
    link3.classList.add('active');
    link3.classList.remove('disabled');
    link4.classList.remove('active');
    link4.classList.add('disabled');
}

function section4(){
    item1.style.display = 'none';
    item2.style.display = 'none';
    item3.style.display = 'none';
    item4.style.display = 'block';

    link1.classList.remove('active');
    link1.classList.add('disabled');
    link2.classList.remove('active');
    link2.classList.add('disabled');
    link3.classList.remove('active');
    link3.classList.add('disabled');
    link4.classList.add('active');
    link4.classList.remove('disabled');
}


// Selling Options Script
auction = document.getElementById('auction')
ask_price = document.getElementById('ask_price')

window.onload = btn1;

function btn1(){
    auction.style.display = 'block';
    ask_price.style.display = 'none';
}

function btn2(){
    auction.style.display = 'none';
    ask_price.style.display = 'block';
}