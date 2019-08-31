package org.snappet.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.snappet.pageobject.BasePage;
//import org.testng.ITestResult;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BasePage {

	private Logger Log = Logger.getLogger(Hooks.class);

	@Before("@setup ")
	public void setUp() throws Exception {
		getDriver();
		maximizeWindow();
		implicitWait(30);
		deleteAllCookies();
		setEnv();
	}

	@After
	public void tearDown(Scenario result) throws IOException {
		if ((result.isFailed())) {
			File imageFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
			String imageName = result.getName()
					+ new SimpleDateFormat("MM-dd-yyyy_HH-ss").format(new GregorianCalendar().getTime()) + ".png";
			String snapshotPath = System.getProperty("user.dir") + "screenshots/" + imageName;
			FileUtils.copyFile(imageFile, new File(snapshotPath));
			result.embed(Files.readAllBytes(imageFile.toPath()), "image/png");
		}

	}
	

	@After( "@end" )
	public void quit() {

		driver.quit();
	}

}
