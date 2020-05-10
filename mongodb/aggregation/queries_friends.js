db.friends.aggregate([{
        $unwind: "$hobbies"
    },
    {
        $group: {
            _id: {
                age: "$age"
            },
            allHobbies: {
                $add    : "$hobbies"
            }
        }
    }
]).pretty()

db.friends.aggregate([{
    $project:  {_id: 0, examScore: { $slice: ["$examScores", 2, 1]}}
}]).pretty()
