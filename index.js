require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
async function query(filename) {
	const data = fs.readFileSync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
		{
			headers: { Authorization: "Bearer " + process.env.HUGGINGFACE_API_TOKEN },
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}

query("phone.jpg").then((response) => {
	console.log(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

