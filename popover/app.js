function login(){
    const name = document.getElementById('name').value; // recive name

    document.getElementById('popup').innerHTML = name +" "+"Mingalarpar";

    const pop = document.getElementById('pop');

    pop.classList.add('active');
}

function turonoff(){
    const pop = document.getElementById('pop');

    pop.classList.remove('active');
    console.log("close function working");
}

function greeting(){
    const name = document.getElementById('name').value;

    if(name == "beth"){
        document.getElementById('popup').innerHTML = "Your are Minthu";
    }if(name == "minthu"){
        document.getElementById('popup').innerHTML = "Your are Beth";
    }else{
        document.getElementById('popup').innerHTML = "Your are No One";
    }
}