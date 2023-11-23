import DeleteModal from "./components/DeleteModal.cy";

let chatOption = "li[data-projection-id]";
let chatOptionsButtton = "li[data-projection-id] button";
let deleteChatButton = "div[role='menuitem']";

class Sidebar {
  getChatOption(index) {
    return cy.get(chatOption).eq(index);
  }

  clickOnNewChatOptionsButton() {
    return cy.get(chatOptionsButtton).click();
  }

  clickDeleteChatOption() {
    cy.get(deleteChatButton).contains("Delete chat").click();
    return new DeleteModal();
  }
}

export default Sidebar;
