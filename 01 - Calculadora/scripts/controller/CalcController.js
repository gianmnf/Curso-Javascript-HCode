class CalcController{
  //Dentro da Classe: Variáveis / Funções = Atributos / Métodos + Recursos
  //Objeto - Representa uma classe - Ex.:Professor
  //BOM = Browser Object Model - Navegador
  //DOM = Document Object Model - Documento.

  constructor(){ //() = Parâmetros - Informações necessarias para o funcionamento
    this._locale = 'pt-BR';
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
    // Underline - Privado, Não deve ser chamado diretamente
  }

   initialize(){ //Executado ao iniciar

        this.setDisplayDateTime();
        
        setInterval(() =>{
        this.setDisplayDateTime();
        },1000); 

        /*setTimeout(()=>{
            clearInterval(interval);
        },10000);*/
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); //Todos os Elementos
        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, "click drag", e => {
                console.log(btn.className.baseVal.replace("btn-",""));
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
                btn.style.cursor = "pointer";
            });
        });
    }
    
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
       return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
     }

    get displayDate(){
      return this._dateEl.innerHTML;
    }

    set displayDate(value){
       this._dateEl.innerHTML = value;
    }

    
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value){
        this.currentDate = value;
    }
}