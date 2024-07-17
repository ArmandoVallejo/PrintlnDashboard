
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





    function showModalCustom(name, image, description, rating) {
        document.getElementById('productModalLabelCustom').textContent = name;
        document.getElementById('productImageCustom').src = image;
        document.getElementById('productDescriptionCustom').textContent = description;
        document.getElementById('productRatingCustom').textContent = 'Valoración: ' + '★'.repeat(rating) + '☆'.repeat(5 - rating);
        document.getElementById('productModal').style.display = "block";
    }

    function closeModalCustom() {
        document.getElementById('productModal').style.display = "none";
    }

    window.onclick = function(event) {
        var modal = document.getElementById('productModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    function showReviews(reviewId) {
        // Cierra el modal
        closeModalCustom();

        // Encuentra el acordeón correspondiente y ábrelo
        var accordionContent = document.getElementById(reviewId);
        if (accordionContent) {
            var accordionItem = accordionContent.closest('.accordion-item');
            var accordionBtn = accordionItem.querySelector('.accordion-btn');
            accordionContent.style.display = 'block'; // Abre el acordeón
            accordionBtn.classList.add('active'); // Añade la clase activa

            // Desplaza la página a la sección de reseñas
            accordionContent.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function toggleAccordion(button) {
        var content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
            button.classList.remove('active');
        } else {
            content.style.display = 'block';
            button.classList.add('active');
        }
    }

    function closeModalCustom() {
        var modal = document.getElementById('productModal');
        modal.style.display = 'none';
    }