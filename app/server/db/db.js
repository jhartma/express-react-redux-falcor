import Sequelize from "sequelize"

const sequelize = new Sequelize(null, null, null, {
  host: "localhost",
  dialect: "sqlite",
})

export default sequelize
