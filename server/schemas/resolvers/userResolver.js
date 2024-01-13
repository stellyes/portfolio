const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userResolvers = {
    Mutation: {
        // Register a new user
        register: async (parent, { username, password }) => {
            try {
                let user = await User.findOne({ username });

                if (user) {
                    throw new Error('User already exists');
                }

                user = new User({
                    username,
                    password,
                });

                await user.save();

                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    
                // console.log("token:", token);
                return { token, user };
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Login an existing user
        login: async (parent, { username, password }) => {
            try {
                const user = await User.findOne({ username });
                if (!user) {
                    throw new Error('Invalid credentials');
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    throw new Error('Invalid credentials');
                }

                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
                // console.log("token:", token);
                return { token, user };
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

module.exports = userResolvers;