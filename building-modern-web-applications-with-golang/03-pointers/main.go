package main

import "log"

func main() {
	var myString string
	myString = "Hello world."

	log.Println("myString is set to", myString)
	changeUsingPointer(&myString)
	log.Println("after function call myString is set to", myString)
}

func changeUsingPointer(myString *string) {
	log.Println("Memory address of myString is", myString)
	*myString = "Hello from another world."
}
