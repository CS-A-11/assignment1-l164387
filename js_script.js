

			function showTime(){
				var date = new Date();
				var h = date.getHours(); // 0 - 23
				var m = date.getMinutes(); // 0 - 59
				var s = date.getSeconds(); // 0 - 59
				var session = "AM";
				
				if(h >= 12){
					h = h - 12;
					session = "PM";
				}

				if(h == 0){
					h = 12;
				}

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				var time = h + ":" + m + ":" + s + " " + session;
				document.getElementById("MyClockDisplay").innerText = time;
				document.getElementById("MyClockDisplay").textContent = time;

				setTimeout(showTime, 1000);
			}

			showTime();
			
			//calender
			
			//this function will find today's date
	function calendar(){
		var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var month=['January','February','March','April','May','June','July','August','September','October','November','December'];
		var d=new Date();
		setText('calendar-day', day[d.getDay()]);
		setText('calendar-date', d.getDate());
		setText('calendar-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
	};

	//this function will set the text value of 
	 //tags
	function setText(id, val){
		if(val < 10){
			val = '0' + val;    //add leading 0 if val < 10
		}
		document.getElementById(id).innerHTML = val;
	};
	
	//call calendar() when page load
window.onload = calendar;

			//feedback form validations
			//------------------------------------------------------------------------------------------------------------------------------------
			
			
	//jquery effects


	
	
	
	/*
	border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
	
	*/

		$(document).ready(function(){
    $("#na1").mouseover(function(){
        $("#na1").css("font-size",40);
    });
    $("#na1").mouseout(function(){
        $("#na1").css("font-size", 24);
    });
});
			
	$(document).ready(function(){
    $("#w1").mouseover(function(){
        $("#w1").css("font-size",30);
    });
    $("#w1").mouseout(function(){
        $("#w1").css("font-size",18);
    });
});

$(document).ready(function(){
    $("#w2").mouseover(function(){
        $("#w2").css("font-size",20);
    });
    $("#w2").mouseout(function(){
        $("#w2").css("font-size",14);
    });
});

$(document).ready(function(){
    $("#w3").mouseover(function(){
        $("#w3").css("font-size",20);
    });
    $("#w3").mouseout(function(){
        $("#w3").css("font-size",14);
    });
});

$(document).ready(function(){
    $("#w4").mouseover(function(){
        $("#w4").css("font-size",20);
    });
    $("#w4").mouseout(function(){
        $("#w4").css("font-size",14);
    });
});

$(document).ready(function(){
    $("#w5").mouseover(function(){
        $("#w5").css("font-size",20);
    });
    $("#w5").mouseout(function(){
        $("#w5").css("font-size",14);
    });
});
$(document).ready(function(){
    $("#w6").mouseover(function(){
        $("#w6").css("font-size",20);
    });
    $("#w6").mouseout(function(){
        $("#w6").css("font-size",14);
    });
});

$(document).ready(function(){
    $("#w7").mouseover(function(){
        $("#w7").css("font-size",20);
    });
    $("#w7").mouseout(function(){
        $("#w7").css("font-size",14);
    });
});

$(document).ready(function(){
    $("#feedback").mouseover(function(){
        $("#feedback").css("height",20);
    });
    $("#feedback").mouseout(function(){
        $("#feedback").css("height",0);
    });
});

$(document).ready(function(){
    $("#j1").mouseover(function(){
        $("#j1").css("font-size",22);
    });
    $("#j1").mouseout(function(){
        $("#j1").css("font-size",16);
    });
});


$(document).ready(function(){
    $("#j2").mouseover(function(){
        $("#j2").css("font-size",22);
    });
    $("#j2").mouseout(function(){
        $("#j2").css("font-size",16);
    });
});

$(document).ready(function(){
    $("#j3").mouseover(function(){
        $("#j3").css("font-size",22);
    });
    $("#j3").mouseout(function(){
        $("#j3").css("font-size",16);
    });
});


$(document).ready(function(){
    $("#g1").mouseover(function(){
        $("#g1").css("top",8);
    });
    $("#g1").mouseout(function(){
        $("#g1").css("top",1);
    });
});

$(document).ready(function(){
    $("#f1").mouseover(function(){
        $("#f1").css("font-size",14);
    });
    $("#f1").mouseout(function(){
        $("#f1").css("font-size",18);
    });
});

$(document).ready(function(){
    $("#sub").mouseover(function(){
        $("#sub").css("font-size",18);
    });
    $("#sub").mouseout(function(){
        $("#sub").css("font-size",14);
    });
});




$("#sub").click(function(){
  // action goes here!!
   var inpObj = document.getElementById("name").value;
	
    
	if(/[^a-zA-Z,. ]/.test(inpObj) || inpObj=="")
	{
		document.getElementById("demo").innerHTML = "Enter a Valid Input";
		
	}
	else {
        document.getElementById("demo").innerHTML = "Input is OK";
    } 
	
	
	
	em=document.getElementById("email").value;
	if(em=="")
	{
		
		document.getElementById("demo2").innerHTML = "Fill it and @ missing";
	}
	else
	{
		document.getElementById("demo2").innerHTML = "Input is OK";
	}
	
	var tt= document.getElementById("comment").value;
	var t1=tt.length;
	if(t1<10 || tt=="")
	{
		document.getElementById("demo1").innerHTML = "Enter a Valid Comment of lenght >10";
		
	}
	else {
        document.getElementById("demo1").innerHTML = "Thanks !";
    } 
	
});




			
