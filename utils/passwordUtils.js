const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

exports.verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};