/*Author - Neha Gupta*/

Selenium, Java and Maven based frontend automation suite utilising the BDD methodologies of Cucumber and Gherkin and features of testNG.
Steps to run the program successfully-

#To get started - prerequisites
1. Install JAVA SDK 8
2. Install Maven
3. Install Git
4. Install Eclipse oxygen
5. Download chromeDriver 

Create the following System variables

JAVA_HOME = PAth to java sdk
M2_HOME = Path to maven installation
MAVEN_HOME = Path to maven installation

# Steps to run the test script-
1. Right click on pom.xml
2. Select the option run as -> run configurations..
3. Inside new window ->in the filter panel-> select project name as - snappet under "Maven Build" 
4. In  goals mention as -clean test verify 
5 Click on Run

Or  

Directly run from command prompt or bash :
1) Open command propmt or bash 
2) Run the command "mvn clean test verify" 

#Features of project

Cucumber TestNG Selenium - Overall testframework leveraging the Cucumber framework alongwith testNG and Selenium written in JAVA.

teachersDasboard.feature File - The feature file specifies the steps in BDD language style

LoginStepDefinition- Java class whereby the login steps from the feature file are broken down to be coded into automation tests

ActivateSubjectDefinition- Java class whereby the activation of subject's steps from the feature file are broken down to be coded into automation tests

EditStepDefinition- Java class whereby the editing of a subject's steps from the feature file are broken down to be coded into automation tests

TestRunner class- Java class which provides an integration between features file and step definition classes. Also specifies the plugins for test report generation.

Hooks class - Ensures that @before and @after methods run before specified scenario.
@Before method contains functionality of setting up environment, initializing driver and deleting cookies etc.
@After method takes screenshot in case of failures and embed them in the test report generated.

BasePage class - Gets the operating system and sets driver accordingly. Also contains few basic functionalities which can be used across projects.

HomePage and LoginPage - Java class which defines the functionality related to website's login features as well as activation, editing and removal of subject features.

config.properties file - this file contains key and their corresponding configuration values. The properties can be changed anytime without effecting the code.

ConfigReader - java class which defines an object to read data from config file.

log4j file - file to generate logs. 

drivers folder - contains drivers required for Mac and windows OS

ScreenShots folder - created at runtime and screenshots for failure scenarios are stored here

target folder - -created at runtime with html and json reports


pom.xmml - contains all the plugins and dependencies required to run the program in maven. It also integrates with testNG.xml.

testNG.xml - defines the classes which should run on start.







