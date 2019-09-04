const fs = require('fs');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, rejeact) => {

        let data = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base }  * ${ i} = ${ base * i } \n`);
        }
        console.log(data);
    });
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, rejeact) => {
        if (!Number(base)) {
            rejeact(`El valor introducido ${base}  No es un número`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base }  * ${ i} = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al${ limite }.txt`, data, (err) => {
            if (err) rejeact(err)
            else {
                resolve(`tabla-${base}-al${ limite }.txt`);
            }

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}