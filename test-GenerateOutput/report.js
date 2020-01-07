$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 1,
  "name": "Betimely Sigup Feature",
  "description": "",
  "id": "betimely-sigup-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Betimely Sigup Test scenario",
  "description": "",
  "id": "betimely-sigup-feature;betimely-sigup-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "login page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters Email",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enters FullName",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_Email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_FullName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
});