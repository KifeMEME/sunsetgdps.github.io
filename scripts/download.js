const amenu = document.getElementById('android-menu');
        const modalWindow = document.getElementById('modalWindow');

        amenu.addEventListener('click', () => {
            modalWindow.classList.toggle('active');
        });

        document.getElementById('windows').addEventListener('click', () => window.location.href = 'https://drive.google.com/drive/folders/1s7H8O_rdiRIK-AGIwZGKDpI6mBeQZKAD');
        document.getElementById('android').addEventListener('click', () => window.location.href = 'https://drive.google.com/file/d/1YnwIxBM0xNEIu_N6qlNRcHcF3QqtkJJh/view?usp=drive_link');
        document.getElementById('geode').addEventListener('click', () => window.location.href = 'https://drive.google.com/file/d/1136gZoZGf-Z78wbWX4uWW1T46MBqBSDd/view?usp=sharing');
        document.getElementById('other').addEventListener('click', () => window.location.href = 'https://gofruit.space/gdps/00oh');