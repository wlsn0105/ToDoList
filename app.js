let inputBox = document.getElementById('inputBox'); // 할 일 입력창
let addButton = document.getElementById('addButton');   // 버튼 
let doList = document.getElementById('doList'); // 할 일 리스트 창

addButton.addEventListener('click', function(){ // 버튼 클릭 이벤트 발생 시
    var list = document.createElement('li');    // 'li' 태그 만들기
    if (!inputBox.value)                        // 할 일 입력창에 값이 입력되지 않으면
        alert('내용을 입력해 주세요!');             // 알림 발생
    else{
        list.innerText = inputBox.value;        //<li>할 일</li> 태그 입력
        doList.appendChild(list);           // 할 일 리스트에 자식으로 붙이기
        inputBox.value = "";                // 입력하고 난 뒤 할 일 입력창 초기화
    }

    list.addEventListener('click', function(){  // 만들어진 list에 클릭 이벤트 발생 시
        list.style.textDecoration = "line-through"; // 텍스트에 줄 긋기
    })
    list.addEventListener('dblclick', function(){   // 만들어진 list에 더블클릭 이벤트 발생 시
        doList.removeChild(list);                   // 할 일 리스트에서 지우기
    })
})
