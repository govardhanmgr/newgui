<template>
    <div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
    <h1>Forgot Password ?</h1>
    <h3>Enter the User id when you have registered for the first time.</h3>
    <br>
    <h3>You will be verified through the link sent to your email.</h3>
    <br>
    <form>
       <label for="Enter your User Id"></label>
       <input type="text" placeholder="Enter your User Id">
       <br>
       <br>
       <br>
   <nav>
        <router-link  to ="/securityquestions"><button  class= "button" @click="SubmitHere" > Submit Here</button></router-link>
    </nav>
    <div class = "backbtn">
      <nav>
        <router-link to = "/login">Back</router-link> 
    </nav>
    </div>

    </form>
    <routerview/>


    
</template> 



<script>
export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: 'forgotpassword',
   
  
}

</script>


<style scoped>
body{
   background: #eee;
   margin : 0;
    font-family: sans-serif;
}
.backbtn{
    text-align: left;
     font-family: sans-serif;
}

</style>