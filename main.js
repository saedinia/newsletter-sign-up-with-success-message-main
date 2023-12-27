const form = document.getElementById('newsletter-form')
const email = document.getElementById('email');
const errorMsg = document.querySelector('.label-error-msg span')

let validForm = false;

email.addEventListener('input', (e) => {
    validForm = ValidateEmail(email.value)
    
    if (!validForm) {
        errorMsg.style.display = "unset"
    } else {
        errorMsg.style.display = "none"
    }
})

form.addEventListener('submit', (e) => {
    if (!validForm) {
        errorMsg.style.display = "unset"
    } 
    else {
        const newsletterContainer = document.querySelector('.newsletter__container')
        const newsletterSuccess = document.querySelector('.newsletter__success')

        newsletterContainer.style.display = "none";
        newsletterSuccess.style.display = "grid";
        newsletterSuccess.querySelector('span.email').innerHTML = email.value;
    }

    e.preventDefault()
})


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }    
    return (false)
}