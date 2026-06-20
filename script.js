document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

function handleSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('button');
    btn.textContent = 'Odesláno ✓';
    btn.style.background = '#22c55e';
    setTimeout(function () {
        btn.textContent = 'Odeslat zprávu';
        btn.style.background = '';
        form.reset();
    }, 2000);
}
