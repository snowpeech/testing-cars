var expect = chai.expect;

describe("Driving a Car", function() {

    let sandbox; //added
    let car;
    let carElem

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

    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });
    //need to test moveIt turnIt getDirection

    describe("testing moveIt function", function(){
        describe("moveIt forward facing North", function(){
            it("should move up 10 px", function(){
                moveIt(car,NORTH,FORWARD);
                expect(car.style.top).to.equal('10px');
                expect(car.style.left).to.equal('20px');
            });    
        });

        describe("moveIt reverse facing North", function(){
            it("should move down 10 px", function(){
                moveIt(car,NORTH,REVERSE);
                expect(car.style.top).to.equal('30px');
                expect(car.style.left).to.equal('20px');
            });    
        });
        describe("moveIt forward facing South", function(){
            it("should move down 10 px", function(){
                moveIt(car,SOUTH,FORWARD);
                expect(car.style.top).to.equal('30px');
                expect(car.style.left).to.equal('20px');
            });    
        });

        describe("moveIt reverse facing South", function(){
            it("should move up 10 px", function(){
                moveIt(car,SOUTH,REVERSE);
                expect(car.style.top).to.equal('10px');
                expect(car.style.left).to.equal('20px');
            });    
        });

        describe("moveIt forward facing East", function(){
            it("should move left 10 px", function(){
                moveIt(car,EAST,FORWARD);
                expect(car.style.top).to.equal('20px');
                expect(car.style.left).to.equal('30px');
            });    
        });

        describe("moveIt reverse facing East", function(){
            it("should move right 10 px", function(){
                moveIt(car,EAST,REVERSE);
                expect(car.style.top).to.equal('20px');
                expect(car.style.left).to.equal('10px');
            });    
        });
        describe("moveIt forward facing West", function(){
            it("should move right 10 px", function(){
                moveIt(car,WEST,FORWARD);
                expect(car.style.top).to.equal('20px');
                expect(car.style.left).to.equal('10px');
            });    
        });

        describe("moveIt reverse facing West", function(){
            it("should move right 10 px", function(){
                moveIt(car,WEST,REVERSE);
                expect(car.style.top).to.equal('20px');
                expect(car.style.left).to.equal('30px');
            });    
        });
    });

    describe("testing turnIt function",function(){
       
        describe("facing North turning right", function(){
            it("should change class from North to East",function(){
                var classes  = "car north";                
                expect(turnIt(classes, NORTH, RIGHT)).to.equal('car east');
            });
        });

        describe("facing North turning left", function(){
            it("should change class from North to West",function(){
                var classes  = "car north";                
                expect(turnIt(classes, NORTH, LEFT)).to.equal('car west');
            });
        });

        describe("facing South turning right", function(){
            it("should change class from North to West",function(){
                var classes  = "car south";                
                expect(turnIt(classes, SOUTH, RIGHT)).to.equal('car west');
            });
        });

        describe("facing South turning left", function(){
            it("should change class from North to East",function(){
                var classes  = "car south";                
                expect(turnIt(classes, SOUTH, LEFT)).to.equal('car east');
            });
        });

        describe("facing East turning right", function(){
            it("should change class from East to South",function(){
                var classes  = "car east";                
                expect(turnIt(classes, EAST, RIGHT)).to.equal('car south');
            });
        });

        describe("facing East turning left", function(){
            it("should change class from East to North",function(){
                var classes  = "car east";                
                expect(turnIt(classes, EAST, LEFT)).to.equal('car north');
            });
        });

        describe("facing West turning right", function(){
            it("should change class from West to North",function(){
                var classes  = "car west";                
                expect(turnIt(classes, WEST, RIGHT)).to.equal('car north');
            });
        });

        describe("facing West turning left", function(){
            it("should change class from West to South",function(){
                var classes  = "car west";                
                expect(turnIt(classes, WEST, LEFT)).to.equal('car south');
            });
        });
    });

    describe("testing getDirection function", function(){
        describe("get Direction while facing north", function(){
            it("should return the class of North", function(){
                car.className = "car north";
                
                expect(getDirection(car)).to.equal("NORTH");
            });
        });
        describe("get Direction while facing south", function(){
            it("should return the class of South", function(){
                car.className = "car south";                
                expect(getDirection(car)).to.equal("SOUTH");
            });
        });
        describe("get Direction while facing east", function(){
            it("should return the class of East", function(){
                car.className = "car east";                
                expect(getDirection(car)).to.equal("EAST");
            });
        });
        describe("get Direction while facing west", function(){
            it("should return the class of West", function(){
                car.className = "car west";
                expect(getDirection(car)).to.equal("WEST");
            });
        });
    });

    // function getDirection(car) {
    //     var classes = car.className;
    //     var direction = "";
    //     if(classes.indexOf('north')>0) {direction = NORTH;}
    //     else if(classes.indexOf('south')>0) {direction = SOUTH;}
    //     else if(classes.indexOf('east')>0) {direction = EAST;}
    //     else if(classes.indexOf('west')>0) {direction = WEST;}
    //     return direction;
    // }



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
        describe("while facing North", function(){
            it("should change direction to East", function(){
                car.className = "car north";
                turnRight(car);
                expect(car.className).to.equal('car east');
            });
        });

        describe("while facing South", function(){
            it("should change direction to West", function(){
                car.className = "car south";
                turnRight(car);
                expect(car.className).to.equal('car west');
            });
        });
        
        describe("while facing East", function(){
            it("should change direction to South", function(){
                car.className = "car east";
                turnRight(car);
                expect(car.className).to.equal('car south');
            });
        });

        describe("while facing West", function(){
            it("should change direction to North", function(){
                car.className = "car west";
                turnRight(car);
                expect(car.className).to.equal('car north');
            });
        });
    });

    describe("Turning Left", function(){
        describe("while facing North", function(){
            it("should change direction to West", function(){
                car.className = "car north";
                turnLeft(car);
                
                expect(car.className).to.equal('car west');
            });
        });

        describe("while facing South", function(){
            it("should change direction to East", function(){
                car.className = "car south";
                turnLeft(car);
                expect(car.className).to.equal('car east');
            });
        });

        describe("while facing East", function(){
            it("should change direction to North", function(){
                car.className = "car east";
                turnLeft(car);
                expect(car.className).to.equal('car north');
            });
        });

        describe("while facing West", function(){
            it("should change direction to South", function(){
                car.className = "car west";
                turnLeft(car);
                expect(car.className).to.equal('car south');
            });
        });

    });

}); //last bracket