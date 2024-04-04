// //Taro code

// import { verify } from "jsonwebtoken";
// import { HTTP_UNAUTHORIZED } from "../constant/http_status";


// export default (req: any, res: any, next: any) => {
//     const token = req.headers.access_token as string;

//     if(!token) return res.status(HTTP_UNAUTHORIZED).send();
   
    
//     try {
//         const decodedUser = verify(token, "SomeRandomText");
//         req.user = decodedUser;

//     } catch (error) {
//         console.log("ppp"+token);
//         res.status(HTTP_UNAUTHORIZED).send('please check');
//     }

//     return next();
// }



//maro Code
// auth.mid.js
import jwt from 'jsonwebtoken';

const auth = (req:any, res:any, next:any) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], "SomeRandomText");
        console.log('Decoded Token:', decoded); // Log decoded token for debugging
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Token Verification Error:', err); // Log token verification errors
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

export default auth;



   