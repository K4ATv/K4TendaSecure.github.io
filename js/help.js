function why(){
	prompt("Pourquoi ?")
}


function copy(value){
	var tempInput = document.createElement("input");
  	tempInput.value = value;
  	document.body.appendChild(tempInput);
  	tempInput.select();
  	document.execCommand("copier");
  	document.body.removeChild(tempInput);
}


function discord(){
	copy("Moi#5013")
    Swal.fire({
        icon: 'success',
        title: 'ID Discord',
        text: 'ID Discord a été copier!',
        button: 'Noice'
    })
}

function email(){
	copy("k4asupport@support.k4a.fr")
	Swal.fire({
        icon: 'success',
        title: 'Email copier',
        text: "L'Email a été copier!"})
}