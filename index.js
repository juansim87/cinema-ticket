let TICKETS = [];

const ticketRender = () => {
	const ticketContainer = document.getElementById("tickets-container");

	fetch("./utils/tickets.json")
		.then((res) => res.json())
		.then((data) => {
			TICKETS = data;

			data.tickets.forEach((ticket) => {
				const ticketBox = document.createElement("div");
				ticketBox.classList.add("ticket");

				//Lado izquierda
				const sale = document.createElement("div");
				sale.classList.add("sale");

				const film = document.createElement("div");
				film.classList.add("film");

				const title = document.createElement("h2");
				title.textContent = ticket.title;

				const session = document.createElement("div");
				session.classList.add("film-session");

				const date = document.createElement("div");
				date.classList.add("session-date");

				const day = document.createElement("p");
				day.textContent = ticket.day;

				const time = document.createElement("p");
				time.textContent = "Sesión: " + ticket.session;

				date.append(day, time);

				const seat = document.createElement("div");
				seat.classList.add("session-seat");

				const theater = document.createElement("p");
				theater.textContent = "Sala: " + ticket.theater;

				const row = document.createElement("p");
				row.textContent = "F: " + ticket.row;

				const seatNumber = document.createElement("p");
				seatNumber.textContent = "B: " + ticket.seat;

				seat.append(theater, row, seatNumber);

				session.append(date, seat);

				film.append(title, session);

				const saleInfo = document.createElement("div");
				saleInfo.classList.add("sale-info");

				const price = document.createElement("p");
				price.textContent = "PVP: " + ticket.sale.price + " + 0.0 (IVA incl.)";

				const saleDate = document.createElement("p");
				saleDate.textContent = "Fecha de venta: " + ticket.sale.day +  " | " + ticket.sale.time;

				saleInfo.append(price, saleDate);

				sale.append(film, saleInfo);

				//Lado derecho
				const company = document.createElement("div");
				company.classList.add("company-info");

				const location = document.createElement("div");
				location.classList.add("location");

				const companyName = document.createElement("p");
				companyName.textContent = data.company;

				const address = document.createElement("p");
				address.textContent = data.address;

				location.append(companyName, address);

				const qrCode = document.createElement("div");
				qrCode.classList.add("qr-code");

				const codeImg = document.createElement("img");
				codeImg.src = "/media/ExampleCode.png";
				codeImg.alt = "Código QR para entrada de cine";
				qrCode.append(codeImg);

				company.append(location, qrCode)

				ticketBox.append(sale, company);

				ticketContainer.appendChild(ticketBox);
			});
		})
		.catch((error) => console.log(error, "Error durante la petición de datos"));
};

ticketRender();
