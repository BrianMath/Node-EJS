/* npm install ejs express */

const express = require("express")
const app = express()
// Definir formato padrão dos arquivos. Exige estar na pasta 'views' para .ejs
app.set("view engine", "ejs")

/* Rotas */
app.get("/", function(request, response) {
	

	// .ejs é opcional
	response.render("pages/index.ejs")
})

app.get("/sobre", function(request, response) {
	const Brian = [
		{
			letter: "B",
			text: "onitão"
		},
		{
			letter: "R",
			text: "ico (de espírito)"
		},
		{
			letter: "I",
			text: "nteligente"
		},
		{
			letter: "A",
			text: "ma comer"
		},
		{
			letter: "N",
			text: "ão te abandona (igual Rexona)"
		}
	]

	response.render("pages/about.ejs", {acronimo: Brian})
	// Passei um {objeto} junto com .ejs
})

/* Rodar servidor */
app.listen(8080) // Porta do localhost
console.log("Rodando!!!")
