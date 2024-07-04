function addFooterLink(lname, path, block) {
    const p = document.createElement('p');
    block.appendChild(p);

    const link = document.createElement('a');
    link.href = path;
    const linkNode = document.createTextNode(lname);
    link.appendChild(linkNode);
    p.appendChild(link);
}

const footer = document.getElementById('footer');
const fcontainer = document.createElement('div');
fcontainer.className = 'container footer-body';
footer.appendChild(fcontainer);

const flinks = document.createElement('div');
flinks.className = 'footer-links';
fcontainer.appendChild(flinks);

const linksblock1 = document.createElement('div');
linksblock1.className = 'footer-item';
flinks.appendChild(linksblock1);

const lb1h3 = document.createElement('h3');
const lb1h3Text = 'Приватный сервер';
const lb1h3TextNode = document.createTextNode(lb1h3Text);
lb1h3.appendChild(lb1h3TextNode);
linksblock1.appendChild(lb1h3);

addFooterLink('Дискорд', 'https://discord.gg/qPJwM8tTtp', linksblock1);
addFooterLink('Скачать', 'https://gofruit.space/gdps/00oh', linksblock1);
addFooterLink('Ютуб', 'https://www.youtube.com/@SunSetGDPS', linksblock1);

const linksblock2 = document.createElement('div');
linksblock2.className = 'footer-item';
flinks.appendChild(linksblock2);

const lb2h3 = document.createElement('h3');
const lb2h3Text = 'Команда';
const lb2h3TextNode = document.createTextNode(lb2h3Text);
lb2h3.appendChild(lb2h3TextNode);
linksblock2.appendChild(lb2h3);

addFooterLink('О нас', './contacts.html', linksblock2);
addFooterLink('Ютуб', 'https://www.youtube.com/@SunSetGDPS', linksblock2);

const copyright = document.createElement('div');
copyright.className = 'copyright';
fcontainer.appendChild(copyright);

const ch3 = document.createElement('h3');
const ch3Text = 'SunSet GDPS © 2023-2024';
const ch3TextNode = document.createTextNode(ch3Text);
ch3.appendChild(ch3TextNode);
copyright.appendChild(ch3);
