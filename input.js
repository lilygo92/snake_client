const {MOVE_UP_KEY , MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE1, MESSAGE2, MESSAGE3} = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === 'w') {
    connection.write(MOVE_UP_KEY);
  }

  if (key === 'a') {
    connection.write(MOVE_LEFT_KEY);
  }

  if (key === 's') {
    connection.write(MOVE_DOWN_KEY);
  }

  if (key === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  }

  if (key === 'j') {
    connection.write(MESSAGE1);
  }

  if (key === 'k') {
    connection.write(MESSAGE2);
  }

  if (key === 'l') {
    connection.write(MESSAGE3);
  }

  if (key === '\u0003') {
    process.exit();
  };
};

module.exports = {setupInput};