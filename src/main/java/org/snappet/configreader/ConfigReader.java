package org.snappet.configreader;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {

	public static String getConfigProperty(String key) throws IOException {
		Properties prop = new Properties();
		FileInputStream ip = new FileInputStream("src//test/resources/config/config.properties");
		prop.load(ip);
		return prop.getProperty(key);
	}
	public static Properties getLoggingProperties()  {
		Properties prop = new Properties();
		FileInputStream ip;
		try {
			ip = new FileInputStream("src//test/resources/config/log4j.properties");
			prop.load(ip);
		} catch (Exception e) {
			
		}
		
		return prop;
	}
}
