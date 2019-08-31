package org.snappet.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "src/test/resources/feature" }, glue = {"org.snappet.stepdefinition"}, plugin = {
		"json:target/json/cucumber.json" })
public class TestRunner extends AbstractTestNGCucumberTests {

}
