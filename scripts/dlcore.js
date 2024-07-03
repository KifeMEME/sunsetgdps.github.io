class DLCore {
    dli = 1;
    uli = 0;

    getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getInfoFromRecords(username) {
        return new Promise((resolve, reject) => {
            $.get('./demonlist/records.txt?' + this.getRandomInt(100000, 999999), (data) => {
                const lines = data.split('\n');
                const demons = [];
    
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].includes(username)) {
                        const args = lines[i].split(' ');
                        const lvlname = args[1].replace(/-/g, ' ');;
                        demons.push(args[0] + ';' + lvlname + ';' + args[2] + ';' + args[3]);
                    } else {
                        continue;
                    }
                }
    
                this.uli++;
                resolve(demons);
            }).fail((error) => {
                reject(error);
            });
        });
    }

    addDemon(name, author, id, link) {
        const list = document.getElementById('dl');
        const item = document.createElement('li');
        item.className = 'dl-item';
        item.onclick = () => { window.location.href = link };
        list.appendChild(item);

        const img = document.createElement('img');
        img.src = './img/lvls/' + id + '.png?' + this.getRandomInt(100000, 999999);
        img.alt = '';
        item.appendChild(img);

        const div = document.createElement('div');
        item.appendChild(div);

        const h2 = document.createElement('h2');
        const h2Text = this.dli + '. ' + name;
        const h2TextNode = document.createTextNode(h2Text);
        h2.appendChild(h2TextNode);
        div.appendChild(h2);

        const p = document.createElement('p');
        const pText = 'by ' + author;
        const pTextNode = document.createTextNode(pText);
        p.appendChild(pTextNode);
        div.appendChild(p);

        this.dli++;
    }

    addUsers(username) {
        const list = document.getElementById('leaders-list');
        const item = document.createElement('li');
        item.className = 'leaders-item';
        list.appendChild(item);
    
        const div = document.createElement('div');
        item.appendChild(div);
    
        this.getInfoFromRecords(username).then((demons) => {
            let recordsInfo = demons;
            let pts = 0;
            for(let i = 0; i < recordsInfo.length; i++) pts += Number(recordsInfo[i].split(';')[3]);
    
            const h2 = document.createElement('h2');
            const h2Text = username + ': ' + pts + 'pts'; // this.uli + '. ' + 
            const h2TextNode = document.createTextNode(h2Text);
            h2.appendChild(h2TextNode);
            div.appendChild(h2);
    
            const p = document.createElement('p');
            const text = document.createElement('span');
            const textText = 'Достижения: ';
            const textNode = document.createTextNode(textText);
            text.appendChild(textNode);
            p.appendChild(text);
            div.appendChild(p);
    
            let link = '';
            let linkText = '';
            let linkTextNode = '';
            let char = '';
            let charText = '';
            let charTextNode = '';
    
            for(let i = 0; i < recordsInfo.length; i++) {
                link = document.createElement('a');
                link.href = recordsInfo[i].split(';')[2];
                linkText = recordsInfo[i].split(';')[1];
                linkTextNode = document.createTextNode(linkText);
                link.appendChild(linkTextNode);
                p.appendChild(link);
    
                if(i != recordsInfo.length - 1) {
                    char = document.createElement('span');
                    charText = ', ';
                    charTextNode = document.createTextNode(charText);
                    char.appendChild(charTextNode);
                    p.appendChild(char);
                }
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}