db.employees.insertMany([{
        "_id": 1,
        "name": "Dev"
    },
    {
        "_id": 2,
        "name": "Eliot",
        "reportsTo": "Dev"
    },
    {
        "_id": 3,
        "name": "Ron",
        "reportsTo": "Eliot"
    },
    {
        "_id": 4,
        "name": "Andrew",
        "reportsTo": "Eliot"
    },
    {
        "_id": 5,
        "name": "Asya",
        "reportsTo": "Ron"
    },
    {
        "_id": 6,
        "name": "Dan",
        "reportsTo": "Andrew"
    }
]);