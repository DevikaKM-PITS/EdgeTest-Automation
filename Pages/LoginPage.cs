using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

public class LoginPage
{
    private readonly IWebDriver driver;
    private readonly WebDriverWait wait;

    public LoginPage(IWebDriver driver)
    {
        this.driver = driver;
        wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
    }

    private IWebElement EmailField => wait.Until(driver => driver.FindElement(By.XPath("//input[@placeholder='Email address']")));
    private IWebElement PasswordField => driver.FindElement(By.XPath("//input[@placeholder='Password']"));
    private IWebElement LoginButton => driver.FindElement(By.XPath("//input[@id='login-id']"));

    public void EnterEmail(string email)
    {
        EmailField.SendKeys(email);
    }

    public void EnterPassword(string password)
    {
        PasswordField.SendKeys(password);
    }

    public void ClickLogin()
    {
        LoginButton.Click();
    }

    public void Login(string email, string password)
    {
        EnterEmail(email);
        EnterPassword(password);
        ClickLogin();
    }
}
