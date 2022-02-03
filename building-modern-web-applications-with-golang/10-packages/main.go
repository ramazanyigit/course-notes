package main

import (
	"log"

	"github.com/ramazanyigit/course-notes/building-modern-web-applications-with-golang/10-packages/helpers"
)

func main() {
	log.Println("Hello")

	var myVar helpers.SomeType
	myVar.TypeName = "SomeName"

	log.Println(myVar.TypeName)
}
