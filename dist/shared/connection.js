import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: "mysql",
    database: "contratos",
    username: "root",
    password: "12345678",
    host: "localhost",
    port: 3306,
});
export default sequelize;
