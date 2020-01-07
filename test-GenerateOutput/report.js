$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 1,
  "name": "Betimely Sigup Feature",
  "description": "",
  "id": "betimely-sigup-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario: Betimely Sigup Test scenario"
    },
    {
      "line": 3,
      "value": "#\tGiven user is already on signup page"
    },
    {
      "line": 4,
      "value": "#\tWhen  login page is betimely"
    },
    {
      "line": 5,
      "value": "#\tThen user enters Email"
    },
    {
      "line": 6,
      "value": "#\tAnd user enters FullName"
    },
    {
      "line": 7,
      "value": "#\tAnd user enters Password"
    },
    {
      "line": 8,
      "value": "#\tThen user clicks on submit button"
    }
  ],
  "line": 9,
  "name": "Validate Signup with valid inputs",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-valid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
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
      "line": 18,
      "id": "betimely-sigup-feature;validate-signup-with-valid-inputs;;1"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "test Two",
        "Welcome1234"
      ],
      "line": 19,
      "id": "betimely-sigup-feature;validate-signup-with-valid-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7102612700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate Signup with valid inputs",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-valid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters \"ABC3@memorytest.ai\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 118381200,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 11109500,
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
  "duration": 913247600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 759802000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "duration": 10313700,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Welcome to Timely! ]– Timely\u003e but was:\u003c[404 not found]– Timely\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefination.SignupStepDefination.validate_home_page_title(SignupStepDefination.java:102)\r\n\tat ✽.Then validate home page title(signup.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 694733700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
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
      "line": 30,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;1"
    },
    {
      "cells": [
        "",
        "Test One",
        "Welcome@1234"
      ],
      "line": 31,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;2"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "",
        "Welcome@1234"
      ],
      "line": 32,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;3"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "test Two",
        ""
      ],
      "line": 33,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;4"
    },
    {
      "cells": [
        "",
        "",
        ""
      ],
      "line": 34,
      "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7121987200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\" and \"Test One\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6124700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7791600,
  "status": "passed"
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
  "duration": 743423900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 15260600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 660070800,
  "status": "passed"
});
formatter.before({
  "duration": 5004808600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"ABC3@memorytest.ai\" and \"\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 9819500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8471900,
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
  "duration": 722818900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 221300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 660476000,
  "status": "passed"
});
formatter.before({
  "duration": 5290730900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"ABC3@memorytest.ai\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 8307700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 6563500,
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
  "duration": 767840100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 467400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 647864800,
  "status": "passed"
});
formatter.before({
  "duration": 5253690300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Validate signup with blank fields",
  "description": "",
  "id": "betimely-sigup-feature;validate-signup-with-blank-fields;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\" and \"\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 10437900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8059300,
  "status": "passed"
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
  "duration": 679262500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 224700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 647232900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
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
      "line": 45,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;1"
    },
    {
      "cells": [
        "Abc34@ met ry Test . a i",
        "Marc Anthony",
        "Welcome@1234"
      ],
      "line": 46,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;2"
    },
    {
      "cells": [
        "Abc35@memorytest.ai",
        "MAR C An tho ny",
        "Welcome@1234"
      ],
      "line": 47,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;3"
    },
    {
      "cells": [
        "Abc36@memorytest.ai",
        "Marc Anthony",
        "We lc ome@12 34"
      ],
      "line": 48,
      "id": "betimely-sigup-feature;validate-with-garbage-values;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5426130000,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user enters \"Abc34@ met ry Test . a i\" and \"Marc Anthony\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 12104400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 6635500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc34@ met ry Test . a i",
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
  "duration": 796748300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 430500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 631906900,
  "status": "passed"
});
formatter.before({
  "duration": 4971804900,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user enters \"Abc35@memorytest.ai\" and \"MAR C An tho ny\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 9036800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7200000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc35@memorytest.ai",
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
  "duration": 827114100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 244400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 681234200,
  "status": "passed"
});
formatter.before({
  "duration": 5940701800,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate with garbage values",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-garbage-values;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user enters \"Abc36@memorytest.ai\" and \"Marc Anthony\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 5884700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8413000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc36@memorytest.ai",
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
  "duration": 843864100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 396700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 661459000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
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
      "line": 59,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;1"
    },
    {
      "cells": [
        "Test14@memorytest.ai",
        "Test One",
        "Welcome@1234"
      ],
      "line": 60,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;2"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "Test1234",
        "Welcome@1234"
      ],
      "line": 61,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;3"
    },
    {
      "cells": [
        "ABC3@memorytest.ai",
        "test Two",
        ""
      ],
      "line": 62,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;4"
    },
    {
      "cells": [
        "",
        "",
        "ABC3@memorytest.ai",
        ""
      ],
      "line": 63,
      "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5638456300,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters \"Test14@memorytest.ai\" and \"Test One\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 9221200,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7747900,
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
  "duration": 909587100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 631300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 635434100,
  "status": "passed"
});
formatter.before({
  "duration": 5145693100,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters \"ABC3@memorytest.ai\" and \"Test1234\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 8668800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7676500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC3@memorytest.ai",
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
  "duration": 790383300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 446400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 654324100,
  "status": "passed"
});
formatter.before({
  "duration": 6156996200,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters \"ABC3@memorytest.ai\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 9575000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 15459600,
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
  "duration": 774572600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 261500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 661257600,
  "status": "passed"
});
formatter.before({
  "duration": 5312795900,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Validate sigup fields error messsage",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-fields-error-messsage;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user enters \"\" and \"\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 10717400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 12509900,
  "status": "passed"
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
  "duration": 763703900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 424000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 652481700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 65,
  "name": "Verify char length of all fields",
  "description": "",
  "id": "betimely-sigup-feature;verify-char-length-of-all-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 73,
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
      "line": 74,
      "id": "betimely-sigup-feature;verify-char-length-of-all-fields;;1"
    },
    {
      "cells": [
        "ABNCCBjjejwdhjdehjdejejejknejnjenenjknjnejwnjkeejew",
        "testnjdbdbehjdebhb5878578784884847674",
        "Welcome1234hjsbdhdsghgdvshhfdhsghfghdf"
      ],
      "line": 75,
      "id": "betimely-sigup-feature;verify-char-length-of-all-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5455128600,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Verify char length of all fields",
  "description": "",
  "id": "betimely-sigup-feature;verify-char-length-of-all-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 67,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "user enters \"ABNCCBjjejwdhjdehjdejejejknejnjenenjknjnejwnjkeejew\" and \"testnjdbdbehjdebhb5878578784884847674\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 7147300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8179300,
  "status": "passed"
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
  "duration": 1025359000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 238200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:70)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 647839100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "Verify all fields with upper case",
  "description": "",
  "id": "betimely-sigup-feature;verify-all-fields-with-upper-case",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 85,
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
      "line": 86,
      "id": "betimely-sigup-feature;verify-all-fields-with-upper-case;;1"
    },
    {
      "cells": [
        "ABC4@MEMORYTEST.AI",
        "MARC",
        "WELCOME@!@#$%"
      ],
      "line": 87,
      "id": "betimely-sigup-feature;verify-all-fields-with-upper-case;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4983783400,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Verify all fields with upper case",
  "description": "",
  "id": "betimely-sigup-feature;verify-all-fields-with-upper-case;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "user enters \"ABC4@MEMORYTEST.AI\" and \"MARC\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 8786500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7342900,
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
  "duration": 958669600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 452800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:82)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 631997200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Validate fields with special characters",
  "description": "",
  "id": "betimely-sigup-feature;validate-fields-with-special-characters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 97,
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
      "line": 98,
      "id": "betimely-sigup-feature;validate-fields-with-special-characters;;1"
    },
    {
      "cells": [
        "ABC4@MEMORYTEST.AI",
        "!@#$%^\u0026*()",
        "WELCOME@!@#$%"
      ],
      "line": 99,
      "id": "betimely-sigup-feature;validate-fields-with-special-characters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5883000300,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Validate fields with special characters",
  "description": "",
  "id": "betimely-sigup-feature;validate-fields-with-special-characters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "user enters \"ABC4@MEMORYTEST.AI\" and \"!@#$%^\u0026*()\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 8464800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7075100,
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
  "duration": 807703400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 247100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:94)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 660260200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
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
      "line": 110,
      "id": "betimely-sigup-feature;verify-sql-injections;;1"
    },
    {
      "cells": [
        "select * from 1\u003d1",
        "Marco Polo",
        "KIKO@1234"
      ],
      "line": 111,
      "id": "betimely-sigup-feature;verify-sql-injections;;2"
    },
    {
      "cells": [
        "Mi@memorytest.ai",
        "Delete * from webinfo",
        "KIKI@1234"
      ],
      "line": 112,
      "id": "betimely-sigup-feature;verify-sql-injections;;3"
    },
    {
      "cells": [
        "Mi1@memorytest.ai",
        "marco Polp",
        "select * from password"
      ],
      "line": 113,
      "id": "betimely-sigup-feature;verify-sql-injections;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5426554400,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "user enters \"select * from 1\u003d1\" and \"Marco Polo\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6289400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 9579300,
  "status": "passed"
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
  "duration": 765580300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 400300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:106)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1131850600,
  "status": "passed"
});
formatter.before({
  "duration": 7059863400,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "user enters \"Mi@memorytest.ai\" and \"Delete * from webinfo\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6077700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8421000,
  "status": "passed"
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
  "duration": 838763500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 436000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:106)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 658727400,
  "status": "passed"
});
formatter.before({
  "duration": 5314006700,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Verify sql injections",
  "description": "",
  "id": "betimely-sigup-feature;verify-sql-injections;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "user enters \"Mi1@memorytest.ai\" and \"marco Polp\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6279200,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 9435800,
  "status": "passed"
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
  "duration": 762979300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 203500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:106)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1187163600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 115,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 123,
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
      "line": 124,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;1"
    },
    {
      "cells": [
        "name@198.168.1.1",
        "SamTest",
        "Welcome1234"
      ],
      "line": 125,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;2"
    },
    {
      "cells": [
        "name2@memorytest.ai",
        "192.168.255.255",
        "Welcome@1234"
      ],
      "line": 126,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;3"
    },
    {
      "cells": [
        "name3@memorytest.ai",
        "SamTest Test",
        "192.165.2.1"
      ],
      "line": 127,
      "id": "betimely-sigup-feature;validate-email-with-ip-address;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6405220400,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user enters \"name@198.168.1.1\" and \"SamTest\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6946800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8755200,
  "status": "passed"
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
  "duration": 880626600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 357000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:120)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 640898600,
  "status": "passed"
});
formatter.before({
  "duration": 5980572500,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user enters \"name2@memorytest.ai\" and \"192.168.255.255\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6123100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 9291800,
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
  "duration": 997450900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 388400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:120)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 636910300,
  "status": "passed"
});
formatter.before({
  "duration": 5108835600,
  "status": "passed"
});
formatter.scenario({
  "line": 127,
  "name": "Validate email with ip address",
  "description": "",
  "id": "betimely-sigup-feature;validate-email-with-ip-address;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "user enters \"name3@memorytest.ai\" and \"SamTest Test\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6772900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8398500,
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
  "duration": 759796500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 185600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:120)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 824691100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 129,
  "name": "Validate with invalid email",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-invalid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 131,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 132,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 137,
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
      "line": 138,
      "id": "betimely-sigup-feature;validate-with-invalid-email;;1"
    },
    {
      "cells": [
        "ABC3@memorytest.ai@gmail.com",
        "test Two",
        "Welcome1234"
      ],
      "line": 139,
      "id": "betimely-sigup-feature;validate-with-invalid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6038288400,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "Validate with invalid email",
  "description": "",
  "id": "betimely-sigup-feature;validate-with-invalid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 131,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 132,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "user enters \"ABC3@memorytest.ai@gmail.com\" and \"test Two\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6246100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 9670700,
  "status": "passed"
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
  "duration": 853933100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 375800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:134)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 639950800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 141,
  "name": "Validate name and password field by entering email",
  "description": "",
  "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 143,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 144,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 149,
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
      "line": 150,
      "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;1"
    },
    {
      "cells": [
        "ABC11@memorytest.ai",
        "@memorytest.ai",
        "Welcome1234"
      ],
      "line": 151,
      "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;2"
    },
    {
      "cells": [
        "xyz23@memorytest.ai",
        "Jayant Gupta",
        "jayant.gupta@memorytest.ai"
      ],
      "line": 152,
      "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5811515100,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
  "name": "Validate name and password field by entering email",
  "description": "",
  "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 143,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 144,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "user enters \"ABC11@memorytest.ai\" and \"@memorytest.ai\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 4643000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8619700,
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
  "duration": 888491100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 438700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:146)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 653587700,
  "status": "passed"
});
formatter.before({
  "duration": 5391230300,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "Validate name and password field by entering email",
  "description": "",
  "id": "betimely-sigup-feature;validate-name-and-password-field-by-entering-email;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 143,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 144,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "user enters \"xyz23@memorytest.ai\" and \"Jayant Gupta\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 8926000,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 6300500,
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
  "duration": 853261100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 232100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:146)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 641916400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 154,
  "name": "Validate full name without prefix",
  "description": "",
  "id": "betimely-sigup-feature;validate-full-name-without-prefix",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 156,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 162,
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
      "line": 163,
      "id": "betimely-sigup-feature;validate-full-name-without-prefix;;1"
    },
    {
      "cells": [
        "name@memorytestai",
        "Test1",
        "Welcome1234"
      ],
      "line": 164,
      "id": "betimely-sigup-feature;validate-full-name-without-prefix;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7401639700,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "Validate full name without prefix",
  "description": "",
  "id": "betimely-sigup-feature;validate-full-name-without-prefix;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 156,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "user enters \"name@memorytestai\" and \"Test1\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 5946300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 14570400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name@memorytestai",
      "offset": 13
    },
    {
      "val": "Test1",
      "offset": 37
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 49
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 743933600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 168600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:159)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1032766700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 166,
  "name": "Validate sigup with HTML tags",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-with-html-tags",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cFullName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 174,
  "name": "",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-with-html-tags;",
  "rows": [
    {
      "cells": [
        "Email",
        "FullName",
        "password"
      ],
      "line": 175,
      "id": "betimely-sigup-feature;validate-sigup-with-html-tags;;1"
    },
    {
      "cells": [
        "name@memorytestai",
        "\u003ctest\u003e\u003c/test\u003e",
        "Welcome1234"
      ],
      "line": 176,
      "id": "betimely-sigup-feature;validate-sigup-with-html-tags;;2"
    },
    {
      "cells": [
        "\u003cP\u003e\u003c/P\u003e",
        "Kim Jhones",
        "Welcome1234"
      ],
      "line": 177,
      "id": "betimely-sigup-feature;validate-sigup-with-html-tags;;3"
    },
    {
      "cells": [
        "name@memorytestai",
        "Kaira Test",
        "Welcome\u003c/html\u003e"
      ],
      "line": 178,
      "id": "betimely-sigup-feature;validate-sigup-with-html-tags;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5061293300,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "Validate sigup with HTML tags",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-with-html-tags;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "user enters \"name@memorytestai\" and \"\u003ctest\u003e\u003c/test\u003e\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6289600,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 9648800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name@memorytestai",
      "offset": 13
    },
    {
      "val": "\u003ctest\u003e\u003c/test\u003e",
      "offset": 37
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 57
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 770761400,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 319100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:171)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 671470800,
  "status": "passed"
});
formatter.before({
  "duration": 6150581700,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "Validate sigup with HTML tags",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-with-html-tags;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "user enters \"\u003cP\u003e\u003c/P\u003e\" and \"Kim Jhones\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 6785800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 12749600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cP\u003e\u003c/P\u003e",
      "offset": 13
    },
    {
      "val": "Kim Jhones",
      "offset": 27
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 44
    }
  ],
  "location": "SignupStepDefination.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 708849800,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 180600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:171)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 661521900,
  "status": "passed"
});
formatter.before({
  "duration": 5973036400,
  "status": "passed"
});
formatter.scenario({
  "line": 178,
  "name": "Validate sigup with HTML tags",
  "description": "",
  "id": "betimely-sigup-feature;validate-sigup-with-html-tags;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "user enters \"name@memorytestai\" and \"Kaira Test\" and \"\u003cPassword\u003e\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 7861700,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 7195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name@memorytestai",
      "offset": 13
    },
    {
      "val": "Kaira Test",
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
  "duration": 756056300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 189600,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.clicksubmit(signupTest.java:74)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_submit_button(SignupStepDefination.java:79)\r\n\tat ✽.Then user clicks on submit button(signup.feature:171)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1212319600,
  "status": "passed"
});
formatter.before({
  "duration": 6369220300,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "Validate password viewbox",
  "description": "",
  "id": "betimely-sigup-feature;validate-password-viewbox",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 183,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 184,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "user click on password viewbox",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 5104500,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 8698100,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_click_on_password_viewbox()"
});
formatter.result({
  "duration": 326100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.validateviewbox(signupTest.java:98)\r\n\tat StepDefination.SignupStepDefination.user_click_on_password_viewbox(SignupStepDefination.java:108)\r\n\tat ✽.Then user click on password viewbox(signup.feature:185)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 624997900,
  "status": "passed"
});
formatter.before({
  "duration": 5369227700,
  "status": "passed"
});
formatter.scenario({
  "line": 187,
  "name": "Verify terms of service",
  "description": "",
  "id": "betimely-sigup-feature;verify-terms-of-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 189,
  "name": "user is already on signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "title of sign page is betimely",
  "keyword": "When "
});
formatter.step({
  "line": 191,
  "name": "user clicks on terms and service",
  "keyword": "Then "
});
formatter.step({
  "line": 192,
  "name": "verify terms and service title",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupStepDefination.user_is_already_on_signup_page()"
});
formatter.result({
  "duration": 7286300,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.title_of_sign_page_is_betimely()"
});
formatter.result({
  "duration": 10145900,
  "status": "passed"
});
formatter.match({
  "location": "SignupStepDefination.user_clicks_on_terms_and_service()"
});
formatter.result({
  "duration": 215100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-45O4038I\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:131)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.qa.pages.signupTest.validatetermsandservice(signupTest.java:102)\r\n\tat StepDefination.SignupStepDefination.user_clicks_on_terms_and_service(SignupStepDefination.java:116)\r\n\tat ✽.Then user clicks on terms and service(signup.feature:191)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignupStepDefination.verify_terms_and_service_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 658629700,
  "status": "passed"
});
});