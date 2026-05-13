import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

// @desc    Save a new contact inquiry
// @route   POST /api/contact
// @access  Public
export const createContact = async (req, res, next) => {
  try {
    const { fullName, email, description } = req.body;

    // Validate required fields
    if (!fullName || !email || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please provide fullName, email, and description',
      });
    }

    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(201).json({
        success: true,
        message: 'Demo mode: Your message has been received! (MongoDB not connected)',
        data: { fullName, email, description, createdAt: new Date() },
      });
    }

    const contact = await Contact.create({ fullName, email, description });

    res.status(201).json({
      success: true,
      message: 'Your message has been received! We\'ll get back to you soon.',
      data: contact,
    });
  } catch (error) {
    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: messages.join('. '),
      });
    }
    next(error);
  }
};

// @desc    Get all contact inquiries (newest first)
// @route   GET /api/contact/getContactInfo
// @access  Public (in production, protect with auth)
export const getContacts = async (req, res, next) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({
        success: true,
        count: 0,
        data: [],
        message: 'Demo mode: No data available (MongoDB not connected)',
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};
