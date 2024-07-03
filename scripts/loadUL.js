const add = new DLCore();

$.get('./demonlist/users.txt?' + add.getRandomInt(100000, 999999), (data) => {
    const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++) {
        const params = lines[i].split(';');
        add.addUsers(params[0]);
    }
});