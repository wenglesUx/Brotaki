let cardPlanReset = document.querySelector('#free-plan');
let cardPlan = document.querySelector('.pro-plan');
let iconPlan = document.querySelectorAll('.icon-plan');
let buttonPlan = document.querySelector('.pro-plan  a .button-complement');

function hoverPlan(){
    cardPlan.classList.add("plan-active");

    iconPlan.forEach(item =>{
        item.classList.add("icon-active");
    })
    buttonPlan.classList.add("button-plan-active");
}
hoverPlan()
function hoverPlanReset(){
    cardPlan.classList.remove("plan-active");
    iconPlan.forEach(item =>{
        item.classList.remove("icon-active");
    })
    buttonPlan.classList.remove("button-plan-active");
}

cardPlanReset.addEventListener('mouseenter',hoverPlanReset)
cardPlanReset.addEventListener('mouseleave',hoverPlan)

