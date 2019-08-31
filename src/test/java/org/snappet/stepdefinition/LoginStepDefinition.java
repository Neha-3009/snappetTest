package org.snappet.stepdefinition;

import org.apache.log4j.Logger;
import org.snappet.pageobject.BasePage;
import org.snappet.pageobject.HomePage;
import org.snappet.pageobject.LoginPage;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends BasePage {
	private Logger Log = Logger.getLogger(LoginStepDefinition.class);
	
	LoginPage loginPage;
	HomePage home;

	@Given("^The application Login page is open$")
	public void the_application_Login_page_is_open() throws Throwable {
		
		loginPage = new LoginPage(driver);
		Assert.assertTrue(loginPage.getLogo().isDisplayed());
		
		Log.info("Login Page Successfully Loaded");

	}

	@When("^I provide credentials$")
	public void i_provide_credentials() throws Throwable {
		loginPage.setUserName();
		loginPage.setPassword();
		loginPage.clickOnLogin();
		Log.info("Clicked on Login button");
		
	}

	@Then("^I should be able to log in successfully$")
	public void i_should_be_able_to_log_in_successfully() throws Throwable {
		home=new HomePage(driver);
		Assert.assertTrue(home.getHomePageLogo().isDisplayed());
		Log.info("Login is Successful");
	}

}
