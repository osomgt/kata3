function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function ciclo(n) {
    // Si n no es coprimo con 10, devolver -1
    if (mcd(n, 10) !== 1) {
        return -1;
    }

    let resto = 1;
    let restos = [];
    let posicion = 0;

    while (true) {
        resto = resto % n;
        if (resto === 0) {
            return 0; // No hay ciclo
        }

        // Si el resto ya fue visto antes, encontramos el ciclo
        if (restos.includes(resto)) {
            return posicion - restos.indexOf(resto);
        }

        restos.push(resto);
        resto *= 10;
        posicion++;
    }
}