import webdriver from "selenium-webdriver";

export default class login{
    constructor(username,password,driver){
       this.username=username;
       this.password=password;
       this.driver=driver;
    }
   userLogin(url){
       this.driver.get(url);
       this.driver.wait(webdriver.until.urlIs(url),1000*50)
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
           }).catch((error)=>{
               console.log(error);
           })
       })
   }
  userLogout(){
    this.driver.wait(webdriver.until.elementLocated(webdriver.By.linkText("Log out")),1000*50)
    .then((success)=>{
        this.driver.findElement(webdriver.By.linkText("Log out")).click()
        .then(()=>{
            //this.driver.findElement(webdriver.By.linkText("Log in"));
            console.log("Have log out");
        })
        
    }).catch(
       (error)=>{
           console.log(error);
       })

  }

  AccessCart(){
    this.driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//*[@id='topcartlink']/a[2]/span[1]")),1000*50)
    .then((success)=>{
      this.driver.findElement(webdriver.By.xpath("//*[@id='topcartlink']/a[2]/span[1]")).click()
      .then(()=>{
          this.driver.findElement(webdriver.By.xpath("//*[@id='flyout-cart']/div/div[1]/input")).click();
      }

      )
    
    },(reason)=>{
         console.log(reason);
    })
 }


 // find a product and click it(SKU: LTPRINTHCAT1)
 findProduct(){
  this.driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//*[@id='bs-example-navbar-collapse-1']/ul/li[8]/a")),1000*100)
  .then((success)=>{
      this.driver.findElement(webdriver.By.xpath("//*[@id='bs-example-navbar-collapse-1']/ul/li[8]/a")).click()
      .then((success)=>{
           this.driver.findElement(webdriver.By.linkText("Catalogs")).click();
      })
     // this.driver.findElement(webdriver.By.linkText("Catalogs")).click();
    
      //Communications
    }).catch((error)=>{
        console.log(error);
    })

    
 }
 

}

