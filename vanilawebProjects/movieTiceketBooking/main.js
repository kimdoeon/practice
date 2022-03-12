//영화 목록 선택지
const movies = document.querySelector("#movies");
//좌석 리스트
const seats = document.querySelectorAll(".row .seat");
//좌석수 & 총금액 출력할 요소
const seatsAndPrice = document.querySelector(".seatAndPrice");
//선택된 총 좌석 수
let count=0;

//선택된 좌석 색 변경 함수
function chageColor(index){
    seats[index].classList.toggle("changeColor");
}

//선택된 좌석 수 세는 함수
function countSeats(index){  
    if(seats[index].className === "seat changeColor"){
        count++;
    }else if(seats[index].className === "seat"){
        count--;
    }
}

for(let i=0; i<seats.length;i++){
    seats[i].addEventListener("click",()=>{
        chageColor(i);
        countSeats(i);
        getPrice();
    });   
}


function getPrice(){
    const price = (movies.options[movies.selectedIndex].dataset.price)*count;
    // seatsAndPrice.innerText=`선택된 좌석: ${count} 총 금액: ${price}원`
    seatsAndPrice.innerHTML = `<div class="result">선택된 좌석 : <div class="count">${count} ,</div>총 금액 : <div  class="price">${price}</div> </div>`
}

// select요소의 onchage속성 =>option이 바뀔 때마다 알아차림
movies.addEventListener("change",getPrice);
