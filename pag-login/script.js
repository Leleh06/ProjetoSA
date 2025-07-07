document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");

    loginButton.addEventListener("click", function (event) {
      const email = emailInput.value.trim();
      const senha = senhaInput.value.trim();
        
      if (email === "" || senha === "") {
        event.preventDefault(); // Impede o redirecionamento
        alert("Por favor, preencha todos os campos.");
        return;
      };

      // Aqui você poderia adicionar uma lógica de autenticação
      // ou enviar para um backend com fetch(), por exemplo.
    });
  });

