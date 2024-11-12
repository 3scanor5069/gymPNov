import { Sequelize } from "sequelize";

const db = new Sequelize('gym_nov', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db;