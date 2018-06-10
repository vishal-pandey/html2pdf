import { Component , AfterViewInit } from '@angular/core';
import html2pdf from'html2pdf.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {

	  public show:boolean = false;
 	  public buttonName:any = 'Show';

	constructor(){
		
	}


//ng after view init methiod

		ngAfterViewInit(){
			const $this1 = this;
			$("#imgInp").change(function() {
	  			$this1.readURL(this);
			});
		}

		ngAfterViewChecked(){
			const $this1 = this;
			$("#imgInp1").change(function() {
	  			$this1.readURL1(this);
			});
		}

			
//read URL methods

		readURL(input) {

		  if (input.files && input.files[0]) {
		    var reader = new FileReader();

		    reader.onload = function(e: any) {
		      $('#blah').attr('src', e.target.result);
		      $('.header').css({backgroundImage: "url('../assets/logo.gif')"})
		    }

		    reader.readAsDataURL(input.files[0]);
		  }
		}



		readURL1(input) {

		  if (input.files && input.files[0]) {
		    var reader = new FileReader();

		    reader.onload = function(e: any) {
		      $('#blah1').attr('src', e.target.result);
		    }

		    reader.readAsDataURL(input.files[0]);
		  }
		}


//toggle between show and hide

	toggle() {
    const $this3 = this;
    $this3.show = !$this3.show;

    // CHANGE THE NAME OF THE BUTTON.
    if($this3.show)  
      $this3.buttonName = "Hide";
    else
      $this3.buttonName = "Show";
  }
  

// Vishal Changes



  noOfIndustry:any = [];
  industycount: any = 0;

  // Add Industry
  addIndustry(){
  	this.industycount++;
  	this.noOfIndustry.push(this.industycount);

  }


  industryTitle=[];

  onTitle(event:any, theTitle:any, ini:any){
  	this.industryTitle[ini] = theTitle;
  }

  industryDescripton=[];

  onDescription(event:any, theDescription:any, ini:any){
  	this.industryDescripton[ini] = theDescription;
  }

  industryBUttonTitle=[];

  onButtonTitle(event:any, theButonTitle:any, ini:any){
  	this.industryBUttonTitle[ini] = theButonTitle;
  }

  industryButtonLink=[];

  onButtonLink(event:any, theButtonLink:any, ini:any){
  	this.industryButtonLink[ini] = theButtonLink;
  }

  industryImage = [];

  loadIndustryImage(event:any,industryImg:any , ini:any){
  	// console.log(event, industryImg, ini);

  	var reader = new FileReader();

    	const $this = this;

	    reader.onload = function(e: any) {

	    	$this.industryImage[ini] = e.target.result;
	      // $('#blah1').attr('src', e.target.result);
	    }

	    reader.readAsDataURL(industryImg);

  }

// Vishal chages end




//method to generate pdf
	  generatePdf() {

	   var element = document.getElementById("GenPDF");

	   var opt = {
				  margin:       0.2,
				  filename:     'myfile.pdf',
				  image:        { type: 'png', quality: 1 },
				  html2canvas:  { scale: 2 },
				  jsPDF:        { unit: 'in', format: 'a3', orientation: 'portrait' }
				};

		html2pdf().from(element).set(opt).save();
	    
	  }

}