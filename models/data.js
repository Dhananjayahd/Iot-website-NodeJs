const moongose=require('mongoose')
const schema = moongose.Schema

const data =new schema({
    state:{
        type:String,
        default:true,
        required:true
    }
})

module.exports=databack = moongose.model('buttondata',data)