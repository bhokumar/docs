db.getCollection('products').updateOne({
    sku: "abc123"
}, {
    "$inc": {
        quantity: -2,
        "metrics.orders": 1
    }
});