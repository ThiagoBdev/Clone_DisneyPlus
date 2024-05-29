document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question")

    const heroSection = document.querySelector(".hero");
    const altura = heroSection.clientHeight;

    window.addEventListener("scroll", function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < altura){
            OcultaelementosHeader();
        } else {
            exibeElementosDoHeader();
        }
    })
    
    //seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            EscondeAba();
            aba.classList.add("shows__list--is--active");
            removeBotaoativo();
            botao.target.classList.add("shows__tabs__button--is--active");
        })
    }

    //seção FAQ, accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener("click", abreOuFechaResposta);
    }
})

function OcultaelementosHeader(){
    const header = document.querySelector("header");
    header.classList.add("header--is--hidden");
}

function exibeElementosDoHeader(){
    const header = document.querySelector("header");
    header.classList.remove("header--is--hidden");
}

function  abreOuFechaResposta(elemento){
    const classe = "faq__questions__item--is--open";
    const elemtentoPai = elemento.target.parentNode;

    elemtentoPai.classList.toggle(classe);
}

function removeBotaoativo(){
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("shows__tabs__button--is--active");
    }
}

function EscondeAba(){
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove("shows__list--is--active");
    }
}