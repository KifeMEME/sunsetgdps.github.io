const add = new DLCore();

$.get('./demonlist/demons.txt', (data) => {
    const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++) {
        const params = lines[i].split(' ');
        let lvlname = params[0].replace(/-/g, ' ');
        add.addDemon(lvlname, params[1], params[2], params[3]);
    }
});