
	var knightR = 0; var isProcessing = 0; var frm1ButtonClick = 'NA'; var the_pid = 'top';
	var noMoveAhead = false; var disSelVerifyDisplay = false; var MasterTABDisable = '0';
	var StopTABNow = 0, test_event_item_id = 0;


	//form submittal
	function doProcessing(e)	{
		if (disSelVerifyDisplay==true){validatePage();}	
		
		try	{if (movie.GetVariable(sForm + sbCOMPLETE).toUpperCase() == "FALSE") {return false;}}catch(e){}
		
		if (noMoveAhead==true) {			//distractor selection not correct, prevent submittal.
			return false;
		}else{	
			if (frm1ButtonClick=="cmdPrevBottom" || frm1ButtonClick=="cmdNextBottom") 	{
				the_pid = "bottom";
			}else{
				the_pid = "top";
				if (frm1ButtonClick=="cmdPrevTop" || frm1ButtonClick=="cmdNextTop") 	{
					document.getElementById("goPTD").style.textAlign = "left";
				}else{
					document.getElementById("goPTD").style.textAlign = "right";
				}
			}
			if (isProcessing==0)	{
				isProcessing = 1;
				if (the_pid == "top")	{
					document.getElementById("goPid").style.display = "inline";
				}else{
					document.getElementById("goPid2").style.display = "inline";
				}
				imgProcess = setInterval("knightRider()",45);
			}else{
				//nothing, already running
			}
			//continue form submission
			return true;
		}
	}
	function knightRider()	{
		if (the_pid == "top")	{document.form1.goP.src= "/pitbull/images_all/_goprocessing/pos_"+knightR+".gif";
		}else{document.form1.goP2.src="/pitbull/images_all/_goprocessing/pos_"+knightR+".gif";}
		knightR++;	if (knightR == 14) {knightR=0;}
	}

	//show micro exhibits.
	function showZibit (which_id)	{
		//enumerate all class zibit#, hide them
		if ($(which_id).style.display=='block'){hideIt=true}else{hideIt=false}
		var nodes = $$('div.zibitHolder');for (var i = 0; i < nodes.length; i++) {nodes[i].style.display = "none";}
		if(!hideIt)$(which_id).style.display='block';
	}
	
	//autosave essay
	function ajaxSAC ()	{new PeriodicalExecuter(ajaxSACWork, 60);}
	function ajaxSACWork ()	{
		if ($('tei'+test_event_item_id+'_text')){		//if it exists, do it.
			if ($('myEditor')){$('tei'+test_event_item_id+'_text').value = ""+myEditor.document.body.innerHTML+"";}
			new Ajax.Request(
				'/users/candidate/taketest/item_cb.asp?target=tei'+test_event_item_id+'_text&func=SACUpdate&timer=' + Math.random()*5 + '&slug=blank',
				{
					method: 'post',
					evalScripts: true,
					parameters: $('tei'+test_event_item_id+'_text').serialize(false) ,
					onSuccess: function(transport) {
						$('ajUpdTarget').innerHTML=transport.responseText;
						flashEffect('auotSaveMsg','#e6eee2','#ffffff','#ffffff',1);
					}
				}
			); 
		}
	}
	
	//show thumb
	function tagImage(what_image)	{
		document.form1.imgTag.value=what_image;
		document.form1.action = document.form1.action + "#IMG" + what_image;
		document.form1.submit();
	}
	
	//capture tab
	function catchOnKeyDown(e)	{
		("undefined" == typeof (e)) ? the_key = event : the_key = e ;
		
		//kill off the TAB key in the TEXTAREA, if requested.
		if (StopTABNow == "1")	{
			if (the_key.keyCode == "9")	{
				return false;
			}
		}
		
		if (the_key.keyCode == "27") {
			if (isProcessing==1)	{
				clearInterval(imgProcess);	//cancel the image animation
				if (document.form1.goP) {document.getElementById("goPid").style.display = "none";}
				if (document.form1.goP2){document.getElementById("goPid2").style.display = "none";}
				isProcessing = 0;
				//reset the form objects to activated.
				return false;				//cancel the form.
			}else{
				the_key.returnValue = false;	//ESC not allowed.
			}
		}
	} 
	
	
	//misc
	function flashEffect(element, colorStart, colorStop, colorRestore, flashDuration){
	new Effect.Highlight(element, {startcolor: colorStart,endcolor: colorStop,restorecolor: colorRestore,duration: flashDuration})
	}
	
	
	function rT(what)	{$(what).addClassName("timeReveal");return false;}
	function hT(what)	{$(what).removeClassName("timeReveal");return false;}
	
	//set up keydown event
	document.onkeydown = catchOnKeyDown ;

