import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using cod method 
const placeOrder = async (req,res) => {
    try {
        const {userId , items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            amount,
            paymentMethod:'COD',
            payment:false,
            date:Date.now(),
            address
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}});

        res.json({success:true,message:"Order Placed Successfully"});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

// placing orders using razoprpay method
const placeOrderRazorpay = async (req,res) => {

}

// placing orders using stripe method
const placeOrderStripe = async (req,res) => {

}

// all order data for admin panel 
const allOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true,orders});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});        
    }
}

// user order data for frontend 
const userOrders = async (req,res) => {
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId});
        res.json({success:true,orders});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}   

// update order status from admin panel 
const updateStatus = async (req,res) => {
    try {
        const {orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status});
        res.json({success:true,message:"Order Status Updated Successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus };