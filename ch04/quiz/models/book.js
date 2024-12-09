const Sequelize = require('sequelize')

module.exports = class Book extends Sequelize.Model {
   static init(sequelize) {
      return super.init({
         title: {
            type: Sequelize.STRING(200),
            allowNull: false,
         },
         genre: {
            type: Sequelize.STRING(50),
            allowNull: true,
         },
      })
   }

   static associate(db) {
      db.Author.hasMany(db.Book, {
         foreignKey: 'AuthorId',
         sourceKey: 'id',
      })
   }
}
