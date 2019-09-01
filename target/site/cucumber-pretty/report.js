$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("teachersDashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Managing subjects feature of the application",
  "description": "",
  "id": "managing-subjects-feature-of-the-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8186987649,
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
  "duration": 242169078,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_provide_credentials()"
});
formatter.result({
  "duration": 468215760,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.i_should_be_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 706891125,
  "status": "passed"
});
formatter.after({
  "duration": 154801,
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
  "duration": 348823555,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.i_click_on_activate_subjects()"
});
formatter.result({
  "duration": 1194827337,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.select_subject_from_dropdown()"
});
formatter.result({
  "duration": 2168594552,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.proceed_with_default_selected_options_for_Level()"
});
formatter.result({
  "duration": 1116058852,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.select_first_suggestion()"
});
formatter.result({
  "duration": 419016407,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.click_on_activate_subject()"
});
formatter.result({
  "duration": 178946122,
  "status": "passed"
});
formatter.match({
  "location": "ActivateSubjectDefinition.a_new_subject_is_activated()"
});
formatter.result({
  "duration": 1068525105,
  "status": "passed"
});
formatter.after({
  "duration": 81250,
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
  "duration": 1068994212,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefination.i_click_on_edit_button_within_a_subject()"
});
formatter.result({
  "duration": 1170571900,
  "status": "passed"
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
  "duration": 228009490,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefination.clicked_on_save_button()"
});
formatter.result({
  "duration": 1121852343,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefination.the_subject_should_be_saved_with_updated_parameters()"
});
formatter.result({
  "duration": 37873650,
  "status": "passed"
});
formatter.after({
  "duration": 84243,
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
  "duration": 1205213117,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefination.click_on_remove_subject_button()"
});
formatter.result({
  "duration": 174037390,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefination.click_on_remove()"
});
formatter.result({
  "duration": 201615062,
  "status": "passed"
});
formatter.match({
  "location": "EditStepDefination.the_subject_should_be_removed_from_home_page()"
});
formatter.result({
  "duration": 1070898864,
  "status": "passed"
});
formatter.after({
  "duration": 64571,
  "status": "passed"
});
formatter.after({
  "duration": 711361539,
  "status": "passed"
});
});