db = new Mongo().getDB("mydb");
db.createCollection('users');
db.users.insert({nome:'giacomo',cognome:'basso'});