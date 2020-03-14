// Get the report modal
var reportModal = document.getElementById('reportModal');
// Get the update modal
var updateModal = document.getElementById('updateModal');

// Get the button that opens the modal
var btnReport = document.getElementById("btn-report");

// Get the button that opens the modal
var btnUpdate = document.getElementById("btn-update");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnReport.onclick = function() {
    reportModal.style.display = "block";
}
// When the user clicks the button, open the modal 
btnUpdate.onclick = function() {
    updateModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == updateModal) {
        updateModal.style.display = "none";
    }
    if (event.target == reportModal) {
        reportModal.style.display = "none";
    }
}