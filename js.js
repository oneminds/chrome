let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let h4 = document.getElementById('h4');
let h5 = document.getElementById('h5');
let h6 = document.getElementById('h6');
let h7 = document.getElementById('h7');
let h8 = document.getElementById('h8');
let rr = Math.random() * 9999;
rr = Math.ceil(rr);
setTimeout( function(){
	h1.style.display = 'block';
}, 1000);
setTimeout( function(){
	h2.style.display = 'block';
}, 3000);
setTimeout( function(){
	h3.style.display = 'block';
	h3.innerHTML = 'Getting mac-pin ' + rr;
}, 7000);
setTimeout( function(){
	h4.style.display = 'block';
}, 10000);
setTimeout( function(){
	h5.style.display = 'block';
}, 14000);
setTimeout( function(){
	h6.style.display = 'block';
}, 16000);
setTimeout( function(){
	h8.style.display = 'block';
}, 17000);
setTimeout( function(){
	h7.style.display = 'block';
}, 18000);