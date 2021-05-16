import React from "react";
 
const AsyncAwait = ()=>{


    // function scaryClown() {
    //     return new Promise(resolve => {
    //       setTimeout(() => {
    //         resolve('🤡');
    //       }, 1000);
    //     });
    //   }
      
    //   async function msg() {
    //     const msg = await scaryClown();
    //     console.log('Message:', msg);
    //   }
      function who() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('🤡');
          }, 500);
        });
      }
      
      function what() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('lurks');
          }, 2000);
        });
      }
      
      function where() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('in the shadows');
          }, 3000);
        });
      }
      
 const msg = async()=>{
        const a = await who();
        const b = await what();
        const c = await where();
      
        console.log(`${ a } ${ b } ${ c }`);
      }
      
      //msg();
      msg();
      
    return(
        <div>
        <div>Example for AsyncAwait</div>
        {msg}
        </div>
    )
}

export default AsyncAwait;