#target indesign

//~ === Scripts === Window Menu:Utilities === 52224 =======================
//~ ---- Show "Scripts Panel" ---------------------------------------------
function showScriptsPanel() {
    try { 
      app.panels.itemByName("$ID/Scripts").visible = true;
//~   app.menuActions.itemByID(52224).invoke(); 
    } catch(e) {
        alert(e);
        writeLog(e);
      };
}
// test
