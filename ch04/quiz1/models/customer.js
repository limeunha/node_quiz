const Sequelize = require('sequelize')

module.exports = class Customer extends Sequelize.Model {
   static init(sequelize) {
      return super.init({
         fullname: {},
      })
   }
}
