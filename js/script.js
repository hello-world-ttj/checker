let arrow = document.getElementById("arrow")

let palindrome = document.querySelector("#palindrome")

let inFiled = document.getElementById("inFiled")

let btn = document.getElementById("btn")

let result = document.getElementById("result")

arrow.addEventListener("click", function() {
    palindrome.className = "palindrome_active"
})

btn.addEventListener("click", function() {
    let inValue = inFiled.value
    let x = parseInt(inValue)
    palindromeNumber(x)
    inFiled.value = ""
})

function palindromeNumber(x) {
    console.log(x);
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
			result.innerText=`${x} is Palindrome number`
		}
		else
		{
			result.innerText=`${x} is not Palindrome number`
		}
}