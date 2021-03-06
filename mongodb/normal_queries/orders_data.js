db.getCollection('orders').insertMany([{
        _id: 1,
        cust_id: "abc1",
        ord_date: ISODate("2012-11-02T17:04:11.102Z"),
        status: "A",
        amount: 50
    },
    {
        _id: 2,
        cust_id: "xyz1",
        ord_date: ISODate("2013-10-01T17:04:11.102Z"),
        status: "A",
        amount: 100
    },
    {
        _id: 3,
        cust_id: "xyz1",
        ord_date: ISODate("2013-10-12T17:04:11.102Z"),
        status: "D",
        amount: 25
    },
    {
        _id: 4,
        cust_id: "xyz1",
        ord_date: ISODate("2013-10-11T17:04:11.102Z"),
        status: "D",
        amount: 125
    },
    {
        _id: 5,
        cust_id: "abc1",
        ord_date: ISODate("2013-11-12T17:04:11.102Z"),
        status: "A",
        amount: 25
    }
]);