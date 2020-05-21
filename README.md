# Mobicontrol-Cucumber

# Description
Timely automatically records all the time you spend in different work apps to create an infallible timeline of your day.
Capture everything — from documents and websites, to meetings, emails and GPS locations.

# Framework Used : Cucumber
# Project Type: Maven Project

# Key instructions to run test in eclipse
1. Clone Git url in your local system at any directory.
2. Import project in eclipse and follow below steps.
3. Inside Project -> navigate to src/test/java -> Package: Runner Test
4. Right click on "Runner.class" and Run as jnunit test

# User below command to run test on command line
mvn -Dtest=Runner.java test
Preconditions: set Maven and Jdk path in enviroment variables

# Output will be gnerated in "test-GenerateOutput"
1. Right click on index.html file -> Open properties
2. Copy url and paste in to any browser to view HTML report

# Project inclusions:
-- Implemented features are kept in to src/main/java : Under Features package: signup.features
-- Utility package : test abse class contains common utlities used in entire project.
-- Step defination class contains implemented functions used in automation.
-- Screenhots folder in your local directory contains screenshots.
-- Logger class has been implemented to generated logs.

# Further implemetation which can be done:
-- Extent report implementation
-- Scheduling test on JENKINS
-- API test using Rest-Assured
-- Establishing databse connection
