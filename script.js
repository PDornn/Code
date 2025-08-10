const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    btn.textContent = "Obrigado!"
    btn.classList.toggle('animar');
    setTimeout(function() {
    btn.textContent = "Clique aqui";
    btn.classList.remove("animar");
    }, 3000);
    
})