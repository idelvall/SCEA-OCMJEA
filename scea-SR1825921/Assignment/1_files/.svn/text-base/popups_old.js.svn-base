//<script language="javascript">
var win = null;
function helpWindow(blurbtext,blurbtitle)	{ 
	helplocation = "/help_box.asp?hlp_title=" + blurbtitle + "&hlp_cmd=" + blurbtext;
	LeftPosition = (screen.width) ? (screen.width-300)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-150)/2 : 0;
	settings = 'height=150,width=300,top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,resizable'
	win = window.open(helplocation,"popup",settings)
	win.focus();
}
var win2 = null;
function indexedHelp(sHelpIDList,lPopupWindowHeight,sExtraStuff)	{ 
	helplocation = "/indexedhelp.asp?ExtraStuff="+sExtraStuff+"&sIconList=" + sHelpIDList;
	LeftPosition = (screen.width) ? (screen.width-300)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-lPopupWindowHeight)/2 : 0;
	settings = 'height='+ lPopupWindowHeight + ',width=300,top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,resizable'
	win2 = window.open(helplocation,"popup",settings)
	win2.focus();
}
//</script>