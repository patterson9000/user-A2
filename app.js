//create the user constutor
class user{
    constructor(fname,lname,email,password,confirm,payment,color){
        this.firstName=fname;
        this.lastName=lname;
        this.email=email;
        this.password=password;
        this.confirm=confirm;
        this.payment=payment;
        this.color=color;
    }}
function isValid(user){
        //return true if the user is valid
        //return false if the user is not valid
        let valid=true;
        if(user.firstName.length==0){
            valid=false;
            $("txtFirstName").addClass("input-error");
           
        }
        if(user.lastName.length==0){
            valid=false;
            $("txtLastName").addClass("input-error");
            
        }
        if(user.email.length==0){
            valid=false;
            $("txtEmail").addClass("input-error");
            
       
    } 
       if(user.password.length==0){
           valid=false;
           $("txtPassword").addClass("input-error");
           
    }
        if(user.confirm.length==0){
            valid=false;
            $("txtConfirm").addClass("input-error");
           
        }
        if(user.payment.length==0){
            valid=false;
            $("txtPayment").addClass("input-error");
            
        }
    
    return valid;
   } 
//create the register from the inputs
function register(){
    //get the values from the inputs
   let userfname= $("#txtFirstName").val();
   let userLname= $("#txtLastName").val();
   let userEmail= $("#txtEmail").val();
   let userPass= $("#txtPassword").val();
   let userConfirm=$("#txtConfirm").val();
   let userPayment=$("#txtPayment").val();
   let userColor=$("#txtColor").val();
//create the obj
let newUser=new user(userfname,userLname,userEmail,userPass,userConfirm,userPayment,userColor)
//display the user on the console

function init(){
 //hide the userForm
 $("#userForm").hide();
}


  window.onload=init;
