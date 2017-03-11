
	// Image preloader
	function countdownInit() {
		// set date to countdown to
		//endDate = new Date(year, month - 1, day, ( (hour) ? hour : 0), ( (minute) ? minute : 0), ( (second) ? second : 0));
		endDate = new Date(done_year, done_month, done_day, ((done_hour) ? done_hour : 0), ( (done_min) ? done_min : 0), ( (done_sec) ? done_sec : 0));
		endDate2 = new Date(done2_year, done2_month, done2_day, ((done2_hour) ? done2_hour : 0), ( (done2_min) ? done2_min : 0), ( (done2_sec) ? done2_sec : 0));
		//seed the difference
		difference1 = endDate - begin_date;	difference2 = endDate2 - begin_date;
		// start countdown
		countObject = setInterval('countdownUpdate()', 1000);
	}
	// Update the countdown display
	function countdownUpdate() {
		var separator = ':';
		//subtract one second from the difference
		difference1 -= 1000;  difference2 -= 1000;
		// decompose difference into days, hours, minutes and seconds parts
		var days1    = parseInt(difference1 / 86400000) + '';
		var hours1   = parseInt((difference1 % 86400000) / 3600000) + '';
		var minutes1 = parseInt((difference1 % 3600000) / 60000) + '';
		var seconds1 = parseInt((difference1 % 60000) / 1000) + '';
		var days2    = parseInt(difference2 / 86400000) + '';
		var hours2   = parseInt((difference2 % 86400000) / 3600000) + '';
		var minutes2 = parseInt((difference2 % 3600000) / 60000) + '';
		var seconds2 = parseInt((difference2 % 60000) / 1000) + '';
		
		//if difference is now zero, form submit
		if (difference1 <= 0 && show_timer !="N")	{
			ajaxSACWork(); 	clearInterval(countObject);
			document.form1.TimerAutoSubmit.value = 'test';
			if(typeof(isflashdone) != "undefined"){isflashdone == "true";}
			try{	//try to save audio
				frm1ButtonClick='cmdEndTestTop';
				do602Processing('cmdEndTestTop');
				SubmitTheForm('cmdEndTestTop');
			}catch(e){
				//if there is no 'do602processing', submit normally.
				document.form1.submit();
			}finally{
				//document.form1.submit();
			}	
			
		}
		if (difference2 <= 0 && section_timing_js!="N")	{	
			ajaxSACWork(); clearInterval(countObject);
			document.form1.TimerAutoSubmit.value = 'section';
			if(typeof(isflashdone) != "undefined"){isflashdone == "true";}
			try{	//try to save audio
				frm1ButtonClick='cmdEndTestTop';
				do602Processing('cmdEndTestTop');
				SubmitTheForm('cmdEndTestTop');
			}catch(e){
				//if there is no 'do602processing', submit normally.
				document.form1.submit();
			}finally{
				//document.form1.submit();
			}	
		}
		
		// negative values should be set to 0 single digit values should have a '0' prepended to them
		if (isNaN(days1) || days1.charAt(0) == '-') days1 = '0000';
		else if (days1.length == 1) days1 = '000' + days1;
		else if (days1.length == 2) days1 = '00' + days1;
		else if (days1.length == 3) days1 = '0' + days1;
		if (isNaN(hours1) || hours1.charAt(0) == '-') hours1 = '00';
		else if (hours1.length == 1) hours1 = '0' + hours1;
		if (isNaN(minutes1) || minutes1.charAt(0) == '-') minutes1 = '00';
		else if (minutes1.length == 1) minutes1 = '0' + minutes1;
		if (isNaN(seconds1) || seconds1.charAt(0) == '-') seconds1 = '00';
		else if (seconds1.length == 1) seconds1 = '0' + seconds1;
		//2 - section
		if (isNaN(days2) || days2.charAt(0) == '-') days2 = '0000';
		else if (days2.length == 1) days2 = '000' + days2;
		else if (days2.length == 2) days2 = '00' + days2;
		else if (days2.length == 3) days2 = '0' + days2;
		if (isNaN(hours2) || hours2.charAt(0) == '-') hours2 = '00';
		else if (hours2.length == 1) hours2 = '0' + hours2;
		if (isNaN(minutes2) || minutes2.charAt(0) == '-') minutes2 = '00';
		else if (minutes2.length == 1) minutes2 = '0' + minutes2;
		if (isNaN(seconds2) || seconds2.charAt(0) == '-') seconds2 = '00';
		else if (seconds2.length == 1) seconds2 = '0' + seconds2;
		
		if (days1 !='0000'){var countdown_t = days1 + ':'+hours1 + ":" + minutes1 + ":" + seconds1;}
		else{var countdown_t = hours1 + ":" + minutes1 + ":" + seconds1;}//if no days, dont show days.
		if (days2 !='0000'){var countdown_s = days2 + ':'+hours2 + ":" + minutes2 + ":" + seconds2;}
		else{var countdown_s = hours2 + ":" + minutes2 + ":" + seconds2;}//if no days, dont show days.

		if ($("tTimer")){$("tTimer").innerHTML = countdown_t}
		if ($("sTimer")){$("sTimer").innerHTML = countdown_s}
		
		//section and test five minute warnings.
		if (days1 == 0 && hours1 == 0 && minutes1 == 5 && seconds1 == 0 && show_timer == "B"){alert ($("testTimerWarning").innerHTML);}
		if (days2 == 0 && hours2 == 0 && minutes2 == 5 && seconds2 == 0 && show_section_timer == "B" ){alert ($("sectionTimerWarning").innerHTML);}
	}

Event.observe(window,'load',countdownInit);		//on window load, lets do stuff.

//hide the timer stuff
if (show_timer=="N" || show_timer==""){if($("testTimer")){$("testTimer").hide();}}
if (show_section_timer=="N"|| show_section_timer==""){if($("sectionTimer")){$("sectionTimer").hide();}}
