from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


# PATH = "/home/mohamed/Desktop/Internship/Selenium Project/driver/chromedriver"
# driver = webdriver.Chrome(PATH)

# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(options=chrome_options, service=Service(ChromeDriverManager().install()))

# driver = webdriver.Chrome(options=chrome_options)

driver.get("https://www.way2automation.com/")

driver.maximize_window()

title = driver.title
print(title)
assert title == 'Get Online Selenium Certification Course | Way2Automation'


wait = WebDriverWait(driver, 60)

login_btn = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="menu-item-27625"]/a/span[2]')))
login_btn.click()

signup_btn = driver.find_element(By.XPATH, '/html/body/main/div/div/a')
signup_btn.click()

name_field = wait.until(EC.visibility_of_element_located((By.XPATH, '//*[@id="user_name"]')))
name_field.send_keys('Test')

email_field = driver.find_element(By.XPATH, '//*[@id="user_email"]')
email_field.send_keys('Test112433@email.com')

password_field = driver.find_element(By.XPATH, '//*[@id="password"]')
password_field.send_keys('Test123')


submit_btn = driver.find_element(By.XPATH, '/html/body/main/div/form/div[6]/input')
submit_btn.click()

driver.quit()

