const sessions = new Map();

export async function getSession(sessionId) {

  if (!sessions.has(sessionId)) {

    const browser = await chromium.connectOverCDP(
      "http://localhost:9222"
    );

    const context = browser.contexts()[0];
    const page = context.newPage();

    sessions.set(sessionId, { browser, context, page });
  }

  return sessions.get(sessionId);
}

export async function login({ sessionId, username, password }) {
  const { page } = await getSession(sessionId);

  const loginPage = new LoginPage(page);
  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
  await loginPage.clickLoginButton();
  
}