# This section will show how to install the playwright and bdd package 
# and also shows how to run the bdd tests 

# Step 1
- npm init playwright@latest

# Step 2
- npm playwright install-dep chromium
or 
- npm plawright install 
or 
- npx playwright install chromium

# Step 3 Install playwright-bdd package for bdd
- npm i -D playwright-bdd

# Step 4 Install cucumber package for cucumber framework
npm i -D @cucumber/cucumber@latest

# Step 5 Verifies if playwright package is installed correctly 
- npx playwright test

# Step 6 define defineBddConfig in playwright.config.js as below

const testDir=defineBddConfig({
  paths: ['./tests/features/*.feature','login.feature'],
  require: ['./tests/steps/**/*.js','tests/steps/loginsteps.js'],
});

# run command npx bddgen to verify if the bdd is installed properly

# Step 6 
- npx bddgen 

# Note: If it shows package not installed then run command 
# Step 6 (alternative)
- npx playwright-bdd

# Step 7 Implement the steps with navigation, page locators and validation.

# Step 8 To Run the bdd playwright test and generate cucumber report
- npm run bddgen && npm run playwright-test

# Scenario Outline
# Create a feature file with scenario outline and run the command
- npm run bddgen && npm run playwright-test

# To run the test in parellel
- npm run bddgen && npx playwright test --workers 4

# To disable the parellesism 
- npm run bddgen && npx playwright test --workers=1

# To get the line reporter 
- npm run bddgen && npx playwright test --reporter=line

# To get the html reporter
- npm run bddgen && npx playwright test --reporter=html

# To get blob reporter 
- npx playwright test --reporter=blob

# To view report
- npx playwright show-report

# To retriy the failed test 
- npx playwright test --retries=3

# OR
# Use config 
export default defineConfig({
  // Give failing tests 3 retry attempts
  retries: 3,
});  

# Sharding 
# https://playwright.dev/docs/test-sharding

# Sharding Can be done by using --shard=1/4
- npx playwright test --shard=1/4