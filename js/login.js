"use strict"
export  let butLog = document.getElementById('but');
 butLog.onclick = () => {
	let email = document.getElementById('inp');
	let password = document.getElementById('inp1');
	let user = localStorage.getItem("user");
	let pasw = localStorage.getItem("pasw");
	const warning = 'Неправильное имя или пароль (попытайтесь войти ещё раз)';
	if ((email.value === user) && (password.value === pasw)) {
		window.location = "main.html";
		but.disabled = false;
		document.getElementsByClassName("href1")[0].style.display = "none";
		document.getElementById("fbr").style.display = "none";
		document.getElementsByClassName("href1")[0].style.color = "red";
	} else if ((email.value != user) || (password.value != pasw)) {
		document.getElementById("vs").innerHTML = warning;
		but.disabled = true;
	}
}    