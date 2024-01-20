function toFahrenheit(celsius) {
 // Write your code here
	 return ((celsius * 9.0 / 5.0) + 32.0);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius))); 
