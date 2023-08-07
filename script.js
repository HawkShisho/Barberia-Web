// Arreglo con las reservas (simulación de datos)
const reservas = [
    {
        id: 1,
        nombre: "Juan Pérez",
        fecha: "2023-04-08",
        hora: "10:00"
    },
    {
        id: 2,
        nombre: "María García",
        fecha: "2023-04-09",
        hora: "15:30"
    },
    {
        id: 3,
        nombre: "Pedro Rodríguez",
        fecha: "2023-04-10",
        hora: "12:00"
    }
];

// Función para mostrar las reservas en la lista
function mostrarReservas() {
    const lista = document.getElementById("reservas-lista");
    lista.innerHTML = "";
    for (let reserva of reservas) {
        const item = document.createElement("li");
        item.innerHTML = `
            <p><strong>Nombre: </strong>${reserva.nombre}</p>
            <p><strong>Fecha: </strong>${reserva.fecha}</p>
            <p><strong>Hora: </strong>${reserva.hora}</p>`;
    lista.appendChild(item);
}
}

// Arreglo con las reservas (simulación de datos)
const reservasBarbero = [
    {
        id: 1,
        nombre: "Juan Pérez",
        fecha: "2023-04-08",
        hora: "10:00",
        barbero: "Pedro"
    },
    {
        id: 2,
        nombre: "María García",
        fecha: "2023-04-09",
        hora: "15:30",
        barbero: "Juan"
    },
    {
        id: 3,
        nombre: "Pedro Rodríguez",
        fecha: "2023-04-10",
        hora: "12:00",
        barbero: "Pedro"
    }
    ];
    
    // Función para mostrar las reservas del barbero
    function mostrarReservas() {
    const tabla = document.getElementById("reservas-cuerpo");
    tabla.innerHTML = "";
    for (const reserva of reservas) {
    if (reserva.barbero === "Pedro") {
    const fila = <tr> <td>${reserva.nombre}</td> <td>${reserva.fecha}</td> <td>${reserva.hora}</td> </tr> ;
    tabla.innerHTML += fila;
    }
    }
    }
    
    // Mostrar las reservas al cargar la página
    mostrarReservas();