package org.snappet.pageobject;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.BasicConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.snappet.configreader.ConfigReader;

public class BasePage {

	public static WebDriver driver;

	private static void configureDriverPath() throws IOException {

		if (System.getProperty("os.name").startsWith("Mac")) {
			String firefoxDriverPath = System.getProperty("user.dir") + "/src/test/resources/drivers/mac/geckodriver";
			System.setProperty("webdriver.gecko.driver", firefoxDriverPath);
			String chromeDriverPath = System.getProperty("user.dir") + "/src/test/resources/drivers/mac/chromedriver";
			System.setProperty("webdriver.chrome.driver", chromeDriverPath);
		}
		if (System.getProperty("os.name").startsWith("Windows")) {
			String firefoxDriverPath = "src/test/resources/drivers/windows/geckodriver.exe";
			System.setProperty("webdriver.gecko.driver", firefoxDriverPath);
			String chromeDriverPath = "src/test/resources/drivers/windows/chromedriver.exe";
			System.setProperty("webdriver.chrome.driver", chromeDriverPath);
		}
	}

	protected static WebDriver getDriver() throws Exception {
		BasicConfigurator.configure();
		configureDriverPath();
		String browserType = ConfigReader.getConfigProperty("browserType");
		if (browserType.equals("firefox")) {
			driver = new FirefoxDriver();
		} else if (browserType.equals("chrome")) {
			driver = new ChromeDriver();
		}
		return driver;
	}

	protected void maximizeWindow() {
		driver.manage().window().maximize();
	}

	protected void implicitWait(int time) {
		driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
	}

	protected void explicitWait(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 3000);
		wait.until(ExpectedConditions.visibilityOf(element));
	}

	protected void pageLoad(int time) {
		driver.manage().timeouts().pageLoadTimeout(time, TimeUnit.SECONDS);
	}

	protected void deleteAllCookies() {
		driver.manage().deleteAllCookies();
	}

	protected void setEnv() throws Exception {

		String baseUrl = ConfigReader.getConfigProperty("siteUrl");
		driver.get(baseUrl);
	}

	protected static String currentDateTime() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Calendar cal = Calendar.getInstance();
		String cal1 = dateFormat.format(cal.getTime());
		return cal1;
	}

}
