class SnackBar{
	constructor(snackbar = "Какой-то текст"){
		this.snackbar = snackbar;
	}
	Snack(){
		const x = document.getElementById('snackbar');
		x.innerText = this.snackbar;
		x.className = 'show';
	}
}

function NoInput(){
	const a = new SnackBar();
	a.Snack();
}

function YesInput(){
	let b = document.getElementById("snbr").value;
	if (b.length == 0){
		b = 'Инпут не может быть пустой';
	}
	let babak = new SnackBar(b);
	babak.Snack();

}

document.getElementById('snackbar').addEventListener('click',() => {
	document.getElementById('snackbar').className = "";
})
