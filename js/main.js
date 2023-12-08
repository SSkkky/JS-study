let items = [];

fetch('./data.json')
    .then(obj => obj.json())
    .then(data => {
        items = data.items;
        imgFun();
    })


function imgFun() {
    const popOverlay = document.querySelector('.poptrox-overlay');
    let tag = '';

    items.forEach(function (obj) {
        tag += ` <div class="thumb ">
    <a href="${obj.detail}" class="image"><img src="${obj.thumb}" alt="" /></a>
    <h2>${obj.name}</h2>                
</div>`
    })


    const elMain = document.querySelector('#main');
    elMain.innerHTML = tag;

    const divThumb = document.querySelectorAll('.thumb');

    divThumb.forEach(function (el, i) {
        el.onclick = function (e) {
            e.preventDefault();

            popOverlay.setAttribute('style', 'display:block');

            const popPic = popOverlay.querySelector('img')
            const popPicCap = popOverlay.querySelector('.caption h2')
            let getSrc = this.querySelector('img').getAttribute('src')
            let setSrc = this.querySelector('a').getAttribute('href')

            popPic.setAttribute('src', `${setSrc}`)

            let cap = this.querySelector('h2').innerText;
            popPicCap.innerText = cap;

            const closer = document.querySelector('.closer')
            closer.onclick = function () {
                popOverlay.setAttribute('style', 'display:none');
            }

            const thisIndex = this.index;
            const navPre = document.querySelector('.nav-previous')
            const navNext = document.querySelector('.nav-next')
            const popCaption = document.querySelector('.poptrox-overlay .caption h2')

            navPre.onclick = function () {
                if(i === 0){
                    i = 0;
                    window.alert('first page')
                }

                let count = i;
                count--;
                popPic.setAttribute('src', `${items[count].detail}`)
                popCaption.innerText = `${items[count].name}`;
                i--;
                }

            navNext.onclick = function () {
                if(i === 11){
                    i = 11;
                    window.alert('last page')
                }

                let count = i;
                count++;
                popPic.setAttribute('src', `${items[count].detail}`)
                popCaption.innerText = `${items[count].name}`;
                i++;
            }
        }
    })
}

const footer = document.querySelector('#footer');
const aboutNav = document.querySelector('#header nav');

aboutNav.onclick = function () {
    if (footer.classList.contains('active') == false) {
        footer.classList.add('active');
    } else {
        footer.classList.remove('active');
    }
}


const sendBtn = document.querySelector('.actions .primary');
const nameValue = document.querySelector('#name');
const emailValue = document.querySelector('#email');

sendBtn.onclick = function (e) {
    e.preventDefault();

    console.log('nameValue=' + nameValue);

    if (nameValue.value !== '' && emailValue.value !== '') {
        footer.classList.remove('active');
    } else {
        window.alert('No information has been entered')
    }
}