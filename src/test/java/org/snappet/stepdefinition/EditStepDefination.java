package org.snappet.stepdefinition;

import org.apache.log4j.Logger;
import org.snappet.pageobject.BasePage;
import org.snappet.pageobject.HomePage;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EditStepDefination extends BasePage {

	final static Logger logger = Logger.getLogger(EditStepDefination.class);

	private static HomePage home;

	@Given("^I am able to see activated subjects$")
	public void i_am_able_to_see_activated_subjects() throws Throwable {
		
		home = new HomePage(driver);
		Assert.assertNotEquals(home.getSubjectCount(), 0);
		System.out.println("logger.isInfoEnabled() -> "+logger.isInfoEnabled());
		logger.info("Activated subject is present");
	}

	@When("^I click on edit button within a subject$")
	public void i_click_on_edit_button_within_a_subject() throws Throwable {
		home.editSubject();
		logger.info("Click on subject edit link");
	}

	@When("^edited subject name to \"([^\"]*)\"$")
	public void edited_subject_name_to(String name) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		home.editName(name);
		logger.info("Edited subject name");
	}

	@When("^clicked on save button$")
	public void clicked_on_save_button() throws Throwable {

		home.saveSubject();
		logger.info("Clicked on save button");
	}

	@Then("^the subject should be saved with updated parameters$")
	public void the_subject_should_be_saved_with_updated_parameters() throws Throwable {
		Assert.assertTrue(home.validateSavedSubject());
		logger.info("Subject edited successfully");
	}

	@Given("^I click on edit button$")
	public void i_click_on_edit_button() throws Throwable {
		home.editSubject();
		logger.info("Click on subject edit link");
	}

	@When("^click on remove subject button$")
	public void click_on_remove_subject_button() throws Throwable {
		home.removeSubject();
		logger.info("Click on remove subject link");
	}

	@When("^click on remove$")
	public void click_on_remove() throws Throwable {
		home.removeConfirm();
		logger.info("confirmed removal of subject");
	}

	@Then("^the subject should be removed from home page$")
	public void the_subject_should_be_removed_from_home_page() throws Throwable {
		Assert.assertTrue(home.verifyRemoval());
		logger.info("verifyed removal");
	}

}
