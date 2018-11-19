function toggle() {
     let span = document.getElementsByTagName('span')[0];
     let div = document.getElementById('extra');
     if (span.textContent === 'More'){
         span.textContent = 'Less';
         div.style.display = 'block';
     } else {
         span.textContent = 'More';
         div.style.display = 'none';
     }
}