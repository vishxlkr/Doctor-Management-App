import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = async (req, res, next) => {
   try {
      const { token } = req.headers;

      if (!token) {
         return res.json({
            success: false,
            message: "Not authorized, Login again",
         });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //   req.body.userId = token_decode.id;
      // ✅ safer way: store user info inside req.user instead of req.body
      req.user = { id: decoded.id };

      next();
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
   }
};

export default authUser;
