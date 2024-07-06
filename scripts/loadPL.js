const add = new DLCore();

$.get('./demonlist/platformers.txt', (data) => {
    const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++) {
        if(!lines[i]) continue;
        
        const params = lines[i].split(' ');
        let lvlname = params[0].replace(/-/g, ' ');
        add.addDemon(lvlname, params[1], params[2], params[3], params[4]);
    }
});