let questionInput = "#prompt-textarea";
let userMessageContainer = "div[data-message-author-role='user']";
let chatbotMessageContainer = "div[data-message-author-role='assistant']";
let regenerateResponseButton = ".icon-md";
let variantsNumber = ".tabular-nums";

class HomePage {
  typeQuestion(text) {
    cy.get(questionInput).click();
    return cy.get(questionInput).type(text);
  }

  getUserMessage() {
    return cy.get(userMessageContainer);
  }

  getChatbotMessage() {
    return cy.get(chatbotMessageContainer);
  }

  clickOnRegenerateButton() {
    return cy.get(regenerateResponseButton).eq(9).click();
  }

  getNubmerOfGeneratedVariants() {
    return cy.get(variantsNumber);
  }
}

export default HomePage;
