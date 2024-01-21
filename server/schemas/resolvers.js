const { Admin, BlogPost } = require('../models');

const resolvers = {
    Query: {
        // Get all BlogPosts
        getAllBlogPosts: async () => {
            try {
                const blogPosts = await BlogPost.find();
                return blogPosts;
            } catch (error) {
                throw new Error('Failed to fetch BlogPosts');
            }
        },
       
        // Get a BlogPost by ID
        getBlogPostById: async (parent, { _id }) => {
            try {
                const blogPost = await BlogPost.findById(_id);
                if (!blogPost) {
                    throw new Error('BlogPost not found');
                }
                return blogPost;
            } catch (error) {
                throw new Error('Failed to fetch BlogPost');
            }
        },
        
    },
    
    Mutation: {
        // Registe admin
        addAdmin: async (parent, args) => {
            const admin = await Admin.create(args);
            const token = signToken(admin);

            return { token, admin };
        },
        // Login admin
        login: async (parent, { username, password }) => {
            const admin = await Admin.findOne({ username });

            if (!admin) {
                throw AuthenticationError;
            }

            const correctPw = await admin.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(admin);

            return { token, admin };
        },
        // Add a new BlogPost
        addBlogPost: async (parent, { title, body }) => {
            try {
                const newBlogPost = new BlogPost({ title, body });
                const savedBlogPost = await newBlogPost.save();
                return savedBlogPost;
            } catch (error) {
                throw new Error('Failed to add BlogPost');
            }
        },
        
        // Update a BlogPost by ID
        updateBlogPost: async (parent, { id, title, body }) => {
            try {
                const updatedBlogPost = await BlogPost.findByIdAndUpdate(
                    id,
                    { title, body },
                    { new: true }
                );

                if (!updatedBlogPost) {
                    throw new Error('BlogPost not found');
                }

                return updatedBlogPost;
            } catch (error) {
                throw new Error('Failed to update BlogPost');
            }
        },
        
        // Delete a BlogPost by ID
        deleteBlogPost: async (parent, { _id }) => {
            try {
                const deletedBlogPost = await BlogPost.findByIdAndDelete(_id);

                if (!deletedBlogPost) {
                    throw new Error('BlogPost not found');
                }
                
                return deletedBlogPost;
            } catch (error) {
                throw new Error('Failed to delete BlogPost');
            }
        },
    },
};

module.exports = resolvers;
