const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// create user Schema & model
const EmployeeSchema = new Schema({
<<<<<<< HEAD
    name: {
        type: String,
    },
    clockin: {
        type: Number,
        required: [true, "Error"]
    },
    clockout: {
        type: Number
    }
    // ,
    // time: {
    //     clockin: Number,
    //     clockout: Number
    // }
});
=======
   name: {
       type: String,
   },
   clockin: {
       type: Number,
       required: [true, "Error"]
   },
   clockout: {
       type: Number
   }});
>>>>>>> upstream/master


const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;