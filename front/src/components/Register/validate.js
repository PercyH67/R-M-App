export default function validateRegister (inputs){
    const errors ={};

    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass = new RegExp(
      "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$"
    );

    if (!regexEmail.test(inputs.email)) {
        errors.email = "Name must be a valid email addres";
    }
    if (!inputs.email) {
        errors.email = "Add your username";
    }
    if (inputs.email.length > 35) {
        errors.email = "Max length 35";
    }
    if (!regexPass.test(inputs.password)) {
        errors.password = "Add pass 6-10 characters";
    }
    
    return errors;
}