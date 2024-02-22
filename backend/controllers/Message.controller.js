import Conversation from '../models/conversation.js';
import Message from '../models/message.js';

export const sendMessage=async(req,res)=>{
try {
    const {message}=req.body;
    const {id:receiverId}=req.params;
    const senderId=req.user._id;

    let conversation=await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    })

    if(!conversation){
        conversation=await Conversation.create({
            participants:[senderId,receiverId]
        
        })
    }

    const newMessage=await Message({
        senderId,
        receiverId,
        message
    })
  

    if (newMessage){
        conversation.messages.push(newMessage._id);
    }

    //socketIo functionality
    await Promise.all([conversation.save(), newMessage.save()])
    res.status(200).json(newMessage);
} catch (error) {
    console.log("error in sendMessage",error.message);
    res.status(500).json("Internal Server Error")
}
}

export const getMessage=async (req,res)=>{
    try {
        const{id:userTochat}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userTochat]}
        }).populate("messages")
        if(!conversation)return res.status(404).json([])
        res.status(200).json(conversation.messages);
     } catch (error) {
            console.log("error in getMessage",error.message);
            res.status(500).json("Internal Server Error")
        }
}
