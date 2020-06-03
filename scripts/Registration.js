function Registration(){
	var _name = document.getElementById('name').value;
	var _password = document.getElementById('password').value;
	var _confPassword = document.getElementById('confirmPassword').value;

	

	if(_name.length == 0){
		alert('Input name. please!')
	}
	else if(_password != _confPassword){
		alert('Incorrect password!');
	}
	else if(_password.length < 2){
		alert('Password have to consist from at least 8 symbols!');
	}
	else{
		
	}
}