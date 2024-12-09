const Sequelize = require('sequelize')

module.exports = class Profile extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            bio: {
               type: Sequelize.STRING(255),
               allowNull: true,
            },
            avatarUrl: {
               type: Sequelize.STRING(255),
               allowNull: true,
            },
         },
         {
            sequelize,
            timestamps: false,
            modelName: 'rofile',
            tableName: 'rofiles',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         }
      )
   }

   static associate(db) {
      db.User.hasOne(db.profile, {
         foreignKey: 'UserId',
         sourceKey: 'id',
      })
   }
}
