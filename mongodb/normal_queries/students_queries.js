db.students.updateOne({_id: 1}, [{$set: {"test3": 98, modified: "$$NOW" }}]);

db.students.updateOne({_id: 1}, {});