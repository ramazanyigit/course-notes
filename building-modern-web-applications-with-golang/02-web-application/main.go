package main

import (
	"errors"
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

func Divide(w http.ResponseWriter, req *http.Request) {
	f, err := divideValues(100.0, 0.0)
	if err != nil {
		fmt.Fprintln(w, "Error when dividing operation:", err)
		return
	}

	fmt.Fprintf(w, "%f divided by %f is %f", 100.0, 10.0, f)
}

func divideValues(x, y float32) (float32, error) {
	if y == 0 {
		return 0, errors.New("cannot divide by 0")
	}

	return x / y, nil
}

func main() {
	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)
	http.HandleFunc("/divide", Divide)

	log.Println("Starting web application on", srvAddr)
	err := http.ListenAndServe(srvAddr, nil)

	if err != nil {
		log.Panicln(err)
	}
}
