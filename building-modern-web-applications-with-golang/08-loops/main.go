package main

import "log"

type User struct {
	FirstName string
	LastName  string
	Email     string
	Age       int
}

func main() {
	log.Println("==== Classic for loop.")
	for i := 0; i <= 10; i++ {
		log.Println(i)
	}

	log.Println("==== Foreach on animals slice.")
	animals := []string{"dog", "fish", "horse", "cow", "cat"}
	for _, animal := range animals {
		log.Println(animal)
	}

	log.Println("==== Foreach on animals map.")
	animalsMap := make(map[string]string)
	animalsMap["cat"] = "Meow"
	animalsMap["dog"] = "Bark"
	for key, animal := range animalsMap {
		log.Println(key, animal)
	}

	log.Println("==== Foreach on a string")
	firstLine := "Once upon a midnight diary"
	for i, l := range firstLine {
		log.Println(i, ":", l)
	}

	log.Println("=== Foreach on a custom typed slice.")
	var users []User
	users = append(users, User{"John", "Smith", "john@smith.com", 22})
	users = append(users, User{"Jane", "Smith", "jane@smith.com", 20})
	users = append(users, User{"Rick", "Morty", "admin@ricknmorty.com", 120})

	for _, user := range users {
		log.Println(user.FirstName, user.LastName, user.Email, user.Age)
	}
}
