window.onload = () => {
    const btn = document.querySelector('.btn-toggle');

    btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (btn.innerHTML == 'Dark Mode') {
        btn.innerHTML = 'Light Mode';
    }
    else if (btn.innerHTML == 'Light Mode') {
        btn.innerHTML = 'Dark Mode';
    }
})    
}

