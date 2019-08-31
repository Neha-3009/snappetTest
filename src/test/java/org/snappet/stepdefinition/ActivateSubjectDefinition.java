package org.snappet.stepdefinition;

import org.apache.log4j.Logger;
import org.snappet.pageobject.BasePage;
import org.snappet.pageobject.HomePage;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ActivateSubjectDefinition extends BasePage {

	private Logger Log = Logger.getLogger(ActivateSubjectDefinition.class);

	HomePage home;

	@Given("^I am on home page$")
	public void i_am_on_home_page() throws Throwable {
		home = new HomePage(driver);
		Assert.assertTrue(home.getHomePageLogo().isDisplayed());

		Log.info("Teacher is successfully landed on Home Page");

	}

	@When("^I click on activate subjects$")
	public void i_click_on_activate_subjects() throws Throwable {
		home.activateSubject();
		Log.info("Clicked on activate button");
	}

	@When("^select subject from dropdown$")
	public void select_subject_from_dropdown() throws Throwable {
		home.selectSubject();
		Log.info("selected subject from dropdown");
	}

	@When("^proceed with default selected options for Level$")
	public void proceed_with_default_selected_options_for_Level() throws Throwable {
		home.nextSelection();
		Log.info("selected default Level");
	}

	@When("^select first suggestion$")
	public void select_first_suggestion() throws Throwable {
		home.selectSuggestion();
		Log.info("selected the suggestion from the group");
	}

	@When("^click on activate subject$")
	public void click_on_activate_subject() throws Throwable {
		home.clickActivateButton();
		Log.info("Clicked on activate subject button");
	}

	@Then("^A new subject is activated$")
	public void a_new_subject_is_activated() throws Throwable {

		Assert.assertTrue(home.verifyActivation());
		Log.info("Subject activated successfully");
	}

}
