import Conversation from "../models/coversation.model.js";
import Message from "../models/massage.model.js"; // Import the Message model

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMessages = async (req, res) => {
try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
        return res.status(200).json([]);
    }
    const messages = conversation.messages;

    res.status(200).json(messages);

} catch (error) {
    console.log("error in getMessages ", error);
    return res.status(500).json({ error: error.message });
}
};
