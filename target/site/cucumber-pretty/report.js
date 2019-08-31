$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("teachersDashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Managing subjects feature of the application",
  "description": "",
  "id": "managing-subjects-feature-of-the-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9376236590,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "log into the application",
  "description": "",
  "id": "managing-subjects-feature-of-the-application;log-into-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@setup"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The application Login page is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I provide credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.the_application_Login_page_is_open()"
});
formatter.result({
  "duration": 235413426,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat org.snappet.stepdefinition.LoginStepDefinition.the_application_Login_page_is_open(LoginStepDefinition.java:23)\r\n\tat ✽.Given The application Login page is open(teachersDashboard.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.i_provide_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_be_able_to_log_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1040811876,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Activate a new subject",
  "description": "",
  "id": "managing-subjects-feature-of-the-application;activate-a-new-subject",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on activate subjects",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "select subject from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "proceed with default selected options for Level",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select first suggestion",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on activate subject",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "A new subject is activated",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivateSubjectDefinition.i_am_on_home_page()"
});
formatter.result({
  "duration": 30091356117,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".home\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HARDEEP-PC\u0027, ip: \u0027192.168.1.20\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\Hardeep\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62979}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.132, webStorageEnabled: true}\nSession ID: 68657a57e7bc6a9a0835d94b99842811\n*** Element info: {Using\u003dcss selector, value\u003d.home}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.snappet.pageobject.HomePage.getHomePageLogo(HomePage.java:47)\r\n\tat org.snappet.stepdefinition.ActivateSubjectDefinition.i_am_on_home_page(ActivateSubjectDefinition.java:21)\r\n\tat ✽.Given I am on home page(teachersDashboard.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.i_click_on_activate_subjects()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActivateSubjectDefinition.select_subject_from_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActivateSubjectDefinition.proceed_with_default_selected_options_for_Level()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActivateSubjectDefinition.select_first_suggestion()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActivateSubjectDefinition.click_on_activate_subject()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ActivateSubjectDefinition.a_new_subject_is_activated()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 356407094,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Edit subject",
  "description": "",
  "id": "managing-subjects-feature-of-the-application;edit-subject",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am able to see activated subjects",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on edit button within a subject",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "edited subject name to \"Edited Taal\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "clicked on save button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the subject should be saved with updated parameters",
  "keyword": "Then "
});
formatter.match({
  "location": "EditStepDefination.i_am_able_to_see_activated_subjects()"
});
formatter.result({
  "duration": 31065232804,
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.assertNotEquals(Assert.java:856)\r\n\tat org.testng.Assert.assertNotEquals(Assert.java:861)\r\n\tat org.snappet.stepdefinition.EditStepDefination.i_am_able_to_see_activated_subjects(EditStepDefination.java:22)\r\n\tat ✽.Given I am able to see activated subjects(teachersDashboard.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditStepDefination.i_click_on_edit_button_within_a_subject()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Edited Taal",
      "offset": 24
    }
  ],
  "location": "EditStepDefination.edited_subject_name_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditStepDefination.clicked_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditStepDefination.the_subject_should_be_saved_with_updated_parameters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 393401115,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Remove subject",
  "description": "",
  "id": "managing-subjects-feature-of-the-application;remove-subject",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@end"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I click on edit button",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "click on remove subject button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "click on remove",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the subject should be removed from home page",
  "keyword": "Then "
});
formatter.match({
  "location": "EditStepDefination.i_click_on_edit_button()"
});
formatter.result({
  "duration": 31056338161,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027subject-container\u0027]/subjectgroup-info-block[1]/div[1]/div[1]/div[2]/a\"}\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027HARDEEP-PC\u0027, ip: \u0027192.168.1.20\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\Hardeep\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62979}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.132, webStorageEnabled: true}\nSession ID: 68657a57e7bc6a9a0835d94b99842811\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027subject-container\u0027]/subjectgroup-info-block[1]/div[1]/div[1]/div[2]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.snappet.pageobject.HomePage.editSubject(HomePage.java:99)\r\n\tat org.snappet.stepdefinition.EditStepDefination.i_click_on_edit_button(EditStepDefination.java:55)\r\n\tat ✽.Given I click on edit button(teachersDashboard.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditStepDefination.click_on_remove_subject_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditStepDefination.click_on_remove()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditStepDefination.the_subject_should_be_removed_from_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 356227919,
  "status": "passed"
});
formatter.after({
  "duration": 707616808,
  "status": "passed"
});
});