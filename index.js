const contactForm = document.getElementById("contact-form");

   emailjs.init("pVDExWkgwC5270NtH");

  // handleSubmit form 
  contactForm.addEventListener("submit", (e) => {

    e.preventDefault();
    // input value
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const userData = { name, email, message };

// send email
    emailjs.send('service_qgoll5q', 'template_9s4fxmh', userData).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        contactForm.reset();
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );

  });