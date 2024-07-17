
     document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = '/index.html'; 
    });
  /*  function validateForm() {
        var email = document.getElementById("modlgn_username").value;
        var password = document.getElementById("modlgn_passwd").value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailPattern.test(email)) {
            alert("Por favor, ingrese un correo válido.");
            return false;
        }

        if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return false;
        }

        return true;
    }*/


        function showSupportModal() {
            var modal = document.getElementById("supportModal");
            modal.style.display = "block";
        }

        function closeSupportModal() {
            var modal = document.getElementById("supportModal");
            modal.style.display = "none";
        }

        // Cerrar el modal si se hace clic fuera de él
        window.onclick = function(event) {
            var modal = document.getElementById("supportModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }