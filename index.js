const express = require("express")
const server = express();
const mongoose = require("mongoose");


//const winston = require("winston");
const port = process.env.PORT || 3030;



/*
const sql = require('mssql')
*/
server.get("/SayHelloAzure", async (req, res, next) => {
	const db = await mongoose.connect("mongodb://ciba-mongodb:pt5tPU56mLdwxlZazOre47ymxOCPsDPhATIcV4NVFEUFLN8GeSgl5Og2GNtD5mCoWWjp4Vz4GOHJAqHnOE2sUg==@ciba-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@ciba-mongodb@", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		...{}
	});
	if (db)
		res.status(200).send("Hello Azure 2 database connected");
	else
		res.status(200).send("Hello Azure 2 No database connection");
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