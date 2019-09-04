//requireds
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 5
        }
    })
    .help()
    .argv;
// const argv = require('yargs').argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// const multiplicar = require('./multiplicar/multiplicar'); otra forma de lo 

// let base = '77';
//let argv2 = process.argv;
//console.log('Limite:', argv.limite);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)

        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo tabla-${ argv.base } Guardado!: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


//console.log(argv.base);



// console.log(process);