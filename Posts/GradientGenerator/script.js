function GenerateGrad(times){
    document.getElementById("boxContainer").innerHTML = "";
    var root = document.documentElement;
    for(var i = 0; i<times;i++)
    {
    document.getElementById("boxContainer").innerHTML += "<div class='box' id='" + i + "' onclick='GetSelectedGrad(" + i + ")'></div>";
    document.getElementById(i).style.setProperty('background',"linear-gradient(" + (Math.random() * (360 - 0)).toString() + "deg" + ",rgba(" + (Math.random() * (255 - 0)).toString() + "," + + (Math.random() * (255 - 0)).toString() + "," + (Math.random() * (255 - 0)).toString() + ",1),rgba(" + (Math.random() * (255 - 0)).toString() + "," + + (Math.random() * (255 - 0)).toString() + "," + (Math.random() * (255 - 0)).toString() + ",1))");
    }
    root.style.setProperty("--overflow-var-status","show");
    document.getElementById("boxContainer").className = "showHideElement";


}
function Run()
{

    var element = document.getElementById("numberTxt");
    var times = element.value;
    GenerateGrad(times);
}

function GetSelectedGrad(id)
{
    var bg = document.getElementById(id.toString()).style.background;
    document.getElementById("copyableTxt").value = bg;
}