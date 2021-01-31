# Part 1: Intro to Javascript

## Variables & Scoping
1. What will happen at line 11 and why?
- Assuming the function is called, the 'i' or 'prices.length' is printed, otherwise nothing is printed. Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.
2. What will happen at line 12 and why?
- Assuming the function is called, the value for 'discountedPrice' is printed as expected, otherwise nothing is printed. If a code block is inside a function, then var becomes a function-level variable, and so the var 'discountedPrice' is visible through the for codeblock despite being declared within the codeblock. 
3. What will happen at line 13 and why?
- Assuming the function is called, the value is printed, otherwise nothing is printed. The variable finalPrice is initialized within a visible scope. 
4. What will the function return if we call discountPrices([100, 200, 300], .5) ? Give a brief explanation. 
- The value returned is the array [50, 100, 150]. The 'for' loop
  halves each price and then pushes the price to the discounted array as expected since all the variables concerned are within scope.
5. What will happen at line 11 and why?
- A reference error occurs. Even though 'let i' seeimgly appears to exist outside of the code block, the 'for' loop conditions are considered to be part of the code block, and so 'let i' is only visible within the code block.    
6. What will happen at line 12 and why?
- A reference error will occur. Since discounted price is declared using let, it does not have visibility outside of the code block. 
7. What will happen at line 13 and why?
- The value will print. The let variable is declared within scope. 
8. What will the function return for discountPrices([100,200,300],.5)? Give a brief explanation
- The value return is the array [50, 100, 150]. The 'for' loop
  halves each price and then pushes the price to the discounted array as expected since all the variables concerned are within scope.
9. What will happen at line 11 and why?
- A reference error occurs. Even though 'let i' seeimgly appears to exist outside of the code block, the 'for' loop conditions are considered to be part of the code block, and so 'let i' is only visible within the code block.   
10.  What will happen at line 12 and why?
- A reference error occurs. Since discountedPrice is declared using 'const', it does not have visibility outside of the code block.
11.   What will happen at line 13 and why?
- A type error occurs. Variables declared as 'const' cannot be reassigned as in line 7. 
12.  What will the function return for discountPrices([100,200,300], .5)? Give a brief explanation. 
- Ignoring errors, the function should return an [50, 100, 150]. If all variables except discounted is changed to 'let', then the function will run as expected since the elements within a const array can change though a const array cannot be reassigned. 

## Data Types
13.  Given the above Object, write the notation for:  
- a) student.name
- b) student["Grad Year"]
- c) student.greeting()
- d) student["Favorite Teacher"].name
- e) student.courseLoad[1]

## Basic Operators & Type Conversion
14. Arithmetic
- a) 32 . Adding a number and a string will return a string
- b) 1 .  Subtraction converts operands to numbers
- c) 3 . null is evaluated as 0 and addition is performed.
- d) 3null . The values are interpreted as strings and concatenated. 
- e) 4 . Since neither is a string, numeric addition is applied to true(1) and 3. 
- f) 0 . Since neither is a string, numeric addition is applied to false(0) and null(0). 
- g) 3undefined . Since 3 is a string, concatenation is applied. 
- h) NaN. Since '3' is a string, but subtraction is not a string operation, the result is NaN. 

15.  Comparison
- a) true. The operands are converted numerically. 
- b) false. Since they are both strings, the character codes are compared and 2 is alphabetically larger than 1.
- c) true. The operands are converted numerically. 
- d) false. The operands are not converted before comparison
- e) false. true is numerically 1
- f) true. The Boolean() function converts intuitively non-empty values to 1. 

16. Explain the difference between the == and === operators
- == converts the variable values to the same type before performing comparison. === does not do any type conversion and returns true only if both values and types are identical for the two variables being compared. 

## Conditionals
17. From the code snippet below, explain what gets printed and why.
- 'How are you?'. In the first if, true is converted to 1 and compared. Since 2 != 1, the statement enters the else if block. 2 is converted to true, and so the else if block is entered and the 'How are you?' statement gets printed. 

## Functions

19.  If the function below is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.
- [6, 8, 10] . For each array element passed in, the callback function doSomething() is called which adds 2 to the element, which is then multiplied by 2 and pushed upon return. The resulting calculations performed on the elements is then (1+2)*2 = 6, (2+2)*2 = 8, and (3+2)*2= 10. 

21. What is the output of this code?
- 1
4
3
2

