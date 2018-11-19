function create(sentences) {
    for (let i = 0; i < sentences.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = sentences[i];
        p.style.display = 'none';
        div.appendChild(p);
        document.getElementById('content').appendChild(div);
        div.addEventListener('click', function showItem(){
            p.style.display = 'block';
        });
    }
}