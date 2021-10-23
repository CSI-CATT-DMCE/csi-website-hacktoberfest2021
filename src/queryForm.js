const scriptURL = 'https://script.google.com/macros/s/AKfycbwnUWrY8gzGqbVZ4on6-hsPAbms8khQltLrV85cqOmO6kQklv0/exec'
const form = document.forms['submit-to-google-sheet']

// CSI's email address and app(gmail) password
const senderEmail = "raj.dhruv.777.dmce@gmail.com";
const appPassword = "jovhjuponpvjhucb";

form.addEventListener('submit', e => {

  e.preventDefault()
  const formData = new FormData(form)

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      let successbox = document.querySelector('.success-message');
      successbox.innerHTML = '<div class="alert alert-primary">We will get back to you ASAP!</div>';
      form.name = form.email = form.message = ' ';
      console.log('Success!', response)
    })
    .then(() => {
      sendEmail(formData)
    })
    .catch(error => console.error('Error!', error.message))

})

function sendEmail(formData) {

  // receiver's details
  const userName = formData.get("name")
  const receiverEmail = formData.get("email")

  const subject = "Your message was received"
  const body = `Hey ${userName},<br/>We've received your message and we'll revert back to you as soon as possible.`

  Email.send({
    Host: "smtp.gmail.com",
    Username: senderEmail,
    Password: appPassword,
    To: receiverEmail,
    From: senderEmail,
    Subject: subject,
    Body: body
  })
    .then(message => {
      console.log(message)
    })
    .catch(err => {
      console.log("Err!", err.message)
    })
}

