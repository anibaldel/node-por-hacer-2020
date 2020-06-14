const descripcion = {
    demand: true,
    alias: '-d',
    desc: 'Descripcion de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendinte la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Genera un archivo con la tabla de multiplicar', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra el archivo insertado', {
        descripcion: {
            demand: true,
            alias: '-d',
            desc: 'borra la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}