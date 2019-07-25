
window.onscroll = function() {myFunction2()};

function myFunction2() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	var classes=navbar.classList;
	var x=230;
  if (window.pageYOffset >= 230) {//230/sticky
		navbar.classList.add("sticky")
		console.log(window.pageYOffset+". . . ."+sticky);
  } else if (window.pageYOffset <= 230){//230/sticky
		navbar.classList.remove("sticky");
		console.log(window.pageYOffset+". . . ."+sticky);
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
		var classes=x.classList;
    if (x.className == "topnav") {
        x.className += " responsive";
				console.log(classes);
    } else {
        x.className = "topnav";
				console.log(classes);
    }
}


while (true)
{
	init();
}
function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
		console.log(actual_JSON);
 });
}


function loadJSON(callback)
{
	 var xobj = new XMLHttpRequest();
			 xobj.overrideMimeType("application/json");
	xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function () {
				 if (xobj.readyState == 4 && xobj.status == "200") {
					 // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					 callback(xobj.responseText);
				 }
	 };
	 xobj.send(null);
}
