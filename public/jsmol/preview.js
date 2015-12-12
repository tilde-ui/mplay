function loadPreview() {
  $.get('/exampleData/caffeine_script.txt', function(data) {
    Jmol._isAsync = false;
    console.log(data);
    var jmolApplet0;

    var Info = {
    	width: "100%",
    	height: "100%",
    	debug: false,
    	color: "0xFFFFFF",
    	addSelectionOptions: false,
    	use: "HTML5",   // JAVA HTML5 WEBGL are all options
    	j2sPath: "/jsmol/j2s", // this needs to point to where the j2s directory is.
    	jarPath: "/jsmol/java",// this needs to point to where the java directory is.
    	jarFile: "JmolAppletSigned.jar",
    	isSigned: true,
    	script: data,
    	serverURL: "http://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
    	disableJ2SLoadMonitor: true,
      disableInitialConsole: true,
      allowJavaScript: true
    }

    $(document).ready(function() {
      $("#appdiv").html(Jmol.getAppletHtml("jmolApplet0", Info));
    })

    var lastPrompt=0;
  });
}
