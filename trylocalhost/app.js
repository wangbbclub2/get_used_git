const express = require("express")

const app = express()

const port = 3000 

app.get("/", (req, res) => {
	
		res.send("this is express self work ")	
		
		console.log(typeof app)
	
})


app.listen(port, () => {
	console.log(`express is running on http://localhost:${port}`)
})


/*用Express設定路由*/