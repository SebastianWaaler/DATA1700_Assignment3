// Function to purchase a ticket

function test() {
    console.log($("#movie"))
}
function buyTickets() {
    // Get values from form inputs
    let movie = $("#movieSelector").val();
    let number = $("#number").val();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let phone = $("#phone").val();
    let email = $("#email").val();

    // Validation
    if (movie === "") {
        $("#movieError").text("Choose a movie");
        return;
    } else {
        $("#movieError").text("");
    }

    if (number === "" || number <= 0) {
        $("#numberError").text("Must be at least 1");
        return;
    } else {
        $("#numberError").text("");
    }

    if (firstName === "") {
        $("#firstNameError").text("Please insert first name");
        return;
    } else {
        $("#firstNameError").text("");
    }

    if (lastName === "") {
        $("#lastNameError").text("Please insert last name");
        return;
    } else {
        $("#lastNameError").text("");
    }

    if (phone === "") {
        $("#phoneError").text("Please insert phone number");
        return;
    } else if (!validatePhone(phone)) {
        $("#phoneError").text("Please insert a valid phone number");
        return;
    } else {
        $("#phoneError").text("");
    }

    if (email === "") {
        $("#emailError").text("Please insert email address");
        return;
    } else if (!validateEmail(email)) {
        $("#emailError").text("Please insert a valid email");
        return;
    } else {
        $("#emailError").text("");
    }

    let ticket = {
        movie: movie,
        number: number,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
    };


    $.post("/tickets", ticket, function(data) {
        tickets.push(ticket)
        updateTicketList();
    });



    // Clear input fields
    $("#movieSelector").val("");
    $("#number").val("");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#phone").val("");
    $("#email").val("");
}


// Function to delete all tickets
function deleteTickets() {
    $.get("/delete", function (){
        updateTicketList();
        $("#ticketList").html("");
    });
}


function updateTicketList() {
    $.get("/getAll", function (data){
        let ut = "<table><tr>" + "<th>Movie</th><th>Number</th><th>First name</th><th>Last name</th><th>Phone</th><th>Email</th>" + "</tr>";
        $.each(data, function (index, p){
            ut += "<tr>";
            ut += "<td>" + p.movie + "</td><td>" + p.number + "</td><td>" + p.firstName + "</td><td>" + p.lastName + "</td>" +
                "<td>" + p.phone + "</td><td>" + p.email + "</td>";
            ut += "</tr>";
        })
        $("#ticketList").html(ut);
    });
}

// Function to validate email
function validateEmail(email) {
    return /^[\w-_.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

// Function to validate phone
function validatePhone(phone_nr) {
    return /^[0-9]{3}-?[0-9]{2}-?[0-9]{3}$/.test(phone_nr)
}

// Array to store tickets
let tickets = [];