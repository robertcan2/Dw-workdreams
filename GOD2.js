
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_changeProp(objId,x,theProp,theValue) { //v9.0
  var obj = null; with (document){ if (getElementById)
  obj = getElementById(objId); }
  if (obj){
    if (theValue == true || theValue == false)
      eval("obj.style."+theProp+"="+theValue);
    else eval("obj.style."+theProp+"='"+theValue+"'");
  }
}
function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}



Spry.Utils.addLoadListener(function() {
	Spry.$$("#p1").addEventListener('mouseover', function(e){ MM_changeProp('wrapper','','backgroundColor','','DIV');MM_preloadImages('Uncooked_pasta_spaghetti_macaroni_isolated_on_white_background.jpg');MM_callJS('js') }, false);
});
