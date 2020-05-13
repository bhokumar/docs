db.orders.aggregate([{
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

db.orders.aggregate([{
        $match: {
            amount: {
                $gte: 25
            }
        }
    },
    {
        $group: {
            _id: "$status",
            total: {
                "$sum": "$amount"
            },
            customerId: {
                "$first": "$cust_id"
            }
        }
    },
    {
        $sort: {
            "amount": 1
        }
    }
]);

db.orders.aggregate([{
        $match: {
            amount: {
                $gte: 25
            }
        }
    },
    {
        $group: {
            _id: "$status",
            total: {
                "$sum": "$amount"
            },
            customerId: {
                "$addToSet": "$cust_id"
            }
        }
    },
    {
        $sort: {
            "amount": 1
        }
    }
]);

db.orders.aggregate([{
        $match: {
            amount: {
                $gte: 25
            }
        }
    },
    {
        $group: {
            _id: "$status",
            maximumAmountWithStatus: {
                "$max": "$amount"
            },
            customerId: {
                "$addToSet": "$cust_id"
            }
        }
    },
    {
        $sort: {
            "amount": 1
        }
    }
]);

db.orders.aggregate([{
        $match: {
            amount: {
                $gte: 25
            }
        }
    },
    {
        $group: {
            _id: "$status",
            minAmountWithStatus: {
                "$min": "$amount"
            },
            customerId: {
                "$addToSet": "$cust_id"
            }
        }
    },
    {
        $sort: {
            "amount": 1
        }
    }
]);


db.orders.aggregate([{
        $match: {
            amount: {
                $gte: 25
            }
        }
    },
    {
        $group: {
            _id: "$status",
            avgAmountWithStatus: {
                "$avg": "$amount"
            },
            customerId: {
                "$addToSet": "$cust_id"
            }
        }
    },
    {
        $sort: {
            "amount": 1
        }
    }
]);


db.orders.aggregate([{
        $match: {
            amount: {
                $gte: 25
            }
        }
    },
    {
        $group: {
            _id: "$status",
            avgAmountWithStatus: {
                "$avg": "$amount"
            },
            minAmountWithStatus: {
                "$min": "$amount"
            },
            maxAmountWithStatus: {
                "$max": "$amount"
            },
            customerId: {
                "$addToSet": "$cust_id"
            }
        }
    },
    {
        $sort: {
            "amount": 1
        }
    }
]);


db.orders.aggregate([{
    $match: {
        amount: {
            $gte: 25
        }
    }
},
{
    $group: {
        _id: "$status",
        avgAmountWithStatus: {
            "$avg": "$amount"
        },
        minAmountWithStatus: {
            "$min": "$amount"
        },
        maxAmountWithStatus: {
            "$max": "$amount"
        },
        customerIds: {
            "$push": "$cust_id"
        }
    }
},
{
    $sort: {
        "amount": 1
    }
}
]);