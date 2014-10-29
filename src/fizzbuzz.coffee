class Fizzbuzz

	isDivisibleByThree: (number) ->
		@isDivisibleBy(number, 3)

	isDivisibleByFive: (number) ->
		@isDivisibleBy(number, 5)

	isDivisibleByFifteen: (number) ->
		@isDivisibleBy(number, 15)

	isDivisibleBy: (divisor, number) ->
		divisor % number == 0

	says: (number) ->
		if @isDivisibleByFifteen(number)
			"Fizzbuzz"
		else if @isDivisibleByThree(number)
			"Fizz"
		else if @isDivisibleByFive(number)
			"Buzz"
		else
			number


module.exports = Fizzbuzz