function clac() {
    var currentYear = 2020;
    var birthyear = prompt("태어난 연도를 입력하셈.", "YYYY");
    var age;
    age = currentYear - birthyear + 1;
    document.querySelector("#result").innerHTML="너의 나이는" + age + "살이다.";
}