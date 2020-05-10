db.getCollection('inventory').find({
    "tags": {
        "$eq": ["A", "B"]
    }
});
db.getCollection('inventory').find({
    "item.name": {
        "$eq": "mn"
    }
});
db.getCollection('inventory').find({
    "item.name": {
        "$eq": "ab"
    }
});

db.getCollection('inventory').find({
    size: {
        h: 14,
        w: 21,
        uom: "cm"
    }
}); // Will Return a result
db.getCollection('inventory').find({
    size: {
        w: 21,
        h: 14,
        uom: "cm"
    }
}); // Will not Return a result
db.getCollection('inventory').find({
    size: {
        "$eq": {
            h: 14,
            w: 21,
            uom: "cm"
        }
    }
});

db.getCollection('inventory').find({
    'size.uom': 'in'
}); // with dotted notation of field both must be wrapped under quotes

db.getCollection('inventory').find({
    "size.h": {
        $lt: 15
    }
});

db.getCollection('inventory').find({
    "size.h": {
        $lt: 15
    },
    "size.uom": "in",
    status: "D"
});

db.getCollection('inventory').find({
    "tags": {
        "$eq": ["blank", "red"]
    }
});

db.getCollection('inventory').find({
    "tags": {
        "$all": ["blank", "red"]
    }
});


db.getCollection('inventory').find({
    "tags": {
        "$all": ["blank", "red"]
    }
});


db.getCollection('inventory').find({
    "dim_cm": {
        "$gt": 15,
        "$lt": 20
    }
}); // Matches any condition


db.getCollection('inventory').find({
    "dim_cm": {
        "$elemMatch": {
            "$gt": 15,
            "$lt": 20
        }
    }
}); // Matches Both Conditions


db.getCollection('inventory').find({
    "dim_cm.1": {
        "$lt": 25
    }
});

db.getCollection('inventory').find({
    "dim_cm.0": {
        "$eq": 10
    }
});

db.getCollection('inventory').find({
    "dim_cm": {
        "$size": 3
    }
});


db.getCollection('inventory').find({
    "dim_cm": {
        "$size": 2
    },
    "tags": {
        "$size": 3
    }
});


// Embedded documents in array

db.getCollection('inventory').find({
    "instock": {
        "warehouse": "A",
        "qty": 5
    }
});

db.getCollection('inventory').find({
    "instock.qty": {
        "$eq": 5
    }
});

db.getCollection('inventory').find({
    "instock.1.qty": 5
});

db.getCollection('inventory').find({
    "instock.1.qty": {
        "$lt": 10
    }
});

db.getCollection('inventory').find({
    "instock": {
        "warehouse": "B",
        qty: {
            "$gt": 5
        }
    }
});


db.getCollection('inventory').find({
    "instock": {
        qty: 5,
        "warehouse": "A"
    }
});

db.getCollection('inventory').find({
    "instock": {
        "$elemMatch": {
            qty: 5,
            "warehouse": "A"
        }
    }
});

db.getCollection('inventory').find({
    "instock": {
        "$elemMatch": {
            qty: {
                "$lt": 20,
                "$gt": 10
            }
        }
    }
});

db.inventory.find({
    "instock.qty": {
        $gt: 10,
        $lte: 20
    }
});

db.inventory.find({
    status: "A"
}, {
    item: 1, status: 1, instock: 1
});


db.inventory.find({
    status: "A"
}, {
    item: 1, status: 1, instock: 1, _id: 0
});
