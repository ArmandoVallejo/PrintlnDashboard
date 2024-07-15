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
});

document.addEventListener('DOMContentLoaded', function() {
    var addModal = document.getElementById('add-user-form');
    var modifyModal = document.getElementById('modify-user-form');
    var deleteModal = document.getElementById('delete-user-form');
    
    var addBtn = document.getElementById('add-user-btn');
    var modifyBtn = document.getElementById('modify-user-btn');
    var deleteBtn = document.getElementById('delete-user-btn');
  
    var closeBtns = document.getElementsByClassName('close-btn');
  
    addBtn.onclick = function() {
        addModal.style.display = 'block';
    }
  
    modifyBtn.onclick = function() {
        modifyModal.style.display = 'block';
    }
  
    deleteBtn.onclick = function() {
        deleteModal.style.display = 'block';
    }
  
    for (var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].onclick = function() {
            addModal.style.display = 'none';
            modifyModal.style.display = 'none';
            deleteModal.style.display = 'none';
        }
    }
  
    window.onclick = function(event) {
        if (event.target == addModal) {
            addModal.style.display = 'none';
        } else if (event.target == modifyModal) {
            modifyModal.style.display = 'none';
        } else if (event.target == deleteModal) {
            deleteModal.style.display = 'none';
        }
    }
  });


