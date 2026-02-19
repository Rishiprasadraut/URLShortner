const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser } = require("../service/auth");
const bcrypt = require("bcrypt");

// Handle User Signup
async function handleUserSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render("signup", {
                error: "Email already in use."
            });
        }

        // Create new user
        await User.create({
            name,
            email,
            password // Password will be hashed by the pre-save hook
        });

        return res.redirect("/");
    } catch (error) {
        console.error(error);
        return res.render("signup", {
            error: "Something went wrong. Please try again."
        });
    }
}

// Handle User Login
async function handleUserLogin(req, res) {
    try {
        const { email, password } = req.body;

        console.log("Login request body:", req.body); // Log the incoming request body

        // Find user with matching email
        const user = await User.findOne({ email });
        console.log("User found:", user); // Log the user object

        if (!user) {
            return res.render("login", {
                error: "Invalid email or password"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch); // Log the result of password comparison

        if (!isMatch) {
            return res.render("login", {
                error: "Invalid email or password"
            });
        }

        // Generate a token and set as cookie
        const token = setUser(user);
        res.cookie("token", token, { httpOnly: true });
        return res.redirect("/");
    } catch (error) {
        console.error("Login error:", error); // Log any errors
        return res.render("login", {
            error: "Something went wrong. Please try again."
        });
    }
}



module.exports = {
    handleUserSignup,
    handleUserLogin
};
