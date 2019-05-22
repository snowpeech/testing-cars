var expect = chai.expect;

describe("Driving a Car", function() {

    let sandbox; //added
    let car;

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.sandbox.create();

      // stub some console methods
      //sandbox.stub(window.console, "log");
      //sandbox.stub(window.console, "error");
        //global setup below. can be overwritten per test. we are mocking such things
        car = {};
            car.style = {};
            car.className = "";
            car.classList = "";
            car.style.top = "20px";
            car.style.left = "20px";
            car.classList.toggle = function(){};
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });
    
    describe("Calling Forward",function(){
        describe("while facing East", function(){
            it("should move car from right to left", function() {
                //SETUP
                    car.className = "car east";
    
                //ACT
                    forward(car);
    
                //ASSERT
                    expect(getDirection(car)).to.equal("EAST");
                    expect(car.style.top).to.equal('20px');
                    expect(car.style.left).to.equal('30px'); 
            });
        });

        describe("while facing West", function(){
            it("should move car from left to right", function() {
        
                car.className = "car west";
                
                forward(car);
                
                expect(getDirection(car)).to.equal("WEST");
                expect(car.style.top).to.equal('20px');
                expect(car.style.left).to.equal('10px');
                });
            });

        describe("While facing North", function() {
            it("should move car from bottom to top", function() {
            car.className = "car north";
            forward(car);
            expect(getDirection(car)).to.equal("NORTH");
            expect(car.style.top).to.equal("10px");
            expect(car.style.left).to.equal("20px");
            });   
        }); 
        
        describe("While facing South", function() {
            it("should move car from bottom to top", function() {
            car.className = "car south";
            forward(car);
            expect(getDirection(car)).to.equal("SOUTH");
            expect(car.style.top).to.equal("30px");
            expect(car.style.left).to.equal("20px");
            }); 
        });   
    });

    describe("calling reverse while facing East", function() {
        it("should move car from left to right", function() {

            //SETUP
                car.className = "car east";

            //ACT
                reverse(car);

            //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.style.top).to.equal('20px');
                expect(car.style.left).to.equal('10px');
        });
    });

    describe("calling reverse while facing west", function() {
        it("should move car from right to left", function() {
        
        car.className = "car west";
        
        reverse(car);
        
        expect(getDirection(car)).to.equal("WEST");
        expect(car.style.top).to.equal('20px');
        expect(car.style.left).to.equal('30px');
        });
    });

    describe("calling reverse while facing north", function() {
        it("should move car from top to bottom", function() {
        car.className = "car north";
        reverse(car);
        expect(getDirection(car)).to.equal("NORTH");
        expect(car.style.top).to.equal("30px");
        expect(car.style.left).to.equal("20px");
        });
    });

    describe("calling reverse while facing south", function() {
        it("should move car from bottom to top", function() {
        car.className = "car south";
        reverse(car);
        expect(getDirection(car)).to.equal("SOUTH");
        expect(car.style.top).to.equal("10px");
        expect(car.style.left).to.equal("20px");
        });
    });

    describe("Turning Right", function(){
        describe("while facing East", function(){
            it("should change direction to South", function(){
                car.classList = "car east";
                //turnRight(car);
                
                expect(getDirection(car)).to.equal("SOUTH");
                
            });
        });
    });


/// EXAMPLE SYNTAX BELOW

//   describe("#greets", function() {
//     it("should throw if no target is passed in", function() {
//       expect(function() {
//         (new Cow()).greets();
//       }).to.throw(Error);
//     });

//     it("should greet passed target", function() {
//       var greetings = (new Cow("Kate")).greets("Baby");
//       expect(greetings).to.equal("Kate greets Baby");
//     });
//   });

//   describe("#consoleGreets", function() {
//     it("should throw if no target is passed in", function() {
//         (new Cow()).consoleGreets();

//         sinon.assert.notCalled(console.log);
//         sinon.assert.calledOnce(console.error);
//         sinon.assert.calledWithExactly(console.error, "missing target");
//     });

//     it("should greet passed target", function() {
//       var greetings = (new Cow("Kate")).consoleGreets("Baby");

//       sinon.assert.notCalled(console.error);
//       sinon.assert.calledOnce(console.log);
//       sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
//     });
//   });

//   describe("#lateGreets", function() {
//     it("should pass an error if no target is passed", function(done) {
//       (new Cow()).lateGreets(null, function(err, greetings) {
//         expect(err).to.be.an.instanceof(Error);
//         done();
//       });
//     });

//     it("should greet passed target after one second", function(done) {
//       (new Cow("Kate")).lateGreets("Baby", function(err, greetings) {
//         expect(greetings).to.equal("Kate greets Baby");
//         done();
//       });
//     });
//   });
});