import express from 'express';
import cors from 'cors';
import usersignupdata from '../Services/UserServices/usersignupdata';
import adminloginverify from '../Services/AdminServices/Adminloginverify';
import adminaddbook from '../Services/AdminServices/AdminAddBook';
import userloginverify from '../Services/UserServices/userloginverify';
import viewbookdata from '../Services/UserServices/UserViewReq';
import admingetreq from '../Services/AdminServices/AdminGetRequest';
import adminviewrequest from '../Services/AdminServices/AdminViewRequest';
import userdeletereq from '../Services/UserServices/userdeleterequest';
import adminaddissuereqdata from '../Services/AdminServices/Adminaddissuereqdata'
import adminrejectreq from '../Services/AdminServices/AdminRejectRequest';
import userforegetpassword from '../Services/UserServices/UserForgetPassword';
import usermybook from '../Services/UserServices/UserMyBook';
import adminforegetpassword from '../Services/AdminServices/AdminForgetPassword';
import adminviewuserlist from '../Services/AdminServices/AdminViewuserlist';
import admindeleteuserprofile from '../Services/AdminServices/AdminDeleteUserprofile';

const routes = express.Router();
routes.use(express.json());
routes.use(cors());

routes.use('/usersignup',usersignupdata)
routes.use('/adminlogin',adminloginverify)
routes.use('/adminaddbook',adminaddbook)
routes.use('/userlogin',userloginverify)
routes.use('/viewbook',viewbookdata)
routes.use('/user/issue/request/sent',admingetreq) 
routes.use('/view/user/request',adminviewrequest)
routes.use('/view/user/issued/book',usermybook)
routes.use('/user/issue/request/delete',userdeletereq)
routes.use('/user/issue/request/accept',adminaddissuereqdata)
routes.use('/user/issue/request/reject', adminrejectreq)
routes.use('/userlogin/forgetpassword', userforegetpassword)
routes.use('/adminlogin/forgetpassword', adminforegetpassword)
routes.use('/view/user/list',adminviewuserlist)
routes.use('/user/profile/delete',admindeleteuserprofile )


export default routes