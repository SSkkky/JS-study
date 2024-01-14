function init() {
    const close = document.querySelector('button'),
        aside = document.querySelector('aside');

        
    function setCookie() {
        if(check.checked == true){
            let date = new Date();
            date.setSeconds(date.getSeconds() + 10)
            document.cookie = `popup=event;expires=${date.toUTCString()}`;
        }
        aside.style.display = 'none';
    }


    function getCookie(){
        let cookie = document.cookie;
        if ( cookie.match('event') ){
            aside.style.display = 'none';
        } else{
            aside.style.display = 'block';
        }
    }
    
    
    getCookie();
    close.onclick = setCookie;
}

window.onload = init;













/*
cookie를 활용해 특정 시간동안 유지되는 팝업 만들기!

1. html
팝업 구조
ㄴ체크박스를 체크할 input
ㄴ연결되서 스타일 구현할 label
ㄴ닫기 버튼

1-1. 팝업 형태 (img, input, label, button) 생성
1-2. input은 사용자가 클릭해야하므로 checkbox 타입이고
1-3. label은 for을 이용해 input에 연결한다!(중요)

2. css
2-1. 기본적으로 display:none 상태여야 노출되지않음(순간적으로 보임!)
2-2. `:checked + label` 선택자를 활용해 label의 스타일을 변경 가능함

3. javascript
3-1. html이 로드된 후 쿠키 함수가 실행되어야 하므로 `.onload`를 사용함
3-2. 쿠키 정보를 셋팅한다!
	1) 사용자가 보지않음 체크박스에 체크를 한 상태(true)이면
	2) `new Date( )`로 날짜 정보를 가져와서
	3) `.setSeconds( )`,`.getSeconds( )` 메소드로 시간을 설정함
		ㄴ 예제니까 Seconds 10이고, 1일이면 Day일듯
	4) document.cookie에 `쿠키 키=쿠키 값; expires=${ 시간 }` 할당
		ㄴ expires : 쿠키에 유효기간 할당 / date.toUTCString( ) 메소드 써야함
	5) 닫기 버튼을 누르면 함수 실행

3-3. 셋팅한 쿠키를 활용해 display 값을 적용한다.
	1) `cookie.match( )`를 활용함.
	2) 쿠키 값이 있으면!! (조건이 true) 사용자가 클릭을 한거니까 display:none
	3) 없으면 출력되도록 처리
	4) 함수 실행 처리

4. onload로 html 실행 후 실행되도록 처리
		*/