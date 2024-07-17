
    document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                accordionContent.style.display = 'block';
            } else {
                accordionContent.style.display = 'none';
            }
        });
    });

     // Get the modal elements
    var modalResponder = document.getElementById("modalResponder");
    var modalEliminar = document.getElementById("modalEliminar");

    // Get the <span> elements that close the modals
    var spanCloseResponder = document.getElementById("closeResponder");
    var spanCloseEliminar = document.getElementById("closeEliminar");

    // When the user clicks on <span> (x), close the modal
    spanCloseResponder.onclick = function() {
        modalResponder.style.display = "none";
    }
    spanCloseEliminar.onclick = function() {
        modalEliminar.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalResponder) {
            modalResponder.style.display = "none";
        }
        if (event.target == modalEliminar) {
            modalEliminar.style.display = "none";
        }
    }

    // Function to handle the click event on review-fbk buttons
    function openResponderModal() {
        modalResponder.style.display = "block";
    }

    // Function to handle the click event on review-del buttons
    function openEliminarModal() {
        modalEliminar.style.display = "block";
    }

    // Get all buttons with class review-fbk and review-del
    var reviewFbkButtons = document.querySelectorAll(".review-fbk");
    var reviewDelButtons = document.querySelectorAll(".review-del");

    // Add click event listeners to all review-fbk buttons
    reviewFbkButtons.forEach(function(button) {
        button.addEventListener("click", openResponderModal);
    });

    // Add click event listeners to all review-del buttons
    reviewDelButtons.forEach(function(button) {
        button.addEventListener("click", openEliminarModal);
    });

    // Confirm and cancel buttons for delete
    var confirmarEliminar = document.getElementById("confirmarEliminar");
    var cancelarEliminar = document.getElementById("cancelarEliminar");

    confirmarEliminar.onclick = function() {
        // Add your delete logic here
        modalEliminar.style.display = "none";
        alert('Comentario eliminado');
    }

    cancelarEliminar.onclick = function() {
        modalEliminar.style.display = "none";
    }