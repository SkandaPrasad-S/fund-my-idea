const User = require('../models/User')
const logger = require('../utils/logger')

const createUser = async (req, res) => {
    try {
        const { email, name } = req.body

        if (!email || !name) {
            return res.status(400).json({ message: 'Email and name are required' });
        }


        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const user = new User({ email, name });
        await user.save();

        logger.info(`User created: ${email} and ${name}`);
        res.status(201).json(user);


    } catch (error) {
        return res.status(400).json({
            message: "Email and Name are required"
        })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        logger.error(`Error fetching user: ${error.message}`);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const user = await User.findByIdAndUpdate(id, { name }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        logger.info(`User updated: ${user.email}`);
        res.status(200).json(user);
    } catch (error) {
        logger.error(`Error updating user: ${error.message}`);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        logger.info(`User deleted: ${user.email}`);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        logger.error(`Error deleting user: ${error.message}`);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { createUser, getUser, updateUser, deleteUser };