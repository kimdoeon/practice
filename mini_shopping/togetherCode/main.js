// Data.JSON에 있는 데이터를 읽어와서 item을 전달해주는 함수
//읽어오는데 시간이 걸리므로 promise를 반환하도록 한다.

//JSON file로부터 item을 동적으로 받아옴(fetch)
//성공적으로 데이터 받으면 json으로 변환하고
//json안의 items를 리턴한다.
function loadItems(){
    return fetch('data/data.json')//파일의 경로나 url을 작성하면 data를 네트워크를 통해서 받아오는 함수
    .then(response=>response.json())//response 오브젝트에 있는 json이라는 api를 이용해서 response body를 json의 오브젝트로 변환한다.
    .then(json=>json.items)
}
//AHA! json.items는 오브젝트인데 .then(displayItems)로 어케 받나 했더니
//.then 자체가 promise를 return하니까 가능한듯!

//items를 가지고 list를 업데이트한다.
function displayItems(items){
    const container = document.querySelector(".items");
    container.innerHTML = items.map(item => createHTMLString(item)).join('');//받아온 items를 li의 그룹으로 만들어 컨테이너에 추가. 즉 json의 오브젝트 하나하나를 HTML로 변환하는 과정임. HTML의 li태그로(리스트 형태)로 변환할 것임.
}

//item data를 HTML 리스트 형태로 변환하는 함수
function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>`;
}

function setEventListner(items){
    const logo = document.querySelector(".logo");
    //버튼 하나하나에 이벤트 리스너를 등록하기 보단
    //버튼들이 들어있는 컨테이너에 이벤트 리스너를 등록해 전체적으로 관리한다.
    const buttons = document.querySelector(".buttons")
    logo.addEventListener("click",()=>displayItems(items));//로고 클릭하면 전체 아이템 출력
    buttons.addEventListener("click",event=>onButtonClick(event,items));
}

//이벤트 처리 함수는 이름 앞에 on 붙여줌
//버튼이 클릭될 때마다 전체적인 리스트가 업데이트 되는 번거로운 상황
//에서 업그레이드 시킨 코드
function onButtonClick(event,items){
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    if(key ==null || value ==null) return;
    updateItems(items,key,value);
}

function updateItems(items,key,value){
    let idx=0;
    const i = document.querySelectorAll(".item");
    items.forEach(item => {
        if(item[key]===value){ 
            i[idx].classList.remove('invisible');
        }else{
            i[idx].classList.add('invisible');
        }
        idx++;
        console.log(typeof(item));
        console.log(item);
        console.log(typeof(i));
        console.log(i);
    });
}
//main(뼈대)
loadItems() //item들을 동적으로 받아와서 promise가 return이 되면 then
.then(items =>{ //전달받은 items을
    displayItems(items); //html에 보여주고
    setEventListner(items); //버튼 클릭시 필터링 해줌
})
.catch(console.log)