class SignupPage{

    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('[id="page-deliver"] form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    }

    fillForm(deliver){
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.CPF)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)


        cy.get('input[name="postalcode"]').type(deliver.adsress.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.adsress.number)
        cy.get('input[name="address-details"]').type(deliver.adsress.details)

        cy.get('input[name="address"]').should('have.value',deliver.adsress.street)
        cy.get('input[name="district"]').should('have.value',deliver.adsress.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.adsress.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()
        cy.get('input[accept^="image"]').attachFile('images/'+deliver.CNH)
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContantShouldBe(mensager){
        cy.get('.swal2-container div[class="swal2-html-container"')
            .should('have.text',mensager)

    }

    alertMesagerShouldBe(mensager){
        cy.get('.alert-error').should('have.text',mensager)
    }
}


export default SignupPage