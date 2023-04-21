// 1 // выборку по полуб и груаппируем по штату

db.people.aggregate([
    { $match: { gender: "female" } },
    { $group: {_id: { state: "$location.state"}, totalPersons: {$sum: 1}}}
]).pretty()

// 2 // 

db.people.aggregate([
    { $project: 
        { _id: 0, gender: 1, fullName: 
            { $concat: 
                [{$toUpper: "$name.first"}, " ", {$toUpper: "$name.last"}]
            } 
        } 
    }
]).pretty()

// 3 //

db.people.aggregate([
    { $project:
        { _id: 0, name: 1, email: 1, location:
            { type: "Point", coordinates: 
                [{$convert: {input: '$location.coordinates.longitude', to: "double", onError: 0.0, onNull: 0.0 }},
                {$convert: {input: '$location.coordinates.latitude', to: "double", onError: 0.0, onNull: 0.0 }}] 
            } 
        } 
    }
]).pretty()

// 4 // 

db.people.aggregate([
    { $project:
        { _id: 0, name: 1, email: 1, birthdate:
            {$convert: {input: "$dob.date", to: "date"}},
            age: "$dob.age"
        } 
    }
]).pretty()

// 5 //

db.movies.aggregate([{$match: {year: "1957"}}])
db.movies.aggregate([{$match: {rate: {$gt: "8.8"}}}])


// 6 // вычиляем средний возраст людей

db.people.aggregate([{$group: {_id:null, avg_val:{$avg:"$dob.age"}}}])

// 7 // средняя оценка за все экзамены

db.persons.aggregate([{ $project: { name: 1, total: {$avg: "$scores.score"} } }])

// 8 //

db.movies.find({genre: 'Action'})

// 9 //

db.people.deleteMany({phone: {"$exists": false}})