package com.qa.pages;

import java.io.FileNotFoundException;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class signupTest extends TestBase {

	// public static WebDriver driver;

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
	WebElement enter_password;

	@FindBy(name = "commit")
	WebElement submit_button;

	@FindBy(xpath = "(//div[@class='error_message'])[1]")
	WebElement email_validation;

	@FindBy(xpath = "(//div[@class='error_message'])[2]")
	WebElement name_validation;

	@FindBy(xpath = "(//div[@class='error_message'])[3]")
	WebElement password_validation;

	@FindBy(xpath = "//div[@class='toggle']")
	WebElement viewbox;

	@FindBy(xpath = "//a[contains(text(),'Terms of Service.')]")
	WebElement terms_and_service;

	public signupTest() throws FileNotFoundException {

		PageFactory.initElements(TestBase.driver, this);

	}

	public void enteremail(String signupemail) {
		emailmemory.clear();
		emailmemory.sendKeys(signupemail);
	}

	public void entername(String fullname) {
		name.clear();
		name.sendKeys(fullname);
	}

	public void enterpassword(String password) {
		enter_password.click();
	}

	public void clicksubmit() {
		submit_button.click();
	}

	public void validate_errormessageonemail() {
		Assert.assertTrue(email_validation.isDisplayed());
	}

	public void validateemail_errormessageName() {
		Assert.assertTrue(email_validation.isDisplayed());
	}

	public void validatename_errormessageName() {
		Assert.assertTrue(name_validation.isDisplayed());
	}

	public void validatepassword_errormessageName() {
		Assert.assertTrue(password_validation.isDisplayed());
	}

	public void validatesummit_disable() {
		Assert.assertFalse(submit_button.isEnabled());
	}

	public void validateviewbox() {
		viewbox.click();
	}

	public void validatetermsandservice() {
		terms_and_service.click();
	}

}
