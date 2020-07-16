function 비밀코드1(){
    if(prompt('1번 비밀 코드를 입력하세요.') == 'kimmax'){
        alert('킹민위키로 이동합니다.');
        open('킹민위키.html')
    }

    else {
        alert('취소되었습니다.');
    }
}
