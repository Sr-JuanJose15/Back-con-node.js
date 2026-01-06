const mysql = require('mysql2/promise');

let connecttion;

const getConnection = async () => {
    if (!connecttion) {
        connecttion = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'blogs'
    })
    
    console.log('conexion establecida')

}
    return connecttion;
}

module.exports = getConnection;