const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "please enter a username"]
        },
        password:{
            type: String,
            required: true
        }
    }
)
const UserData = mongoose.model('UserData',userSchema);
module.exports = UserData;