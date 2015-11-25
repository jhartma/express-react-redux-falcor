import Sequelize from "sequelize"

const sequelize = new Sequelize(null, null, null, {
  host: "localhost",
  dialect: "sqlite",
})

var User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING,
    field: "first_name",
  },
  lastName: {
    type: Sequelize.STRING,
  },
}, {
  freezeTableName: true,
})

User.sync({ force: true }).then(function() {
  // Table created
  User.create({
    firstName: "John",
    lastName: "Hancock",
  })
})

export default User
