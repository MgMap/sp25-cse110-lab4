# Part 2
1. Line 12 will print out 3. It is assessible outside of the loop since it is declared using var.
2. Line 13 will print out 150. It is assessible outside of the loop since it is declared using var. Javascript prints the last value of a list.
3. Line 14 will print out 150. It is declared using var outside of for loop. Moreover, it is assigned in the for loop meaning it will print the last value it was assigned.
4. [50, 100, 150], Because it applies a 50% discount to each price, rounds the result, and pushes it into the discounted array.
5. This will give an error since i is not assessible outside of the loop. 
6. This will give an error since discountedPrice is declared inside the loop and not assessible outside of it.
7. This will print out 150. finalPrice is declared outside of the for loop using let so it is assessible. It is will print out the last value it was assigned.
8. [50, 100, 150], Because it applies a 50% discount to each price, rounds the result, and pushes it into the discounted array.
9. This will give an error since i is not assessible outside of the loop. 
10. This will print 3 because prices.length was 3 (from [100, 200, 300]), and length holds that value.
11. [50, 100, 150] because it applies a 50% discount to each price and returns the array of discounted values.
12. Notation
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. Arithmetic
    1.  '3' + 2 will output '32'. since 3 is string, string concatenation happens.
    2.  '3' - 2 will output 1. '3' will be converted to number and subtract 2.
    3.  3 + null will output 3. null will become 0 and add with 3.
    4.  3' + null will output '3null'. Since '3' is string, string concatenation happens.
    5.  true + 3 will output 4. true will translate to 1 and add with 3.
    6.  false + null will output 0. false will translate to 0 and null will become 0.
    7.  '3' + undefined will output '3undefined'. '3' is string so it will concatenate with undefined.
    8.  '3' - undefined will output NaN. '3' becomes 3 and undefined become NaN.
14. Comparison
    1.  '2' > 1 will output true. '2' will be translate to 2 > 1 so this will output true.
    2.  '2' < '12' will output false. String comparison lexicographic. this will output false.
    3.  2 == '2' will output true. '2' is translated into 2. So 2 == 2 will output true.
    4.  2 === '2' will output false. No conversion happens. number vs string
    5.  true == 2 will output false. true is 1. 1 is not equal to 2.
    6.  true === Boolean(2) will output true. Boolean(2) is true so true === true. 
15. == (loose equality): compares values after type coercion .e.g., 2 == '2' → true. === (strict equality): compares values without type coercion. e.g., 2 === '2' → false
17. The result will be [2, 4, 6]. Modify array takes in two arguments an array and a callback function (doSomething). doSomething takes one argument a number returns the number times two. Inside the for loop on each iteration, it applies the callback function to the current element (array[i]). The result is pushed into newArr. The callback function doSomething(num) simply returns num * 2. After the loop, the newArr becomes [2, 4, 6] and is returned from the function.
19. 1 4 3 2 ![![alt text](image-1.png)](image.png)