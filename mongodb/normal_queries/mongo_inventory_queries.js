db.getCollection('inventory').find({"tags": {"$eq": ["A", "B"]}});
db.getCollection('inventory').find({"item.name": {"$eq": "mn"}});
db.getCollection('inventory').find({"item.name": {"$eq": "ab"}});