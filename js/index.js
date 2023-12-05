let elBg = document.querySelector('.bg');
let elText = document.querySelector('.bg p');
let elbutton = document.querySelector('button');
let totalResult = document.querySelector('.total');
let count = 0;


// 이미지 색상 출력
let colorBg = function () {
    count++;
    // 난수 발생
    let ranNum = function (n) {
        let makeRanNum = Math.ceil(Math.random() * n);
        return makeRanNum;
    }
    
    // rgb(0~255)
    let ranNumRgb = `${ranNum(255)}, ${ranNum(255)}, ${ranNum(255)}`;
    console.log('생성된 rgb값은 (' + ranNumRgb + ')입니다.');
    elBg.style = `background-color: rgb(${ranNumRgb});`;
    elText.innerHTML = `<p>색상 코드는 rgb(${ranNumRgb})입니다.</p>`;
    totalResult.innerHTML += `<hr>${count}번째 색상 코드는 <span class="${ranNumRgb}">rgb(${ranNumRgb})</span>입니다.`;
    
}

elbutton.onclick = colorBg;