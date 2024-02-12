const User = require("./User");
const EmailCode = require("./EmailCode");

//en el modelo se genera userId
EmailCode.belongsTo(User);
User.hasMany(EmailCode);