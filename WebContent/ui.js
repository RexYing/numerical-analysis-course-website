$(function() {
    $( "#tabs" ).tabs({
      beforeLoad: function( event, ui ) {
        ui.jqXHR.error(function() {
          ui.panel.html(
            "Couldn't load this tab. We'll try to fix this as soon as possible. ");
        });
      }
    });
    
    $( "#accordion" ).accordion({ header: "h3" });
  });

function autoResizeDiv()
{
    document.getElementById('main').style.height = window.innerHeight +'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();
