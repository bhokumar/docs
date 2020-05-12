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