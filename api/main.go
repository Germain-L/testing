package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    http.HandleFunc("/query", func(w http.ResponseWriter, r *http.Request) {
        query := r.URL.Query().Get("q")
        fmt.Fprintf(w, "Query: %s", query)
    })

    log.Fatal(http.ListenAndServe(":8080", nil))
}
