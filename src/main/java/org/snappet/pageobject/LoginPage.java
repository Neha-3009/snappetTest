package org.snappet.pageobject;

import java.io.IOException;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.snappet.configreader.ConfigReader;

public class LoginPage {
	
	final static Logger logger = Logger.getLogger(LoginPage.class);
	
	public WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	By snappetLog = By.className("snappet-logo");
	By password = By.id("Password");
	By userName = By.id("UserName");
	By submitButton = By.cssSelector(".btn.btn-primary.btn-login");

	public WebElement getLogo() {
		return driver.findElement(snappetLog);
	}

	public void setUserName() throws IOException {
		String user = ConfigReader.getConfigProperty("Username");
		driver.findElement(userName).clear();
		driver.findElement(userName).sendKeys(user);

	}

	public void setPassword() throws IOException {
		String pass = ConfigReader.getConfigProperty("Password");
		driver.findElement(password).clear();
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(password))).sendKeys(pass,Keys.TAB);

	}

	public void clickOnLogin() {
		try {
			WebDriverWait wait = new WebDriverWait(driver, 20);
			wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(submitButton))).sendKeys(Keys.ENTER);
		} catch (Exception e) {
			logger.info("Error occured on Login ", e);
			driver.findElement(submitButton).click();
		}
	}

}
