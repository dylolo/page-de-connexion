function validate() {
    var nbr=parseInt(document.getElementById("Age").value);
    if (nbr >= 18) 
    {
      alert("personne majeure")  
    }
    else
    {
        alert("personne mineure")
    } 
}