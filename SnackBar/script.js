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

const NoInput = a => {
	a = new SnackBar();
	a.Snack();
}

let YesInput = (b, babak) => {
	b = document.getElementById("snbr").value;
	if (b.length == 0){
		b = 'Инпут не может быть пустой';
	}
	babak = new SnackBar(b);
	babak.Snack();

}

document.getElementById('snackbar').addEventListener('click',() => {
	document.getElementById('snackbar').className = "";
})
