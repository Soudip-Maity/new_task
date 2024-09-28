let students=[]
let deleted_student=[]
std_id=1
const student_info = {
  name: "",
  phone: "",
  email: "",
  address: "",
  student_id:std_id,
};
std_id++
students.push(student_info)

const addStudent = () => {
  addName();
  addEmail();
  addPhone();
  addAddress();
};

const addName = () => {
  let name = prompt("Enter name");
  if (name) {
    student_info.name = name;
  }else{
    addName();
  }
};

const addEmail = () => {
  let email = prompt("Enter email");
  if (email) {
    student_info.email = email;
  }else{
    addEmail();
  }
};

const addPhone = () => {
  let phone = prompt("Enter phone");
  if (phone && phone.length==10) {
    student_info.phone = phone;
  }else{
    addPhone();
  }
};

const addAddress = () => {
  let address = prompt("Enter address");
  if (address) {
    student_info.address = address;
  }else{
    addAddress();
  }
};




const option = ()=>{
console.log("1. create new student....");
console.log("2. show show details by id");
console.log("3. edit a student details");
console.log("4. delete a student ");
}

const delete_student = ()=>{
let ask_id=prompt("enter student id........")
if(ask_id==students[student_id]){
  deleted_student.push(students[ask_id-1])
  students.pop(students[ask_id-1])
}
else{
  console.log("enter valid student id.....");
  alert("enter valid student id.....")
  
}
}



addStudent();
console.table(students);
option();


const choice =() =>{
  let ask_choice=prompt("enter a option.......")
  if(ask_choice==1){
    addStudent();
    console.table(students);
  }
  else if(ask_choice==2){

    let ask_id=prompt("enter student id....")
    if(ask_id==students.student_id){
      console.table(students[ask_id-1])
    }
    else{
      console.error("enter valid student id...")
    }

  
  }
  else if(ask_choice==3){
    let ask_id=prompt("enter student id")
    if(ask_id==students[ask_id-1]){

    }

  }
  else if(ask_choice==4){

  }
else{
  alert("enter valid option......")
}
  
}

choice();
option();
choice()

