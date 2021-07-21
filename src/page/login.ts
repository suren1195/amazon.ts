import BaseUtils from '../Utlities/baseUtils';
import LoginObj from '../pageobject/loginobj';
import LoginData from '../test_data/logindata';
import Url from '../urls';




class LoginFB{
    get EMAIL(){
        return $(LoginObj.Login);
    }

    get PASSWORD(){
        return $(LoginObj.password);
    }

    get LOGINBTN(){
        return $(LoginObj.loginBtn);
    }
    get verifyName(){
        return $(LoginObj.profileName);
    
    }
    get Errorm(){
        return $(LoginObj.Errormessage);
    
    }

    FBLogin(){
        browser.url(Url.loginurl);
        //console.log(this.EMAIL);
        BaseUtils.toaddValue(this.EMAIL,LoginData.userData0);
        BaseUtils.toaddValue(this.PASSWORD,LoginData.passData0);    
        BaseUtils.CliBtn(this.LOGINBTN);
        BaseUtils.toHaveText(this.Errorm);
       /* const myText = $("//a[contains(text(),'Find your account and log in.')]");
        const text = myText.getText();
        expect(myText).toHaveText("Find your account and log in.");*/
        
        //browser.pause (50000)

    }
    FBLogin1(){
        browser.url(Url.loginurl);
        BaseUtils.toaddValue(this.EMAIL,LoginData.userData1);
        BaseUtils.toaddValue(this.PASSWORD,LoginData.passData1);
        BaseUtils.CliBtn(this.LOGINBTN);
        BaseUtils.CliBtn(this.LOGINBTN);
        //const browser = BaseUtils.togettext(this.verifyName);
        //expect("//*[text()='Jiiva']").dom.to.have.text(/regex/);
        const classNameAndText = $(this.verifyName);
        console.log(classNameAndText.getText());
        browser.pause (5000);

        //browser.acceptAlert()

        
        const myButton = $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/span[1]/div[1]/div[1]");
        myButton.click();
        browser.pause (5000);
        const myButton1 = $("//span[contains(text(),'Log Out')]");
        myButton1.click();

       // const elem = $("//div[contains(text(),'Recent logins')]");
       // expect(elem).toBeDisplayed()



        const myText = $("//div[contains(text(),'Recent logins')]");
        const text = myText.getText();
        expect(myText).toHaveText('Recent logins');
        
        //const myText = $('#Log Out')
        //const text = myText.getText()
        //assert(text === 'I was clicked')
        
    }
}
module.exports = new LoginFB();