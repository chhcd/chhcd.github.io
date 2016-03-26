// Conect with the Parse Database Server and "Misa con Niños" App
Parse.initialize("PAUKKflvcW1GrmfBWWAPRGmpfC02b6I6fUXL7WQG", "LNNk930M5qjrOdtb3jmiKhWgzaUqkH8cMY3B4nG5");

// Function used when the user is going to sign up
function signUp(){
	// Retrieve Info
	var name = document.getElementById("signUpName").value;
	var lastName = document.getElementById("signUpLastName").value;
	var newUser = document.getElementById("signUpUser").value;
	var password = document.getElementById("signUpPassword").value;
	var email = document.getElementById("signUpEmail").value;

	// Sign Up Account on the Database
	var user = new Parse.User();
	user.set("username", newUser);
	user.set("password", password);
	user.set("email", email); 
	user.set("name", name);
	user.set("lastName", lastName);

	// Take action if the account was created or not
	user.signUp(null, {
	  success: function(user) {
	    // If it worked, do the following steps
	    Parse.User.logIn(newUser, password, {
		  success: function(user) {
		    // If it worked, do the following steps
		    window.location.href = 'perfil.html';
		    alert("Completa la siguiente información de ser posible");
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    document.getElementById("logInError").innerHTML = "¡Datos Incorrectos!";
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});				
}

function logIn(){
	var newUser = document.getElementById("logInUser").value;
	var password = document.getElementById("logInPassword").value;

	Parse.User.logIn(newUser, password, {
	  success: function(user) {
	    // If it worked, do the following steps
	    window.location.href = 'inicio.html';
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    document.getElementById("logInError").innerHTML = "¡Datos Incorrectos!";
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

function logOut(){
	Parse.User.logOut();
	window.location.href = 'bienvenida.html';
}