        // 1- If a number received from the keyboard is even if it is not an HTML page, enter the code in the console
        // var number=+prompt("please enter the number")
        // if(number%2==0){
        //     alert("Even number")
        // }
        // else{
        //     console.log("Odd Number")
        // }
        // confirm("Confirm to message") //This confirm code gives confirmation to the user.
        // If you put an exclamation point in front of it, it turns it upside down. 
        // var isTrue=true console.log(isTrue)=true console.log(!isTrue)=false


        // 2- If the remainder of the given number is divided by 3, write it twice on the page, if it is divided by two, write it 3 times, and if it is divisible by 3, write it on the page.
        
        // var num=+prompt("Please enter the number")
        // if(num%3==1){
        //     console.log(num*2)
        // }
        // else if(num%3==2){
        //     console.log(num*3)
        // }
        // else if(num%3==0){
        //     document.write(num)
        // }
        // else{
        //     alert("Enter a valid number.")
        // }

        // 3- If the remainder of a number entered from the keyboard is 2 when divided by 5, and the remainder is 2 when the same number is divided by 3, write the product multiplied by two on the screen.

        // var num=+prompt("Please enter the number")
        // if(num%5==2 && num%3==2){
        //     document.write(num*2)
        // }
        // else{
        //     alert("You did not write the correct number!")
        // }

        // 4-EXAMPLE
        // let numPlate="28"
        // switch(numPlate){
        //     case "06":
        //         console.log("ANKARA")
        //         break
        //     case "34":
        //         console.log("İSTANBUL")
        //         break
        //     case "01":
        //         console.log("ADANA")
        //         break
        //     case "35":
        //         console.log("İZMİR")
        //         break
        //     case "25":
        //         console.log("ERZURUM")
        //         break
        //     case "16":
        //         console.log("BURSA")
        //         break
        //     default:
        //         console.log("Unknown Number Plate")
        //         break
        // }

        // 5- Take two numbers from the keyboard along with the operation operator you will perform and perform four operations according to the operator you will choose and write it on the page.

        // var num1=+prompt("Please enter a first number")
        // var num2=+prompt("Please enter a second number")
        // let operation=prompt("Please enter the operation you want to make.")
        // switch(operation){
        //     case "+":
        //         alert(num1+num2)
        //         break
        //     case "-":
        //         alert(num1-num2)
        //         break
        //     case "*":
        //         alert(num1*num2)
        //         break
        //     case "/":
        //         alert(num1/num2)
        //         break
        //     default:
        //         alert("invalid operation")
        // }

        // 6- Write the sum of odd numbers and the multiplication of even numbers up to the number entered on the keyboard.
        
        // var num=+prompt("Please enter the number")
        // let total=0
        // let multiply=1
        // for(let i=1;i<num;i++){
        //     if(i%2==0){
        //         multiply*=i
        //     }
        //     else{
        //         total+=i
        //     }
        // }
        // document.write("Result: <br> total: "+total+"<br>multiply: "+multiply)

        // 7- Find the factorial calculation of the number entered from the keyboard.
        // let num=+prompt("Please enter the number")
        // var multiply=1
        // for(let i=1;i<=num;i++){
        //     multiply*=i
        // }
        // document.write("Result: "+multiply)

        // 8- Show the fibonacci sequence up to the number entered from the keyboard
        // let num1=0
        // let num2=1
        // let total=0
        // let end=+prompt("Please enter the number")
        // document.write(num2+" ")
        // for(let i=1;i<end;i++){
        //     total=num1+num2
        //     num1=num2
        //     num2=total
        //     document.write(total+" ")
        // }