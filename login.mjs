import webdriver from "selenium-webdriver";

export default class login{
    constructor(username,password){
       this.username=username;
       this.password=password;
    }
   userLogin(){
       let driver=new webdriver.Builder().forBrowser("chrome").build();
       const msg_url="https://printshopstaging.lifetouch.com/login";
       driver.get(msg_url);
       driver.wait(webdriver.until.urlIs(msg_url),2000*10)
       .then((success)=>{
           driver.findElement(webdriver.By.xpath("//form[@id='login_form']//input[@id='Email']")).sendKeys(this.username);
           driver.findElement(webdriver.By.id("Password")).sendKeys(this.password);
           driver.findElement(webdriver.By.className("button-1 login-button btn btn-default"))
           .click().then((success)=>{
               driver.findElement(webdriver.By.partialLinkText("Welcome")).getText().then((message)=>{
                let msg=message;
                if(/welcome/i.test(msg)){
                    console.log(`login message is ${msg}`);
                    console.log("Login successfully");
                  } 
                })
           },(reason)=>{
               console.log("login failed");
           })
       })
   }
}