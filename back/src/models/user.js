const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
  sequelize.define("user", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:{
        type:DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
      },
    }, { timestamps: false }
  )
}