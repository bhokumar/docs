db.scores.update({
    _id: 1
}, {
    $min: {
        lowScore: 150
    }
});

db.scores.update({
    _id: 1
}, {
    $max: {
        highScore: 900
    }
});


db.scores.aggregate([{
        $set: {
            totalHomeWork: {
                "$sum": "$homework"
            },
            totalQuiz: {
                "$sum": "$quiz"
            }
        }
    },
    {
        $set: {
            totalScore: {
                $add: ["$totalHomework", "$totalQuiz", "$extraCredit"]
            }
        }
    }
]);