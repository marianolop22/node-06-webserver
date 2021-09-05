
const http = require('http');

http.createServer( (req, res)=> {

    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {
    //     'Content-Type': 'application/csv'
    // })
    // const persona = {
    //     id: 1,
    //     nombre: 'Mariano'
    // }
    // res.write( JSON.stringify(persona) )

    res.write('hola mundo')
    // res.write('1, mariano')
    // res.write('2, pepe')
    // res.write('3, pedro')
    res.end();
})
.listen( 8080 );

console.log('escuchando el puerto 8080')