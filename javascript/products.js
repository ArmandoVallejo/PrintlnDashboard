const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', function() {
    var addModal = document.getElementById('add-product-form');
    var editModal = document.getElementById('edit-product-form');
    var deleteModal = document.getElementById('delete-product-form');
    
    var addBtn = document.getElementById('add-product-btn');
    var editBtn = document.getElementById('edit-product-btn');
    var deleteBtn = document.getElementById('delete-product-btn');

    var closeBtns = document.getElementsByClassName('close-btn');

    addBtn.onclick = function() {
        addModal.style.display = 'block';
    }

    editBtn.onclick = function() {
        editModal.style.display = 'block';
    }

    deleteBtn.onclick = function() {
        deleteModal.style.display = 'block';
    }

    for (var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].onclick = function() {
            addModal.style.display = 'none';
            editModal.style.display = 'none';
            deleteModal.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target == addModal) {
            addModal.style.display = 'none';
        } else if (event.target == editModal) {
            editModal.style.display = 'none';
        } else if (event.target == deleteModal) {
            deleteModal.style.display = 'none';
        }
    }

});

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview.src = objectURL;
                
}

