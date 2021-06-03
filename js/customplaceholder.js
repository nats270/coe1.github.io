const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const emailid = document.getElementById('emailid');
const number = document.getElementById('number');
const degree = document.getElementById('degree');
const inst_name = document.getElementById('name');
const year = document.getElementById('year');
const skills = document.getElementById('skills');

form.addEventListener('submit', (e) => {
	// e.preventDefault();
    
	
	checkInputs();
    alert('working');
});

function checkInputs(){
    // get the values from the inputs

    const firstnamevalue=firstname.value.trim();
    const lastnamevalue=lastname.value.trim();
    const emailidvalue = emailid.value.trim();
    const numbervalue = number.value.trim();
    const degreevalue = degree.value.trim();
    const inst_namevalue = inst_name.value.trim();
    const yearvalue = year.value.trim();
    const skillsvalue = skills.value.trim();

    if(firstnamevalue === ''){
        // show error
        // add error class
        setErrorFor(firstname, 'firstname can not be blank');
    }
    else{
        // add success class
        setSuccessFor(firstname);
    }

    if(lastnamevalue === ''){
        setErrorFor(firstname, 'firstname can not be blank');
    }
    else{
        setSuccessFor(firstname);
    }

    if(numbervalue === ''){
        setErrorFor(number, 'phone no. can not be blank');
    } else if(numbervalue.length != 10){
        setErrorFor(number, 'phone no. must have 10 digit');
    }
    else{
        setSuccessFor(number);
    }

    if(emailidvalue === ''){
        setErrorFor(emailid, 'Emailid can not be blank');
    } else if(!isEmail(emailidvalue)){
        setErrorFor(emailid, 'Emailid is not valid');
    }else{
        setSuccessFor(emailid);
    }

    if(degreevalue === ''){
        setErrorFor(degree, 'Bachelor’s Degree can not be blank');
    }
    else{
        setSuccessFor(degree);
    }

    if(inst_namevalue === ''){
        setErrorFor(inst_name, 'Institution Name can not be blank');
    }
    else{
        setSuccessFor(inst_name);
    }

    if(yearvalue === ''){
        setErrorFor(year, 'graduation year can not be blank');
    }
    else{
        setSuccessFor(year);
    }
    
    if(skillsvalue === ''){
        setErrorFor(skills, 'A.I. skills can not be blank');
    }
    else{
        setSuccessFor(skills);
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formcontrol.querySelector('small');
	formcontrol.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formcontrol = input.parentElement;
	formcontrol.className = 'form-control success';
}

function isEmail(email) {
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return mailformat.test(email);
}