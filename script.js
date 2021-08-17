var cookie = document.getElementById('cookie');
var numberText = document.getElementById('number');
var name = document.getElementById('name');
var storage = Object.keys(localStorage);
var count;

if (storage.length == 0){
	count = 0;
}

else {
	count = Number(storage[0]);
	document.getElementById('name').value = localStorage.getItem(count);
}


numberText.innerHTML = count.toString() + " Cookies"; 

cookie.onclick = function () {
	count += 1;
	numberText.innerHTML = count.toString() + " Cookies";
	localStorage.clear();
	localStorage.setItem(count, document.getElementById("name").value); 
};