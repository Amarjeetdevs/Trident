const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  mongoose
  .connect(process.env.CONNECT_DB,{
     
  })
  .then(()=>{
      console.log('Database Connected');  
  })
  .catch((err)=>{
   console.log(err.message);
   console.log('error')
  })

};

export default connectDB;
