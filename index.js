const ticketContainer = document.getElementById("tickets-container");

const ticketBox = document.createElement("div");
// ticketBox.classList.add("ticket");

// ticketContainer.appendChild(ticketBox);

const ticketRender = () => {
	fetch("./utils/tickets.json")
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((error) => console.log(error, "Error durante la petición de datos"));


        
        
};

ticketRender();
