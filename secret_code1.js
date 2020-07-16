function 비밀코드1(){
    if(prompt('1번 비밀 코드를 입력하세요.') == '킹민'){
        alert('킹민위키로 이동합니다.');
        open('킹민위키.html')
    }

    else {
        alert('오류');
    }
}

/*
function func_prompt() {
    var secret_code = prompt("비밀 코드를 입력하세요."); // var : 변수, prompt : 사용자 입력값 받기
    if (secret_code) =='kingmin' {
        alert("킹민위키로 이동합니다");
    }
    else {
        alert("잘못된 코드입니다");
    }
}

 */