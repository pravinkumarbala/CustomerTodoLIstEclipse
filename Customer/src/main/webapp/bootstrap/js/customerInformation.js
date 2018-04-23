function login(){
	var	userName = document.getElementById("emailAddress").value;
	var password = document.getElementById("password").value;

	if (!userName && !password) {
		alert("Please enter the login credentials in the fields");
	} else {
		for (var i = 0; i < localStorage.length; i++) {
			var _getUserDetails = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if (userName == _getUserDetails.emailAddress && password == _getUserDetails.password) {
				alert("Correct Username " + userName + " password : " + password);
				window.location = "home.html";
			}
		}
	}
}

function registerForm(){
	let userName = document.getElementById("userName").value;
	let emailAddress = document.getElementById("emailAddress").value;
	let password = document.getElementById("password").value;
	let repassword = document.getElementById("repassword").value;
	let dateOfBirth = document.getElementById("dateOfBirth").value;
	
	if(!userName && !emailAddress && !password && !repassword && !dateOfBirth){
		alert("Please enter all the information in the input fields");
	} else {
		var userRegister = {
				userName: userName,
				emailAddress: emailAddress,
				password: password,
				repassword: repassword,
				dateOfBirth: dateOfBirth
		};

		if (password == repassword) {
			localStorage.setItem(userRegister.emailAddress, JSON.stringify(userRegister));
			console.log(userRegister.userName + " " + userRegister.emailAddress + " " + userRegister.password + " " + userRegister.dateOfBirth);
			window.location = "index.html";
		} else {
			console.log("The password are not same");
		}
	}
}