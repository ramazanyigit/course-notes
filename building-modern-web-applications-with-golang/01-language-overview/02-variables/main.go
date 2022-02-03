package main

import "fmt"

func main() {
	fmt.Println("Variables demonstration.")

	var whatToSay string
	var i int

	whatToSay = "Goodbye world."
	fmt.Println(whatToSay)

	// You cannot do that. Because go is a statically typed language.
	// i = "cat"
	i = 2

	fmt.Println("i is set to", i)

	whatWasSaid := saySomething()
	fmt.Println("The function says:", whatWasSaid)

	otherWasSaid, otherWasSaid2 := sayMultipleThings()
	fmt.Println("The other function says:", otherWasSaid, otherWasSaid2)
}

func saySomething() string {
	return "Something has been disappeared."
}

func sayMultipleThings() (string, string) {
	return "something", "else"
}
