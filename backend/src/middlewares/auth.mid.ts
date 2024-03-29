import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constant/http_status";


export default (req: any, res: any, next: any) => {
    const token = req.headers.access_token as string;

    if(!token) return res.status(HTTP_UNAUTHORIZED).send();
   
    
    try {
        const decodedUser = verify(token, "SomeRandomText");
        req.user = decodedUser;

    } catch (error) {
        console.log("ppp"+token);
        res.status(HTTP_UNAUTHORIZED).send('please check');
    }

    return next();
}


   