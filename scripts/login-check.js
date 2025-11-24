document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const login = document.getElementById("login").value;
    const haslo = document.getElementById("password").value;
    const errorSpan = document.querySelector('.blad');
    if (login === "admin" && haslo === "admin") {
        window.location.href = "../index.html";
    } else {
        errorSpan.textContent = "Błędny login lub hasło!"
    }
});
