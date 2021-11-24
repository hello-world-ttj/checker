// PALINDROME

let arrow1 = document.getElementById("arrow1")

let palindrome = document.querySelector("#palindrome")

let inFiled1 = document.getElementById("inFiled1")

let btn1 = document.getElementById("btn1")

let result1 = document.getElementById("result1")


arrow1.addEventListener("click", function() {
    palindrome.className = "checker-div_active"
})

btn1.addEventListener("click", function() {
    let inValue1 = inFiled1.value
    let x = parseInt(inValue1)
    palindromeNumber(x)
    inFiled1.value = ""
})

function palindromeNumber(x) {
    let rem, temp,final = 0;
    let number = x
    temp = number
    while(number>0)
		{
			rem = number%10
			number = parseInt(number/10)
			final = final*10+rem
		}
        if(final==temp)
		{
			result1.innerText=`${x} is Palindrome number.`
		}
		else
		{
			result1.innerText=`${x} is not Palindrome number.`
		}
}

// PRIME

let arrow3 = document.getElementById("arrow3")

let prime = document.querySelector("#prime")

let inFiled3 = document.getElementById("inFiled3")

let btn3 = document.getElementById("btn3")

let result3 = document.getElementById("result3")

arrow3.addEventListener("click", function() {
    prime.className = "checker-div_active"
})

btn3.addEventListener("click", function() {
    let inValue3 = inFiled3.value
    let x = parseInt(inValue3)
    primeNumber(x)
    inFiled3.value = ""
})

function primeNumber(x) {
	let num = x
	let isPrime = true
	if(num ==1 ) {
		result3.innerText = "1 is neither prime nor composite number."
	}else if (num > 1) {
		for(let i = 2; i < num; i++){
			if(num % i == 0) {
				isPrime = false
				break
			}
		}
		if (isPrime) {
			result3.innerText=`${num} is a prime number.`
		} else {
			result3.innerText=`${num} is a not prime number.`
		}
	}else {
		result3.innerText = "The number is not a prime number."
	}
}

// ARMSTRONG

let arrow2 = document.getElementById("arrow2")

let armstrong = document.querySelector("#armstrong")

let inFiled2 = document.getElementById("inFiled2")

let btn2 = document.getElementById("btn2")

let result2 = document.getElementById("result2")


arrow2.addEventListener("click", function() {
	armstrong.className = "checker-div_active"
})

btn2.addEventListener("click", function() {
    let inValue2 = inFiled2.value
    let x = parseInt(inValue2)
    armstrongNumber(x)
    inFiled2.value = ""
})


function armstrongNumber(x) {
	let num = x
	let digits = 0
	let sum = 0
	let temp = num
// Finding the number of digits
	while (num > 0) {
		digits = digits + 1
		num = parseInt(num / 10)
	}

	num = temp
	// calculating sum
	while (num > 0) {
		let digit = num % 10
		sum = sum + Math.pow(digit, digits)
		num = parseInt(num / 10)
	}

	if(sum == temp) {
		result2.innerText=`${temp} is an Armstrong number.`
	}else {
		result2.innerText=`${temp} is not an Armstrong number.`
	}
}
