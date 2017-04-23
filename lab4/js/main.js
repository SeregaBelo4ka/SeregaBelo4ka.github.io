
function downloadXml(url) {

	var xml;  
    if(window.XMLHttpRequest)  
    {  
        xml=new window.XMLHttpRequest(); 
        xml.onloadend = ready; 
        xml.open("GET", url, false);  
        xml.send("");  
        return xml.responseXML;  
    }  
    else  
        if(window.ActiveXObject)  
        {  
            xml=new ActiveXObject("Microsoft.XMLDOM");  
            xml.async=false;  
            xml.load(url);  
            return xml;  
        }  
        else  
        {  
            alert("Завантаження XML не підтримується браузером!");  
            return null;  
        } 
   };  
function tableUpdate(tableid){
var xml = downloadXml("group.xml");
}
function ready(){
xmltext=xml.responseXML;
var rootTable = document.getElementById(tableid).tBodies[0];
var ratesArr =xmltext.getElementsByTagName('mygroup');
for (var i = 0; i < rootTable.rows.length; i++) {
var tableRow = rootTable.rows[i];
tableRow.cells[0].innerHTML = ratesArr[i].getAttribute('id');
tableRow.cells[1].innerHTML = ratesArr[i].getAttribute('fio');
tableRow.cells[2].innerHTML = ratesArr[i].getAttribute('bursaries');
tableUpdate("myTable");
}

