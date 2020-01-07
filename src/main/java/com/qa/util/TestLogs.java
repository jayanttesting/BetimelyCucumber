package com.qa.util;

import org.apache.log4j.Logger;

public class TestLogs {

	private static Logger Log = Logger.getLogger(TestLogs.class.getName());

	public static void starttestcase(String TestCaseName) {

		Log.info("**********" + TestCaseName);

	}

	public static void endTestCase(String sTestCaseName) {

		Log.info("***********" + "Test END");

	}

	// Info Level Logs
	public static void info(String message) {
		Log.info(message);
	}

	// Warn Level Logs
	public static void warn(String message) {
		Log.warn(message);
	}

	// Error Level Logs
	public static void error(String message) {
		Log.error(message);
	}

	// Fatal Level Logs
	public static void fatal(String message) {
		Log.fatal(message);
	}

	// Debug Level Logs
	public static void debug(String message) {
		Log.debug(message);
	}
}
