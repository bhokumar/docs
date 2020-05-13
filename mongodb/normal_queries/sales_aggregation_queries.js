db.sales.aggregate([{
    $group: {
        _id: "$item",
        totalQuantitySold: {
            "$sum": "$quantity"
        },
        averagePrice: {
            "$avg": "$price"
        },
        dates: {
            "$push": "$date"
        }
    }
}]);

db.sales.aggregate([
    {
        $group: {
            _id: "$item",
            totalSaleAmount: {
                "$sum": {
                    "$multiply": ["$price", "$quantity"]
                }
            }
        }
    },
    {
        $match: {"totalSaleAmount": {"$gte": 100} }
    },
    {
        $sort: {"totalSaleAmount": -1}
    }
]);