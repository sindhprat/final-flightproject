var form = document.getElementById("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const mail = document.getElementById("email").value;
  const phone = document.getElementById("mobile").value;
  const origin = document.getElementById("orig").value;
  const destination = document.getElementById("destin").value;
  const location = document.getElementById("address").value;
  const address = document.getElementById("country").value;
  const pin = document.getElementById("postcode").value;
  const error = document.getElementById("error");

  var messages = [];
  const errorElement = document.getElementById("error");

  const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z])+.([a-z]+)?$/;


  if (!regex.test(mail)) {
    messages.push(" please enter a valid email");
  }

  const re = /^\d{10}$/;
  if (!re.test(phone) && isNaN) {
    messages.push("please enter a valid mobile number");
  }
  if (destination === origin) {
    messages.push("destination cannot be same as origin");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  } else {
    messages.push(
      "***** Congratulations your booking is done and you will soon receive your booking details in your specified email! *****"
    );
    errorElement.innerText = messages;
  }
  // const message = document.getElementById("message")
  // message.innerText = error
});
