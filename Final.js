function toggleHomeInfo() {
  toggleDisplay("homeInfo");
}

function toggleServicesInfo() {
  toggleDisplay("servicesInfo");
}

function toggleAppointmentForm() {
  toggleDisplay("appointmentForm");
}

function showContactInfo() {
  toggleDisplay("contactInfo");
}

function toggleDisplay(elementId) {
  var element = document.getElementById(elementId);
  element.style.display = (element.style.display === "none") ? "block" : "none";

  var elements = document.getElementsByClassName("info");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id !== elementId) {
      elements[i].style.display = "none";
    }
  }
}