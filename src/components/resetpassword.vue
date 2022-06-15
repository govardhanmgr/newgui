<template>
   <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
    <h1>Reset Password</h1>
    <h3>Please reset your password.</h3>
 <router-view>
  <form>
    <label for="Enter New Password"></label>
    <input type="text" placeholder="Enter New Password" required>
    <br>
    <br>
    <label for="Confirm Password"></label>
    <input type="password" placeholder="Confirm Password" required>
    <br>
    <br>
    <nav>
        
        <router-link  to ="/login"><button  class= "button" @click="Reset" > Reset</button></router-link>
    </nav>
    <div class="backbtn">
         <nav>
        <router-link  to = "/forgotpassword">
        back
        </router-link>
       </nav>
    </div>

   </form>
 </router-view>
 <routerview/>


</template>


<script>
export default {
 // eslint-disable-next-line vue/multi-word-component-names
   name:'resetpassword',   
}
</script>


<style>
  h1{
      font-family: sans-serif;
  }
  h3{
      font-family: sans-serif;
  }
  input[type="text"]{
      font-family: sans-serif;
  }
    input[type="password"]{
      font-family: sans-serif;
  }
  button{
      font-family: sans-serif;
  }
  
  .backbtn{
      font-family: sans-serif;
  }
  
</style>