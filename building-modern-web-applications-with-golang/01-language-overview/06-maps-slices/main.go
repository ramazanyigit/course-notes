package main

import (
	"log"
	"sort"
)

type User struct {
	FirstName string
	LastName  string
}

func main() {
	exampleMap := make(map[string]string)
	exampleMap["whoami"] = "ramazanyigit"
	exampleMap["whereami"] = "/home/ramazanyigit/nowhere"
	log.Println(exampleMap["whoami"])
	log.Println(exampleMap["whereami"])

	exampleMap2 := make(map[string]int)
	exampleMap2["first"] = 1
	exampleMap2["second"] = 2
	log.Println(exampleMap2["first"], exampleMap2["second"])

	structValuedMap := make(map[string]User)

	me := User{
		FirstName: "Ramazan",
		LastName:  "Yigit",
	}

	structValuedMap["me"] = me
	log.Println(structValuedMap["me"].FirstName)

	var mySlice []string
	mySlice = append(mySlice, "Ramazan")
	mySlice = append(mySlice, "Yigit")
	mySlice = append(mySlice, "Berk")

	log.Println("My Slice:", mySlice)

	var myIntegerSlice []int
	myIntegerSlice = append(myIntegerSlice, 2)
	myIntegerSlice = append(myIntegerSlice, 1)
	myIntegerSlice = append(myIntegerSlice, 3)
	sort.Ints(myIntegerSlice)

	log.Println("My sorted integer slice:", myIntegerSlice)

	numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}
	log.Println("Numbers:", numbers)
	log.Println("Subslice of numbers:", numbers[2:5])
}
