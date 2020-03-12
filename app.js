const lista = document.getElementById('lista')
const consultaBtn = document.getElementById('consulta')

consultaBtn.addEventListener('click', () => {
	let xhr

		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest()
		}else{
			xhr = new ActiveXObject("Microsoft.XMLHTTP")
		};

		xhr.open('GET', 'https://api.datos.gob.mx/v1/condiciones-atmosfericas')

		xhr.addEventListener('load', (datos) => {
			//console.log(datos.target.response)

			const datosJson = JSON.parse(datos.target.response)

			//console.table(datosJson)
			for(const res of datosJson.results) {
				//console.log(res.name)
				const listItem = document.createElement('LI')
				listItem.textContent = `En el poblado de ${res.name} estado de ${res.state}, habra: ${res.skydescriptionlong}`
				lista.append(listItem)

			}
		})

		xhr.send()	
})
