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
			result1.innerText=`${x} is Palindrome number`
		}
		else
		{
			result1.innerText=`${x} is not Palindrome number`
		}
}

// FIBONACCI

let arrow2 = document.getElementById("arrow2")

let fibonacci = document.querySelector("#fibonacci")

let inFiled2 = document.getElementById("inFiled2")

let btn2 = document.getElementById("btn2")

let result2 = document.getElementById("result2")

let result2_1 = document.getElementById("result2_1")

arrow2.addEventListener("click", function() {
	fibonacci.className = "checker-div_active"
})

btn2.addEventListener("click", function() {
    let inValue2 = inFiled2.value
    let x = parseInt(inValue2)
    fibonacciSeries(x)
    inFiled2.value = ""
})


function fibonacciSeries(x) {
	let num = x
	console.log(num);
	let n1 = 0, n2 = 1, n3
	result2.innerText = `Fibonacci Series of :${num}`
	for(let i = 1; i <= num; i++) {
		result2_1.innerText += n1 +'|'
		n3 = n1 + n2
		n1 = n2
		n2 = n3
	}
}
