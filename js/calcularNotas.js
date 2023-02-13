    const notaMinima = document.getElementById('notaMinima').value;
    const notaMaxima = document.getElementById('notaMaxima').value;
    const notaAprobacion = document.getElementById('notaAprobacion').value;
    const puntajeAlPorcentaje = (puntajeMaximo * porcentaje) / 100 ;
    const puntajeMaximo = document.getElementById('puntajeMaximo').value;
    const puntajeMinimo = 0 ;
    const porcentaje = document.getElementById('porcentaje').value;
    const incremento = document.getElementById('incremento').value;

    const pendienteUno = (notaAprobacion - notaMinima)/(puntajeAlPorcentaje - puntajeMinimo ) ;
    const pendienteDos = (notaMaxima - notaAprobacion )/(puntajeMaximo - puntajeAlPorcentaje );


    const btnCalcular = document.getElementById('btnCalcular');
    const llenarTabla = document.querySelector('#tablaLista tbody')


    btnCalcular.addEventListener('click', () => {
        calcularNotasRojas(pendienteUno, puntajeMinimo, puntajeMinimo, notaMinima, llenarTabla, notaAprobacion);
    })
    
    function calcularNotasRojas(pendienteUno, puntajeMinimo, puntajeMinimo, notaMinima, llenarTabla, notaAprobacion) {
        
        let puntos = [];
        let notasRojas =  pendienteUno * (puntaje - puntajeMinimo) + notaMinima;

        for(let i = puntajeMinimo; i == puntajeMaximo; i++ ){
            puntos [i] = puntajeMinimo;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td> ${puntos[i]}</td>
                <td> ${notasRojas}</td>
            `;
            llenarTabla.appenchild(row)
        }
    }