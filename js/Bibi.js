class Bibi {
    constructor(idPlaca, idProduto) {
        let get = document.querySelector.bind(document);

        this.placa = get(idPlaca);
        this.produto = get(idProduto);
        this.placa.addEventListener('input', () => this.validarPlaca())

          get("#submit").addEventListener('click', () => this.envia())
          get("#btn-close").addEventListener('click', () => {this.closeAlert()})
    }


    validarPlaca() {
        let regra = /[A-Z]{3}-?[0-9][0-9  A-J][0-9]{2}/.test(this.placa.value.toUpperCase());
        if (this.placa.value.replace('-', '').length > 7) {
            this.placa.value = this.placa.value.substr(0, this.placa.value.length - 1)
            return false;
        }

        if (regra) {
            return true;
        } else {
            return false;
        }
    }

    envia() {
        if(this.validarPlaca()){
             document.querySelector('#myNavigator').pushPage('home.html', { data: {title: 'Bibi Peças'}});          
        }else{
           this.openAlert()
        }
    }


    init(event) {
        event.preventDefault();

    }

    openAlert(){
        var dialog = document.querySelector('#my-alert-dialog');

        if (dialog) {
            return dialog.show();
        } 
    }

    closeAlert(){
        document
        .querySelector('#my-alert-dialog')
        .hide();
    }

      get pesquisa(){
         return {
          placa : this.placa.value,
          produto : this.produto.value
        }
        }
}