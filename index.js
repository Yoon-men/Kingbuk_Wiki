function pageOpen() {
    var objName = document.getElementById("secretcord");
    if (objName.value == "") {
        alert("발급된 비밀코드를 입력해주세요");
        objName.focus();
        return;
    }

    if (objName.value == "김MAX"){
        alert("킹민위키로 이동합니다.")
        open('킹민위키.html')
    }

    if (objName.value == "DJ권"){
        alert("킹준달위키로 이동합니다.")
        open('킹준달위키.html')
    }

    if (objName.value == "갓시흔"){
        alert("갓시흔위키는 아직 준비 중입니다.")
    }

    if (objName.value == "갓상준"){
        alert("갓상준위키는 아직 준비 중입니다.")
    }

    if (objName.value == "부엉이에듀"){
        alert("부엉이에듀로 이동합니다.")
        open('https://www.youtube.com/channel/UCYkuW0ZhvRvvLOmo8J3uTPQ')
    }

    else {
        alert("올바른 코드를 입력해주세요.")
    }
}

// font-family: 'Black Han Sans', sans-serif;
// font-family: 'Nanum Gothic', sans-serif;
// font-family: 'Neucha', cursive;
// font-family: 'Song Myung', serif;
