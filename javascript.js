const url1 = 'https://www.netflix.com/title/70028883';
const url2 = 'https://youtu.be/iwROgK94zcM';
const btn1 = document.querySelector('.button--1');
const btn2 = document.querySelector('.button--2');

function openNewWindow(url1) {
    const win = window.open(url1,'_blank');
    win.focus();
}

function openNewWindow2(url2) {
    const win = window.open(url2,'_blank');
    win.focus();
} 

btn1.addEventListener('click', () => {
    openNewWindow(url1);
});

btn2.addEventListener('click', () => {
    openNewWindow2(url2);
});
