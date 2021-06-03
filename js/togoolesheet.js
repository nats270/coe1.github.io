const scriptURL = 'https://script.google.com/macros/s/AKfycbyi8tCD1vjhETlFe3IYNlUTOsRnL35_xVoyvB0vG8nUO50C8s3_U6v2if4VQAX1uRlzSQ/exec';
                   
                   
const form = document.forms['internship-sheet']


form.addEventListener('submit', e => {

    e.preventDefault();
    fetch( scriptURL, {
        method: 'POST', 
        body: new FormData(form)

    }).then( response => {
        alert('Submitted successfully');
        // console.log('Success!', response);
        window.location.href = "cv_submissin.html";
    }).catch(error => console.error('Error!', error.message));
});

// .then((response) => {
//     console.log('Success!', response);
//     // similar behavior as an HTTP redirect
//     window.location.replace("https://dev.to/");

//     // similar behavior as clicking on a link
//     window.location.href = "https://dev.to/";
// }); 