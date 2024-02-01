let form = $(".auth-form");
let loginUsername = $("#login-username");
let loginPassword = $("#login-password");
let email = $("#register-email");
let password = $("#register-password");
let username = $("#register-username");
let confirmPassword = $("#register-confirm-password");
let loader = $("#loader");

function removeInputAttr(input, validatorText, formType) {
  input.on("focus", () => {
    input.removeClass("input-validator");
    $("#" + formType + "-" + validatorText + "-validator").removeClass(
      "show-validator-text"
    );
  });
}

// Login
removeInputAttr(loginUsername, "username", "login");
removeInputAttr(loginPassword, "password", "login");
// Register
removeInputAttr(username, "username", "register");
removeInputAttr(email, "email", "register");
removeInputAttr(password, "password", "register");
removeInputAttr(confirmPassword, "confirm-password", "register");

form.submit((e) => {
  e.preventDefault();

  // Login Form Validation
  if (form.hasClass("login")) {
    let formType = "login";

    validateForm(loginUsername, "username", formType);
    validateForm(loginPassword, "password", formType);
  }
  // Register Form Validation
  else if (form.hasClass("register")) {
    let formType = "register";

    // Validate password equality
    if (password.val() != "" && confirmPassword.val() != "") {
      if (password.val() !== confirmPassword.val()) {
        $("#register-confirm-password-validator").text(
          "Confirm password does'nt match with password"
        );
        $("#register-confirm-password-validator").addClass(
          "show-validator-text"
        );
        confirmPassword.addClass("input-validator");
      }
    }

    validateForm(username, "username", formType);
    validateForm(email, "email", formType);
    validateForm(password, "password", formType);
    validateForm(confirmPassword, "confirm-password", formType);
  }

  function validateForm(input, validatorText, formType) {
    if (input.val() === "") {
      input.addClass("input-validator");
      $("#" + formType + "-" + validatorText + "-validator").addClass(
        "show-validator-text"
      );
    } else {
      // loader.addClass("loading");
    }
  }
});
