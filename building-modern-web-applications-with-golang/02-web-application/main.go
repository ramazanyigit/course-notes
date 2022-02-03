package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		numberOfBytes, err := fmt.Fprintf(w, "Hello, world!")

		if err != nil {
			fmt.Println("Cannot write response into respone writer", err)
		} else {
			fmt.Println("Bytes written:", numberOfBytes)
		}
	})

	http.ListenAndServe(":9000", nil)
}
