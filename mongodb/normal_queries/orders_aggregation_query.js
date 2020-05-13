var myCursor = db.orders.aggregate([{
        $match: {
            status: "A"
        }
    },
    {
        $group: {
            _id: "$cust_id",
            total: {
                "$sum": "$amount"
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    }
]);

while (myCursor.hasNext()) {
   print(tojson(myCursor.next()));
}

db.orders.explain().aggregate([{
        $match: {
            status: "A"
        }
    },
    {
        $group: {
            _id: "$cust_id",
            total: {
                $sum: "$amount"
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    }
]);