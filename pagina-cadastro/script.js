document.addEventListener("DOMContentLoaded", () => {
    // Cadastro ONG
    const formONG = document.querySelector("form"); // ou use um id se preferir
  
    if (formONG) {
      formONG.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const nome = formONG.querySelector("input[placeholder*='nome']").value.trim();
        const cnpj = formONG.querySelector("input[placeholder*='00.000.000']").value.trim();
        const area = formONG.querySelector("input[placeholder*='Educação']").value.trim();
        const contato = formONG.querySelector("input[placeholder*='(00)']").value.trim();
  
        if (!nome || !cnpj || !area || !contato) {
          alert("Preencha todos os campos da ONG.");
          return;
        }
  
        alert("ONG cadastrada com sucesso!");
        formONG.reset();
      });
    }
  
    // Cadastro de usuário
     if (formUsuario) {
    formUsuario.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nome = formUsuario.querySelector("input[placeholder*='completo']").value.trim();
      const bairro = formUsuario.querySelector("input[placeholder*='bairro']").value.trim();
      const email = formUsuario.querySelector("input[type='email']").value.trim();
      const senha = formUsuario.querySelector("input[type='password']").value.trim();
  
      if (!nome || !bairro || !email || !senha) {
        alert("Preencha todos os campos do usuário.");
        return;
      }
  
      // Salva nome no localStorage
      localStorage.setItem("nomeUsuario", nome);
  
      alert("Usuário cadastrado com sucesso!");
      formUsuario.reset();
  
      // Redireciona para login
      window.location.href = "/index.html";
    });
  }
  
//     const formUsuario = document.querySelectorAll("form")[1]; // segundo formulário
  
//     if (formUsuario) {
//       formUsuario.addEventListener("submit", (e) => {
//         e.preventDefault();
  
//         const nome = formUsuario.querySelector("input[placeholder*='completo']").value.trim();
//         const bairro = formUsuario.querySelector("input[placeholder*='bairro']").value.trim();
//         const email = formUsuario.querySelector("input[type='email']").value.trim();
//         const senha = formUsuario.querySelector("input[type='password']").value.trim();
  
//         if (!nome || !bairro || !email || !senha) {
//           alert("Preencha todos os campos do usuário.");
//           return;
//         }
  
//         alert("Usuário cadastrado com sucesso!");
//         formUsuario.reset();
//       });
//     }
  });
  