import mysql from 'serverless-mysql'

export const pool = mysql({
    config: {
        host: 'localhost',
        database: 'officetest',
        user: 'root',
        password: 'Martinespro51'
    }
})