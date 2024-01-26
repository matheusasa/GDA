<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <link
        rel="stylesheet"
        type="text/css"
        href="/style-guide/css/fluig-style-guide.min.css" />
    <script src="/style-guide/js/fluig-style-guide.min.js"></script>
    <!-- CUSTOM -->
    <script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>
    <script src="/style-guide/js/fluig-style-guide-ratingstars.min.js"></script>
    <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
    <style>
    .inputinv {
        display: none;
    }
    </style>

    <body>
        <!--informando o de "controle de agendamento"-->
        <div class="fluig-style-guide">
            <form name="form" role="form">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h2 class="panel-title"><i class="fluigicon fluigicon-calendar-top-right icon-md" aria-hidden="true"></i> Controle de Agendamento
                        </h2>
                    </div>
                    <!--recebendo o input de nome-->
                    <div class="panel-body">
                        <div class="row ">
                            <div class="form-group col-md-4">
                                <label for="nome">
                                    <h11>*</h11>Nome:
                                </label>
                                <input type="text" name="nome" required id="nome" class="form-control" readonly>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="email">
                                    <h11>*</h11>E-mail:
                                </label>
                                <input type="email" name="email" required id="email" class="form-control" readonly>
                            </div>
                            <div class="form-group col-md-4">
                                <div class="select-box">
                                    <label> Unidade</label>
                                    <select required="" id="segmentos" name="segmentos" class="form-control"
                                        style="height: 100%">
                                        <option hidden value="">Unidade</option>
                                        <option value="TSM" required="" id="tsm" name="tsm">TSM</option>
                                        <option value="TVALE" required="" id="tvale" name="tvale">TVALE</option>
                                        <option value="TSUL" required="" id="tsul" name="tsul">TSUL</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="form-group col-md-3">
                                <label>Modalidade:</label>
                                <select required="" id="modalidade" name="modalidade" class="form-control">
                                    <option value="Presencial" required>Presencial</option>
                                    <option value="Online" required>Online</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <label> Segmento</label>
                                <select required="" id="segmentosL2" name="segmentosL2" class="form-control">
                                    <option hidden value="">Selecione seu Segmento</option>
                                    <option value="Agro" required>Agro</option>
                                    <option value="Construção" required>Construção</option>
                                    <option value="distribuição" required>Distribuição</option>
                                    <option value="Educacional" required>Educacional</option>
                                    <option value="Logística" required>Logística</option>
                                    <option value="Manufatura" required>Manufatura</option>
                                    <option value="Serviços" required>Serviços</option>
                                    <option value="Varejo" required>Varejo</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3">
                                <button type="button" class="btn btn-default" onClick="BuscaInfo()" onClick="table()"><span class="fluigicon fluigicon-zoom-in"></span></button>
                            </div>
                            <div id="divLoading" class="col-xs-12 col-sm-12 col-md-12">
                                <table id="tablesconder" name="tablesconder" class="table table-striped table-bordered table-responsive">
                                    <thead>
                                        <tr class="info">
                                            <td><b><i class="flaticon flaticon-add-branch icon-xl" aria-hidden="true"></i>
                                                </b></td>
                                            <td><b>Nome</b></td>
                                            <td><b>Email</b></td>
                                        </tr>
                                    </thead>
                                    <tbody id="tbDadosMIT"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title"><i class="flaticon flaticon-group-person icon-xl" aria-hidden="true"></i>Cliente/Prospect</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="form-group col-md-3">
                                <label for="emailClient">
                                    <h11>*</h11>E-mail Cliente:
                                </label>
                                <input type="email" required name="emailClient" id="emailClient" class="form-control">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="cnpj">
                                    <h11>*</h11>CNPJ:
                                </label>
                                <input type="text" name="cnpj" id="cnpj" class="form-control" required
                                    placeholder="XX. XXX. XXX/0001-XX."
                                    maxlength="18" pattern="\[0-9]
{2}\ [0-9]
{4,6}-[0-9]
{3,4}$"
                                    OnKeyPress="formatar('##.###.###/####-##', this)">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="cargo">
                                    <h11>*</h11>Cargo:
                                </label>
                                <input type="text" name="cargo" id="cargo" class="form-control" required placeholder="Ex: Executivo">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="wpp">
                                    <h11>*</h11>Número de WhatsApp:
                                </label>
                                <input type="tel" name="wpp" id="wpp" class="form-control" pattern="\[0-9]
{2}\ [0-9]
{4,6}-[0-9]
{3,4}$"
                                    OnKeyPress="formatar('## #####-####', this)" required placeholder="(XX) XXXXX-XXXX" mask="(00) 90000-0000">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="razao">
                                    <h11>*</h11>Razao Social:
                                </label>
                                <input type="text" name="razao" required id="razao" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="contato">
                                    <h11>*</h11>Pessoa de Contato:
                                </label>
                                <input type="text" required name="contato" id="contato" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>
                                <h11>*</h11>Briefing:
                            </label>
                            <textarea class="form-control no-resize" required name="briefing" id="briefing" rows="8"
                                maxlength="4000"></textarea>
                        </div>
                        <div class="botao">
                            <button type="submit" class="btn btn-primary" id="btCria" name="btCria" onClick="criaRegistro()">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </body>
    <script>
    $("#tablesconder").hide();

    function formatar(mascara, documento) {
        var i = documento.value.length;
        var saida = mascara.substring(0, 1);
        var texto = mascara.substring(i);
        if (texto.substring(0, 1) != saida) {
            documento.value += texto.substring(0, 1);
        }
    }
    </script>
</div>