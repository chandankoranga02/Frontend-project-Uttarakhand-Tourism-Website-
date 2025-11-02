getIndianStates().then(states => {   // Promise resolve hone ke baad list milegi

    const list = document.getElementById("state");  // select tag ko access kar liya

    states.forEach(state => {  // har state pe loop chalega

        const option = document.createElement("option");  // ek naya <option> banaya
        option.value = state;  // backend ke liye value , server side data match karne ke liye 
        option.textContent = state;  // user ke liye visible text
        list.appendChild(option);  // dropdown me add kar diya

    });
});

// Conclusion , 

// step one - Phele Promise select karo, .then se run kar vaoo, 
// step two - element access karo using getelementByid se 
// step three -  uske baad lopp chalao same fucntion ke andar hee 
// step four - uske baad varible banao , inside fucntion aur uske option create karo using createlement 
// Step five - uss varible ko associate karo , value se , textcontent se , then 
// step six - vo getelement ke time pe varible banaya thaa uspe ,append karvao , jo varaible jo createlement ke liye banaya thaa