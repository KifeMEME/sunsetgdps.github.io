function addHeaderLink(lname, path) {
    const li = document.createElement('li');
    headerNavList.appendChild(li);

    const link = document.createElement('a');
    link.href = path;
    const linkTextNode = document.createTextNode(lname);
    link.appendChild(linkTextNode);
    li.appendChild(link);
}

const header = document.getElementById('header');
const container = document.createElement('div');
container.className = 'container';
header.appendChild(container);

const headerBody = document.createElement('div');
headerBody.className = 'header_body';
container.appendChild(headerBody);

const logo = document.createElement('div');
logo.className = 'logo';
headerBody.appendChild(logo);

const logoLink = document.createElement('a');
logoLink.href = '/';
logo.appendChild(logoLink);

const logoImg = document.createElement('img');
logoImg.src = './img/logo/server.png';
logoImg.alt = '';
logoLink.appendChild(logoImg);

const logoH3 = document.createElement('h3');
const logoH3Text = 'SunSet GDPS';
const logoH3TextNode = document.createTextNode(logoH3Text);
logoH3.appendChild(logoH3TextNode);
logoLink.appendChild(logoH3);

const hamburgerHeader = document.createElement('div');
hamburgerHeader.className = 'hamburger';
hamburgerHeader.id = 'hamburger';
headerBody.appendChild(hamburgerHeader);

const spanHamburger = document.createElement('span');
hamburgerHeader.appendChild(spanHamburger);

const nav = document.createElement('nav');
nav.className = 'header_menu';
nav.id = 'menu';
headerBody.appendChild(nav);

const headerNavList = document.createElement('ul');
headerNavList.className = 'header_list';
nav.appendChild(headerNavList);

addHeaderLink('Главная', '/');
addHeaderLink('Демонлист', './dl.html');
addHeaderLink('Контакты', './contacts.html');