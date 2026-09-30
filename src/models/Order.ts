import mongoose from 'mongoose';
const schema=new mongoose.Schema({shopifyId:{type:String,unique:true,index:true},orderNumber:String,customer:{name:String,phone:String,email:String},amount:Number,currency:String,paymentStatus:String,fulfillmentStatus:String,tracking:{carrier:String,number:String,url:String},raw:mongoose.Schema.Types.Mixed},{timestamps:true});
export const Order=mongoose.model('Order',schema);
