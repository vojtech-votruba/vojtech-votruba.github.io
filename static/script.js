let mode = localStorage.getItem("mode");
const btn = document.querySelector('.btn-toggle');
if (mode == "light"){
    document.body.classList.toggle('dark-theme');
    btn.innerHTML = "Dark Mode";
}
else {
    btn.innerHTML = "Light Mode";
}
window.onload = () => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (localStorage.getItem("mode") == 'dark') {
            btn.innerHTML = 'Light Mode';
            localStorage.setItem("mode","light");
        }
        else if (localStorage.getItem("mode") == 'light') {
            btn.innerHTML = 'Dark Mode';
            localStorage.setItem("mode","dark");
        }
    }) 
}