# Creative Code Toolkit

This library is my personal collection of helper functions in creative coding, revolving around modulation, array functions, random numbers, etc.

## Functions

## mapRange(v, a, b, c, d)
Map v in range [a, b] to range [c, d]


| Param | Type |
| --- | --- |
| v | <code>Number</code> |
| a | <code>Number</code> |
| b | <code>Number</code> |
| c | <code>Number</code> |
| d | <code>Number</code> |


## sinMap(v, div, a, b)
Map the output sin(v / div) to the range [a, b]


| Param | Type |
| --- | --- |
| v | <code>Number</code> |
| div | <code>Number</code> |
| a | <code>Number</code> |
| b | <code>Number</code> |


## cosMap(v, div, a, b)
Map the output cos(v / div) to the range [a, b]


| Param | Type |
| --- | --- |
| v | <code>Number</code> |
| div | <code>Number</code> |
| a | <code>Number</code> |
| b | <code>Number</code> |


## wrapValue(v, m, M)
if v is greater than M or less than m, wrap the value around to stay in this range


| Param | Type |
| --- | --- |
| v | <code>Number</code> |
| m | <code>Number</code> |
| M | <code>Number</code> |


## deepArrayCopy(a)
Return a deep copy array a


| Param | Type |
| --- | --- |
| a | <code>Array.&lt;any&gt;</code> |


## genArray(s)
Create an array of size s


| Param | Type |
| --- | --- |
| s | <code>Number</code> |


## get1dY(i, rowLength)
Get the Y component of a 1d array containing 2d data when the index is i


| Param | Type |
| --- | --- |
| i | <code>Number</code> |
| rowLength | <code>Number</code> |


## get1dX(i, rowLength)
Get the X component of a 1d array containing 2d data when the index is i


| Param | Type |
| --- | --- |
| i | <code>Number</code> |
| rowLength | <code>Number</code> |


## choose(a)
pick a random element from the array a


| Param | Type |
| --- | --- |
| a | <code>Array.&lt;any&gt;</code> |


## rndB(a, b)
Random number in range [a, b]


| Param | Type |
| --- | --- |
| a | <code>Number</code> |
| b | <code>Number</code> |


## rndIntB(a, b)
Random integer in range [a, b]


| Param | Type |
| --- | --- |
| a | <code>Number</code> |
| b | <code>Number</code> |


## polute()
Polutes the global scope with unnamespaced functions