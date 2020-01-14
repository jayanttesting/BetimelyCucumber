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
  "duration": 4350798000,
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
  "duration": 272318800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 14051100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:6)\r\n",
  "status": "failed"
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
  "duration": 798245900,
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
  "duration": 4060730300,
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
  "duration": 19195000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 25527900,
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
  "duration": 729247900,
  "status": "passed"
});
formatter.before({
  "duration": 5292302300,
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
  "duration": 53793900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 29504100,
  "status": "passed"
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
  "duration": 890962600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 65161400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "duration": 5709400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Welcome to Timely! �] Timely\u003e but was:\u003c[Register your Timely account -] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.validate_home_page_title(SignupStepDefination.java:102)\r\n\tat ✽.Then validate home page title(signup.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1160586700,
  "status": "passed"
});
formatter.before({
  "duration": 5063799800,
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
  "duration": 14609600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7397900,
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
  "duration": 835487400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 7867900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 773173200,
  "status": "passed"
});
formatter.before({
  "duration": 4338504900,
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
  "duration": 9380700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 14902400,
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
  "duration": 732009100,
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
  "duration": 4010545900,
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
  "duration": 11977400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 9688700,
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
  "duration": 690918900,
  "status": "passed"
});
formatter.before({
  "duration": 5197319600,
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
  "duration": 15464000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 21874800,
  "status": "passed"
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
  "duration": 765578300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 371000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1406240000,
  "status": "passed"
});
formatter.before({
  "duration": 4088187200,
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
  "duration": 8217300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 13273500,
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
  "duration": 764779700,
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
  "duration": 5399949800,
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
  "duration": 5108400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 5480800,
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
  "duration": 706103000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 328400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1288012600,
  "status": "passed"
});
formatter.before({
  "duration": 5307716100,
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
  "duration": 19160800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 13298500,
  "status": "passed"
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
  "duration": 994373100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 1214100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1051912000,
  "status": "passed"
});
formatter.before({
  "duration": 5018663700,
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
  "duration": 12403200,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 23933700,
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
  "duration": 845269900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 334600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 740931200,
  "status": "passed"
});
formatter.before({
  "duration": 4051365600,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;5",
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
  "name": "user enters \"\" and \"\" and \"\u003cPassword\u003e\"",
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
  "duration": 13759400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 14208500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:47)\r\n",
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
  "duration": 752373500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "Verify char length of all fields",
  "description": "",
  "id": "betimely-sigup-feature;verify-char-length-of-all-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;verify-char-length-of-all-fields;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 68,
      "id": "betimely-sigup-feature;verify-char-length-of-all-fields;;1"
    },
    {
      "cells": [
        "ABNCCBjjejwdhjdehjdejejejknejnjenenjknjnejwnjkeejew",
        "testnjdbdbehjdebhb5878578784884847674",
        "Welcome1234hjsbdhdsghgdvshhfdhsghfghdf"
      ],
      "line": 69,
      "id": "betimely-sigup-feature;verify-char-length-of-all-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3999695200,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Verify char length of all fields",
  "description": "",
  "id": "betimely-sigup-feature;verify-char-length-of-all-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "user enters \"ABNCCBjjejwdhjdehjdejejejknejnjenenjknjnejwnjkeejew\" and \"testnjdbdbehjdebhb5878578784884847674\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 9354300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 22964000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:62)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABNCCBjjejwdhjdehjdejejejknejnjenenjknjnejwnjkeejew",
      "offset": 13
    },
    {
      "val": "testnjdbdbehjdebhb5878578784884847674",
      "offset": 71
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 115
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
  "duration": 712827400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "Verify all fields with upper case",
  "description": "",
  "id": "betimely-sigup-feature;verify-all-fields-with-upper-case",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;verify-all-fields-with-upper-case;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 80,
      "id": "betimely-sigup-feature;verify-all-fields-with-upper-case;;1"
    },
    {
      "cells": [
        "ABC4@MEMORYTEST.AI",
        "MARC",
        "WELCOME@!@#$%"
      ],
      "line": 81,
      "id": "betimely-sigup-feature;verify-all-fields-with-upper-case;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4864012800,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Verify all fields with upper case",
  "description": "",
  "id": "betimely-sigup-feature;verify-all-fields-with-upper-case;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "user enters \"ABC4@MEMORYTEST.AI\" and \"MARC\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6549500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 9166500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC4@MEMORYTEST.AI",
      "offset": 13
    },
    {
      "val": "MARC",
      "offset": 38
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 49
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 689873500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 300800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:76)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 802041400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "Validate fields with special characters",
  "description": "",
  "id": "betimely-sigup-feature;validate-fields-with-special-characters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 91,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-fields-with-special-characters;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 92,
      "id": "betimely-sigup-feature;validate-fields-with-special-characters;;1"
    },
    {
      "cells": [
        "ABC4@MEMORYTEST.AI",
        "!@#$%^\u0026*()",
        "WELCOME@!@#$%"
      ],
      "line": 93,
      "id": "betimely-sigup-feature;validate-fields-with-special-characters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5150025900,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "Validate fields with special characters",
  "description": "",
  "id": "betimely-sigup-feature;validate-fields-with-special-characters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 85,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "user enters \"ABC4@MEMORYTEST.AI\" and \"!@#$%^\u0026*()\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 3406900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 4891800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC4@MEMORYTEST.AI",
      "offset": 13
    },
    {
      "val": "!@#$%^\u0026*()",
      "offset": 38
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 55
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 732300800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 359900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:88)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 788170400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 95,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 97,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 103,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 104,
      "id": "betimely-sigup-feature;verify-sql-injections;;1"
    },
    {
      "cells": [
        "select * from 1\u003d1",
        "Marco Polo",
        "KIKO@1234"
      ],
      "line": 105,
      "id": "betimely-sigup-feature;verify-sql-injections;;2"
    },
    {
      "cells": [
        "Mi@memorytest.ai",
        "Delete * from webinfo",
        "KIKI@1234"
      ],
      "line": 106,
      "id": "betimely-sigup-feature;verify-sql-injections;;3"
    },
    {
      "cells": [
        "Mi1@memorytest.ai",
        "marco Polp",
        "select * from password"
      ],
      "line": 107,
      "id": "betimely-sigup-feature;verify-sql-injections;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4418682200,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 97,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user enters \"select * from 1\u003d1\" and \"Marco Polo\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 14939200,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 17530600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:98)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "select * from 1\u003d1",
      "offset": 13
    },
    {
      "val": "Marco Polo",
      "offset": 37
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 54
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
  "duration": 702334100,
  "status": "passed"
});
formatter.before({
  "duration": 4043376900,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 97,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user enters \"Mi@memorytest.ai\" and \"Delete * from webinfo\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 13936400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 12390000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:98)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mi@memorytest.ai",
      "offset": 13
    },
    {
      "val": "Delete * from webinfo",
      "offset": 36
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 64
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
  "duration": 784054100,
  "status": "passed"
});
formatter.before({
  "duration": 3957288100,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 97,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "user enters \"Mi1@memorytest.ai\" and \"marco Polp\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 10283100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 14193300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:98)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mi1@memorytest.ai",
      "offset": 13
    },
    {
      "val": "marco Polp",
      "offset": 37
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 54
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
  "duration": 741548100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 109,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 111,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 117,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 118,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;1"
    },
    {
      "cells": [
        "name@198.168.1.1",
        "SamTest",
        "Welcome1234"
      ],
      "line": 119,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;2"
    },
    {
      "cells": [
        "name2@memorytest.ai",
        "192.168.255.255",
        "Welcome@1234"
      ],
      "line": 120,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;3"
    },
    {
      "cells": [
        "name3@memorytest.ai",
        "SamTest Test",
        "192.165.2.1"
      ],
      "line": 121,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4034642400,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 111,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user enters \"name@198.168.1.1\" and \"SamTest\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 9648900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 17853000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:112)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "name@198.168.1.1",
      "offset": 13
    },
    {
      "val": "SamTest",
      "offset": 36
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 50
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
  "duration": 734137000,
  "status": "passed"
});
formatter.before({
  "duration": 5015558200,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 111,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user enters \"name2@memorytest.ai\" and \"192.168.255.255\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 10196400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 12261900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2@memorytest.ai",
      "offset": 13
    },
    {
      "val": "192.168.255.255",
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
  "duration": 773304700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 438000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:114)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 782263200,
  "status": "passed"
});
formatter.before({
  "duration": 4815759000,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 111,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "user enters \"name3@memorytest.ai\" and \"SamTest Test\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 7931500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7636900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name3@memorytest.ai",
      "offset": 13
    },
    {
      "val": "SamTest Test",
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
  "duration": 804677500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 532500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:114)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 825733100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 123,
  "name": "Validate with invalid email",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-invalid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 125,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 131,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-invalid-email;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 132,
      "id": "betimely-sigup-feature;validate-with-invalid-email;;1"
    },
    {
      "cells": [
        "ABC3@memorytest.ai@gmail.com",
        "test Two",
        "Welcome1234"
      ],
      "line": 133,
      "id": "betimely-sigup-feature;validate-with-invalid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4035896900,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "Validate with invalid email",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-invalid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 125,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "user enters \"ABC3@memorytest.ai@gmail.com\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 9522600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 6357200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Register your Timely account -] Timely\u003e but was:\u003c[500 Internal server error–] Timely\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.SignupStepDefination.title_of_sign_page_is_betimely(SignupStepDefination.java:56)\r\n\tat ✽.When title of sign page is betimely(signup.feature:126)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC3@memorytest.ai@gmail.com",
      "offset": 13
    },
    {
      "val": "test Two",
      "offset": 48
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
  "duration": 731372500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 135,
  "name": "Validate name and password field by entering email",
  "description": "",
  "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 137,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 143,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 144,
      "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;1"
    },
    {
      "cells": [
        "ABC11@memorytest.ai",
        "@memorytest.ai",
        "Welcome1234"
      ],
      "line": 145,
      "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;2"
    },
    {
      "cells": [
        "xyz23@memorytest.ai",
        "Jayant Gupta",
        "jayant.gupta@memorytest.ai"
      ],
      "line": 146,
      "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5158820200,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "Validate name and password field by entering email",
  "description": "",
  "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 137,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "user enters \"ABC11@memorytest.ai\" and \"@memorytest.ai\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 4039800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 6373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC11@memorytest.ai",
      "offset": 13
    },
    {
      "val": "@memorytest.ai",
      "offset": 39
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 60
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 706356900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 337000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:140)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 789084800,
  "status": "passed"
});
formatter.before({
  "duration": 5254883100,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "Validate name and password field by entering email",
  "description": "",
  "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 137,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 138,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "user enters \"xyz23@memorytest.ai\" and \"Jayant Gupta\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 13452600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 16127800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz23@memorytest.ai",
      "offset": 13
    },
    {
      "val": "Jayant Gupta",
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
  "duration": 823659500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 433100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027LAPTOP-205TT8KS\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_31\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:127)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:140)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 768672300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 148,
  "name": "Validate full name without prefix",
  "description": "",
  "id": "betimely-sigup-feature;validate-full-name-without-prefix",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-full-name-without-prefix;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 157,
      "id": "betimely-sigup-feature;validate-full-name-without-prefix;;1"
    },
    {
      "cells": [
        "name@memorytestai",
        "Test1",
        "Welcome1234"
      ],
      "line": 158,
      "id": "betimely-sigup-feature;validate-full-name-without-prefix;;2"
    }
  ],
  "keyword": "Examples"
});
