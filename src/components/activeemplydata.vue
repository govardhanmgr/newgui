
<template>
<router-view>
<h2> Active Employee Data </h2>
    <table >

        <div id="customers">
        <tr>
            <td> Employee Number</td>
            <td> First Name </td>
            <td> Last Name </td>
            <td> Email </td>
            <td> Contact Number </td>
            <td> Role </td>
            <td> Entity </td>
        </tr>
         <!-- <tr>
            <td> Employee Number</td>
            <td> First Name </td>
            <td> Last Name </td>
            <td> Email </td>
            <td> Contact Number </td>
            <td> Role </td>
            <td> Client name </td>
            <td> Entity </td>
            <td> Action </td>
        </tr> -->
  
       <tr v-for="(employeedata,index) in responsedata" :key="index">
        <td >{{employeedata.id}}</td>
<td>{{employeedata.emplofirstName}}</td>
<td>{{employeedata.lastName}}</td>
<td>{{employeedata.email}}</td>
<td>{{employeedata.phoneNumber}}</td>
<td>{{employeedata.role}}</td>
<td>{{employeedata.entity}}</td>

       </tr>
       <div>

       </div>
   
       
        </div>
        
       
    </table> 
</router-view>
<router-view/>
</template>

<script>

import loginapi from '../services/loginapi'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'activeemplydata',
        data:function(){
   return {
 name:'jack',
      characters:['me','you','anand','nikhil'],
      employeedata:[
        
         { EmployeeNumber:'1000',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
           { EmployeeNumber:'1001',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
            { EmployeeNumber:'1002',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
             { EmployeeNumber:'1003',firstname:'girish',lastname:'kollipara',email:'kgirish81349@gmail.com',contactnumber:'8763452719',role:'system admin',entity:'snad'},
      ],
      responsedata:[]
      }
      },
        mounted() {

  this.fetch();

  },

    created () {

        this.fetch();

      },
      methods:{
  fetch() {

 loginapi.getvalues().then(response=>{

this.responsedata=response.data;

//  console.log(response);
//  console.log("response" , this.responsedata)

 });
      }
        
        },
    
    }
</script>
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}



</style>