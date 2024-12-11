const Sequelize = require('sequelize')

module.exports = class Author extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            name: {
               type: Sequelize.STRING(100),
               allowNull: false,
            },
            age: {
               type: Sequelize.INTEGER,
               allowNull: true,
            },
         },
         {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         }
      )
   }
   //부모
   static associate(db) {
      db.Author.hasMany(db.Book, {
         foreignKey: 'AuthorId',
         sourceKey: 'id',
      })
   }
}
