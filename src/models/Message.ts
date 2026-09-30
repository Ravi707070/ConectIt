import mongoose from 'mongoose';
const schema=new mongoose.Schema({to:String,orderId:String,type:String,template:String,providerMessageId:String,status:{type:String,default:'queued'},payload:mongoose.Schema.Types.Mixed,error:String,sentAt:Date},{timestamps:true});
export const Message=mongoose.model('Message',schema);
