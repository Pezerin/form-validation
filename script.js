const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const submit = document.querySelector("button");

submit.addEventListener("click", (event) => {
  if (
    !(
      checkEmail() &&
      checkCountry() &&
      checkZip() &&
      checkPassword() &&
      checkConfirm()
    )
  ) {
    event.preventDefault();
  }
});

const checkEmail = () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email");
    email.reportValidity();
    return false;
  } else {
    email.setCustomValidity("");
    return true;
  }
};

const checkCountry = () => {
  if (country.value === "") {
    country.setCustomValidity("Please enter a valid country");
    country.reportValidity();
    return false;
  } else {
    country.setCustomValidity("");
    return true;
  }
};

const checkZip = () => {
  if (zip.value === "") {
    zip.setCustomValidity("Please enter a valid zip code");
    zip.reportValidity();
    return false;
  } else {
    zip.setCustomValidity("");
    return true;
  }
};

const checkPassword = () => {
  if (password.value === "") {
    password.setCustomValidity("Please enter a valid password");
    password.reportValidity();
    return false;
  } else {
    password.setCustomValidity("");
    return true;
  }
};

const checkConfirm = () => {
  if (password.value !== confirm.value) {
    confirm.setCustomValidity("Passwords do not match");
    confirm.reportValidity();
    return false;
  } else {
    confirm.setCustomValidity("");
    return true;
  }
};

email.addEventListener("input", checkEmail);
country.addEventListener("input", checkCountry);
zip.addEventListener("input", checkZip);
password.addEventListener("input", checkPassword);
confirm.addEventListener("input", checkConfirm);
