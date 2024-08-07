document.querySelector('.search-bar input').addEventListener('input', function(e) {
    let query = e.target.value.toLowerCase();
    let terms = document.querySelectorAll('.term');

    terms.forEach(function(term) {
        if (term.textContent.toLowerCase().includes(query)) {
            term.style.display = 'block';
        } else {
            term.style.display = 'none';
        }
    });
});
