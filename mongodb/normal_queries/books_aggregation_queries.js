db.getCollection('books').aggregate([{
    $group: {
        _id: "$author",
        books: {
            $addToSet: "$title"
        }
    }
}]);

db.getCollection('books').aggregate([{
    $group: {
        _id: "$author",
        books: {
            $push: "$$ROOT"
        }
    }
}, {
    $addFields: {
        totalCopies: {"$sum": "$books.copies"}
    }
}]);