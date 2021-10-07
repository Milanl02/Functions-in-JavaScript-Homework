var dragon_product=document.body.querySelector(".dragon_slayer");

var dragon_health=0

dragon_product.innerHTML="Dragon's Curren Damage:" + dragon_health

var damageTypes=[
    {
        attack:"Fire",
        damage: 3
    },
    {
        attack:"Ice",
        damage: 1
    },
    {
        attack:"Poison",
        damage: 4
    }
]

function dragonDamage(damage,attack){
    if (attack==="Fire"){
        dragon_health = (dragon_health+damage)-1
        dragon_product.innerHTML = "Dragon's Health:" +dragon_health;
    }else if(attack==="Ice"){
        dragon_health=(dragon_health+damage)+1
    }else if(attack==="Poison"){
        dragon_health=(dragon_health+damage)
    }
}

document.body.querySelector(".Damage_1").addEventListener("Fire", function(){

})














