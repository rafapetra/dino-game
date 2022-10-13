// BL

export default class DinoGenerator {
  getDino() {
    let request = new XMLHttpRequest();
    const url = 'https://dinoipsum.com/api/?format=json&paragraphs=1&words=1';
    request.addEventListener("loadend", function() {
      if (this.status === 200) {
        document.getElementById('result').innerHTML = "The first letter is: " + this.response;
      } else {
        return 'statement';
      }
    });
    request.open('GET', url, true);
    request.send();
  }

}


















// export default class DinoIpsum {
//   static getDino() {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest(); 
//       const url = 'https://dinoipsum.com/api/?format=json&paragraphs=1&words=1';
//       request.addEventListener("loadend", function() {
//         const response = JSON.parse(this.responseText);
//         console.log(response);
//         if (this.status === 200) {
//           resolve([response]);
//         } else {
//           reject([this, response]);
//         }
//       });
//       request.open("GET", url, true);
//       request.send();
//     });
//   }

//   userInput() {
//     if (userDino === this.dinoName){
//       return "positive statement"
//     } else {
//       return "negitive statement"
//     }
//   }
// }
  
    