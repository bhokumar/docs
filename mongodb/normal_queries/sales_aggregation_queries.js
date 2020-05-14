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

db.sales.aggregate([{
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
        $match: {
            "totalSaleAmount": {
                "$gte": 100
            }
        }
    },
    {
        $sort: {
            "totalSaleAmount": -1
        }
    }
]);

db.sales.aggregate([{
        $match: {
            "date": {
                "$gte": new ISODate("2014-01-01"),
                "$lt": new ISODate("2015-01-01")
            }
        }
    },
    {
        "$group": {
            _id: {
                $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$date"
                }
            },
            totalSaleAmount: {
                "$sum": {
                    "$multiply": ["$price", "$quantity"]
                }
            },
            averageQuantity: {
                "$avg": "$quantity"
            },
            count: {
                "$sum": 1
            }
        }
    },
    {
        "$sort": {
            "totalSaleAmount": -1
        }
    }
]);