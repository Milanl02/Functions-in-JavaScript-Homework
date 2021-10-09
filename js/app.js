var dragon_product=document.body.querySelector(".dragon_slayer");

var dragon_health=0

dragon_product.innerHTML="Dragon's Current Damage:" + dragon_health

function dragonDamage(damage, attack) {
    if (attack === "Fire") {
        dragon_health = (dragon_health + damage) - 1
        dragon_product.innerHTML = "Dragon's Current Damage:" + dragon_health;
    } else if (attack === "Ice") {
        dragon_health = (dragon_health + damage) + 1
        dragon_product.innerHTML = "Dragon's Current Damage:" + dragon_health;
    } else if (attack === "Poison") {
        dragon_health = (dragon_health + damage)
        dragon_product.innerHTML = "Dragon's Current Damage:" + dragon_health;
    } if (dragon_health > 9){
        dragon_product.innerHTML="The Dragon took 10 damage! You win! Dragon's Current Damage:" + dragon_health;
    }
}

document.body.querySelector(".Damage_1").addEventListener("click", function (){
    dragonDamage(3,"Fire")
})

document.body.querySelector(".Damage_2").addEventListener("click", function () {
    dragonDamage(1, "Ice")
})

document.body.querySelector(".Damage_3").addEventListener("click", function (){
    dragonDamage(4,"Poison")
})
