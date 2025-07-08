document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".login-button");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault(); // evita o redirecionamento do botão <a>

    const email = document.querySelector("input[name='email']").value.trim();
    const senha = document.querySelector("input[name='senha']").value.trim();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Simula login
    // Simula login com qualquer email e senha (por enquanto)
    alert("Login realizado com sucesso!");
    window.location.href = "/index.html";
    // redirecione como quiser
  // } else {
  //   alert("Email ou senha incorretos.");
  // }
})
})

