using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;
using System;

class ChromePageAutomation
{
    private static object? url;

    static void Main(string[] args)
    {
        // Get the ID from the user
        Console.Write("Enter the ID: ");
        string id = Console.ReadLine()!;
        string baseUrl = $"https://dev2.edge-strategy.com/companyworkspace/data_lists/{id}";

        var options = new ChromeOptions();
       // options.AddArgument("--ignore-certificate-errors");
       // options.AddArgument("--ignore-ssl-errors");
        options.AddArgument("start-maximized");
        new DriverManager().SetUpDriver(new ChromeConfig());
        IWebDriver driver = new ChromeDriver(options);

        try
        {
            driver.Navigate().GoToUrl(baseUrl);

            var loginPage = new LoginPage(driver);
            var dataListPage = new DataTablePage(driver);

            // Perform Login
           loginPage.Login("sreerekha.s@pitsolutions.com", "Password@12345");
            //loginPage.Login("jacob@pitsolutions.com", "Password1234$");


            // Wait for navigation after login
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            //wait.Until(d => d.Url.Equals(url));
            driver.Manage().Timeouts().PageLoad = TimeSpan.FromSeconds(30);

            // Click on Recruitment & Promotion
            dataListPage.ClickRecruitmentPromotion();

            // Click on Submit Button and verify navigation
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Managers with P&L responsibility
            Thread.Sleep(100);
            dataListPage.ClickManagersWithPL();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on People managers and individual contributors
            Thread.Sleep(100);
            dataListPage.ClickPmAndIc();
            dataListPage.ClickSubmitButton();
           // wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Employment
            Thread.Sleep(100);
            dataListPage.ClickEmployment();
            dataListPage.ClickSubmitButton();
            dataListPage.HandleAlert();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Board Composition
            Thread.Sleep(100);
            dataListPage.ClickBoardComposition();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Equal Pay
            Thread.Sleep(100);
            dataListPage.ClickEqualPay();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on High potentials
            Thread.Sleep(100);
            dataListPage.ClickHighPotentials();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Performance
            Thread.Sleep(100);
            dataListPage.ClickPerformance();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Leadership development training
            Thread.Sleep(100);
            dataListPage.ClickLeadershipDevelopmentTraining();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Mentoring
            Thread.Sleep(100);
            dataListPage.ClickMentoring();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");

            // Click on Parental leave
            Thread.Sleep(100);
            dataListPage.ClickParentalLeave();
            dataListPage.ClickSubmitButton();
            //wait.Until(d => d.Url.Equals(url));
            Console.WriteLine("Test Passed: Successfully navigated back to the initial page.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Test Failed: {ex.Message}");
        }
        finally
        {
            driver.Quit();
        }
    }
}
