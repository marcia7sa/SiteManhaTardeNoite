function carregar()
{
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
   
   if(hora>0 && hora<=12) {
    document.querySelector("img").setAttribute("src","manha.png")
   }  else if (hora>12 && hora<=18) {
    document.querySelector("img").setAttribute("src","tarde.png")
   } else{
    document.querySelector("img").setAttribute("src","noite.png")
   }

}