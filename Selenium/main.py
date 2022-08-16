import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

import homepage

# from page_objects import homepage
# from page_objects import signup_page

class HomePage(unittest.TestCase):
    def setUp(self):
        chrome_options = Options()
        chrome_options.add_experimental_option("detach", True)
        self.driver = webdriver.Chrome(options=chrome_options, service=Service(ChromeDriverManager().install()))
        self.driver.get("http://localhost:3001/")
        self.driver.maximize_window()
        print('SETUP')

        
    
    def test_homepage_title(self):
        homePage = homepage.HomePage(self.driver)
        assert homePage.is_title_matching()

   
    def test_create(self):
        homePage = homepage.HomePage(self.driver)
        homePage.createItem()
        
    def test_update(self):
        homePage = homepage.HomePage(self.driver)
        homePage.updateItem()

    def test_get(self):
        homePage = homepage.HomePage(self.driver)
        homePage.getItem()
    
    def test_delete(self):
        homePage = homepage.HomePage(self.driver)
        homePage.deleteItemButton()
        
    def test_deleteX(self):
        homePage = homepage.HomePage(self.driver)
        homePage.deleteItemX()  
          
    def tearDown(self):
        self.driver.quit()
        print('DONE')


if __name__ == "__main__":
    unittest.main()