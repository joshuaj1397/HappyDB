class Region extends Model {}
Region.init({
  ID: Sequelize.INTEGER,
  Name: Sequelize.STRING
}, { sequelize });
