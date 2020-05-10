const data = [{
        _id: 1,
        item: {
            name: "ab",
            code: "123"
        },
        qty: 15,
        tags: ["A", "B", "C"]
    },
    {
        _id: 2,
        item: {
            name: "cd",
            code: "123"
        },
        qty: 20,
        tags: ["B"]
    },
    {
        _id: 3,
        item: {
            name: "ij",
            code: "456"
        },
        qty: 25,
        tags: ["A", "B"]
    },
    {
        _id: 4,
        item: {
            name: "xy",
            code: "456"
        },
        qty: 30,
        tags: ["B", "A"]
    },
    {
        _id: 5,
        item: {
            name: "mn",
            code: "000"
        },
        qty: 20,
        tags: [
            ["A", "B"], "C"
        ]
    }
];


db.inventory.insertMany([{
        item: "journal",
        qty: 25,
        size: {
            h: 14,
            w: 21,
            uom: "cm"
        },
        status: "A"
    },
    {
        item: "notebook",
        qty: 50,
        size: {
            h: 8.5,
            w: 11,
            uom: "in"
        },
        status: "A"
    },
    {
        item: "paper",
        qty: 100,
        size: {
            h: 8.5,
            w: 11,
            uom: "in"
        },
        status: "D"
    },
    {
        item: "planner",
        qty: 75,
        size: {
            h: 22.85,
            w: 30,
            uom: "cm"
        },
        status: "D"
    },
    {
        item: "postcard",
        qty: 45,
        size: {
            h: 10,
            w: 15.25,
            uom: "cm"
        },
        status: "A"
    }
]);


db.inventory.insertMany([{
        item: "journal",
        qty: 25,
        tags: ["blank", "red"],
        dim_cm: [14, 21]
    },
    {
        item: "notebook",
        qty: 50,
        tags: ["red", "blank"],
        dim_cm: [14, 21]
    },
    {
        item: "paper",
        qty: 100,
        tags: ["red", "blank", "plain"],
        dim_cm: [14, 21]
    },
    {
        item: "planner",
        qty: 75,
        tags: ["blank", "red"],
        dim_cm: [22.85, 30]
    },
    {
        item: "postcard",
        qty: 45,
        tags: ["blue"],
        dim_cm: [10, 15.25]
    }
]);

db.inventory.insertMany([{
        item: "journal",
        instock: [{
            warehouse: "A",
            qty: 5
        }, {
            warehouse: "C",
            qty: 15
        }]
    },
    {
        item: "notebook",
        instock: [{
            warehouse: "C",
            qty: 5
        }]
    },
    {
        item: "paper",
        instock: [{
            warehouse: "A",
            qty: 60
        }, {
            warehouse: "B",
            qty: 15
        }]
    },
    {
        item: "planner",
        instock: [{
            warehouse: "A",
            qty: 40
        }, {
            warehouse: "B",
            qty: 5
        }]
    },
    {
        item: "postcard",
        instock: [{
            warehouse: "B",
            qty: 15
        }, {
            warehouse: "C",
            qty: 35
        }]
    }
]);


db.inventory.insertMany([{
        item: "journal",
        status: "A",
        size: {
            h: 14,
            w: 21,
            uom: "cm"
        },
        instock: [{
            warehouse: "A",
            qty: 5
        }]
    },
    {
        item: "notebook",
        status: "A",
        size: {
            h: 8.5,
            w: 11,
            uom: "in"
        },
        instock: [{
            warehouse: "C",
            qty: 5
        }]
    },
    {
        item: "paper",
        status: "D",
        size: {
            h: 8.5,
            w: 11,
            uom: "in"
        },
        instock: [{
            warehouse: "A",
            qty: 60
        }]
    },
    {
        item: "planner",
        status: "D",
        size: {
            h: 22.85,
            w: 30,
            uom: "cm"
        },
        instock: [{
            warehouse: "A",
            qty: 40
        }]
    },
    {
        item: "postcard",
        status: "A",
        size: {
            h: 10,
            w: 15.25,
            uom: "cm"
        },
        instock: [{
            warehouse: "B",
            qty: 15
        }, {
            warehouse: "C",
            qty: 35
        }]
    }
]);

db.inventory.insertMany( [
    { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
    { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
 ] );

 