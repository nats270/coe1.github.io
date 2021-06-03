
// ================================================================
// on click show the pop up page and onclick cross close it
// ================================================================

document.getElementById('text-1').addEventListener("click", function() {
	document.querySelector('.bg-model').style.display = "flex";
});

document.getElementById('text-2').addEventListener("click", function() {
	document.querySelector('.bg-model').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-model').style.display = "none";
});

// ================================================
// for form section , to send file to google drive
// ================================================

$('#file').on("change", function(e){
                                
    var file = this.files[0];
    var file_reader = new FileReader();
    file_reader.fileName = file.name; 
    file_reader.onload = function(e){
        e.target.result;
        html = '<input type="hidden" name="data" value="' + e.target.result.replace(/^.*,/, '') + '" >';
        html += '<input type="hidden" name="mimetype" value="' + e.target.result.match(/^.*(?=;)/)[0] + '" >';
        html += '<input type="hidden" name="filename" value="' + e.target.fileName + '" >';
        $("#data").empty().append(html);
    	}
        file_reader.readAsDataURL(file);
});

// ===============================
// onclick jump to home page 
// ===============================

function myOnClick(){
	document.location.href="index.html"
}

// ========================================================
// stop from reloading the google web app link after submit 
// ========================================================
var element = document.getElementById("file-name");
$(function () {
	$('#form').on('submit',function (e) {
		document.getElementById('msg').innerHTML= "Uploading...."
		

	  $.ajax({
		type: 'post',
		url: 'https://script.google.com/macros/s/AKfycbx-UWwqum46vVusBASnr2Aj5t5B6ESyn3TbRgNyPL1Sx7SU8vlNPAwmRgLPUBk03NzGvw/exec',
		data: $('#form').serialize(),
		success: function () {
		 document.getElementById('msg').innerHTML= "Uploaded";
		 document.getElementById("name-change").innerHTML = 'Uploaded';
		 element.style.display = "initial";
		}
	  });
  e.preventDefault();
});
});

// ================================================
// show the file name to be uploaded in cv form
// ================================================

let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
const fileName = document.querySelector("#name-change");
const file = document.querySelector("#file");
const upload = document.querySelector('#submit');

upload.addEventListener("click", function(){
	if(file.value){
		
		let valueStore = file.value.match(regExp);
		element.textContent = valueStore;
		fileName.classList.add('show');
}
});