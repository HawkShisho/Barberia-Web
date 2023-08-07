const reservasTabla = document.querySelector("#reservasTabla");
const nombre = document.querySelector('#nombre');

function getReservas() {
    fetch('http://localhost:3000/consultar')
        .then(res => res.json()).then(data => {
            data.forEach(reserva => {
                reservasTabla.innerHTML += `
                <tr>
                    <td>${reserva.cliente}</td>
                </tr>
                `
                reserva.cliente = nombre
            });
        })
        .catch(err => console.log(err));
        return false;
        }
        getReservas();
