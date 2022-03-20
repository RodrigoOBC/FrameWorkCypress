import SignupPage from '../pages/SingupPage'



describe('Signup', () => {

    beforeEach(function () {
        cy.fixture('deliver').then(function (item) {
            this.deliver = item
        })
        cy.fixture('mensagers').then(function (item) {
            this.mensager = item
        })
        this.Singup = new SignupPage()
    })

    it('User should be deliver', function () {

        this.Singup.go()
        this.Singup.fillForm(this.deliver.signup)
        this.Singup.submit()
        this.Singup.modalContantShouldBe(this.mensager.signup)
 

    })

    it('Invalid document ', function () {

        this.Singup.go()
        this.Singup.fillForm(this.deliver.cpfinvalido)
        this.Singup.submit()
        this.Singup.alertMesagerShouldBe(this.mensager.cpfinvalido)


    })

    it('Invalid email ', function () {

        this.Singup.go()
        this.Singup.fillForm(this.deliver.emailinvalido)
        this.Singup.submit()
        this.Singup.alertMesagerShouldBe(this.mensager.emailinvalido)


    })
    

    it('Required fields ', function () {

        
        this.Singup.go()
        this.Singup.submit()

        for (var m in this.mensager.camposobrigatorios){
            this.Singup.alertMesagerShouldBe(this.mensager.camposobrigatorios[m])
        }
        
       

    })



})