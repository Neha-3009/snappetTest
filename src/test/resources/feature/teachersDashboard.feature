Feature: Managing subjects feature of the application

@setup  
Scenario: log into the application
Given The application Login page is open
When I provide credentials
Then I should be able to log in successfully
    
Scenario: Activate a new subject
Given I am on home page
When I click on activate subjects
And select subject from dropdown
And proceed with default selected options for Level
And select first suggestion
And click on activate subject
Then A new subject is activated

Scenario: Edit subject
Given I am able to see activated subjects
When I click on edit button within a subject
And edited subject name to "Edited Taal"
And clicked on save button
Then the subject should be saved with updated parameters

@end
Scenario: Remove subject
Given I click on edit button 
When click on remove subject button
And click on remove
Then the subject should be removed from home page

    	