function toggleHomeInfo() {
    var homeInfo = document.getElementById("homeInfo");
    homeInfo.style.display = (homeInfo.style.display === "none") ? "block" : "none";
    
    var servicesInfo = document.getElementById("servicesInfo");
    servicesInfo.style.display = "none";
    
    var contactInfo = document.getElementById("contactInfo");
    contactInfo.style.display = "none";
    
    var appointmentForm = document.getElementById("appointmentForm");
    appointmentForm.style.display = "none";
  }
  
  function toggleServicesInfo() {
    var servicesInfo = document.getElementById("servicesInfo");
    servicesInfo.style.display = (servicesInfo.style.display === "none") ? "block" : "none";
    
    var homeInfo = document.getElementById("homeInfo");
    homeInfo.style.display = "none";
    
    var contactInfo = document.getElementById("contactInfo");
    contactInfo.style.display = "none";
    
    var appointmentForm = document.getElementById("appointmentForm");
    appointmentForm.style.display = "none";
  }
  
  function toggleAppointmentForm() {
    var appointmentForm = document.getElementById("appointmentForm");
    appointmentForm.style.display = (appointmentForm.style.display === "none") ? "block" : "none";
    
    var homeInfo = document.getElementById("homeInfo");
    homeInfo.style.display = "none";
    
    var servicesInfo = document.getElementById("servicesInfo");
    servicesInfo.style.display = "none";
    
    var contactInfo = document.getElementById("contactInfo");
    contactInfo.style.display = "none";
  }

  function showContactInfo() {
    var contactInfo = document.getElementById("contactInfo");
    contactInfo.style.display = (contactInfo.style.display === "none") ? "block" : "none";
    
    var homeInfo = document.getElementById("homeInfo");
    homeInfo.style.display = "none";
    
    var servicesInfo = document.getElementById("servicesInfo");
    servicesInfo.style.display = "none";
    
    var appointmentForm = document.getElementById("appointmentForm");
    appointmentForm.style.display = "none";
  }
  
