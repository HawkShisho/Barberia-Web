const reservasTabla = document.querySelector("#reservasTabla");
const nombre = document.querySelector('#borrar');

function getReservas() {
    fetch('http://localhost:3000/consultar')
        .then(res => res.json()).then(data => {
            data.forEach(reserva => {
                reservasTabla.innerHTML += `
                <tr>
                    <td>${reserva.cliente}</td>
                    <td>
                        <button class="btn btn-danger borrar" data-id="${reserva.cliente}">Borrar</button>
                    </td>
                </tr>
                `
            });
        })
        .catch(err => console.log(err));
        return false;
        }
        getReservas();

        reservasTabla.addEventListener('click', (e) => {
            if (e.target.classList.contains('borrar')) {
                borrarReserva(e.target.dataset.nombre);
            }
        });

function borrarReserva(nombre) {
    fetch(`http://localhost:3000/borrar/${nombre}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            alert(data);
            location.reload();
        })
        .catch(err => console.log(err));
}
