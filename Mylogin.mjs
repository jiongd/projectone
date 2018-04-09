import login from "./login.mjs";

let username="jdzhang@nltechdev.com";
let password="111111";
const msg_url="https://printshopstaging.lifetouch.com/login";

let objLogin=new login(username,password);
objLogin.userLogin(msg_url);