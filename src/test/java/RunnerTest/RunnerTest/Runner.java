package RunnerTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/java/Features", glue = { "StepDefination" }, format = { "pretty",
		"html:test-GenerateOutput" }, // Generate report
		monochrome = true, // Display console output in a proper readable format
		dryRun = false // TO check mapping between feature file and step
)
public class Runner {

}
