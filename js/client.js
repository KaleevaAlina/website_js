async function conClient() { 
    let result = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json ').then(response =>response.json()) 
    console.log("Задача 3а",result); 
	let female = 0;	
	let male = 0;
	let kn = document.getElementById("del");
	for (let x3 = 0; x3 < result.length; x3++) {
        let parent3 = document.querySelector('#demo3 ');
		   document.getElementById("demo3").style.width='1500px';	   
		   //Количество мужчин		   
		   if (result[x3].gender==="female") {
			   female++;
		   }
		   if (result[x3].gender==="male") {
			   male++;
		   }
           //преобразование даты в формат dd.mm.yyyy
           let ndat =  result[x3].registered.substr(0, 10);
           let dd = ndat.substr(8,2); 
           let mm = ndat.substr(5,2);
           let yyyy = ndat.substr(0,4);
           let ndat1 = dd+"."+mm+"."+yyyy;
		   if (result[x3].isActive===true) {
				trueActive();
		    } 
		    if (result[x3].isActive===false) {
				falseActive();
		   }	  	
		 	function trueActive() {
			  document.getElementById("kol1").innerHTML += "<b>"+(x3+1)+"</b>"+' ' +result[x3].name + "<br>";  		
			  document.getElementById("kol2").innerHTML += "<b>"+result[x3].company + "</b><br>";
		   	  document.getElementById("kol3").innerHTML += "<b>"+result[x3].email + "</b><br>"; 
		   	  document.getElementById("kol4").innerHTML += "<b>"+result[x3].phone + "</b><br>";
		   	  document.getElementById("kol5").innerHTML += "<b>"+result[x3].balance + "</b><br>";
			  document.getElementById("kol6").innerHTML += "<b>"+ndat1 + "</b><br>";
		    }
		    function falseActive() {
			  document.getElementById("kol1").innerHTML += (x3+1)+' ' +result[x3].name + "<br>";  	
			  document.getElementById("kol2").innerHTML += result[x3].company + "<br>";
			  document.getElementById("kol3").innerHTML += result[x3].email + "<br>"; 
			  document.getElementById("kol4").innerHTML += result[x3].phone + "<br>";
			  document.getElementById("kol5").innerHTML += result[x3].balance + "<br>";
			  document.getElementById("kol6").innerHTML += ndat1 + "<br>";
		}
        }  
	//Удаление строки 
    let kol7 = document.getElementById("kol7");
	for (let x6 = 0; x6 < result.length; x6++) {
        let item = document.createElement('span');
		item.className = "mystyle";
		item.appendChild(document.createTextNode('Удалить строку' +"\n"));
		item.onclick = function() {
			let podt = confirm("Вы действительно хотите удалить строку"+(x6+1)+"?");
	            if (podt != true) {
		          return false;
				}
			document.getElementById('kol8').innerHTML = "Строка "+(x6+1)+" удалена!";
			document.getElementById("mb").style.display="block";	
			delete result[x6].name;
		    delete result[x6].company;
		    delete result[x6].email;
		    delete result[x6].phone;
            delete result[x6].balance;	
			console.log('Результат после удаления строки: ',(x6+1)+' Имя: '+result[x6].name+' Компания: '+result[x6].company);	
		}
        kol7.appendChild(item);     
   }	
	//////////////////////////////////////
	document.getElementById("female").innerHTML='Количество мужчин: '+female; 
	document.getElementById("female").style.marginLeft='20px';
	document.getElementById("female").style.color='#fff';
	document.getElementById("male").innerHTML='Количество женщин: '+male; 
	document.getElementById("male").style.marginLeft='20px';
	document.getElementById("male").style.color='#fff';
	//////////////////////////////////////////////
	/////макс элемент
	var max = getMaxValue(result);
	function getMaxValue(result){
		let max = result[0].balance; 
		for(let y = 0; y<result.length; y++){
			if (max <result[y].balance) max = result[y].balance; 
		}
		return max;
	}
	let dd = max.substr(1,8);
	let day = dd.substr(0,1);
	let month = dd.substr(2,3);
	let year = dd.substr(6,7);
	let msxValue = day+'.'+ month +','+year;
	document.getElementById('max1').innerHTML ='Максимальное значение:' +' '+ msxValue;
	document.getElementById('max1').style.fontSize = '18px';
	document.getElementById("max1").style.marginLeft='20px';
	document.getElementById("max1").style.color='#fff';
} 
export let client = conClient();	 