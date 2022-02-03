package main

import (
	"fmt"
	"log"
	"net/http"
)

const srvAddr = ":9000"

func Home(w http.ResponseWriter, req *http.Request) {
	numberOfBytes, err := fmt.Fprintf(w, "Hello, world!")

	if err != nil {
		fmt.Println("Cannot write response into respone writer", err)
	} else {
		fmt.Println("Bytes written:", numberOfBytes)
	}
}

func About(w http.ResponseWriter, req *http.Request) {
	numberOfBytes, err := fmt.Fprintf(w, "About page! Sum: %d", AddValues(2, 2))

	if err != nil {
		fmt.Println("Cannot write response into respone writer", err)
	} else {
		fmt.Println("Bytes written:", numberOfBytes)
	}
}

func AddValues(x, y int) int {
	return x + y
}

func main() {
	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)

	log.Println("Starting web application on", srvAddr)
	err := http.ListenAndServe(srvAddr, nil)

	if err != nil {
		log.Panicln(err)
	}
}
