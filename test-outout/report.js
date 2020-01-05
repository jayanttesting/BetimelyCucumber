$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Betimely Repo/BetimelyTestAutomation/src/main/java/Features/signup.feature");
formatter.feature({
  "line": 1,
  "name": "Betimely Sigup Feature",
  "description": "",
  "id": "betimely-sigup-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Betimely Sigup Test Scenario",
  "description": "",
  "id": "betimely-sigup-feature;betimely-sigup-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters Email",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters FullName",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 7156494100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_login_page_is_betimely()"
});
formatter.result({
  "duration": 13938200,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_Email()"
});
formatter.result({
  "duration": 188201500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_FullName()"
});
formatter.result({
  "duration": 104066400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_enters_Password()"
});
formatter.result({
  "duration": 100957700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 571568600,
  "status": "passed"
});
});