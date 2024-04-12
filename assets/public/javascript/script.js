$(document).ready(function() {
    const jsonData = `{
       
        "colors": {
          "primary": "#740052",
          "secondary":"#E3CCDC",
          "tertiary": "#E3CCDC",
          "planbutton": "#821963"
        },
    
        "logo": "assets/public/images/brotaki-logo.png",
    
        "buttonLinks": {
    
      
          "demostracao": "demostração.html",
          "cadastro": "cadastro.html",
    
          "facebook": "",
          "whatsapp": "",
          "instagram": "",
          "twitter": "",
          "mensseger": ""
        },
      
        "telefone": "(21) 9 7361-6161"
    }`;
    
    const data = JSON.parse(jsonData);
    
    // Acessar a cor primária e altera a cor 
    const primaryColor = data.colors.primary;
    $(':root').css('--main-color', primaryColor);
    
    const secondaryColor = data.colors.secondary;
    $(':root').css('--tertiary-font-color', secondaryColor);
    
    const tertiaryColor = data.colors.tertiary;
    $(':root').css('--bg-button-color', tertiaryColor);
    
    const planbuttonColor = data.colors.planbutton;
    $(':root').css('--plan-button', planbuttonColor);
    
    // Atualizar o atributo src da imagem na div navbar-brand
    const navbarBrandImg = $('.navbar-brand img');
    
    if (navbarBrandImg.length) {
        navbarBrandImg.attr('src', data.logo);
    }
    
    // Atualizar o atributo href dos botões com base nas IDs
    $('#demo').attr('href', data.buttonLinks.demostracao);
    $('#cadastro').attr('href', data.buttonLinks.cadastro);
    
    function updateButtonHref(buttonId, linkKey) {
        const hrefValue = data.buttonLinks[linkKey];
        $(`#${buttonId}`).attr('href', hrefValue);
    }
    
    updateButtonHref('whats', 'whatsapp');
    updateButtonHref('facebook', 'facebook');
    updateButtonHref('instagram', 'instagram');
    updateButtonHref('twitter', 'twitter');
    updateButtonHref('mensseger', 'mensseger');
    
    $('#numero-tel').text(data.telefone);
});


// Função responsavel por alterar a propiedade do card de planos para ativo ou inativo

$(document).ready(function() {
    let $cardPlanReset = $('#free-plan');
    let $cardPlan = $('.pro-plan');
    let $iconPlan = $('.icon-plan');
    let $buttonPlan = $('.pro-plan a .button-complement');
    let $linePlan = $('.line-actv');
    let $pricePlan = $('#price-selectorPR')
    let $pricePlanFr = $('.price-fr')

    function hoverPlan() {
        $cardPlan.addClass("plan-active");

        $iconPlan.each(function() {
            $(this).addClass("icon-active");
        });
       
        $pricePlan.addClass("price-active")
        $pricePlanFr.css("color","#740052")
        $buttonPlan.addClass("button-plan-active");

        $linePlan.each(function(){
            $(this).removeClass("line-desactive")
        })

        $linePlan.each(function(){
            $(this).addClass("line-active")
        })
    }

    hoverPlan();

    function hoverPlanReset() {
        $cardPlan.removeClass("plan-active");
        
        $iconPlan.each(function() {
            $(this).removeClass("icon-active");
        });
        
        $pricePlan.removeClass("price-active")
        $pricePlanFr.css("color","white")
        $buttonPlan.removeClass("button-plan-active");
        

        $linePlan.each(function(){
            $(this).removeClass("line-active")
        })
        $linePlan.each(function(){
            $(this).addClass("line-desactive")
        })

    }

    $cardPlanReset.on('mouseenter', hoverPlanReset);
    $cardPlanReset.on('mouseleave', hoverPlan);
});



// validador do formulario em Javascript
function nameValidate(fieldName) {
    let nameField = document.getElementById(fieldName);
    let nameError = document.getElementById(`${fieldName}Error`);
    
    if (nameField.value.length < 4) {
        nameError.textContent = "Nome deve ter no mínimo 4 caracteres";
        nameField.setCustomValidity("Nome deve ter no mínimo 4 caracteres");
    } else {
        nameError.textContent = "";
        nameField.setCustomValidity("");
    }
}

function emailValidate() {
    let emailField = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!pattern.test(emailField.value)) {
        emailError.textContent = "Digite um email válido";
        emailField.setCustomValidity("Digite um email válido");
    } else {
        emailError.textContent = "";
        emailField.setCustomValidity("");
    }
}

function messageValidate() {
    let messageField = document.getElementById("message");
    let messageError = document.getElementById("messageError");
    
    if (messageField.value.length < 1) {
        messageError.textContent = "Mensagem é obrigatória";
        messageField.setCustomValidity("Mensagem é obrigatória");
    } else {
        messageError.textContent = "";
        messageField.setCustomValidity("");
    }
}

function validateForm() {
    let isValid = true;

    nameValidate('name');
    nameValidate('companyName');
    emailValidate();
    messageValidate();

    if (document.getElementById("name").checkValidity() && 
        document.getElementById("companyName").checkValidity() && 
        document.getElementById("email").checkValidity() && 
        document.getElementById("message").checkValidity()) {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}