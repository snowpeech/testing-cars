var expect = chai.expect;

describe("paint.js", function() {

	let sandbox; //added
	let car;
	let body;

	beforeEach(function() {
		sandbox = sinon.sandbox.create();
		//setup object parameters etc.
		let carCount = 0

		body = document.body;
	});

	afterEach(function() {
		// restore the environment as it was before
		sandbox.restore();
	});

	describe("random car art id ", function(){
		it("should return a random number between 1 and 7", function() {
			//ASSERT
			expect(randomCarArtId()).to.match(/car[0-9]/);
		});
	});

	describe("add car function", function(){

		let elemId = addCar();
		let car = document.getElementById(elemId);

		it("should create a div", function() {

			console.log(body)
			//Act
	

			//ASSERT
			expect(car.tagName).to.equal('DIV')
			
		});

		it("should elemId equals c1 and car.id equals c1", function() {
			//ASSERT
			expect(elemId).to.equal('c1')
			expect(car.id).to.equal('c1')
			
		});
		
		it("should increment carCount", function(){
			carCount = 2;
			addCar()
			expect(carCount).to.equal(3);
		});
		
	});

});//end of rand car art test