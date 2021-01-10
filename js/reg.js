"use strict"
export let butReg = document.getElementById('butr');
butReg.onclick = () => {
	document.getElementById("vs").style.display="none";
	let emailReg = document.getElementById('inpr');
	let passwReg = document.getElementById('inp1r');
	localStorage.setItem("user", emailReg.value);
	localStorage.setItem("pasw", passwReg.value);
	if ((emailReg.value !="")&&(passwReg.value!="" ))  { 
		let gips=document.getElementById("vs1");
		document.getElementById("vs1").style.textDecorationStyle='wavy';  
		window.location="index.html";
	   }
	}