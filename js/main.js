let itmes = [];

fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        items = data.items;
        mainTag();
    })

function mainTag(){
    let innerTag = '';

    items.forEach(function(el, i){
        innerTag += `<div class="thumb data-num:${i}">
        <a href="${el.detail}" class="image"><img src="${el.thumb}" alt="" /></a><h2>${el.name}</h2></div>`
    });

    const elMain = document.querySelector('#main')
    elMain.innerHTML = innerTag;

    const elPopOver = document.querySelector('.poptrox-overlay')
    const elThumb = document.querySelectorAll('.thumb')
    const popPicImg = document.querySelector('.pic img')
    const popPicCap = document.querySelector('.caption h2')
    const popPicBtn = document.querySelector('.poptrox-popup .closer')

    elThumb.forEach(function(el, key){
        el.onclick = function(e){
            e.preventDefault();
            elPopOver.style.display = "block";
            console.log(``)

            popPicImg.setAttribute('src', `${items[key].detail}`);
            popPicCap.innerText = `${items[key].name}`
            
            popPicBtn.onclick = function(){
                elPopOver.style.display = "none";
            }

            const navPrev = document.querySelector('.nav-previous')
            const navNext = document.querySelector('.nav-next')

            navPrev.onclick = function(){
                key--;
                if(key === -1){window.alert('This is first page :)'); key=0;}
                popPicImg.setAttribute('src', `${items[key].detail}`);
            }
            navNext.onclick = function(){
                key++;
                if(key === 12){window.alert('This is last page :)'); key=11;}
                popPicImg.setAttribute('src', `${items[key].detail}`);
            }
        }
    })
}

const footer = document.querySelector('#footer')
const aboutBtn = document.querySelector('#header nav ul li a')

aboutBtn.onclick = function(){footer.classList.toggle('active')}

const sendBtn = document.querySelector('.actions .primary')
const nameValue = document.querySelector('#name');
const emailValue = document.querySelector('#email');

sendBtn.onclick = function(e){
    e.preventDefault();
    if(nameValue.value !== '' && emailValue.value !== ''){
        window.alert('Thank you for your message. I will reply to you soon!')
        footer.classList.toggle('active')
    }else{
        window.alert('Warning! None entered!')
    }
}