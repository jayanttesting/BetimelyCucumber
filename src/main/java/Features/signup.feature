Feature: Betimely Sigup Feature 
#Scenario: Betimely Sigup Test scenario
#
#	Given user is already on signup page 
#	When title of login page is betimely 
#	Then user enters Email 
#	And user enters FullName 
#	And user enters Password 
#	Then user clicks on submit button 


Scenario Outline: Validate with valid credentials 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC3@memorytest.ai|test Two|Welcome1234|
		
Scenario Outline: Validate with blank fields 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC3@memorytest.ai|test Two| |
		
		
		
		
Scenario Outline: Verify char length of all fields 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABNCCBjjejwdhjdehjdejejejknejnjenenjknjnejwnjkeejew|testnjdbdbehjdebhb5878578784884847674|Welcome1234hjsbdhdsghgdvshhfdhsghfghdf|
		
Scenario Outline: Verify all fields with upper case 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC4@MEMORYTEST.AI|MARC|WELCOME@!@#$%|
		
Scenario Outline: Validate fields with special characters 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC4@MEMORYTEST.AI|!@#$%^&*()|WELCOME@!@#$%|
		
Scenario Outline: Verify sql injections 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|select * from 1=1|Delete * from webinfo|select * from password|
		
Scenario Outline: Validate with invalid email 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC3@memorytest.ai@gmail.com|test Two|Welcome1234|
		
Scenario Outline: Validate name field by entering email 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC11@memorytest.ai|@memorytest.ai|Welcome1234|
		
Scenario Outline: Validate email with ip address 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@198.168.1.1|SamTest|Welcome1234|
		
Scenario Outline: Validate email with missing dot 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@memorytestai|Mactest|Welcome1234|
		
Scenario Outline: Validate full name without prefix 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@memorytestai|Test1|Welcome1234|
		
Scenario Outline: Validate full name with special characters 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@memorytestai|!@#$% &*|Welcome1234|
		
Scenario Outline: Validate full name with HTML tags 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@memorytestai|<test></test>|Welcome1234|
		
		
Scenario: Validate password viewbox 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user click on password viewbox 
	Then user will able to view entered password 
	
Scenario: Verify terms of service 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user clicks on terms and service 
	Then verify terms and service title 
	
Scenario Outline: Validate password limit 

	Given user is already on signup page 
	When title of login page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@memorytestai|Mactest|Welcome!&@&@^1234testtesttesttesttesttesttesttesttesttesttesttesttestWelcomem1234|
		
		
		
		
		
		
		
		
		
		
		
