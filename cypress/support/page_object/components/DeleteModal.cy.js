let deleteButton = ".btn.relative.btn-danger";

class DeleteModal {
  clickOnDeleteButton() {
    return cy.get(deleteButton).click();
  }
}

export default DeleteModal;
