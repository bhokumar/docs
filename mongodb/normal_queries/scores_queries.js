db.scores.update({
    _id: 1
}, {
    $min: {
        lowScore: 150
    }
});