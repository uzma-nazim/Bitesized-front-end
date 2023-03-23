import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'


export const userRegister = async (req, res) => {
    try {
        const { name, email, phone_number, password } = req.body;
        if (!name, !email, !phone_number, !password) {
            return res.json({
                'success': false,
                'message': 'Please fill all the field',
            });
        } else {
            const is_user = await User.findOne({ email: email });
            if (is_user) {
                return res.json({
                    'success': false,
                    'message': 'The email already be taken',
                });
            } else {
                const new_password = await bcryptjs.hash(password, 12);
                const user = new User({
                    name, email, phone_number, password: new_password
                });
                const result = await user.save();
                if (result) {
                    return res.json({
                        'success': true,
                        'message': 'Registration successful',
                    });
                } else {
                    return res.json({
                        'success': false,
                        'message': 'Some problem ',
                    });
                }
            }
        }
    } catch (error) {
        return res.json({
            'success': false,
            'message': error.message,
        });
    }
}

export const signInUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await User.findOne({ email });
        if (users) {
            const compare_password = await bcryptjs.compare(
                password,
                users.password,
            );
            if (compare_password) {
                const user_id = { user_id: users._id };
                const token = jwt.sign(
                    user_id,
                    "HILALAHMADISAFULLSTACKDEVELOPER",
                    {
                        expiresIn: "1day",
                    },
                );
                res.cookie("user_access_token", token, {
                    httpOnly: true,
                });

                return res.json({
                    success: true,
                    token,
                    message: "Login Successfully",
                });
            } else {
                return res.json({
                    success: false,
                    message: "Invalid Username And Password",
                });
            }
        } else {
            return res.json({
                success: false,
                message: "Invalid Username And Password",
            });
        }
    } catch (error) {
        return res.json({
            success: false,
            message: error.message,
        });
    }
};


// get user
export const getUser = async (req, res) => {
    try {
      const user_id = req.user_id;
      const users = await User.findById({ _id: user_id }).select("-password");
      return res.json({
        success: true,
        users: users,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: error.message,
      });
    }
  };