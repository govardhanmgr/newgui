import API from './API'
// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };
export default{
    
    getQuote(){
        return API('http://localhost:3000/').get('/empexp')
    },
    createpost(data){
        return API('http://localhost:3000/').post('/empexp',data)
    },
    getvalues(){
        return API('http://localhost:3000/').get('/empexp')
    },

}