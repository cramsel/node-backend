const sqlite3 = require('sqlite3').verbose();

//open the db
let db = new sqlite3.Database('./dummy.db', (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the database.');
});

//close the db
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Closing database connection.');
});