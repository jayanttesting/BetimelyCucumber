package RunnerTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:/Betimely Repo/BetimelyTestAutomation/src/main/java/Features/signup.feature", glue = {
		"StepDefination" }, format = { "pretty", "html:test-GenerateOutput" }, // To
																				// generate
																				// reporting
		monochrome = true, // Display console output in a proper readable format
		dryRun = true // TO check mapping between feature file and step
						// defination
)
public class Runner {

}
