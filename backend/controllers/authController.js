import User from '../models/User';

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = await req.body;

    const user = await User.create({
      username,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      data: user,
      message: 'User created successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
