const contactForm = document.getElementById("contact-form")


emailjs.init("pVDExWkgwC5270Nt")


contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // form input value
const name = e.target.name.value;
const email = e.target.email.value;
const message= e.target.message.value;
const visitorData = {name, email, message};


// send email
emailjs.send('service_ooceymc', 'template_3xp3s09', visitorData).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert("email successfully sended...!")
    contactForm.reset()
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

})