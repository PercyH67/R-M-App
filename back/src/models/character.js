const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
  sequelize.define("character", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
        type: DataTypes.STRING,     //ENUM("Alive", "Dead", "unknown"),
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,   //ENUM ("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin:{
        type:DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, { timestamps: false }
  )
}