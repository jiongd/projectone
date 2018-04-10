import webdriver from "selenium-webdriver";

export default class login{
    constructor(username,password,driver){
       this.username=username;
       this.password=password;
       this.driver=driver;
    }
   userLogin(url){
       this.driver.get(url);
       this.driver.wait(webdriver.until.urlIs(url),4000*10)
       .then((success)=>{
           this.driver.findElement(webdriver.By.xpath("//form[@id='login_form']//input[@id='Email']")).sendKeys(this.username);
           this.driver.findElement(webdriver.By.id("Password")).sendKeys(this.password);
           this.driver.findElement(webdriver.By.className("button-1 login-button btn btn-default"))
           .click().then((success)=>{
               this.driver.findElement(webdriver.By.partialLinkText("Welcome")).getText().then((message)=>{
                let msg=message;
                if(/welcome/i.test(msg)){
                    console.log(`login message is ${msg}`);
                    console.log("Login successfully");
                  //  this.driver.quit();
                  } 
                })
           },(reason)=>{
               console.log("login failed");
               this.driver.quit();
           })
       })
   }
  userLogout(){
    this.driver.wait(webdriver.until.elementLocated(webdriver.By.linkText("Log out")),1000*30)
    .then((success)=>{
        this.driver.findElement(webdriver.By.linkText("Log out")).click()
        .then(()=>{
            //this.driver.findElement(webdriver.By.linkText("Log in"));
            console.log("Have log out");
        })
        
    })

  }
 
}