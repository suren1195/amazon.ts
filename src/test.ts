import path from "../pageobjects/path"
import utils from "../utilities/Element"
import url from "../url";
import data from "../input_data/data";


class HLogin {

    get SearchBTN () 
    { return $(path.colorbtn1) }
    get SearchBTn () 
    { return $(path.searchbtn) }
    get Searchinput () 
    { return $(path.searchbtn) }
    get ProductSearch () 
    { return $(path.searchbtnin) }
    get selectProduct () 
    { return $(path.productselected) }
    get selectedProduct () 
    { return $(path.productNAME) }


    TestLogin() {
        browser.url(url.homeurl1);
        utils.CliBtn(this.SearchBTN);
        // utils.click(this.SearchBTn);
        // utils.addValue(this.Searchinput,data.Product);
        // utils.click(this.ProductSearch);
        // //browser.pause (5000)
        // utils.click(this.selectProduct);
        //browser.pause (5000)
        //utils.toBeDisplayed(this.selectedProduct,data.Productname)
        // const elem = $("//h1[contains(text(),'Inoa Mochas')]")
        // expect(elem).toBeDisplayed()
        
        //browser.pause (5000)
        
        //BaseUtils.toHaveText(this.Errorm);


        

        //BaseUtils.toaddValue(this.EMAIL, LoginData.userData3);
        

    }
    /*disapear123() {
        
        utils.clik(this.disappear1)
        utils.clik(this.home1)
    }
    haveTitle() {
        browser.url(url.homeurl)
        expect(browser).toHaveTitle(data.title);
    }*/









}







export default new HLogin();