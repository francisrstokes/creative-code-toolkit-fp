# Creative Code Toolkit (FP)

This library is my personal collection of helper functions in creative coding, revolving around modulation, array functions, random numbers, etc.

## Functions

## mapRange :: Vector  -> Vector    -> Number -> Number
`mapRange :: toRange -> tromRange -> value  -> Number`
Map v in `fromRange` to `fromRange`

## sinMap :: Vector -> Number -> Number
`sinMap :: toRange -> Divisor -> Number`
Map the output sin(v / div) to `toRange`

## cosMap :: Vector -> Number -> Number
`cosMap :: toRange -> Divisor -> Number`
Map the output cos(v / div) to `toRange`

## wrapValue :: Number -> Number -> Number -> Number
if v is greater than M or less than m, wrap the value around to stay in this range

## deepArrayCopy :: [a] -> [a]
Return a deep copy array a

## genArray :: Number -> []
Create an array of size s

## get1dY :: Number -> Number -> Number
`get1dY :: Columns -> Index -> Number`
Get the Y component of a 1d array containing 2d data when the index is i

## get1dX :: Number -> Number -> Number
`get1dX :: Columns -> Index -> Number`
Get the X component of a 1d array containing 2d data when the index is i
## choose :: [a] -> a
pick a random element from the array a

## without :: (\*) -> [\*] -> [\*]
get an array without a specific member

## chooseWithout :: a -> [a] -> [a]
`compose(choose, without)`

## rndB :: Vector -> Number
`rndB :: Range -> Number`
Random number in range

## rndIntB :: Vector -> Number
`rndIntB :: Range -> Number`
Random integer in range

## polute()
Polutes the global scope with unnamespaced functions