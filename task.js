const student_info = {
  name: "",
  phone: "",
  email: "",
  address: "",
};

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
  if (phone) {
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

addStudent();
console.log(student_info);
