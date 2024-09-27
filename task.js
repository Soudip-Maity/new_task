const students = [];
let runagain = true;


const add_student = (name, phno, email, address) => {
  const student_info = {
    name: name,
    phno: phno,
    email: email,
    address: address,
  };
  students.push(student_info);
  
};


while (runagain) {
  let name = prompt("enter name.....");
  if(!name){
  continue;
  }
  else{
    break;
  }
  

}

while(runagain){  

let phno = prompt("enter phone number.....");
if(!phno){
    continue;
    }
    else{
      break;
    }

}
while(runagain){
let email = prompt("enter email.....");
if(!email){
    continue;
    }
    else{
      break;
    }
}

while(runagain){
  let address = prompt("enter address.....");
  if(!address){
    continue;
    }
    else{
      break;
    }
}
runagain = false
add_student(name,phno,email,address)
console.log(students);






