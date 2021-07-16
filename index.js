const express = require("express")
const server = express();

//const winston = require("winston");
const port = process.env.PORT || 3030;

/*
const sql = require('mssql')
*/
server.get("/SayHelloAzure", async (req, res, next) => {

	res.status(200).send("Hello Azure");
})
/*
server.get("/SayHelloAzure", async (req, res, next) => {
	await sql.connect('Server=demo-sqldbserver-sa.database.windows.net,1433;Database=Users;User Id=savakian;Password=Monday11?; Encrypt = true')
	const result = await sql.query(`select * from employee`)
	res.status(200).send(result.recordset);
})*/

server.listen(port, () => {
	if (process.env.NODE_ENV !== "Production") {
		console.log(
			`Server is up and listening on port ${port} ...`
		);
	} else {
		console.log(
			`Server is up and listening on port ${port} ...`
		);
	}
});