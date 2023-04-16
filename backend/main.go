package main

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Todo struct {
	gorm.Model
	Title  string
	Done   bool
	TodoId int
}

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run() // 0.0.0.0:8080 でサーバーを立てます。
}

// func main() {
// 	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
// 	if err != nil {
// 		panic("failed to connect database")
// 	}

// 	// Migrate the schema
// 	db.AutoMigrate(&Product{})

// 	// Create
// 	db.Create(&Product{Code: "D42", Price: 100})

// 	// Read
// 	var product Product
// 	db.First(&product, 1)                 // find product with integer primary key
// 	db.First(&product, "code = ?", "D42") // find product with code D42

// 	// Update - update product's price to 200
// 	db.Model(&product).Update("Price", 200)
// 	// Update - update multiple fields
// 	db.Model(&product).Updates(Product{Price: 200, Code: "F42"}) // non-zero fields
// 	db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})

// 	// Delete - delete product
// 	db.Delete(&product, 1)
// }
