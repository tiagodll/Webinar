let auto = (function(){

	auto.getRequiredLicenseCategory = function() {
		return "sedan";
	}

	function auto(){
		let me = {
			maxSpeed: 200,
			speed: 0,
			speedUnit: "Km/h",
			engine: false
		};

		publicAPI();
		function publicAPI() {
			
			me.setSpeed = function(pspeed) {
				me.speed = pspeed > me.maxSpeed ? me.maxSpeed : pspeed;
			}
			me.getSpeed = function() {
				return me.speed;
			}
			me.turnEngineOn = function() {
				me.engine = true;
			}
			me.turnEngineOff = function() {
				me.engine = false;
			}
			me.isEngineOn = function() {
				return me.engine;
			}
			me.pressKlaxon = function() {
				console.log("beep beep")
			}
		}
		return me;
	}
	return auto;
})();

let cabriolet = (function(){

	cabriolet.getRequiredLicenseCategory = function() {
		return "cabriolet";
	}

	function cabriolet(){
	
		me = auto();
		me.maxSpeed = 300;
		
		publicAPI();
		function publicAPI() {

			me.roofCollapsed = false;
			
			Object.assign(me, {
				isRoofCollapsed: function() {
					return me.roofCollapsed;
				},

				collapseRoof: function() {
					me.roofCollapsed = true;
				},

				raiseRoof: function() {
					me.roofCollapsed = false;
				}, 
				turnEngineOn: function() {
					if(me.roofCollapsed)
						console.log("cant start with the top off")
					else
						me.engine = true;
				}
			});
		};
		return me;
	}
	return cabriolet;
})();

console.log(auto.getRequiredLicenseCategory());
let car = auto();
car.setSpeed(500);
console.log(`speed: ${car.getSpeed()}`);
car.turnEngineOn();
console.log(`engine: ${car.isEngineOn()}`);
car.turnEngineOff();
console.log(`engine: ${car.isEngineOn()}`);
car.pressKlaxon();

console.log(cabriolet.getRequiredLicenseCategory());
let nicecar = cabriolet();
console.log(nicecar);
nicecar.setSpeed(500);
console.log(`speed: ${nicecar.getSpeed()}`);
nicecar.turnEngineOn();
console.log(`engine: ${nicecar.isEngineOn()}`);
nicecar.turnEngineOff();
console.log(`engine: ${nicecar.isEngineOn()}`);
nicecar.pressKlaxon();
nicecar.collapseRoof();
console.log(`roof: ${nicecar.isRoofCollapsed()}`);
nicecar.turnEngineOn();
nicecar.raiseRoof();
console.log(`roof: ${nicecar.isRoofCollapsed()}`);
nicecar.turnEngineOn();
console.log(`engine: ${nicecar.isEngineOn()}`);