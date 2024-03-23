
function cal() {
    let phy = document.getElementById("phy").value;
    chem = document.getElementById("chem").value;
    math = document.getElementById("math").value;
    bio = document.getElementById("bio").value;
    
    let sum = parseFloat(phy) + parseFloat(chem) + parseFloat(math) + parseFloat(bio);
    document.getElementById("demo").innerHTML = `Total marks is = ${sum}`;
    let percentage = (sum / 400) * 100;
    document.getAnimations("demo").innerHTML = `percentage is = ${percentage}`;
    
    if (percentage >= 100) {
        document.getElementById("demo2").innerHTML = `Exellent`;
    } else if (percentage > 80) {
        document.getElementById("demo2").innerHTML = `Good`;
    } else if (percentage > 60) {
        document.getElementById("demo2").innerHTML = `fail`;
    } else if (percentage > 40);

}    

