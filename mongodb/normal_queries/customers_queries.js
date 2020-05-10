db.getCollection("customers").updateOne({
    _id: 1
}, {
    $currentDate: {
        lastModified: true,
        "cancellation.date": {
            $type: "timestamp"
        }
    },
    $set: {
        "cancellation.reason": "User Request",
        "status": "D"
    }
});

db.customers.updateOne({
        _id: 1
    },
    [{
        $set: {
            lastModified: "$$NOW",
            cancellation: {
                date: "$$CLUSTER_TIME",
                reason: "user request"
            },
            status: "D"
        }
    }]
);