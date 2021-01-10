"use strict"
export  let butUp = document.getElementById('button1');
butUp.onclick = () => {
	let sc= window.pageYOffset;
	window.scrollBy({ top: -sc, behavior: 'smooth' });
}	