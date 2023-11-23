import HomePage from "../support/page_object/HomePage.cy";
import Sidebar from "../support/page_object/SideBar.cy.js";

context("Interview Tests", () => {
  const homePage = new HomePage();
  const sideBar = new Sidebar();

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit({
      url: "https://chat.openai.com/",
    });
  });

  it("Verify if the ChatGPT is able to respond to a simple domain specific questions", () => {
    const question = "What is the only even prime number?";
    const response = "only even prime number is 2";

    homePage.typeQuestion(question);
    homePage.getUserMessage().should("have.text", question);
    homePage.getUserMessage().should("contain", response);
  });

  it("Verify if the ChatGPT has a consistent answer to the same question", () => {
    const question = "What is the only even prime number?";
    const response = "only even prime number is 2";

    homePage.typeQuestion(question);
    homePage.getUserMessage().should("have.text", question);
    homePage.getUserMessage().should("contain", response);

    homePage.clickOnRegenerateButton();
    homePage.getUserMessage().should("have.text", question);
    homePage.getUserMessage().should("contain", response);
    homePage.getNubmerOfGeneratedVariants().should("have.text", "2 / 2");
  });

  it("Verify if the current chat can be deleted", () => {
    const question = "What is the only even prime number?";
    const response = "only even prime number is 2";

    homePage.typeQuestion(question);
    homePage.getUserMessage().should("have.text", question);
    homePage.getUserMessage().should("contain", response);

    sideBar.getChatOption(0).should("have.text", "Even Prime: 2 Only");
    sideBar.clickOnNewChatOptionsButton();
    sideBar.clickDeleteChatOption().clickOnDeleteButton();
    sideBar.getChatOption(0).should("not.have.text", "Even Prime: 2 Only");
  });
});
