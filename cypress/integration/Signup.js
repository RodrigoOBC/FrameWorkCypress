import SignupPage from '../pages/SingupPage'



describe('Signup', () => {

    beforeEach(function () {
        cy.fixture('deliver').then(function (item) {
            this.deliver = item
        })
        cy.fixture('mensagers').then(function (item) {
            this.mensager = item
        })
    })

    it('User should be deliver', function () {

        var Singup = new SignupPage()
        Singup.go()
        Singup.fillForm(this.deliver.signup)
        Singup.submit()
        Singup.modalContantShouldBe(this.mensager.signup)
 

    })

    it('Invalid document ', function () {

        var Singup = new SignupPage()
        Singup.go()
        Singup.fillForm(this.deliver.cpfinvalido)
        Singup.submit()
        Singup.alertMesagerShouldBe(this.mensager.cpfinvalido)


    })


})