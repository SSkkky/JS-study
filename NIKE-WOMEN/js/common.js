const burgerBtn = document.querySelector('.burger-button'),
burgerBtnP = document.querySelectorAll('.burger-button p'),
burgerMenu = document.querySelector('.burger-menu'),
burgerMenulist = document.querySelectorAll('.burger-menu .menu'),
burgerMenuBtn = document.querySelectorAll('.burger-menu .menu img'),
burgerMenuSub = document.querySelectorAll('.burger-menu .sub');

const searchBtn = document.querySelector('.search-button'),
searchBtnImg = document.querySelector('.search-button img'),
searchMenu = document.querySelector('.search-menu');

// -------burger start--------
burgerBtn.onclick = function(){
    burgerMenu.classList.toggle('toggle');
    this.classList.toggle('active');
    burgerBtnP.forEach(function(el){
        el.classList.toggle('collection');
    })
    
}

burgerMenulist.forEach(function(el, i){
    el.onclick = function(){
        burgerMenuBtn[i].classList.toggle('active');
        burgerMenuSub[i].classList.toggle('active');
    }
})
// -------burger end--------

// -------search start--------
searchBtn.onclick = function(){
    if(searchMenu.classList.contains('active')){
        if(searchMenu.classList.contains('search-2')){
            // black_background
            searchBtnImg.setAttribute('src','./imgs/ic-search-w.png')
            searchMenu.classList.replace('search-2','search-1');
            searchMenu.classList.remove('active');
        } else{
        searchBtnImg.setAttribute('src','./imgs/ic-search.png')
        searchMenu.classList.remove('active');
        }
    } else if(searchMenu.classList.contains('search-1')){
        searchBtnImg.setAttribute('src','./imgs/ic-close.png')
        searchMenu.classList.replace('search-1','search-2');
        searchMenu.classList.add('active');
    } else {
        searchBtnImg.setAttribute('src','./imgs/ic-close.png')
        searchMenu.classList.add('active');
    }
}
// -------search end--------

// -------aside start-----------
const elAside = document.querySelector('aside'),
elSection = document.querySelectorAll('section');
elArticle = document.querySelectorAll('article');

window.addEventListener('scroll', function(){
    let scrollTop = window.scrollY
    // console.log(window.scrollY)

    if(scrollTop >= 700){
        elAside.classList.add('active');
    } else {
        elAside.classList.remove('active');
    }
})

elAside.onclick = function (){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    }) 
}
// -------aside end-----------

//---------observe start----------
const elObserve = document.querySelectorAll('.observe')

let callback = function(entries, observe){
    entries.forEach(function(item){
        if(item.isIntersecting){
            item.target.classList.add('active');
            observe.unobserve(item.target)
        }
    })
}

let ob = new IntersectionObserver(callback);

elObserve.forEach(function(item){
    ob.observe(item);
})
//---------observe end----------