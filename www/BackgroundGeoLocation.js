var exec = cordova.exec;
var backgroundGeoLocation = function() {};

backgroundGeoLocation.prototype.configure = function(success, failure, config) {
  var params            = JSON.stringify(config.params || {}),
      headers		        = JSON.stringify(config.headers || {}),
      url               = config.url        || 'BackgroundGeoLocation_url',
      stationaryRadius  = (config.stationaryRadius >= 0) ? config.stationaryRadius : 50,  // meters
      distanceFilter    = (config.distanceFilter >= 0) ? config.distanceFilter : 500,     // meters
      locationTimeout   = (config.locationTimeout >= 0) ? config.locationTimeout : 60,    // seconds
      desiredAccuracy   = (config.desiredAccuracy >= 0) ? config.desiredAccuracy : 100,   // meters
      debug             = config.debug || false,
      notificationTitle = config.notificationTitle || "Background tracking",
      notificationText  = config.notificationText || "ENABLED",
      activityType      = config.activityType || "OTHER";

  exec(
    success || function() {},
    failure || function() {},
    'BackgroundGeoLocation',
    'configure',
    [params, headers, url, stationaryRadius, distanceFilter, locationTimeout, desiredAccuracy, debug, notificationTitle, notificationText, activityType]
  );
};

backgroundGeoLocation.prototype.start = function(success, failure, config) {
  exec(
    success || function() {},
    failure || function() {},
    'BackgroundGeoLocation',
    'start',
    []
  );
};

backgroundGeoLocation.prototype.stop = function(success, failure, config) {
  exec(
    success || function() {},
    failure || function() {},
    'BackgroundGeoLocation',
    'stop',
    []
  );
};

backgroundGeoLocation.prototype.finish = function(success, failure) {
  exec(
    success || function() {},
    failure || function() {},
    'BackgroundGeoLocation',
    'finish',
    []
  );
};

backgroundGeoLocation.prototype.changePace = function(isMoving, success, failure) {
  exec(
    success || function() {},
    failure || function() {},
    'BackgroundGeoLocation',
    'onPaceChange',
    [isMoving]
  );
};

/**
* @param {Integer} stationaryRadius
* @param {Integer} desiredAccuracy
* @param {Integer} distanceFilter
* @param {Integer} timeout
*/
backgroundGeoLocation.prototype.setConfig = function(success, failure, config) {
  exec(
    success || function() {},
    failure || function() {},
    'BackgroundGeoLocation',
    'setConfig',
    [config]
  );
};

/**
* Returns current stationaryLocation if available.  null if not
*/
backgroundGeoLocation.prototype.getStationaryLocation = function(success, failure) {
  exec(
    success || function() {},
    failure || function() {},
    'BackgroundGeoLocation',
    'getStationaryLocation',
    []
  );
};

// Plug in to Cordova
cordova.addConstructor(function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.backgroundGeoLocation = new backgroundGeoLocation();
});
