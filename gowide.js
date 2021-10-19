const person = {
  name : ['Prithvi Raj', 'Aryal'],
  age: 36,
  gender: 'male',
  interest: ['travel', 'reading'],
  bio: function() {
    alert (this.name[0] + this.name[1] + " is" + this.age + " years" + this.gender + "." + " He likes " + this.interest[0] + " and " + this.interest[1] + ".");    
  },
  greeting: function() {
    alert ("Hi, I\'m' " + this.name[0] + "."); 
  }
};
