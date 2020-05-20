db.inventory2.aggregate( [
    // First Stage
    {
      $unwind: { path: "$sizes", preserveNullAndEmptyArrays: true }
    },
    // Second Stage
    {
      $group:
        {
          _id: "$sizes",
          averagePrice: { $avg: "$price" }
        }
    },
    // Third Stage
    {
      $sort: { "averagePrice": -1 }
    }
 ] )