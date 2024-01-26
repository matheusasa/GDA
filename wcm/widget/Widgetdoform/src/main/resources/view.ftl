<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
  <!DOCTYPE html>
  <html>

  <head>
    <title>Form</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="/style-guide/css/fluig-style-guide.min.css" />
    <script src="/resources/js/jquery/jquery.js"></script>
    <script src="/resources/js/jquery/jquery-ui.min.js"></script>
    <script src="/resources/js/mustache/mustache-min.js"></script>
    <script src="/style-guide/js/fluig-style-guide.min.js"></script>
    <!-- CUSTOM -->
    <link
      href="/style-guide/css/fluig-style-guide-filter.min.css"
      rel="stylesheet"
      type="text/css" />
    <link
      href="/style-guide/css/fluig-style-guide-ratingstars.min.css"
      rel="stylesheet"
      type="text/css" />
    <script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>
    <script src="/style-guide/js/fluig-style-guide-ratingstars.min.js"></script>
    <link
      href="/webdesk/customresources?cid=1&resourceName=temaFormulario/0.css"
      type="text/css"
      rel="stylesheet" />
  </head>

  <body class="fluig-style-guide">
    <form
      class="totvs-form grid vertical create-form-components ui-sortable t0"
      name="createFormComponents"
      style="padding-left: 10px; padding-right: 10px">
      <img
        src="https://lab.fluig.com/portal/resources/images/logo.png"
        alt="Logo"
        id="logo"
        style="max-height: 48px; max-width: 150px" />
      <h1 class="title-form-application">
        Agendamento de reunião
      </h1>
      <div
        class="form-field"
        data-type="textbox"
        data-show-properties=""
        data-field-name="textbox0"
        style="position: relative; left: 0px; top: 0px">
        <div class="row">
          <div class="form-input">
            <div class="form-group col-md-9">
              <label>Selecionar responsavel</label>
              <input id="filter-example-generic" type="text" name="filter-example-generic" />
            </div>
          </div>
        </div>
      </div>
    </form>
    <button data-gravar>
      Gravar
    </button>
  </body>
  <script>
  var settings = {
    source: {
      url: "/api/public/ecm/dataset/search?datasetId=dstablefiltrada&",
      contentType: "application/json",
      root: "content",
      pattern: "",
      limit: 10,
      offset: 0,
      patternKey: "pattern",
      limitkey: "limit",
      offsetKey: "offset",
    },
    displayKey: "NOME",
    multiSelect: true,
    style: {
      autocompleteTagClass: "tag-gray",
      tableSelectedLineClass: "info",
    },
    table: {
      header: [{
          title: "NOME",
          size: "col-xs-3",
        },
        {
          title: "UNIDADE",
          size: "col-xs-3",
          dataorder: "UNIDADE",
          standard: true,
        },
        {
          title: "SEG",
          size: "col-xs-3",
          dataorder: "SEG",
          standard: true,
        }
      ],
      renderContent: ["NOME", "UNIDADE", "SEG"],
    },
  };
  var filter = FLUIGC.filter("#filter-example-generic", settings);
  </script>

  </html>
</div>