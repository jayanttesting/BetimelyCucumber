$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 1,
  "name": "Betimely Sigup Feature",
  "description": "",
  "id": "betimely-sigup-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate Signup with valid inputs",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-valid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-valid-inputs;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 12,
      "id": "betimely-sigup-feature;validate-signup-with-valid-inputs;;1"
    },
    {
      "cells": [
        "ABC4@memorytest.ai",
        "test Two",
        "Welcome1234"
      ],
      "line": 13,
      "id": "betimely-sigup-feature;validate-signup-with-valid-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7401129800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate Signup with valid inputs",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-valid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ABC4@memorytest.ai\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 315447400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 20004100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC4@memorytest.ai",
      "offset": 13
    },
    {
      "val": "test Two",
      "offset": 38
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 53
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1097956400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 648044000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "duration": 24048200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Welcome to Timely! ]– Timely\u003e but was:\u003c[404 not found]– Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.validate_home_page_title(SignupStepDefination.java:102)\r\n\tat ✽.Then validate home page title(signup.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 904758300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 24,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;1"
    },
    {
      "cells": [
        "",
        "Test One",
        "Welcome@1234"
      ],
      "line": 25,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;2"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "",
        "Welcome@1234"
      ],
      "line": 26,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;3"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "test Two",
        ""
      ],
      "line": 27,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;4"
    },
    {
      "cells": [
        "",
        "",
        ""
      ],
      "line": 28,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4818744600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\" and \"Test One\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 39446400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 45722600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "Test One",
      "offset": 20
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 35
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 865572400,
  "status": "passed"
});
formatter.before({
  "duration": 4427145600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"ABC3@memorytest.ai\" and \"\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 30375300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 23639900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC3@memorytest.ai",
      "offset": 13
    },
    {
      "val": "",
      "offset": 38
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 45
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 867734400,
  "status": "passed"
});
formatter.before({
  "duration": 5750133200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"ABC3@memorytest.ai\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6946200,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8697400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC3@memorytest.ai",
      "offset": 13
    },
    {
      "val": "test Two",
      "offset": 38
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 53
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 931141500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 8919200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 848411200,
  "status": "passed"
});
formatter.before({
  "duration": 4516916900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\" and \"\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 73290700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 14518900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 27
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 822804600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 39,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;1"
    },
    {
      "cells": [
        "Abc44@ met ry Test . a i",
        "Marc Anthony",
        "Welcome@1234"
      ],
      "line": 40,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;2"
    },
    {
      "cells": [
        "Abc45@memorytest.ai",
        "MAR C An tho ny",
        "Welcome@1234"
      ],
      "line": 41,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;3"
    },
    {
      "cells": [
        "Abc46@memorytest.ai",
        "Marc Anthony",
        "We lc ome@12 34"
      ],
      "line": 42,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4544639100,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters \"Abc44@ met ry Test . a i\" and \"Marc Anthony\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 13405000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 30471000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc44@ met ry Test . a i",
      "offset": 13
    },
    {
      "val": "Marc Anthony",
      "offset": 44
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 63
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 851178700,
  "status": "passed"
});
formatter.before({
  "duration": 4979752300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters \"Abc45@memorytest.ai\" and \"MAR C An tho ny\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 23522400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 47931800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc45@memorytest.ai",
      "offset": 13
    },
    {
      "val": "MAR C An tho ny",
      "offset": 39
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 61
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 965950500,
  "status": "passed"
});
formatter.before({
  "duration": 4551126300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user enters \"Abc46@memorytest.ai\" and \"Marc Anthony\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 109309900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 17931700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc46@memorytest.ai",
      "offset": 13
    },
    {
      "val": "Marc Anthony",
      "offset": 39
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 58
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 820960800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 53,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;1"
    },
    {
      "cells": [
        "Test14@memorytest.ai",
        "Test One",
        "Welcome@1234"
      ],
      "line": 54,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;2"
    },
    {
      "cells": [
        "ABC2@memorytest.ai",
        "Test1234",
        "Welcome@1234"
      ],
      "line": 55,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;3"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "test Two",
        ""
      ],
      "line": 56,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;4"
    },
    {
      "cells": [
        "",
        "",
        "ABC3@memorytest.ai",
        ""
      ],
      "line": 57,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5495802800,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user enters \"Test14@memorytest.ai\" and \"Test One\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 7306700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7499300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test14@memorytest.ai",
      "offset": 13
    },
    {
      "val": "Test One",
      "offset": 40
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 55
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 1114413100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 294100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 838030900,
  "status": "passed"
});
formatter.before({
  "duration": 4542204000,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user enters \"ABC2@memorytest.ai\" and \"Test1234\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 32207900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 22706700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC2@memorytest.ai",
      "offset": 13
    },
    {
      "val": "Test1234",
      "offset": 38
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 53
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 841102500,
  "status": "passed"
});
formatter.before({
  "duration": 5134683700,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user enters \"ABC3@memorytest.ai\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 76644700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 14177600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC3@memorytest.ai",
      "offset": 13
    },
    {
      "val": "test Two",
      "offset": 38
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 53
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
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
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 943121400,
  "status": "passed"
});
