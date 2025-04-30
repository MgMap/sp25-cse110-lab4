1. The bug was that the input values retrieved from the HTML input elements were strings. When passed to `calculateSum()`, the `+` operator performed string concatenation instead of numerical addition.
2. To fix this bug, convert `num1` and `num2` to numbers using the `Number()` function before performing the addition.
