import React from 'react';

const Examplesofes6 = () =>{

  function stringliterals(){
    let firstName= "Kalaivani";
    let lastName= "Elangovan"
    var name = `Your name is ${firstName} ${lastName}.`
    console.log(name);
  return <h3>name</h3>;
  }

    //Destructuring

    var o = {p: 42, q: true};
    var {p, q} = o;

       console.log(p); // 42
      console.log(q); // true   

      //Normal Fucntion
      let add = function(x,y) {
        return x + y;
      }
      console.log(add(10,20)); // 30

      //Arrow functions 
      const aadd = (x,y) =>{ return x +y;};
      console.log("Arrowfunction "+ aadd(2,3));

      //Rest Parameter 
      function f (x, y, ...a) {
        return (x + y) * a.length
    }
    console.log("Rest Parameter "+f(1, 2, "hello", true, 7));

    //Spread Operators
    const odd = [1,3,5];
    const combined = [2,4, ...odd,6];
    console.log(combined);
    //Spread Operators with strings

    let chars = ['A', ...'BC', 'D'];
    console.log(chars);
    //Classes
    class Profile {   
        constructor(firstName, lastName = '') { // class constructor
           this.firstName = firstName;
           this.lastName = lastName;     
        }  
         
        getName() { // class method       
          console.log(`Name: ${this.firstName} ${this.lastName}`);    
        } 
     }
     let profileObj = new Profile('Kavisha', 'Talsania');
     profileObj.getName();
     console.log(profileObj);


return(
    <div>
       <p>ES6 Features</p>
      <div> {stringliterals} </div>
    </div>
);
}

export default Examplesofes6;