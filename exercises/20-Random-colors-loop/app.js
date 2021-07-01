function getColor(colorNumber) {
        //make sure parameter is a number and not a string by converting the value to int:
        colorNumber = parseInt(colorNumber);
        switch (colorNumber) {
          case 1:
            return "red";
            break;
          case 2:
            return "yellow";
            break;
          case 3:
            return "blue";
            break;
          case 4:
            return "green";
            break;
          default:
            return "black";
            break;
        }
      }
      let randomStudent;
      
      function getAllStudentColors() {
        let exampleColor;
        for (let i = 0; i < 10; i++) {
          randomStudent = Math.round(Math.random() * 4) + 1;
          console.log(randomStudent);
          exampleColor = getColor(randomStudent);
          console.log(exampleColor);
        }
        //your loop here
      }
      
      //call the function below with the number of students in the class and print on the console
      console.log(getAllStudentColors());