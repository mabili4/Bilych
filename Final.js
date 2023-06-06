function toggleAppointmentForm() {
    var form = document.getElementById("appointmentForm");
    var button = document.getElementById("showFormButton");
    
    if (form.style.display === "none") {
        form.style.display = "block";
        button.textContent = "Закрити";
    } else {
        form.style.display = "none";
        button.textContent = "Записатися";
    }
}

function toggleContactInfo() {
    var contactInfo = document.getElementById("contactInfo");
    var button = document.getElementById("contactButton");
    
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
        button.textContent = "Закрити";
    } else {
        contactInfo.style.display = "none";
        button.textContent = "Контакти";
    }
}