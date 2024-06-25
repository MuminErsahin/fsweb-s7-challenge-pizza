describe("MainOrder Component", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.visit("/orderpizza");
    });
  
    it("should select multiple ingredients", () => {
      const ingredientsToSelect = [
        "Pepperoni",
        "Mısır",
        "Sosis",
        "Kanada Jambonu",
      ];
  
      ingredientsToSelect.forEach((ingredient) => {
        cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
          force: true,
        });
  
        cy.get('input[type="checkbox"][value="' + ingredient + '"]').should(
          "be.checked"
        );
      });
    });
  
    it("should select dough type", () => {
      const doughType = "Süpper İnce";
  
      cy.get('select[name="Hamur Kalınlığı"]').select(doughType);
  
      
      cy.get('select[name="Hamur Kalınlığı"]').should("have.value", `${doughType} `);
  });
  
    it("should select pizza size", () => {
      const pizzaSize = "M";
  
      cy.get('input[type="button"][value="' + pizzaSize + '"]').check();
  
      cy.get('input[type="button"][value="' + pizzaSize + '"]').should(
        "be.checked"
      );
    });
    it('should submit the form when clicking "SİPARİŞ VER" button', () => {
    
  
      const ingredientsToSelect = [
        "Pepperoni",
        "Mısır",
        "Sosis",
        "Kanada Jambonu",
      ];
      ingredientsToSelect.forEach((ingredient) => {
        cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
          force: true,
        });
      });
  
      cy.get('select[name="Hamur Kalınlığı"]').select("Süpper İnce");
  
      cy.get('input[type="button"][value="M"]').check();
  
      cy.get(".tamamlandi-button").click({ force: true });
  
      cy.url().should("include", "/success");
    });
  });