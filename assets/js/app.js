function validateForm() {
  document.getElementById('name_error').style.display = 'none'
  document.getElementById('second_name_error').style.display = 'none'
  document.getElementById('email_error').style.display = 'none'
  document.getElementById('email_error2').style.display = 'none'
  document.getElementById('passwd_error').style.display = 'none'
  document.getElementById('passwd1').style.border = "1px solid rgb(0, 0, 0)";
        document.getElementById('passwd2').style.border = "1px solid rgb(0, 0, 0)";

  
      let name = document.forms['myForm']['name'].value
      let second_name = document.forms['myForm']['second_name'].value
      let email = document.forms['myForm']['email'].value
      let passwd1 = document.forms['myForm']['passwd1'].value
      let passwd2 = document.forms['myForm']['passwd2'].value
      let gender = document.forms['myForm']['gender'].value
      console.log(name)
      console.log(second_name)
      console.log(email)

      
      if (!name) {
         document.getElementById('name_error').style.display = 'block'
         document.getElementById('name').style.border = "2px solid rgb(255, 0, 0)"; 
      }

      if (name) {
        document.getElementById('name').style.border = "2px solid rgb(0, 196, 0)"; 
      }

      if (!second_name) {
        document.getElementById('second_name_error').style.display = 'block'
        document.getElementById('second_name').style.border = "2px solid rgb(255, 0, 0)"; 
      }

      if (second_name) {
          document.getElementById('second_name').style.border = "2px solid rgb(0, 196, 0)"; 
      } 

      if (!email) {
        document.getElementById('email_error').style.display = 'block'
        document.getElementById('email').style.border = "2px solid rgb(255, 0, 0)";
      }

      if (email !== ""){
        var reg= /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
        if (reg.test(email) == false) {
          document.getElementById('email_error2').style.display = 'block'
          document.getElementById('email').style.border = "2px solid rgb(255, 0, 0)"; 
        }
      }

      if (email !== ""){
        var reg= /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
        if (reg.test(email) == true) {
          document.getElementById('email').style.border = "2px solid rgb(0, 196, 0)"; 
        }
      }
      
      
      if (passwd1 != passwd2 && (passwd1 != '' || passwd1 != 'underfiend')) {
          alert('Пароли не совпадают')
          document.getElementById('passwd1').style.border = "2px solid rgb(255, 0, 0)";
          document.getElementById('passwd2').style.border = "2px solid rgb(255, 0, 0)";
      }
      if (passwd1 == passwd2 && (passwd1 == '' || passwd1 == 'underfiend')){
        document.getElementById('passwd_error').style.display = 'block'
        document.getElementById('passwd1').style.border = "2px solid rgb(255, 0, 0)";
        document.getElementById('passwd2').style.border = "2px solid rgb(255, 0, 0)";
      }



      if(!gender){
        document.getElementById('gender_error').style.display = 'block'
      }
      if(gender){
        document.getElementById('gender_error').style.display = 'none'
      }

      return false;
}


