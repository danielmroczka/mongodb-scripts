function insert(n) {
    print('Inserting ' + n + ' documents into db.users');
    for (i = 0; i < n; i++) {
        db.users.insert(
            {
                "i": i,
                "username": "user" + i,
                "age": Math.floor(Math.random() * 120),
                "created": new Date()
            }
        );
    }
    print(db.users.count());
    print('Done');
}