const net = require("net");
const {HOST, PORT} = require("./constants")

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Hi!");
    // setInterval(() => {
    //   conn.write("Move: up");
    
    // }, 100);
  })
  
  conn.on("data", (data) => {
    console.log(data.toString());
  })

  return conn;
};

module.exports = {connect};