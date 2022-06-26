// import mongoose from "mongoose";

// const Connection= async (username, password)=> {
//     const URL = `mongodb://${username}:${password}@ac-xol89vr-shard-00-00.bqjb27k.mongodb.net:27017,ac-xol89vr-shard-00-01.bqjb27k.mongodb.net:27017,ac-xol89vr-shard-00-02.bqjb27k.mongodb.net:27017/PROJECT1?ssl=true&replicaSet=atlas-htj986-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
//     try {
//         await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
//         console.log('Data connected successfully');
//     } catch(error){
//         console.log('Error:', error.message);
//     }
// };

// export default Connection;


const users=[
    {
        "username":"Nidhi",
        "password":"Bangtan*7",
        "email": "nidhi.tirkey054@gmail.com",
        "phone_number":"9304816134"
    },
    
    {
        "username":"Amrita",
        "password":"bedashreeAmrita",
        "email": "bedashreeamrita@gmail.com",
        "phone_number":"7735696650"
    },

    {
        "username":"Ankita",
        "password":"Chaudhary",
        "email": "ankitaisonly1@gmail.com",
        "phone_number":"6299425620"
    },

    {
        "username":"Pragati",
        "password":"@@pragati@@",
        "email": "pragatisahu407@gmail.com",
        "phone_number":"7667839173"
    },

];




for (const obj of users){
    console.log(obj.email);
}


export default users;