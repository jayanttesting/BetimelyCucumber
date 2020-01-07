Feature: Betimely Sigup Feature 

Scenario Outline: Validate Signup with valid inputs 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC4@memorytest.ai|test Two|Welcome1234|
		
Scenario Outline: Validate signup with blank fields 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		| |Test One| Welcome@1234|
		|ABC3@memorytest.ai|        | Welcome@1234|
		|ABC3@memorytest.ai|test Two|             |
		|                  |        |             |
		
Scenario Outline: Validate with garbage values 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|Abc44@ met ry Test . a i|Marc Anthony|Welcome@1234|
		|Abc45@memorytest.ai|MAR C An tho ny|Welcome@1234|
		|Abc46@memorytest.ai|Marc Anthony|We lc ome@12 34|
		
Scenario Outline: Validate sigup fields error messsage 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|Test14@memorytest.ai |Test One| Welcome@1234|
		|ABC2@memorytest.ai| Test1234| Welcome@1234|
		|ABC3@memorytest.ai|test Two|             |
		|                  |        |ABC3@memorytest.ai|            |
		
Scenario Outline: Verify char length of all fields 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABNCCBjjejwdhjdehjdejejejknejnjenenjknjnejwnjkeejew|testnjdbdbehjdebhb5878578784884847674|Welcome1234hjsbdhdsghgdvshhfdhsghfghdf|
		
Scenario Outline: Verify all fields with upper case 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC4@MEMORYTEST.AI|MARC|WELCOME@!@#$%|
		
Scenario Outline: Validate fields with special characters 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC4@MEMORYTEST.AI|!@#$%^&*()|WELCOME@!@#$%|
		
Scenario Outline: Verify sql injections 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email             |FullName              |password|
		|select * from 1=1 | Marco Polo           | KIKO@1234|
		|Mi@memorytest.ai  |Delete * from webinfo|KIKI@1234|
		|Mi1@memorytest.ai |marco Polp                     |select * from password|
		
Scenario Outline: Validate email with ip address 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@198.168.1.1|SamTest|Welcome1234|
		|name2@memorytest.ai|192.168.255.255|Welcome@1234|
		|name3@memorytest.ai|SamTest Test|192.165.2.1|
		
Scenario Outline: Validate with invalid email 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC3@memorytest.ai@gmail.com|test Two|Welcome1234|
		
Scenario Outline: Validate name and password field by entering email 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|ABC11@memorytest.ai|@memorytest.ai|Welcome1234|
		|xyz23@memorytest.ai|Jayant Gupta|jayant.gupta@memorytest.ai|
		
Scenario Outline: Validate full name without prefix 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@memorytestai|Test1|Welcome1234|
		
Scenario Outline: Validate sigup with HTML tags 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user enters "<Email>" and "<FullName>" and "<Password>" 
	Then user clicks on submit button 
	Then validate home page title 
	
	Examples: 
		|Email|FullName|password|
		|name@memorytestai|<test></test>|Welcome1234|
		|<P></P>|Kim Jhones|Welcome1234|
		|name@memorytestai|Kaira Test|Welcome</html>|
		
		
Scenario: Validate password viewbox 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user click on password viewbox 
	
Scenario: Verify terms of service 

	Given user is already on signup page 
	When title of sign page is betimely 
	Then user clicks on terms and service 
	Then verify terms and service title 