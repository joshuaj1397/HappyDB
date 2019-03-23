class Country extends Model {}
Country.init({
  ID: Sequelize.INTEGER,
  RegionID: Sequelize.INTEGER
  Name: Sequelize.STRING,
  HappinessRank: Sequelize.FLOAT,
  GDP: Sequelize.FLOAT,
  Freedom: Sequelize.FLOAT,
  Generosity: Sequelize.FLOAT,
  GovTrust: Sequelize.FLOAT,
  DystopiaResidual: Sequelize.FLOAT
}, { sequelize });
