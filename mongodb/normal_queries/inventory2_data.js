db.inventory2.insertMany([
    { "_id" : 1, "item" : "ABC", price: NumberDecimal("80"), "sizes": [ "S", "M", "L"] },
    { "_id" : 2, "item" : "EFG", price: NumberDecimal("120"), "sizes" : [ ] },
    { "_id" : 3, "item" : "IJK", price: NumberDecimal("160"), "sizes": "M" },
    { "_id" : 4, "item" : "LMN" , price: NumberDecimal("10") },
    { "_id" : 5, "item" : "XYZ", price: NumberDecimal("5.75"), "sizes" : null }
  ])