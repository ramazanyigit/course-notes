package main

import (
	"log"
	"math/rand"
	"time"
)

const numPool = 1000

func CalculateValue(intChan chan int) {
	randomNumber := RandomNumber(numPool)
	intChan <- randomNumber
}

func RandomNumber(n int) int {
	rand.Seed(time.Now().UnixNano())
	return rand.Intn(n)
}

func main() {
	intChannel := make(chan int)
	defer close(intChannel)

	go CalculateValue(intChannel)

	num := <-intChannel
	log.Println(num)
}
