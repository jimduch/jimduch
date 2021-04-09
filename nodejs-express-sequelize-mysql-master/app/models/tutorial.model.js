module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("pangolin", {
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.NUMBER
    },
    famille: {
      type: Sequelize.STRING
    },
    race: {
      type: Sequelize.STRING
    },
    nourriture: {
      type: Sequelize.STRING
    },
    ami: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};