const reservasTabla = document.querySelector("#reservasTabla");
const nombre = document.querySelector('#nombre');

function getReservas() {
    fetch('http://localhost:3000/consultar')
        .then(res => res.json()).then(data => {
            data.forEach(reserva => {
                reservasTabla.innerHTML += `
                <tr>
                    <td>${reserva.cliente}</td>
                    <td>
                        <button type="submit" id="${reserva.cliente}">Eliminar</button>
                    </td>
                </tr>
                `
                reserva.cliente = nombre
            });
        })
        .catch(err => console.log(err));
        return false;
        }
        getReservas();

