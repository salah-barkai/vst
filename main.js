const btn_home = document.querySelector('#btn_home');
const btn_contact = document.querySelector('#btn_contact');
const btn_blog = document.querySelector('#btn_blog');
const btn_menu = document.querySelector('#menu');
const menu_page = document.querySelector('#menu_page');


btn_home.addEventListener('click', () => {
    window.location.reload();
});
btn_menu.addEventListener('click', () => {
    menu_page.style.display = 'block';
});

btn_contact.addEventListener('click', () => {
    window.location.href = "contact.html"
});

btn_blog.addEventListener('click', () => {
    window.location.href = "blogs.html"
});