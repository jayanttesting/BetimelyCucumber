package StepDefination;

import java.io.FileNotFoundException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.qa.base.TestBase;
import com.qa.pages.signupTest;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class SignupStepDefination extends TestBase {
	public SignupStepDefination() throws FileNotFoundException {
		super();

	}

	WebDriver driver;
	signupTest signupelements = new signupTest();

	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"D:/Betimely Repo/BetimelyTestAutomation/Resources/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://app.hydra.betimely.com/join");
	}
	@After
	public void teardown() {
		driver.quit();
	}

	@Given("^user is already on signup page$")
	public void user_is_already_on_signup_page() {

		
	}

	@When("^title of login page is betimely$")
	public void title_of_login_page_is_betimely() {
		String title = driver.getTitle();
		System.out.println("Title is----->" + title);
		Assert.assertEquals("Register your Timely account - Timely", title);
	}

	@Then("^user enters Email$")
	public void user_enters_Email() throws FileNotFoundException {

		driver.findElement(By.id("email")).sendKeys("ABC@mwmorytest.ai");
	}

	@Then("^user enters FullName$")
	public void user_enters_FullName() {
		driver.findElement(By.id("name")).sendKeys("Test ABC");
	}

	@Then("^user enters Password$")
	public void user_enters_Password() {
		driver.findElement(By.id("password")).sendKeys("Welcome1234");
	}

	@Then("^user clicks on submit button$")
	public void user_clicks_on_submit_button() {
		driver.findElement(By.name("commit")).click();
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String email, String fullname, String password) {
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.id("name")).sendKeys(fullname);
		driver.findElement(By.id("password")).sendKeys(password);
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
}
