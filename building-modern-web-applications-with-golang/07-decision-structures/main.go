package main

import "log"

func main() {
	isTrue := false

	if isTrue {
		log.Println("isTrue is:", isTrue)
	} else {
		log.Println("isTrue is:", isTrue)
	}

	cat := "Cat"

	if cat == "Cat" {
		log.Println("cat is Cat")
	} else {
		log.Println("cat is not Cat")
	}

	// If example
	myNum := 100
	if myNum > 99 && !isTrue {
		log.Println("myNum is greater than 99 and isTrue is set to false")
	} else if myNum < 100 && isTrue {
		log.Println("1")
	} else if myNum == 101 || isTrue {
		log.Println("2")
	} else if myNum > 1000 && isTrue == false {
		log.Println("3")
	}

	// Switch example
	myVar := "noMatch"
	switch myVar {
	case "cat":
		log.Println("myVar = cat")

	case "dog":
		log.Println("myVar is set to dog")

	case "fish":
		log.Println("cat is set to fish")

	default:
		log.Println("No match in known cases")
	}
}
