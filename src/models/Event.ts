import mongoose from 'mongoose';
const schema=new mongoose.Schema({eventId:{type:String,unique:true,index:true},source:String,type:String,payload:mongoose.Schema.Types.Mixed,status:{type:String,default:'received'},processedAt:Date,error:String},{timestamps:true});
export const Event=mongoose.model('Event',schema);
