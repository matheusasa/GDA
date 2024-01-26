<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
	<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
	<link href="custom.css" rel="stylesheet" id="custom-css">
	<script src="custom.js"></script>
	<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
	<style>
	nav {
		block-size: fit-content;
		height: 100px;
	}

	/* Import Google font - Poppins */
	html {
		--main-color: #2F5597;
		--second-bg-color: #323946;
		--white: #fff;
		--cores: linear-gradient(90deg, rgba(238, 23, 91, 1) 31%, rgba(255, 157, 0, 1) 100%);
		font-size: 14px;
		font-family: "Andale Mono";
	}

	* {
		outline: none;
		box-sizing: border-box;
		margin: 0;
		outline: 0;
	}

	.panel-heading {
		font-size: 150%;
	}

	h11 {
		color: red;
	}

	.brief {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/*CODIGO DO TESTE*/
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Poppins", sans-serif;
	}

	body {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		background: rgb(238, 23, 91);
		overflow-x: hidden;
		/* Hide horizontal scrollbar */
	}

	.container {
		position: relative;
		max-width: 1000px;
		width: 100%;
		background: #fff;
		padding: 25px;
		border-radius: 8px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	}

	.container header {
		font-size: 1.5rem;
		color: #333;
		font-weight: 500;
		text-align: center;
	}

	.container .form {
		margin-top: 30px;
	}

	.form .input-box {
		width: 100%;
		margin-top: 20px;
	}

	.input-box label {
		color: #333;
	}

	.form :where(.input-box input, .select-box) {
		position: relative;
		height: 50px;
		width: 100%;
		outline: none;
		font-size: 1rem;
		border-radius: 6px;
		padding: 0 0;
	}

	.input-box input:focus {
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
	}

	.form .column {
		display: flex;
		column-gap: 15px;
	}

	.form .mod-box {
		margin-top: 20px;
	}

	.mod-box h3 {
		color: #333;
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 8px;
	}

	.form :where(.mod-option, .mod) {
		display: flex;
		align-items: center;
		column-gap: 50px;
		flex-wrap: wrap;
	}

	.form .mod {
		column-gap: 5px;
	}

	.mod input {
		accent-color: #FB0058;
	}

	.form :where(.mod input, .mod label) {
		cursor: pointer;
	}

	.mod label {
		color: #707070;
	}

	.select-box select {
		height: 100%;
		width: 100%;
		outline: none;
		border: none;
		font-size: 1rem;
	}

	.enviar {
		height: 55px;
		width: 100%;
		color: #fff;
		font-size: 1rem;
		font-weight: 400;
		margin-top: 30px;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		background: #FB0058;
	}

	.enviar:hover {
		background: #D5004B;
	}

	.agoravaimano {
		height: fit-content;
		width: fit-content;
		color: #fff;
		font-size: 1rem;
		font-weight: 400;
		margin-top: 55px;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.lupa:hover {
		background: #D5004B;
	}

	/*Responsive*/
	@media screen and (max-width: 500px) {
		.form .column {
			flex-wrap: wrap;
		}

		.form :where(.mod-option, .mod) {
			row-gap: 15px;
		}
	}

	.cadastro,
	.clienteProspect {
		display: flex;
		box-sizing: border-box;
	}

	.clienteProspect {
		margin: 20px;
		margin-bottom: 20px;
	}

	.logo {
		position: fixed;
	}

	.container-home {
		position: relative;
		padding: 25px;
	}

	.meio {
		position: relative;
		max-width: 1000px;
		width: 100%;
		background: #fff;
		padding: 25px;
		border-radius: 8px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	}

	.imagem {
		height: 850px;
		width: 1920px;
	}

	.memeio {
		display: grid;
		grid-template-columns: 1fr;
		text-align: center;
	}

	.rating:not(:checked)>input {
		position: absolute;
		appearance: none;
	}

	.rating:not(:checked)>label {
		float: right;
		cursor: pointer;
		font-size: 30px;
		color: #666;
	}

	.rating:not(:checked)>label:before {
		content: '★';
	}

	.rating>input:checked+label:hover,
	.rating>input:checked+label:hover~label,
	.rating>input:checked~label:hover,
	.rating>input:checked~label:hover~label,
	.rating>label:hover~input:checked~label {
		color: #e58e09;
	}

	.rating:not(:checked)>label:hover,
	.rating:not(:checked)>label:hover~label {
		color: #ff9e0b;
	}

	.rating>input:checked~label {
		color: #ffa723;
	}

	< !-- rating 2 -->.other-rating:not(:checked)>input {
		position: absolute;
		opacity: 0;
	}

	.other-rating:not(:checked)>label {
		float: right;
		cursor: pointer;
		font-size: 30px;
		color: #666;
	}

	.other-rating:not(:checked)>label:before {
		content: '★';
	}

	.other-rating>input:checked+label:hover,
	.other-rating>input:checked+label:hover~label,
	.other-rating>input:checked~label:hover,
	.other-rating>input:checked~label:hover~label,
	.other-rating>label:hover~input:checked~label {
		color: #e58e09;
	}

	.other-rating:not(:checked)>label:hover,
	.other-rating:not(:checked)>label:hover~label {
		color: #ff9e0b;
	}

	.other-rating>input:checked~label {
		color: #ffa723;
	}

	.botoes {
		height: fit-content;
		width: fit-content;
		color: #fff;
		font-size: 1rem;
		font-weight: 400;
		border: none;
		cursor: pointer;
	}

	.selecione-box {
		position: relative;
		height: 50px;
		width: 100%;
		outline: none;
		font-size: 1rem;
		border-radius: 6px;
		padding: 0 0;
	}

	.selecione-box .select {
		height: 100%;
		width: 100%;
		outline: none;
		border: none;
	}
	</style>

	<body>
		<div class="fluig-style-guide">
			<form role="form" id="formulario">
				<section class="container cadastro">
					<img src="/resources/images/logo.png" alt="Logo Totvs" style="height: 32px; width: 150px; position:absolute;left:20px">
					<header style="position:relative;">Anfitrião Totvs</header>
					<div class="form">
						<div class="column">
							<div class="input-box">
								<label><i class="flaticon flaticon-email icon-sm" aria-hidden="true"></i> E-mail</label>
								<input class="selecione-texto" id="email" name="Email" type="text" required="" style="width: 100%; font-size: 14px;" onblur="filtroform()" />
							</div>
						</div>
						<div class="column">
							<div class="input-box">
								<label><i class="fluigicon fluigicon-company icon-sm" aria-hidden="true"></i></i> Processos</label>
								<div class="column">
									<div class="select-box">
										<select required="" name="processo" id="processo" class="form-control" style="height:100%;">
											<option hidden value="">Seleção automática do processo</option>
										</select>
									</div>
								</div>
							</div>
						</div>
						<div class="column">
							<div class="input-box">
								<label><i class="fluigicon fluigicon-company icon-sm" aria-hidden="true"></i></i>
									Status do Evento</label>
								<div class="column">
									<div class="select-box">
										<select required="" id="status" name="status" class="form-control"
											style="height: 100%;" onchange="estatus()">
											<option hidden value="">Selecione o ocorrido</option>
											<option value="realizado" required="" id="realizado" name="realizado">Realizado</option>
											<option value="faltaC" required="" id="faltaC" name="faltaC">Falta de Convidado</option>
											<option value="faltaA" required="" id="faltaA" name="faltaA">Falta do Anfitrião</option>
										</select>
									</div>
								</div>
							</div>
							<div class="input-box" id="FC" style="display: none">
								<label><i class="flaticon flaticon-assignment-ind icon-sm" aria-hidden="true"></i> Por qual motivo? </label>
								<div class="selecione-box"><input class="selecione-texto" id="motivo" name="motivo" type="text" required="" style="width: 100%; font-size: 14px;" /></div>
							</div>
						</div>
						<div class="column" style="display: none" id="FCR">
							<div class="mod-box">
								<label style="font-weight: bold;"><i class="flaticon flaticon-group-config icon-sm" aria-hidden="true"></i>
									Deseja Remarcar?</label>
								<div class="mod-option">
									<div class="mod">
										<input type="radio" id="mod" name="mod" required value="presencial" />
										<label for="presencial" style="pointer-events: none; ">Sim</label>
									</div>
									<div class="mod">
										<input type="radio" id="mod" name="mod" required value="online" />
										<label for="online" style="pointer-events: none;">Não</label>
									</div>
								</div>
							</div>
						</div>
						<div class="column" style="display:none" id="FA">
							<div class="mod-box">
								<label style="font-weight: bold;"><i class="flaticon flaticon-group-config icon-sm" aria-hidden="true"></i>
									Deseja Remarcar?</label>
								<div class="mod-option">
									<div class="mod">
										<input type="radio" id="mod" name="mod" required value="presencial" />
										<label for="presencial" style="pointer-events: none; ">Sim</label>
									</div>
									<div class="mod">
										<input type="radio" id="mod" name="mod" required value="online" />
										<label for="online" style="pointer-events: none;">Não</label>
									</div>
								</div>
							</div>
						</div>
					<div class="column">
						<div class="input-box">
							<label><i class="fluigicon fluigicon-company icon-sm" aria-hidden="true"></i></i>
								Nota de avaliação do evento como um todo</label>
							<div class="column">
								<div class="select-box">
									<select required="" id="nota1" name="nota1" class="form-control"
										style="height: 100%;">
										<option hidden value="">Selecione a nota de 1 a 5 estrelas</option>
										<option value="1" required="" id="estrela" name="estrela">★✩✩✩✩</option>
										<option value="2" required="" id="estrela" name="estrela">★★✩✩✩</option>
										<option value="3" required="" id="estrela" name="estrela">★★★✩✩</option>
										<option value="4" required="" id="estrela" name="estrela">★★★★✩</option>
										<option value="5" required="" id="estrela" name="estrela">★★★★★</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="input-box">
							<label><i class="fluigicon fluigicon-company icon-sm" aria-hidden="true"></i></i>
								Nota para medir o interesse no serviço TOTVS</label>
							<div class="column">
								<div class="select-box">
									<select required="" id="nota2" name="nota2" class="form-control"
										style="height: 100%;">
										<option hidden value="">Selecione a nota de 1 a 5 estrelas</option>
										<option value="1" required="" id="estrela" name="estrela">★✩✩✩✩</option>
										<option value="2" required="" id="estrela" name="estrela">★★✩✩✩</option>
										<option value="3" required="" id="estrela" name="estrela">★★★✩✩</option>
										<option value="4" required="" id="estrela" name="estrela">★★★★✩</option>
										<option value="5" required="" id="estrela" name="estrela">★★★★★</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="input-box">
							<label><i class="flaticon flaticon-assignment icon-sm" aria-hidden="true"></i> Comentários</label>
							<textarea class="form-control no-resize" name="coment" id="coment" rows="8" maxlength="4000"
								required=""></textarea>
						</div>
					</div>
					<div class="column">
						<button type="button" class="enviar" onClick="editareg()" style="font-size:1rem; font-family: sans serif; height: 55px;
    width: 98%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #FB0058;">Enviar</button>
					</div>
		</div>
</div>
</section>
</form>
</div>
<script>
function estatus() {
	var evento = document.getElementById('status').value;
	var status = document.getElementById('status');
	var faltaConvidado = document.getElementById('FC');
	var faltaConvidadoRemarcar = document.getElementById('FCR');
	var faltaAnfitriao = document.getElementById('FA');
	if (evento == "faltaC") {
		faltaConvidado.style.display = "block";
		faltaConvidadoRemarcar.style.display = "block";
		faltaAnfitriao.style.display = "none"
	} else if (evento == "faltaA") {
		faltaAnfitriao.style.display = "block"
		faltaConvidado.style.display = "none";
		faltaConvidadoRemarcar.style.display = "none";
	} else if (evento == "realizado") {
		faltaAnfitriao.style.display = "none"
		faltaConvidado.style.display = "none";
		faltaConvidadoRemarcar.style.display = "none";
	}
}
</script>
</body>
</div>
</div>