const copyBtn = document.querySelector(`#copyToClipBoard`);
const contactForm = document.querySelector("form");
function copyFunction() {
  navigator.clipboard.writeText(`rextongeorge2005@gmail.com`);
  alert("Email copied!");
}
copyBtn.addEventListener(`click`, copyFunction);

const sendBtn = document.querySelector(`#btn-send`);

function sendFunction(event) {
  event.preventDefault();
  const name = document.querySelector(`#name`).value;
  const email = document.querySelector(`#email`).value;
  const subject = document.querySelector(`#subject`).value;
  const message = document.querySelector(`#message`).value;
  const body =
    `name: ` +
    name +
    `<br/> email:` +
    email +
    `<br/> subject:` +
    subject +
    `<br/> message: ` +
    message;
  Email.send({
    SecureToken: "2c9b081e-8e5b-4029-b2cb-c006776d7a4a",
    To: "rextongeorge2005@gmail.com",
    From: email,
    Subject: subject,
    Body: body
  }).then((message) => {
    alert("Message sent successfully!");

    contactForm.reset();
  });
}

sendBtn.addEventListener(`click`, sendFunction);
