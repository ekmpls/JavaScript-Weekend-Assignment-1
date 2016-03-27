
var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
};

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
};

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
};

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
};

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
};

var initialList = [claim1, claim2, claim3, claim4, claim5];
var percentage = 0.00;
var fullAmount = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

	initialList.push(new claim("Charlie Knick", "Primary Care", 212));
	initialList.push(new claim("Heidi Anderson", "Optical", 550));
	initialList.push(new claim("Warren Honkola", "Emergency", 1178));
	initialList.push(new claim("Robin Olson", "Specialist", 2000));
	initialList.push(new claim("Joy Nelson", "Optical", 350));

for(var i = 0; i < initialList.length; i++) {
	perCov();
	fullAmount += amtCov();
	console.log("Paid out $" + totalPayedOut.toLocaleString() + " for " + initialList[i].patientName);
}

console.log("Total Amount: $" + fullAmount.toLocaleString());

	//function to determine percent covered
	function perCov(visitType){
		switch(initialList[i].visitType){
			case 'Optical':
				percentage = 0.00;
				break;
			case 'Specialist':
				percentage = 0.10;
				break;
			case 'Emergency':
				percentage = 1.0;
				break;
			case 'Primary Care':
				percentage = 0.50;
				break;
			}
		}

//function to determine amount covered
	function amtCov(){
		totalPayedOut = Math.round(percentage * initialList[i].visitCost);
		return totalPayedOut;
	}
