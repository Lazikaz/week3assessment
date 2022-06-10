console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("Form has been submitted");
}

function handleMouseOver(event){
	event.preventDefault();
	window.alert("this is a very nice cat and you are a very nice person :)")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector("#catPic")

image.addEventListener("mouseover", handleMouseOver)