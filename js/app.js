//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide Hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
//when password > 8 charecters, hide the hint
  if(isPasswordValid()) {
      $password.next().hide();
  } else {
      $password.next().show();
  }
}

function confirmPasswordEvent() {
  if(arePasswordsMatching()) {
    $confirmPassword.next().hide();
} else {
  $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input, show hint
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//when event happens on conformation
  //find out if password and conformation match
  //if matched, hide hint. else show hint
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();