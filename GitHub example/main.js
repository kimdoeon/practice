// 즉시 실행 함수 : 전체 영역을 더럽힐 수 있는 코드를 안에 넣어주는 것. 범위를 설정해
// 모듈화
(function(window, document){
    'use strict';
    //요소 담는 경우 보통 $붙임. 안붙여도 됨
    //toggle 클래스 가진 요소 전부 탐색
    const $toggles = document.querySelectorAll('.toggle');//NodeList라는 유사 배열 형태
    // toggle-btn 아이디 가진 요소 전부 탐색
    const $toggleBtn = document.getElementById('toggle-btn');

    //사용자가 특정한 버튼을 클릭하는 이벤트를 addEventListner을 통해 감지한다
    //감지한 후 function실행
    $toggleBtn.addEventListener('click',function(){
        toggleElements()
    });
    //브라우저의 크기에 변동이 생겼을 경우 이를 감지해 function 실행
    //이는 브라우저 크기가 바껴도 그 전에 누른 메뉴가 열어져 있는 것을 수정하기 위함
    //메뉴는 사용자가 누르지 않는 이상 닫혀 있어야 함
    window.addEventListener('resize', function(){
        if(window.innerWidth>1024){
            offElements();
        }
    });

    function toggleElements(){
        //유사배열을 반복하는데 반복 할 때마다 function 실행
        //toggle클래스 가진 요소의 개수가 변경될 수도 있기 때문에 
        // 개수에 상관없이 각각의 toggle요소에 코드를 적용시키기 위함
        //function의 매개변수로 반복되는 toggle요소를 toggle이라는 이름으로 정의해서 넣어줌
        [].forEach.call($toggles,function(toggle){
            //classList : html의 class 선택자 제어
            //on이라는 클래스 선택자를 toggle하겠다.
            //==toggle요소에 on 클래스를 toggleElements함수가 실행 될 떄마다 토글하겠다.(==있다 없다 하는 것. 즉 나타나게 하겠다는 거겠지)
            toggle.classList.toggle('on');
        });
    }
    function offElements() {
        [].forEach.call($toggles,function(toggle){
            //모든 toggle 요소의 on 지울 것
            toggle.classList.remove('on');
        });
    }
})(window,document)