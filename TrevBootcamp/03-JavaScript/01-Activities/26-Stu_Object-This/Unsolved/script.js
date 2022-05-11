console.log(this);

//will return "inside this function this is undefined."
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

//will return 20 
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

//will return 5750
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};
