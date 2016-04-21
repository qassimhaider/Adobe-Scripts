	/* This Script is wrote by Qassim Haider.*********/
	/* (c) 2007 QassimHaider - all rights reserved.*****/
	/* www.qalligraphy.net ***************************/
	//LastUpdate 28 Nov 2008
	//LastUpdate 9 Feb 2009

/*
	Size	Millimetres
	Width	Height
A0	841	x	1189
A1	594	x	841	
A2	420	x	594
A3	297	x	420
A4	210	x	297
A5	148	x	210
A6	105	x	148
A7	75	x	105
*/

// enable double clicking from the Macintosh Finder or the Windows Explorer
//#target illustrator
#target Photoshop








	try {
		show_dlg();
	}
	catch(e) {
		
	}
	
	var w,h,A;
	
	function show_dlg(){
		var dlg = new Window('dialog', '\"A\" Dimension Creator', [100,100,600,250]);
			
		dlg.Label4 = dlg.add('statictext',[20,125,320,145], 'Qassim Haider, qassim.haider@gmail.com');
			
		dlg.Panel = dlg.add('panel', [10,10,490,100], '');
		
		dlg.Panel.Label1 = dlg.Panel.add('statictext',[10,10,85,30], 'Size');
		dlg.Panel.Label2 = dlg.Panel.add('statictext',[10,35,85,55], 'Width');
		dlg.Panel.Label3 = dlg.Panel.add('statictext',[10,60,85,80], 'Height');
		dlg.Panel.Label1.alignment = 'Right';
		
		
		dlg.Panel.drplist = dlg.Panel.add('dropdownlist',[90,10,290,30]);
		
		var items = new Array('A0','A1','A2','A3','A4','A5','A6','A7');
		
		for(var i = 0; i<items.length; i++){
			dlg.Panel.drplist.add('item',items[i]);
		}
		
		dlg.Panel.drplist.items[0].selected = true;
		

		
		cDimension(String(dlg.Panel.drplist.selection));
		
		dlg.Panel.txt_w = dlg.Panel.add('edittext', [90,35,290,55], w +' mm');
		dlg.Panel.txt_h = dlg.Panel.add('edittext', [90,60,290,80], h +' mm');
		
		dlg.Panel.txt_w.enabled = false;
		dlg.Panel.txt_h.enabled = false;

		dlg.cncl_btn = dlg.add('button', [340,115,410,135], 'Cancel');
		dlg.ok_btn = dlg.add('button', [420,115,490,135], 'Create');
	
	
		dlg.Panel.drplist.onChange = function (){
			
		A = dlg.Panel.drplist.selection;
		
			cDimension(String(dlg.Panel.drplist.selection));
			
			dlg.Panel.txt_w.text = w +' mm';
			dlg.Panel.txt_h.text = h +' mm';
		
		}
		

		
		
		
		dlg.cncl_btn.onClick = function () {
		dlg.close();
		}
	
		dlg.ok_btn.onClick = function (){
			CreatePage();
			dlg.close();

		}
	
	
		dlg.show();
	
	}
	
	
	function cDimension(A){
	
	
	

	
	if(A == "A0"){
		w = 841;
		h = 1189;
		
	}else if(A == "A1"){
		w = 594;
		h = 841;

	}else if(A == "A2"){
		w = 420;
		h = 594;
		
	}else if(A == "A3"){
		w = 297;
		h = 420;
		
	}else if(A == "A4"){
		w = 210;
		h = 297;
		
	}else if(A == "A5"){
		w = 148;
		h = 210;
		
	}else if(A == "A6"){
		w = 105;
		h = 148;
		
	}else if(A == "A7"){
		w = 75;
		h = 105;
		
	}
		

	}
	
	function CreatePage(){

		//1 millimeter = 2.83464567 PostScript points;
		var point = 2.83464567;
		
		if(app.name == "Adobe Illustrator"){
		
		w *= point;
		h *= point;	
		
		doc = app.documents.add(DocumentColorSpace.CMYK, w , h);
		Units = "Millimetres";
		
		}else if(app.name == "Adobe Photoshop"){
		w /= 10;
		h /= 10;	
		
			preferences.rulerUnits = Units.CM;
			app.documents.add(w , h, 300, A,NewDocumentMode.CMYK,DocumentFill.WHITE)
		}
		
	}
	
	
	
	
	
	
	