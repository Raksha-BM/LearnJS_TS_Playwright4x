const { test, expect } = require('@playwright/test');

test('LaunchRahulWebsite',async({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const pageTitle = await page.title();
console.log(pageTitle);
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

// Input the username, password and click on Sign in Button
await page.locator("#username").fill("rahulshettyacademy");
await page.locator("#password").fill("Learning@830$3mK"); 
await page.locator("#signInBtn").click()
const errorMsg = await page.locator("[style*='block']").textContent();
await console.log(errorMsg)
await expect(page.locator("[style*='block']")).toContainText("Incorrect");
});