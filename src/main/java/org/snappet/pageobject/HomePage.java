package org.snappet.pageobject;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.snappet.stepdefinition.EditStepDefination;

public class HomePage {
	
	final static Logger logger = Logger.getLogger(HomePage.class);
	
	public WebDriver driver;

	public HomePage(WebDriver driver) {
		this.driver = driver;
	}

	By homePageLogo = By.cssSelector(".home");
	By activateSubject = By.cssSelector(".add-first-lesson");
	By selectSubDropDown = By.cssSelector(".select2-selection.select2-selection--single");
	By subDrop = By.cssSelector(".select2-container.select2-container--default.select2-container--open");
	By nextButtonSelection = By.xpath("//div[@class='form-group align-right']/a");
	By suggestion = By.xpath("/html/body/div[4]/div/div/div[1]/div[2]/div/div[1]/div/div[1]/div/span[1]");
	By activateButton = By.cssSelector(".button-bar.stretch");
	By selectSubjectToBeEdited = By
			.xpath("//div[@class='subject-container']/subjectgroup-info-block[1]/div[1]/div[1]/div[2]/a");
	By subjectNameForm = By.xpath("//div[@class='panel-card secondary']/div[1]/input[@type='text']");
	By subjectGrade = By.xpath("//span[@class = 'select2-selection select2-selection--single']");
	By educationPlan = By.xpath("//a[@class = 'btn btn-default btn-more isPopover']");
	By saveButton = By.xpath("//div[@class='button-bar']/button[2]");
	By subjects = By.cssSelector(".subject-item");
	By subjectName = By.xpath("//span[@class='panel-card-heading-text-inner']/strong");
	By removeSubject = By.xpath("//div[@class='bottom-button-bar']/button");
	By removeConfirm = By.xpath("//div[@class='inner modal dialog alert withTitle withClose']/div[2]/button[2]");

	private static int initialSubjectCount = 0;

	public WebElement getHomePageLogo() {
		return driver.findElement(homePageLogo);
	}

	public void activateSubject() {
		initialSubjectCount = getSubjectCount();
		driver.findElement(activateSubject).click();

	}

	public void selectSubject() {

		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(selectSubDropDown)).click();
		if (driver.findElement(subDrop).isDisplayed()) {
			driver.findElement(selectSubDropDown).sendKeys(Keys.ARROW_DOWN, Keys.ARROW_DOWN, Keys.ENTER);
		}
		try {
			nextSelection();
		} catch (Exception e) {
			logger.info("Exception occured in selecting subject",e);
		}

	}

	public void nextSelection() throws InterruptedException {
		Thread.sleep(1000);
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(nextButtonSelection))).click();
	}

	public void selectSuggestion() {

		WebElement suggest = driver.findElement(suggestion);
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(suggest)).click();

	}

	public void clickActivateButton() {
		WebElement activate = driver.findElement(activateButton);
		if (activate.isDisplayed())
			activate.click();
	}

	public boolean verifyActivation() {

		return initialSubjectCount + 1 == getSubjectCount();

	}

	public void editSubject() throws InterruptedException {
		Thread.sleep(1000);
		WebElement edit = driver.findElement(selectSubjectToBeEdited);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollTo(document.body.scrollHeight, 0)", edit);
		edit.click();

	}

	public int getSubjectCount() {
		List<WebElement> listSub = new ArrayList<WebElement>();
		try {
			Thread.sleep(1000);
			if (driver.findElement(subjects).isDisplayed()) {
				WebDriverWait wait = new WebDriverWait(driver, 10);
				wait.until(ExpectedConditions.visibilityOf(driver.findElement(subjects)));
				listSub = driver.findElements(subjects);
			}
		} catch (Exception e) {
		
		}
		return listSub.size();
	}

	public void editName(String name) {
		WebElement subName = driver.findElement(subjectNameForm);
		subName.clear();
		subName.sendKeys(name, Keys.TAB);

	}

	public void saveSubject() {
		WebElement save = driver.findElement(saveButton);
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(save));
		save.click();
	}

	public boolean validateSavedSubject() {
		List<WebElement> subList = driver.findElements(subjectName);
		boolean namePresent = false;
		for (WebElement sub : subList) {
			sub.getText().contains("Edited");
			namePresent = true;
			break;
		}
		return namePresent;

	}

	public void removeSubject() {

		WebElement remove = driver.findElement(removeSubject);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("arguments[0].scrollTo(0,600)", remove);
		WebDriverWait wait = new WebDriverWait(driver, 2);
		wait.until(ExpectedConditions.elementToBeClickable(remove));
		remove.click();
	}

	public void removeConfirm() throws InterruptedException {
		driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
		WebElement removeConfirmation = driver.findElement(removeConfirm);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		removeConfirmation.sendKeys(Keys.RETURN);
	}

	public boolean verifyRemoval() {
		return initialSubjectCount==getSubjectCount();
	}
}
