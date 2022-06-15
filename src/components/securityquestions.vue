<template>
<div class="img">
      <img alt="" src="../assets/snadicon.png" />
   </div>
    <h1>Security Questions</h1>
    <h3>please select  as per your choice and answer the below questions </h3>
    <router-view>
  <form>
 <router-view>
  <label for="Select Questions">
     <select name="Select Questions" value="Select Questions" id="Select Questions" required>
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
  </label>
 </router-view>

    <br>
    <br>
    <label for="Give your answer"></label>
    <input type="text" placeholder="Give your answer">
    <br>
    <br>
 <router-view>
  <label for="Select Questions">
    <select name="Select Questions" value="Select Questions" id="Select Questions" required>
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
  </label>
 </router-view>

    <br>
    <br>
    <label for="Give your answer"></label>
    <input type="text" placeholder="Give your answer">
    <br>
    <br>

 <router-view>
  <label for="Select Questions">
    <select name="Select Questions" value="Select Questions" id="Select Questions" required>
        <option value= "What is your favourite food/dish ?">What is your favourite food/dish ?</option>
        <option value="Who is your childhood hero ?">Who is your childhood hero ?</option>
        <option value="What is the name of your favourite pet ?">What is the name of your favourite pet ?</option>
        <option value="In what city you were born ?">In what city you were born ?</option>
        <option value="What is the name of your first school ?">What is the name of your first school ?</option>
   
     </select>
  </label>
 </router-view>
 <br>
 <br>
    <label for="Give your answer"></label>
    <input type="text" placeholder="Give your answer">
    <br>
    <br>
    <div class="backbtn">
         <nav>
        <router-link  to = "/forgotpassword">
        back
        </router-link>
    </nav>
    </div>
    <nav>
        <router-link  to = "resetpassword"><button  class= "button" @click="Submityourresponse"> Submit your response</button></router-link>
    </nav>

  </form>
  </router-view>
  <routerview/>
</template>
<script>
export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: 'securityquestions',
}


</script>


<style scoped>
input[type=text]{
    width: 25%;
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    font-family: sans-serif;
}

.btn{
    text-align: left;
    font-family: sans-serif;
}

</style>