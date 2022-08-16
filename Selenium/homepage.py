from xml.sax.xmlreader import Locator
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

from locators import *

class BasePage(object):
    def __init__(self,driver):
        self.driver = driver

class HomePage(BasePage):

    def is_title_matching(self):
        return 'TODO' in self.driver.title

    def createItem(self):
        wait = WebDriverWait(self.driver, 60)
        self.driver.find_element(By.XPATH, Locators.ID_BOX).send_keys('1234')
        self.driver.find_element(By.XPATH, Locators.CONTENT_BOX).send_keys('Se43enium Test')
        wait.until(EC.visibility_of_element_located((By.XPATH, Locators.CREATE_BTN))).click()

    def deleteItemX(self):
        wait = WebDriverWait(self.driver, 60)
        self.driver.find_element(By.XPATH, Locators.DELETE_FST).click()
        
    def deleteItemButton(self):
        wait = WebDriverWait(self.driver, 60)
        self.driver.find_element(By.XPATH, Locators.ID_BOX).send_keys('123')
        self.driver.find_element(By.XPATH, Locators.DELETE_BTN).click()
        
    def updateItem(self):
        wait = WebDriverWait(self.driver, 60)
        self.driver.find_element(By.XPATH, Locators.ID_BOX).send_keys('123')
        self.driver.find_element(By.XPATH, Locators.CONTENT_BOX).send_keys('Selenium Test UPDATED')
        self.driver.find_element(By.XPATH, Locators.UPDATE_BTN).click()  
        
    def getItem(self):
        wait = WebDriverWait(self.driver, 60)
        self.driver.find_element(By.XPATH, Locators.ID_BOX).send_keys('123')
        wait.until(EC.visibility_of_element_located((By.XPATH, Locators.GETID_BTN))).click()           
          