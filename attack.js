const attack = (creatureName, damage, isCritical)=>{
    return `{creatureName} delt ${isCritical ? damage *2: damage} damage!`
}


module.exports = attack