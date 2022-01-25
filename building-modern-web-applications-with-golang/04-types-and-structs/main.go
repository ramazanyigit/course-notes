package main

import (
	"log"
	"time"
)

var s = "seven"

type User struct {
	FirstName   string
	LastName    string
	PhoneNumber string
	Age         int
	BirthDate   time.Time
}

func main() {
	// var s2 = "six"

	// s := "eight"

	// log.Println("s is", s)
	// log.Println("s2 is", s2)

	// saySomething("xxx")

	user := User{
		FirstName:   "Ramazan",
		LastName:    "Yigit",
		PhoneNumber: "90 555 123-4567",
	}

	log.Println("Welcome", user.FirstName, user.LastName, "Birth Date:", user.BirthDate)
}

// func saySomething(s3 string) (string, string) {
// 	log.Println("s from the saySomething func is", s)
// 	return s3, "World"
// }
