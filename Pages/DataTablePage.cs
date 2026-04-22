using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Support.Extensions;

public class DataTablePage
{
    private readonly IWebDriver driver;
    private readonly WebDriverWait wait;

    public DataTablePage(IWebDriver driver)
    {
        this.driver = driver;
        wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
    }

    private IWebElement RecruitmentPromotionElement => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(@class,'datalist_link font-onesix-bold stat-content-space')][normalize-space()='Recruitment and promotion']")));
    private IWebElement ManagersWithPlElement => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(text(),'Managers with')]")));
    private IWebElement PmAndIcElement => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(text(),'People managers and individual contributors')]")));
    private IWebElement EmploymentElement => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(text(),'Employment')]")));
    private IWebElement BoardCompositionElement => wait.Until(driver => driver.FindElement(By.XPath("(//a[contains(text(),'Board composition')])[2]")));
    private IWebElement EqualPayElement => wait.Until(driver => driver.FindElement(By.XPath("//a[normalize-space()='Equal pay']")));
    private IWebElement HighPotentialsElement => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(text(),'High potentials')]")));
    private IWebElement PerformanceElement => wait.Until(driver => driver.FindElement(By.XPath("//a[normalize-space()='Performance']")));
    private IWebElement LeadershipTrainingElement => wait.Until(driver => driver.FindElement(By.XPath("//a[normalize-space()='Leadership development training']")));
    private IWebElement MentoringElement => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(text(),'Mentoring')]")));
    private IWebElement ParentalLeaveElement => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(text(),'Parental leave')]")));


    private IWebElement SubmitButton => wait.Until(driver => driver.FindElement(By.XPath("//a[contains(text(),'Submit')]")));

    public void ClickRecruitmentPromotion()
    {
        RecruitmentPromotionElement.Click();
    }
    public void ClickManagersWithPL()
    {
        ManagersWithPlElement.Click(); 
    }
    public void ClickPmAndIc()
    {
        PmAndIcElement.Click();
    }
    public void ClickEmployment()
    { 
        EmploymentElement.Click();
    }
    public void ClickBoardComposition()
    {
        BoardCompositionElement.Click();
    }
    public void ClickEqualPay()
    {
        EqualPayElement.Click();
    }
    public void ClickHighPotentials()
    {
        HighPotentialsElement.Click();
    }
    public void ClickPerformance()
    {
        PerformanceElement.Click();
    }
    public void ClickLeadershipDevelopmentTraining()
    {
        LeadershipTrainingElement.Click();
    }
    public void ClickMentoring()
    {
        MentoringElement.Click();
    }
    public void ClickParentalLeave()
    {
        ParentalLeaveElement.Click();   
    }
    public void HandleAlert()
    {
        // Wait for the alert to be present using Lambda Expression
        wait.Until(driver => driver.SwitchTo().Alert());

        // Switch to the alert
        IAlert alert = driver.SwitchTo().Alert();

        // Click on OK button
        alert.Accept();
    }
    public void ClickSubmitButton()
    {
        SubmitButton.Click();
    }
}
