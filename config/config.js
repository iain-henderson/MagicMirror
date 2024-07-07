/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "bottom_center"
		},
		{
			module: "calendar",
			header: "US Holidays",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
    module: 'MMM-GoogleCalendar',
    header: "Calendars",
    config: {
	broadcastPastEvents: true,
	broadcastEvents: true,
        calendars: [
            {
              symbol: "calendar-week",
              calendarID: "iain.henderson@rearviewofagenius.com"
            },
            {
              symbol: "calendar-week",
              calendarID: "alexander.henderson@rearviewofagenius.com"
            },
            {
              symbol: "calendar-week",
              calendarID: "erin@rearviewofagenius.com"
            },
            {
              symbol: "calendar-week",
              calendarID: "evelyn.henderson@rearviewofagenius.com"
            },
            {
              symbol: "calendar-week",
              calendarID: "osric.henderson@rearviewofagenius.com"
            },
            // To add more calendars, replicate the above entry within this array with the respective ID
        ],
    }
},
	{
		module: "MMM-MonthlyCalendar",
		position: "fullscreen_above",
		config: {
			firstDayOfWeek: "monday",
		}
	},
		{
			module: "weather",
			position: "bottom_left",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 42.7647763,
				lon: -71.4398074
			}
		},
		{
			module: "weather",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 42.7647763,
				lon: -71.4398074
			}
		},
		{
			module: "newsfeed",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
