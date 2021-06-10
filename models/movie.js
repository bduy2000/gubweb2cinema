const { Sequelize, DataTypes, Model ,Op} = require('sequelize');
const db = require('./db');


const Movie = db.define('Movie', {
  
    Name: {
        type: DataTypes.STRING,
      }, 
    ReleaseDate:{
        type: DataTypes.DATEONLY,
      },
    Poster:{
        type: DataTypes.BLOB,
      },
    Time:{
        type: DataTypes.INTEGER,
    },
    Decription:{
        type: DataTypes.TEXT,
    },
    Trailer:{
      type: DataTypes.TEXT,
    },
    Category:{
        type: DataTypes.STRING,
    },
    Genres:{
      type: DataTypes.STRING,
    },
    Actors:{
      type: DataTypes.STRING,
    },
    Directors:{
      type: DataTypes.STRING,
    }
  });

  Movie.findbyName = async function (name){
    return Movie.findAll({where:{Name:{[Op.like]: '%'+name+'%',}}});
  }

  module.exports=Movie;