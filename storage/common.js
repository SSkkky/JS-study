function init() {
    //세션 스토리지는 똑같이 활용하는데 앞이 sessionStorage 임!
    const elNav = document.querySelectorAll('nav a');
    let num = localStorage.num || 0;

    //localStorage의 키값을 활용해서 충돌하지 않도록 밖으로 뺌
    //앞 값이 존재하지않을때 (or) 0을 사용함
    elNav[num].style.color = 'red';
    elNav.forEach((el, i) => {
        el.onclick = function (e) {
            //e.preventDefault();
            localStorage.num = i;
            //anchor의 key값을 localStorage의 num이라는 키에 담겠다!
            //킵해놨다가 문서가 onload된 후 위 명령을 수행함
        }
    });


    //localStorage.data = arr;
    //setItem 메소드를 활용

    let arr = [20, 30, 40];
    let obj = { name: '홍길동', age: 400 }

    localStorage.setItem('data', JSON.stringify(arr));
    localStorage.setItem('data2', JSON.stringify(obj));

    let data = localStorage.getItem('data');
    let data2 = localStorage.getItem('data2');
    // console.log(JSON.parse(data))
    // console.log(JSON.parse(data2))

    // 부분 삭제
    // localStorage.removeItem('data2');

    // 모든 데이터 삭제
    // localStorage.clear();

    //cookie : '이름=값'
    //expires : 날짜, Data = 하루단위
    const close = document.querySelector('button'),
        aside = document.querySelector('aside');

    function setCookie() {
        //10초동안보지않기를 클릭했다면
        if(check.checked == true){
            let date = new Date();

            //현재 시점의 초 값을 가져와서 더함
            //date의 정보를 수정
            date.setSeconds(
                date.getSeconds() + 10
            )
    
            document.cookie = `popup=event;expires=${date.toUTCString()}`;

            // console.log(date)
            
        }
        //닫기버튼 누르면 무조건 닫히긴 해야함!
        aside.style.display = 'none';
    }

    //들어오자마자 팝업을 띄워야하니까 확인하기 위해서 onclick 밖으로 뺌
    //해당 사이트에 들어왔을때(새로고침) 실행_ 보여줄지말지 쿠키가 정함
    function getCookie(){
        // 팝업x : 쿠키값이 있을때
        // 팝업o : 쿠키값이 없을때
        let cookie = document.cookie;
        if ( cookie.match('event') ){ //하루동안보지않기(label) 체크하면 쿠키가 생성되니까
            aside.style.display = 'none';
        } else{
            aside.style.display = 'block';
        }
    }
    
    getCookie();

    close.onclick = setCookie;
}

window.onload = init;