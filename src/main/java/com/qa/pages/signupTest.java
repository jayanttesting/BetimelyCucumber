package com.qa.pages;

import java.io.FileNotFoundException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class signupTest extends TestBase {

	public static WebDriver driver;

	
	private static signupTest page;

	public synchronized static signupTest getinstance() throws FileNotFoundException {
		if (page == null)
			page = new signupTest();

		return page;

	}
	@FindBy(id = "email")
	WebElement emailmemory;

	@FindBy(id = "name")
	WebElement name;

	@FindBy(id = "password")
	WebElement enterpassword;

	@FindBy(name = "commit")
	WebElement submit_button;

	public signupTest() throws FileNotFoundException {

		PageFactory.initElements(driver, this);

	}

	public void enteremail(String signupemail) {
		emailmemory.clear();
		emailmemory.sendKeys(signupemail);
	}

	public String entername(String fullname) {
		name.clear();
		name.sendKeys(fullname);
		return fullname;
	}

	public void clicksubmit() {
		submit_button.click();
	}
}
