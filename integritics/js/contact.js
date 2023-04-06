window.onload = function() {
  let newIframe = document.createElement("iframe");
  newIframe.setAttribute("name", "iframe_submit");
  newIframe.setAttribute("style", "display:none;");
  document.body.appendChild(newIframe);
}

async function sendContact() {
  const form = document.getElementById("id-contact-submit");

  if (form.name.value.length == 0) {
    alert("Input your Name, please");
    return false;
  }
  if (form.company.value.length == 0) {
    alert("Input your Company, please");
    return false;
  }
  if (form.email.value.length == 0) {
    alert("Input your E-mail, please");
    return false;
  }
  if (form.phone.value.length == 0) {
    alert("Input your Phone number, please");
    return false;
  }

  form.submit();
}