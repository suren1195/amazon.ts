import BaseUtils from '../Utlities/baseUtils';
import LoginData from '../test_data/logindata';
import Url from '../urls';
import amazon from '../pageobject//amazon';
//import {expect} from "chai";


class Amazonlogin {

    get EMAIL() {
        return $(amazon.Login);
    }

    get PASSWORD() {
        return $(amazon.password);
    }

    get LOGINBTN() {
        return $(amazon.loginBtn);
    }
    get PASSWORDBTN() {
        return $(amazon.passwordbtn);
    }
    get SearchInput() {
        return $(amazon.searchBox);
    }
    get SearchBtn() {
        return $(amazon.DataSearch);
    }
    get SelectIphone() {
        return $(amazon.Selected);
    }
    get SelectBuyIphone() {
        return $(amazon.BuyNow);
    }
    get SelectBuyIphone() {
        return $(amazon.BuyNow);
    }
    get INPUTIINBOX() {
        return $(amazon.BuyNow);
    }
    get SEARCHINBTN() {
        return $(amazon.BUTTON);
    }
    get SIGNOUTBTN1() {
        return $(amazon.allbtn);
    }
    get SIGNOUTBTN3() {
        return $(amazon.SIGNOUTBTN0);
    }
    get SIGNOUTBTNin() {
        return $(amazon.signoutnav);
    }
    get SIGNOUTBTN2() {
        return $(amazon.SIGNOUTBTN00);
    }
    get findSEARCHINPUT() {
        return $(amazon.findSEARCHINPUTvl);
    }
    get BUYNOWINPUT() {
        return $(amazon.buynowbtn);
    }





    Alogin() {
        browser.url(Url.amazon);
        //$("//span[@id='nav-link-accountList-nav-line-1']") . moveto()

        BaseUtils.CliBtn(this.SearchBtn);
        //browser.pause (5000)
        BaseUtils.toaddValue(this.EMAIL, LoginData.userData3);
        BaseUtils.CliBtn(this.LOGINBTN);
        BaseUtils.toaddValue(this.PASSWORD, LoginData.passData3);
        BaseUtils.CliBtn(this.PASSWORDBTN);
        //browser.pause(15000)

        BaseUtils.CliBtn(this.SearchInput);
        BaseUtils.toaddValue(this.INPUTIINBOX, LoginData.AddSearch);
        BaseUtils.CliBtn(this.SEARCHINBTN);
        //BaseUtils.CliBtn(this.findSEARCHINPUT);
        //$("/html[1]/body[1]/div[4]/div[2]/div[3]/div[8]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/div[35]/div[1]/div[1]/span[1]/span[1]").moveTo();
        //BaseUtils.CliBtn(this.BUYNOWINPUT);
        //browser.pause(5000)
        $("//header/div[@id='navbar']/div[@id='nav-belt']/div[3]/div[1]/a[2]/span[1]").moveTo();
        //browser.pause(5000)
        BaseUtils.CliBtn(this.SIGNOUTBTN3);
        //browser.pause(5000);
        //last to all button sign out
        //BaseUtils.CliBtn(this.SIGNOUTBTN1);
        //BaseUtils.CliBtn(this.SIGNOUTBTN2);









    }






}
module.exports = new Amazonlogin();