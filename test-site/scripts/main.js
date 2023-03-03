let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName) {
  	setUserName();
  }else{
  	localStorage.setItem('name', myName);
  	myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}


let myVariable;
myVariable = '李雷';

// document.querySelector('html').addEventListener('click',function (){
// 	alert('别打我');
// })

let mayImage = document.querySelector('img');
mayImage.onclick = function(){
	let mySrc = mayImage.getAttribute('src');
	if (mySrc === 'images/LM_LaunchImage_appTitle@2x.png') {
		mayImage.setAttribute('src','images/60pt@2x.png');
	}else{
		mayImage.setAttribute('src','images/LM_LaunchImage_appTitle@2x.png');
	}
}
