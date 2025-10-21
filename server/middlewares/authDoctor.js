import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
   try {
      const { dtoken } = req.headers;

      if (!dtoken) {
         return res.json({
            success: false,
            message: "Not authorized, please login again",
         });
      }

      const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

      // req.body.docId = decoded.id; // this is replaced by decoded
      req.doctor = { id: decoded.id };

      next();
   } catch (error) {
      console.error("AuthDoctor Error:", error);
      res.json({ success: false, message: error.message });
   }
};

export default authDoctor;
