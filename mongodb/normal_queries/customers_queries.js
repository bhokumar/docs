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