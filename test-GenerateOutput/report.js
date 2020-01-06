$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 1,
  "name": "Betimely Sigup Feature",
  "description": "",
  "id": "betimely-sigup-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7172562999,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Betimely Sigup Test scenario",
  "description": "",
  "id": "betimely-sigup-feature;betimely-sigup-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters Email",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters FullName",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 85069100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.login_page_is_betimely()"
});
formatter.result({
  "duration": 9785800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_Email()"
});
formatter.result({
  "duration": 629336400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_FullName()"
});
formatter.result({
  "duration": 90119300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_Password()"
});
formatter.result({
  "duration": 55370800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 58093200,
  "status": "passed"
});
formatter.after({
  "duration": 678066800,
  "status": "passed"
});
});