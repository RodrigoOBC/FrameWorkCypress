import SignupPage from '../pages/SingupPage'



describe('Gerenciar Carrinho de compra da Amazon',() => {

    it('Adciono protudo ao carrinho ',() => {
        
        var deliver = {
            name: "CabralSJM",
            CPF: "12469752035",
            email: "teste@teste.com",
            whatsapp: "21993585789",
            adsress: {
                postalcode:"28495970",
                street:'Rua Mathias Ferreira da Silva',
                number:'71',
                details:'Lojas 1 e 2',
                district:'Centro',
                city_state:'Aperibé/RJ'
            },
            delivery_method:"Moto",
            CNH:'cnh-digital.jpg'
        }

        var mensager = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
        var Singup = new SignupPage()
        Singup.go()
        Singup.fillForm(deliver)
        Singup.submit()
        Singup.modalContantShouldBe(mensager)

        
    })

    it('CPF incorreto',() => {
        
        var deliver = {
            name: "CabralSJM",
            CPF: "140371427AB",
            email: "teste@teste.com",
            whatsapp: "21993585789",
            adsress: {
                postalcode:"28495970",
                street:'Rua Mathias Ferreira da Silva',
                number:'71',
                details:'Lojas 1 e 2',
                district:'Centro',
                city_state:'Aperibé/RJ'
            },
            delivery_method:"Moto",
            CNH:'cnh-digital.jpg'
        }

        var mensager = 'Oops! CPF inválido'
        
        var Singup = new SignupPage()
        Singup.go()
        Singup.fillForm(deliver)
        Singup.submit()
        Singup.alertMesagerShouldBe(mensager)

        
    })


})