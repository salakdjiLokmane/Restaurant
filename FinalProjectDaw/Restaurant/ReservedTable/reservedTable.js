// Function to open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Function to update the date and time
function updateDateTime() {
    var currentDate = new Date();
    var dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    var timeOptions = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
    var formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    var formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

    document.getElementById("table-date").textContent = formattedDate;
    document.getElementById("table-time").textContent = formattedTime;
}

// Call the function to update the date and time initially
updateDateTime();

// Modal VIP
function openModalVIP() {
    document.getElementById("ModalVIP").style.display = "block";
}

// Function to close the modal
function closeModalVIP() {
    document.getElementById("ModalVIP").style.display = "none";
}

// Function to update the date and time
function updateDateTimeVIP() {
    var currentDate = new Date();
    var dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    var timeOptions = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
    var formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
    var formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

    document.getElementById("table-dateVIP").textContent = formattedDate;
    document.getElementById("table-timeVIP").textContent = formattedTime;
}

// Call the function to update the date and time initially
updateDateTimeVIP();

