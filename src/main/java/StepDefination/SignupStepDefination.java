package StepDefination;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.qa.pages.signupTest;
import com.qa.util.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignupStepDefination extends TestBase {
	public SignupStepDefination() throws FileNotFoundException {
		super();

	}

	WebDriver driver;
	Logger Log = Logger.getLogger(SignupStepDefination.class.getName());
	signupTest signupelements = new signupTest();

	@Before
	public void setup() throws FileNotFoundException {
		Log.info("Brwser is getting initialized");
		TestBase.getinstance().initialize();
		driver = TestBase.driver;
	}

	@After
	public void teardown() {
		Log.info("Closing Browser");
		driver.quit();
	}

	@Given("^user is already on signup page$")
	public void user_is_already_on_signup_page() {
		String url = "https://app.hydra.betimely.com/join";
		Assert.assertEquals(url, driver.getCurrentUrl());
		Log.info("Sign up verification passed");
	}

	@When("^title of sign page is betimely$")
	public void title_of_sign_page_is_betimely() {
		Log.info("Verifying sign up page title");
		String title = driver.getTitle();
		System.out.println("Title is----->" + title);
		Assert.assertEquals("Register your Timely account - Timely", title);
	}

	@Then("^user enters Email$")
	public void user_enters_Email() throws Exception {
		signupTest.getinstance().enteremail("ABC@memorytest.ai");
		signupTest.getinstance().takescreenshot(driver,
				"Screenshots/" + "ScreenShot_" + driver.getClass().getName().toString() + ".jpg");
		Log.info("Screenshot captured in Screenshots folder");
	}

	@Then("^user enters FullName$")
	public void user_enters_FullName() throws FileNotFoundException {
		signupTest.getinstance().entername("Mac George");
	}

	@Then("^user enters Password$")
	public void user_enters_Password() throws FileNotFoundException {
		signupTest.getinstance().enterpassword("Welcome@1234");
	}

	@Then("^user clicks on submit button$")
	public void user_clicks_on_submit_button() throws Exception {
		signupTest.getinstance().clicksubmit();
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String email, String fullname, String password) throws FileNotFoundException, Exception {
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.id("name")).sendKeys(fullname);
		driver.findElement(By.id("password")).sendKeys(password);
		signupTest.getinstance().takescreenshot(driver,
				"Screenshots/" + "ScreenShot_" + driver.getClass().getName().toString() + ".jpg");
		Log.info("Registration in progress");
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String title = driver.getTitle();
		Assert.assertEquals("Welcome to Timely! – Timely", title);

	}

	@Then("^validate home page title$")
	public void validate_home_page_title() throws Throwable {
		String title = driver.getTitle();
		Assert.assertEquals("Welcome to Timely! – Timely", title);

	}

	@Then("^user click on password viewbox$")
	public void user_click_on_password_viewbox() throws Throwable {
		signupTest.getinstance().validateviewbox();
		signupTest.getinstance().takescreenshot(driver,
				"Screenshots/" + "ScreenShot_" + driver.getClass().getName().toString() + ".jpg");
		Log.info("Password view box validated");
	}

	@Then("^user clicks on terms and service$")
	public void user_clicks_on_terms_and_service() throws FileNotFoundException {
		signupTest.getinstance().validatetermsandservice();
		Log.info("terms and service validated");
	}

	@Then("^verify terms and service title$")
	public void verify_terms_and_service_title() throws Throwable {
		List<String> browserTabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(browserTabs.get(1));
		Log.info("Validating Url: terma and services");
		String new_windowtitle = "Terms of Service";
		Assert.assertEquals(new_windowtitle, driver.getTitle());
		signupTest.getinstance().takescreenshot(driver,
				"Screenshots/" + "ScreenShot_" + driver.getClass().getName().toString() + ".jpg");
		driver.close();
		driver.switchTo().window(browserTabs.get(0));
		
	}
	@When("^login page is betimely$")
	public void login_page_is_betimely() throws Throwable {
	    System.out.println("True");
	}

}
