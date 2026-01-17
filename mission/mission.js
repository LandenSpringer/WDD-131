let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let container = document.querySelector('.container');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        // Dark mode styles
        document.body.style.backgroundColor = '#3b3a3a';
        document.body.style.color = '#f5f5f5';
        container.style.borderColor = '#555';
    } else if (current === 'light') {
        // Light mode styles
        document.body.style.backgroundColor = '#ffffff'; 
        document.body.style.color = '#000000';
        container.style.borderColor = '#ccc';
    }
}
