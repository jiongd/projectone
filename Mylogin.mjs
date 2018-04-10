import login from "./login.mjs";
import webdriver from "selenium-webdriver";

let username="jdzhang@nltechdev.com";
let password="111111";
const msg_url="https://printshopstaging.lifetouch.com/login";
let driver=new webdriver.Builder().forBrowser("chrome").build(); 

let objLogin=new login(username,password,driver);
objLogin.userLogin(msg_url);
objLogin.userLogout();