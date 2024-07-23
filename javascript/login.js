document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('modlgn_username').value;
    var password = document.getElementById('modlgn_passwd').value;
    var validPassword = 'q1w2e3';

    if (password === validPassword) {
        if (email === 'admin@println.com') {
            showWelcomeAdminModal();
        } else if (email === 'empleado@println.com') {
            showWelcomeEmployeeModal();
        } else {
            showErrorModal();
        }
    } else {
        showErrorModal();
    }
});

function showSupportModal() {
    var modal = document.getElementById("supportModal");
    modal.style.display = "block";
}

function closeSupportModal() {
    var modal = document.getElementById("supportModal");
    modal.style.display = "none";
}

function showErrorModal() {
    var modal = document.getElementById("errorModal");
    modal.style.display = "block";
}

function closeErrorModal() {
    var modal = document.getElementById("errorModal");
    modal.style.display = "none";
}

function showWelcomeAdminModal() {
    var modal = document.getElementById("welcomeAdminModal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.display = "none";
        window.location.href = '/index.html';
    }, 2000);
}

function closeWelcomeAdminModal() {
    var modal = document.getElementById("welcomeAdminModal");
    modal.style.display = "none";
}

function showWelcomeEmployeeModal() {
    var modal = document.getElementById("welcomeEmployeeModal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.display = "none";
        window.location.href = '/indexemployee.html';
    }, 2000);
}

function closeWelcomeEmployeeModal() {
    var modal = document.getElementById("welcomeEmployeeModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var supportModal = document.getElementById("supportModal");
    var errorModal = document.getElementById("errorModal");
    var welcomeAdminModal = document.getElementById("welcomeAdminModal");
    var welcomeEmployeeModal = document.getElementById("welcomeEmployeeModal");

    if (event.target == supportModal) {
        supportModal.style.display = "none";
    } else if (event.target == errorModal) {
        errorModal.style.display = "none";
    } else if (event.target == welcomeAdminModal) {
        welcomeAdminModal.style.display = "none";
    } else if (event.target == welcomeEmployeeModal) {
        welcomeEmployeeModal.style.display = "none";
    }
}
