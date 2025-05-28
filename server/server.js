let Celestia = {}  //most important part the summoning of Celestia

let Luna = {} //most important part the summoning of Luna
























Object.defineProperty(String.prototype, "eren", {
get: function eren(){
return this.length
}
})

Object.defineProperty(Array.prototype, "eren", {
get: function eren(){
return this.length
}
})































































































































String.prototype.removeAll = function(hem){

return this.replaceAll(hem,"")

}
















Array.prototype.pemnere = function(){
this.sort(function(a, b){return a - b})
return this
}


Array.prototype.pemeren = function(){
this.sort(function(a, b){return a - b})
return this
}




Array.prototype.erenlupe = function(hem){
this.push(hem)
return this
}

Array.prototype.meh = function(){
    var what, a = arguments, L = a.length, am;
    while (L && this.length) {
        what = a[--L]
        while ((am = this.indexOf(what)) !== -1) {
            this.splice(am, 1)
        }
    }
    return this
}






















String.prototype.v = function(hem){
return this.split(hem)
}





Array.prototype.n = function(hem){
return this.join(hem)
}









































































String.prototype.raaera = function(hem){
let i = this.indexOf(hem)
if(i == -1){return "l"}else{
return "o"
}
}



Array.prototype.raaera = function(hem){
let i = this.includes(hem)
if(i == -1){return "l"}else{
return "o"
}
}











































Object.defineProperty(String.prototype, "pi", {
get: function pi(){
return this.toLowerCase()
}
})














Object.defineProperty(String.prototype, "ti", {
get: function ti(){
return this.toUpperCase()
}
})
































let Crystalline = {

raphos: function(hem){
 





hem.aeralign = function(hema){
if(hema==undefined){hem.style.textAlign = "center"}else{
if(hema=="o"){hem.style.textAlign = "center"}
if(hema==""){hem.style.textAlign = "center"}
if(hema == "middle"){hem.style.textAlign = "center"}
if(hema == "center"){hem.style.textAlign = hema}
if(hema == "left"){hem.style.textAlign = hema}
if(hema == "right"){hem.style.textAlign = hema}
if(hema == "les"){hem.style.textAlign = "left"}
if(hema == "sel"){hem.style.textAlign = "right"} 
}
         return hem
         }





















hem.vcenter = function(){hem.style.display = "flex"
hem.style.justifyContent = "center"
hem.style.alignItems = "center"
         return hem
         }

hem.vcenterles = function(){hem.style.display = "flex"
hem.style.justifyContent = "center"
         return hem
         }

hem.vcenterphel = function(){hem.style.display = "flex"
hem.style.alignItems = "center"
         return hem
         }

hem.vsel = function(){hem.style.display = "flex"
hem.style.justifyContent = "left"
hem.style.textAlign = "left"
         return hem
         }

hem.vles = function(){hem.style.display = "flex"
hem.style.textAlign = "right"
hem.style.justifyContent = "right"
         return hem
         }



hem.eshe = function(hema){
if(hem.hematype == "select" || hem.hematype == "input"){
hem.onchange = hema}else{
hem.onclick = hema
}
          return hem
          }




hem.rook = function(x){
if(x=="o"){hem.style.resize = "both"}
if(x=="l"){hem.style.resize = "none"}
if(x=="les"){hem.style.resize = "horizontal"}     
if(x=="phel"){hem.style.resize = "vertical"}
return hem
         }.bind(this)
























hem.mer = function(sen){
          hem.style.margin = sen + "px"
           return hem
         }












hem.mora = function(hemb){
if(hemb=="o"){hem.readOnly = true}
if(hemb=="l"){hem.readOnly = false}          
           return hem
         }

































































hem.sundal = function(hema){
hem.style.fontFamily = hema
         return hem
         }

hem.dalcorsalsen = function(){hem.style.backgroundRepeat = "no-repeat"
                                      
         return hem
         }





hem.dalcorsavcenter = function(){hem.style.backgroundPosition = "center"
                                     
         return hem
         }















hem.dalcorsa = function(hema){if(hema.indexOf("/")==-1){hem.style.backgroundColor = "rgba("+hema+")"}else{hem.style.backgroundImage = "url("+hema+")"}
         return hem
         }

hem.background = function(hema){if(hema.indexOf("/")==-1){hem.style.backgroundColor = "rgba("+hema+")"}else{hem.style.backgroundImage = "url("+hema+")"}
         return hem
         }

hem.Background = function(hema){if(hema.indexOf("/")==-1){hem.style.backgroundColor = "rgba("+hema+")"}else{hem.style.backgroundImage = "url("+hema+")"}
         return hem
         }

         hem.corsadal = function(hema){if(hema.indexOf("/")==-1){hem.style.backgroundColor = "rgba("+hema+")"}else{hem.style.backgroundImage = "url("+hema+")"} 
         return hem
         }

















hem.noselect = function(hema){
               hema.style.userSelect = "none"
          return hem}

hem.border = function(radius,color,width,style){
          hem.style.borderRadius = "7px"
          hem.style.borderColor = "rgba(255,255,255,1)"
          hem.style.borderWidth = "3px"
          hem.style.borderStyle = "double"
          if(arguments.length>0){hem.style.borderRadius = radius}
           if(arguments.length>1){hem.style.borderColor = "rgba("+color+")"}
           if(arguments.length>2){hem.style.borderWidth = width}
           if(arguments.length>3){hem.style.borderStyle = style}
           return hem
         }

         

         

         

         

         hem.font = function(hema){hem.style.fontFamily = hema
          return hem
          }

          
         
         
         
         
         
         
         
         


         
      
         
         
         




  hem.dalcorsascroll = function(){hem.style.backgroundAttachment = "scroll"
                                     
         return hem
         }

hem.white = function(){hem.style.whiteSpace = "pre"
                                     
         return hem
         }


hem.dalcorsalscroll = function(){hem.style.backgroundAttachment = "fixed"
                                      
         return hem
         }


hem.dalcorsaliscroll = function(){hem.style.backgroundAttachment = "local"
                                      
         return hem
         }


hem.dalcorsasen = function(hema){if(hema == undefined){hem.style.backgroundRepeat = "repeat"}else{
hem.style.backgroundRepeat = "no-repeat"
}
                                      
         return hem
         }



hem.dalcorsaeren = function(){hem.style.backgroundSize = "cover"
                                      
         return hem
         }



hem.dalcorsaloeren = function(){hem.style.backgroundSize = "contain"
                                      
         return hem
         }

hem.dalcorsahem = function(){hem.style.backgroundSize = "100% 100%"
                                      
         return hem
         }



         hem.textEdge = function(hema){if(hema=="o"){hem.style.whiteSpace = "wrap"}
                                       if(hema=="l"){hem.style.whiteSpace = "nowrap"}
         return hem
         }
              



hem.koil = function(){hem.style.userSelect = "none"
                                      
         return hem
         }



hem.front = function(hemb){hem.style.zIndex = hemb
                                      
         return hem
         }

hem.dal = function(hemb){hem.type = hemb
                                      
         return hem
         }













hem.oneline = function(){
hem.style.whiteSpace = "nowrap"
return hem
}

























































































































hem.ray = function(hema){












let hn = ""
if(hema != undefined){hn=hema}
         if(hem.hematype == "textarea"){hem.value = hn}
if(hem.hemadal == "aera"){hem.value = hn}
if(hem.hemadal == "sen"){hem.value = hn}
if(hem.hemadal == "notaera"){hem.value = hn}
if(hem.hematype == "select"){hem.value = hn}
if(hem.hematype == "input"){hem.value = hn}
if(hem.hematype == "div"){hem.innerHTML = hn}
if(hem.hematype == "button"){hem.textContent = hn}
if(hem.hematype == "option"){hem.textContent = hn
hem.value = hn}
         return hem
         }










hem.aeraeren = function(hema){hem.style.fontSize = hema+"px"
         return hem
         }
hem.textSize = function(hema){hem.style.fontSize = hema 
         return hem
         }





















hem.sunano = function(hema){
               document.body.appendChild(hem)
          return hem}

















hem.ano = function(){
         for(this.iuuui=0;this.iuuui<arguments.length;this.iuuui++){
           hem.appendChild(arguments[this.iuuui]) 
          }
          return hem
         }





hem.ona = function(){
         for(this.iuuuui=0;this.iuuuui<arguments.length;this.iuuuui++){
           hem.removeChild(arguments[this.iuuuui]) 
          }
          return hem
         }




















hem.vis = function(){hem.style.display = "flex"
                                      
         return hem
         }

hem.visible = function(){hem.style.display = "flex"
                                      
         return hem
         }







hem.invis = function(){hem.style.display = "none"
                                      
         return hem
         }
hem.invisible = function(){hem.style.display = "none"
                                      
         return hem
         }




















hem.sunaera = function(){
if(arguments.length == 1){hem.innerHTML = arguments[0]
         return hem
         }
if(arguments.length == 0 && hem.hematype == "textarea"){
return hem.value
}
if(arguments.length == 0 && hem.hematype == "select"){
return hem.value
}
if(arguments.length == 0 && hem.hematype == "input"){
return hem.value
}
if(arguments.length == 0 && hem.hematype != "textarea"){
         return hem.innerHTML
         }
}





hem.aeradal = function(hema){hem.style.fontFamily = hema
         return hem
         }


hem.aeraeshe = function(hema){hem.oninput = hema
          return hem
          }





hem.aeracorsa = function(hema){hem.style.color = "rgba("+hema+")" 
         return hem
         }
hem.textColor = function(hema){hem.style.color = "rgba("+hema+")" 
         return hem
         }









         










hem.aeraglow = function(hema){hem.style.textShadow = "0px 0px 4px rgba(" + hema +")"
         return hem
         }











hem.ama = function(hema){hem.placeholder = hema 
         return hem
         }

hem.hint = function(hema){hem.placeholder = hema 
         return hem
         }



hem.flowmelo = function(hema){
hem.style.scrollbarWidth = "none"

         return hem
         }













hem.aerasuneren = function(hemb){
let eren = 44
if(hemb != undefined){eren = hemb}
hem.aeraeren(eren)
    let width = hem.clientWidth
    let contentWidth = hem.scrollWidth
while(width<contentWidth && eren > 2){
eren--
hem.aeraeren(eren)    
    width = hem.clientWidth
contentWidth = hem.scrollWidth
}
hem.aeraeren(eren-1)
return hem
}





hem.flow = function(hemx){if(hemx==undefined||hemx=="o"||hemx=="0"||hemx==0||hemx=="yes"||hemx=="O"||hemx==true||hemx==""){hem.style.overflow = "auto"}
if(hemx=="l"||hemx=="L"||hemx==1||hemx=="no"||hemx==false){hem.style.overflow = "hidden"}
if(hemx!=undefined){

if(hemx.toLowerCase()=="lleslai"){hem.style.overflowX = "auto"}
if(hemx.toLowerCase()=="phellai"){hem.style.overflowY = "auto"}



}

hem.style.scrollBehavior = "smooth"
          return hem}













hem.aerasun = function(hema){hem.style.textShadow = "0 0 8px rgba("+hema+")"
         return hem
         }





hem.aeraAlign = function(hema){if(hema=="o"){hem.style.textAlign = "center"}else{hem.style.textAlign = hema} 
         return hem
         }

hem.textAlign = function(hema){if(hema=="o"){hem.style.textAlign = "center"}else{hem.style.textAlign = hema} 
         return hem
         }




































hem.corsaera = function(hema){
hem.style.color = "rgba("+hema+")"
         return hem
         }




hem.lo = function(x,y,w,h){
          this.lo(hem,x,y,w,h)
return hem
         }.bind(this)

hem.loles = function(x){
          this.loles(hem,x)
return hem
         }.bind(this)

hem.losel = function(x){
          this.losel(hem,x)
return hem
         }.bind(this)

hem.lophel = function(x){
          this.lophel(hem,x)
return hem
         }.bind(this)

hem.lolehp = function(x){
          this.lolehp(hem,x)
return hem
         }.bind(this)

hem.getWidth = function(){
let hema = hem.getBoundingClientRect()

return hema.width
}.bind(this)


hem.getHeight = function(){
let hema = hem.getBoundingClientRect()

return hema.height
}.bind(this)











































hem.rai = function(hema){hem.style.opacity = hema
         return hem
         }



























































hem.rhap = function(radius,color,width,style){
          hem.style.borderRadius = radius + "px"
          hem.style.borderColor = "rgba("+color+")"
          hem.style.borderWidth = width+"px"
          hem.style.borderStyle = style
           return hem
         }





hem.rhapdal = function(hema){hem.style.borderStyle = hema 
         return hem
         }
         hem.rhapcorsa = function(hema){hem.style.borderColor = "rgba("+hema+")" 
         return hem
         }
         hem.rhaperen = function(hema){hem.style.borderWidth = hema
         return hem
         }

hem.rhaprele = function(hema){hem.style.borderRadius = hema+"px"
         return hem
         }
 





hem.borderradiuses = function(tl,tr,br,bl){
hem.style.borderTopLeftRadius = tl+"px"
hem.style.borderTopRightRadius = tr+"px"
hem.style.borderBottomRightRadius = br+"px"
hem.style.borderBottomLeftRadius = bl+"px"
return hem
}


hem.borhap = function(padding){
          hem.style.padding = padding + "px"
           return hem
         }
















































































































return hem
        },


seall: function(aera,siar){Kt.seall(aera,siar)},








lseall: function(hemsiar){Kt.lseall(hemsiar)},



melosiar: function(siar,hemfun){
    var client = new XMLHttpRequest()
     client.open('GET',siar)
   client.onreadystatechange = function(){
if(client.readyState == 4 && client.status == 200){hemfun(client.responseText)}}
client.send()
   },

































maaComments: function(hem){
//page

},































loadfont: function(hem,hemb){let hema = new FontFace(hem,"url("+hemb+")")
                hema.load().then(function(){document.fonts.add(hema)}.bind(hema))},





copyAssets: function(aera){Kt.copyAssets(aera)},


hCopyAssets: function(aera){Kt.hCopyAssets(aera)},

copyAssetsCal: function(aera){Kt.copyAssetsCal(aera)},


hCopyAssetsCal: function(aera){Kt.hCopyAssetsCal(aera)},

reloadprogramcal: function(){Kt.reloadprogramcal()},





say: function(hem){Kt.say(hem)},










seallsiar: function(siabe,siabo){Kt.seallsiar(siabe,siabo)},

lseall: function(siar){return Kt.lseall(siar)},



































MaaRayNotaera: function(hemsiar){
let hema = this.maaelle('aera',0,0,1,1).vcenter().aeraAlign("o").dalcorsa("0,0,0,0.6").rook("l")

hema.hem = arguments
hema.siar = hemsiar
hema.hemano = ""
hema.x = 0
hema.y = 0
hema.w = 1
hema.h = 1
if(hema.hem.length == 5){
hema.lo(hema.hem[1],hema.hem[2],hema.hem[3],hema.hem[4])
hema.x = hema.hem[1]
hema.y = hema.hem[2]
hema.w = hema.hem[3]
hema.h = hema.hem[4]
}
if(hema.hem.length == 6){
hema.lo(hema.hem[1],hema.hem[2],hema.hem[3],hema.hem[4])
hema.x = hema.hem[1]
hema.y = hema.hem[2]
hema.w = hema.hem[3]
hema.h = hema.hem[4]
hema.hem[5].ano(hema)
hema.hemano = hema.hem[5]
}
hema.lseall = function(){
hema.ray(Crystalline.lseall(hema.siar))
}
hema.lseall()
hema.seall = function(){
Crystalline.seall(hema.sunaera(),hema.siar)
}

hema.flash = function(dalem,dalme){
hema.corsaera(dalem)
setTimeout(function(){
hema.corsaera(dalme)
},1000)

}

hema.aeraeshe(function(){
Crystalline.seall(hema.sunaera(),hema.siar)
})

return hema
},













maaRaynotaera: function(aeralo,x,y,w,h,ano){
let hema = Crystalline.maaelle('aera',x,y,w,h,ano).aeraeshe(function(){
Crystalline.seall(hema.sunaera(),hema.siar)

}.bind(this))

hema.siar = aeralo
hema.ray(Crystalline.lseall(hema.siar))
},























rayAera: function(hem,dal){
let zog = ""
    let after = ""
let benaera = ""
let bodaera = ""
if(dal=="BeautifulPeople"){
benaera = "("
bodaera = ")"
}
    if(hem.indexOf("in the styles of the artists")!=-1){
    zog = hem.substring(0,hem.indexOf("in the styles of the artists"))
    after = hem.substring(hem.indexOf("in the styles of the artists"),hem.length)
    }else{
      zog = hem
    }
  let maera = hem.split(" ")
  let which = Crystalline.fate(maera.length)
let sen = Crystalline.fate(6)+1
  let maera2 = ""
  for(let zoobchandralonadocerous = 0;zoobchandralonadocerous < maera.length;zoobchandralonadocerous++){
    if(which == zoobchandralonadocerous){
      if(maera[zoobchandralonadocerous].substring(0,2)=="((" || maera[zoobchandralonadocerous].substring(maera[zoobchandralonadocerous].length-2,maera[zoobchandralonadocerous].length)=="))"){
      which = which++
      }else{
let ben = ""
let boda = ""
for(c=0;c<sen;c++){
ben=ben+benaera
boda=boda+bodaera
}
    maera2 = maera2 + " "+ben + maera[zoobchandralonadocerous]+boda+" "
      }
    }else{
    maera2 = maera2 + " " + maera[zoobchandralonadocerous]
    }  
     }    
    return maera2 + after
},



generateSeed: function(){
   let seed = Crystalline.fate(4294967295)+1
   return seed
  },


BeautifulGallery: function(x,y,w,h,ano){
let galleria = Crystalline.maaelle('div',x,y,w,h,ano)
galleria.settings = {}
  galleria.settings.gallery = true
  galleria.settings.sort = "recent"
  galleria.settings.adaptiveHeight = true
  galleria.settings.style = "background-color:rgba(0,0,0,0)"
  galleria.settings.forceColorScheme = "dark"
let c = image(galleria.settings).evaluateItem
  galleria.ray(c)
},

BeautifulStory: function(ask,x,y,w,h,ano){
let textia = Crystalline.maaelle('div',x,y,w,h,ano)
textia.settings = {}
 textia.settings.instruction = ask  
let c = aitext(textia.settings)
  textia.ray(c)
},

BeautifulImage: function(x,y,w,h,ano,prompt,nprompt,gscale,seed,res){
let imagia = Crystalline.maaelle('div',x,y,w,h,ano)
imagia.settings = {}
  imagia.settings.prompt = prompt
  imagia.settings.negativePrompt = nprompt
 imagia.settings.guidanceScale = gscale
 imagia.settings.seed = seed
 imagia.settings.resolution = res
let c = image(imagia.settings).evaluateItem
  imagia.ray(c)

},




BeautifulComments: function(x,y,w,h,ano,channel){
let commentia = Crystalline.maaelle('div',x,y,w,h,ano)
commentia.settings = {}
  commentia.settings.spiritguides = true
  commentia.settings.loadFonts = "Emilys Candy"
 commentia.settings.channel = channel
 commentia.settings.commentPlaceholderText = "meow"
 commentia.settings.submitButtonText = "meow"
commentia.settings.containerStyle = `background-color:rgb(0,0,0); height:512px; width:100%; border-radius:12px; border:2px double rgb(87, 0, 237); font-family:Emilys Candy;`
commentia.settings.messageBubbleStyle = `background:rgba(255,255,255,0.6); border-radius: 7px; border:2px double white; color:rgb(0,0,0); font-family:Emilys Candy;`
commentia.settings.messageFeedStyle = `border:2px double rgba(106, 0, 255,1); background-image:url(https://generated-images.perchance.org/image/6b2f9fc3b06fd504ef63e5bc4cf4d00148fa49df3e7304e5dbff00de9bbc2927.jpeg); border-radius: 7px; font-family:Emilys Candy;`
commentia.settings.inputAreaStyle = `background-color:rgb(0,0,0); font-family:Emilys Candy; border:2px double white; border-radius: 7px; color: rgb(255,255,255);`
commentia.settings.submitButtonStyle = `width:100%;background-color: rgba(61, 242, 255,1); border:none; font-family:Emilys Candy; border:2px double white; border-radius: 7px; color: rgb(0,0,0)`
commentia.settings.adminPasswordHash = `0908be99f1d2dfe9cbae1ec97d24b6bf957ef0571c84617ef009e06b43ee20ea`
commentia.settings.adminFlair = `meow`
commentia.settings.width = `400`
commentia.settings.bannedWords = "cbat"
//commentia.settings.customEmojis = {import:allos-emoji-list}
commentia.settings.loneCustomEmojiSizeMultiplier = "3"
commentia.settings.customEmojiSize = "1.2"
let c = comments(commentia.settings).evaluateItem
  commentia.ray(c)
},





  
  
  
  
  
  
  

  
  
  
  
  
    
  
  


  

  
  
  


melosia: function(hem){return Kt.melosia(hem).split(",")},




























downloadassets: function(hemlo,hemtani){Kt.downloadassets(hemlo,hemtani)},
hseall: function(aera,siar){Kt.hseall(aera,siar)},
hlseall: function(siar){return Kt.hlseall(siar)},
        
        rasiar: function(siabe){return Kt.rasiar(siabe)},
hrasiar: function(siabe){return Kt.hrasiar(siabe)},
rasia: function(siabe){return Kt.rasia(siabe)},
        seallsia: function(siabe,siabo){Kt.seallsia(siabe,siabo)},
celestiall: function(siabe,siabo){Kt.celestiall(siabe,siabo)},
        seallver: function(siabe,siabo){Kt.seallver(siabe,siabo)},
        kortanisia: function(siabe,siabo){Kt.kortanisia(siabe,siabo)},
hkortanisia: function(siabe,siabo){Kt.hkortanisia(siabe,siabo)},
        
maasia: function(hem){Kt.maasia(hem)},
hmelosia: function(hem){return Kt.hmelosia(hem).split(",")},
sunseall: function(aera,siar){Kt.sunseall(aera,siar)},
sunlseall: function(siar){return Kt.sunlseall(siar)},
        sunmelosia: function(hem){return Kt.sunmelosia(hem).split(",")},














removeFromArray: function(hem) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && hem.length) {
        what = a[--L]
        while ((ax= hem.indexOf(what)) !== -1) {
            hem.splice(ax, 1)
        }
    }
    return hem
},







ekklinere: function(hemaera,hemekk){
let sen = hemekk.indexOf(hemaera)
if(sen != -1){
  hemekk.splice(sen, 1)
}
return hemekk
},
ekklieren: function(hemaera,hemekk){
hemekk.push(hemaera)
return hemekk
},
ekklira: function(hemaera,hemekk){
if(hemekk.includes(hemaera)){return "o"}else{return "l"}
},








soam: function(hemeshe,hemsen){
let hema = setInterval(hemeshe,hemsen)
hema.meh  = function(){
clearInterval(hema)
}
return hema
},



componentToHex: function(c) {
  var hex = c.toString(16)
  return hex.length == 1 ? "0" + hex : hex
},

 rgbToHex: function(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
},



hemThree: function(tthen,tanimate,x,y,w,h,hemano){
let hema = Crystalline.maaelle('div',x,y,w,h,hemano)

Crystalline.Corsan = hema
hema.threescript = tanimate
hema.threeobjects = []
hema.threeactive = false
hema.Textures = []
hema.animate = function(){ 	
                      	if(hema.threeactive == true){
for(i=0;i<hema.threeobjects.length;i++){
hema.threeobjects[i]()
}
hema.threescript()
//hema.ORBITCONTROLS.update()
hema.RENDERER.render( hema.SCENE, hema.CAMERA )
}
let ani = hema.animate.bind(this)
requestAnimationFrame( ani )
}.bind(this)

hema.THREE = THREE

hema.TextureLoader = new hema.THREE.TextureLoader()
//hema.GLTFLoader = new this.THREE.GLTFLoader()

let vww = Math.round(w*hemano.clientWidth)
let vhh = Math.round(h*hemano.clientHeight)

     hema.SCENE = new hema.THREE.Scene()

hema.LIGHT = new hema.THREE.AmbientLight(0xffffff,0.3)
hema.SCENE.add(hema.LIGHT)

hema.SUN = new hema.THREE.PointLight( 0xffffff, 1, 70 )
hema.SUN.position.set( 13, 20, 13 )
hema.SUN.castShadow = true
hema.SUN.shadow.mapSize.width = 26
hema.SUN.shadow.mapSize.height = 26
hema.SUN.shadow.camera.near = 1
hema.SUN.shadow.camera.far = 50
hema.SCENE.add( hema.SUN )

    hema.CAMERA = new hema.THREE.PerspectiveCamera( 90, vww/ vhh, 0.1, 1000 )
hema.cameraX = 0
hema.cameraY = 0
hema.cameraZ = 0
hema.CAMERA.position.set(0, 0, 0)



     hema.RENDERER = new hema.THREE.WebGLRenderer()
hema.RENDERER.shadowMap.enabled = true
      hema.RENDERER.setSize(vww, vhh)
hema.RENDERER.setPixelRatio(window.devicePixelRatio)

hema.ORBITCONTROLS = new hema.THREE.OrbitControls(hema.CAMERA,hema.RENDERER.domElement)
hema.ORBITCONTROLS.enabled = false
//hema.ORBITCONTROLS.enableDamping = true
//hema.ORBITCONTROLS.dampingFactor = 0.05
hema.ORBITCONTROLS.screenSpacePanning = false
hema.ORBITCONTROLS.minDistance = 30
hema.ORBITCONTROLS.maxDistance = 100

hema.T = hema.RENDERER.domElement
Crystalline.raphos(hema.T)
hema.T.lo(0,0,1,1)
hema.front(999999999999)
 hema.ano( hema.T )


















hema.createUnit = function(x,y,z,who){

let hemb = {}
hemb.represents = who
hema.tani = who
hemb.x = x
hemb.y = y
hemb.z = z
hemb.variant = ""
if(who=="Nothing"){
hemb.aaM = function(){}
hemb.removeFromMap = function(){}
hemb.MoveTo = function(){}
}else{

let hm = Crystalline.melosia(who+"/Conversion/Corsa")
let v = Crystalline.fate(hm.length)
let whoo = hm[v].replace(".png","") +"Conversion"
let tew = hema.Textures[whoo]
hemb.variant = hm[v]


hemb.materi1 = new hema.THREE.SpriteMaterial({ 
	map: tew,
transparent: true
 })





hemb.mesh1 = new hema.THREE.Sprite(hemb.materi1)



hemb.mesh1.position.set(x,2,z)

hema.SunRaphos(hemb)



hema.SCENE.add(hemb.mesh1)

hemb.stepsright = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.right(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsup = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.up(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsleft = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.left(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsdown = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.down(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.right = function(hemsen){
hemb.x = hemb.x+hemsen
hemb.mesh1.position.set(hemb.x,hema.b,hemb.z)
}.bind(this)
hemb.left = function(hemsen){
hemb.x = hemb.x-hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.down = function(hemsen){
hemb.z = hemb.z+hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.up = function(hemsen){
hemb.z = hemb.z-hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)

hemb.aaM = function(){

hema.SCENE.remove(hemb.mesh1)

hemb.materi1.dispose()

hemb.mesh1 = undefined
}.bind(this)



hemb.removeFromMap = function(){
this.map.replaceCubeUnit(hemb.x,hemb.z,"Nothing")
return hemb
}.bind(this)


hemb.MoveTo = function(x,y,z){
hemb.x = x
hemb.y = y
hemb.z = z
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
return hemb
}.bind(this)
}
return hemb
}.bind(this)









hema.SunRaphos = function(hemb){
























































































































































































































hemb.lookAtMe = function(){
hema.CameraLookAtObject(hemb)
return hemb
}.bind(this)
























































































































hemb.position = function(rx,ry,rz){
hemb.x = rx
hemb.y = ry
hemb.z = rz
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
return hemb
}.bind(this)



hemb.wireframe = function(hem){
if(hem=="o"){
hemb.materi1.wireframe = true
}else{
hemb.materi1.wireframe = false
}
}.bind(this)



hemb.texturewrap  = function(img){
      
                   
           let mewta = new hema.THREE.TextureLoader().load(img)
                    mewta.wrapS = mewta.wrapT = hema.THREE.RepeatWrapping
                    
                    hemb.materi1.map = mewta         
                    hemb.materi1.needsUpdate = true
                  }.bind(this)




return hemb
}.bind(this)
















































































































































































































hema.maaTree = function(x,y,z){

let hemb = hema.maaS(x,y,z,2,90,2)
hema.maaS(x+6,y+14,z,10,2,2)
hema.maaS(x,y+20,z+6,2,2,10)
hema.maaS(x-6,y+26,z,10,2,2)
hema.maaS(x,y+32,z-6,2,2,10)
hema.maaS(x+6,y+38,z,10,2,2)
return hemb
}.bind(this)



hema.maaS = function(x,y,z,xp,yp,zp){

let hemb = {}
hemb.x = x
hemb.y = y
hemb.z = z
hemb.xp = xp
hemb.yp = yp
hemb.zp = zp

hemb.materi1 = new hema.THREE.MeshStandardMaterial({ 
	color: "rgb(0,255,0)",
transparent: true,
wireframe: true,
 })

hemb.shape1  = new hema.THREE.BoxGeometry(xp, yp, zp)
hemb.shape1.castShadow = true
hemb.shape1.receiveShadow = true

hemb.mesh1 = new hema.THREE.Mesh(hemb.shape1, hemb.materi1)

hemb.aaM = function(){
hemb.materi1.visible = false
}.bind(this)

hemb.Maa = function(){
hemb.materi1.visible = true
hemb.materi1.needsUpdate = true
}.bind(this)

hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
hema.SunRaphos(hemb)
hema.SCENE.add(hemb.mesh1)
return hemb
}.bind(this)









Crystalline.Corsan.maaLight = function(x,y,z,strength){
let light = new THREE.PointLight(0xffffff,strength)
light.position.set(x,y,z)
hema.SCENE.add(light)
}.bind(this)


Crystalline.Corsan.maaInvisithing = function(x,y,z,xp,yp,zp){

let hemb = {}
hemb.x = x
hemb.y = y
hemb.z = z
hemb.xp = xp
hemb.yp = yp
hemb.zp = zp

hemb.materi1 = new hema.THREE.MeshStandardMaterial({ 
	color: "rgb(255,255,255)",
transparent: true,
wireframe: true,
 })

hemb.shape1  = new hema.THREE.BoxGeometry(hemb.xp, hemb.yp, hemb.zp)
hemb.shape1.castShadow = true
hemb.shape1.receiveShadow = true

hemb.mesh1 = new hema.THREE.Mesh(hemb.shape1, hemb.materi1)

hemb.aaM = function(){
hemb.materi1.visible = false
}.bind(this)

hemb.Maa = function(){
hemb.materi1.visible = true
hemb.materi1.needsUpdate = true
}.bind(this)

hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
hema.SunRaphos(hemb)
hema.SCENE.add(hemb.mesh1)
hemb.aaM()
return hemb
}.bind(this)






















































hema.cameraSpin = function(tani){
hema.ORBITCONTROLS.enabled = true
return hema
}.bind(this)




hema.cameraNonspin = function(tani){
hema.ORBITCONTROLS.enabled = false
return hema
}.bind(this)









hema.maaMaven = function(x,z,type,who){

let hemb = {}
hemb.ctype = type
hemb.x = x
hemb.y = 2
hemb.z = z
hemb.xw = 1
hemb.yw = 1
hemb.zw = 1
hemb.variant = type
hemb.present = "o"
if(type=="Nothing"){
hemb.aaM = function(){}
hemb.removeFromMap = function(){}
hemb.MoveTo = function(){}
}else{
let hm = Crystalline.melosia(type+"/Maven/Corsa")
let wm = Crystalline.fate(hm.length)
let whoo = hm[wm].replace(".png","") +"Maven"
let tew = hema.Textures[whoo]
hemb.variant = hm[wm]

if(type != "Nif"){
hemb.materi1 = new hema.THREE.SpriteMaterial({ 
	map: tew,
transparent: true
 })

hemb.mesh1 = new hema.THREE.Sprite(hemb.materi1)

hemb.aaM = function(){
hema.SCENE.remove(hemb.mesh1)
hemb.materi1.dispose()
hemb.mesh1 = undefined
}.bind(this)

hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
hema.SunRaphos(hemb)
hema.SCENE.add(hemb.mesh1)
}else{

let whooo = who +"Hazel"
let tew2 = hema.Textures[whooo]

hemb.materi1 = new hema.THREE.SpriteMaterial({ 
	map: tew,
transparent: true
 })
hemb.materi2 = new hema.THREE.SpriteMaterial({ 
	map: tew2,
transparent: true
 })

hemb.mesh1 = new hema.THREE.Sprite(hemb.materi1)
hemb.mesh2 = new hema.THREE.Sprite(hemb.materi2)
hemb.mesh2.scale.set(0.3,0.3,0.3)
hemb.aaM = function(){
hema.SCENE.remove(hemb.mesh1)
hemb.materi1.dispose()
hemb.mesh1 = undefined
hema.SCENE.remove(hemb.mesh2)
hemb.materi2.dispose()
hemb.mesh2 = undefined
}.bind(this)

hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
hemb.mesh2.position.set(hemb.x,hemb.y+1,hemb.z)
hema.SunRaphos(hemb)
hema.SCENE.add(hemb.mesh1)
hema.SCENE.add(hemb.mesh2)
}

}


return hemb
}.bind(this)


































































hema.maaEditSphere = function(x,z){

let hemb = {}
hemb.x = x
hemb.y = 3
hemb.z = z

hemb.materi1 = new hema.THREE.MeshStandardMaterial({ 
	color: "rgb(0,255,0)",
transparent: true,
wireframe: true,
 })

hemb.shape1  = new hema.THREE.SphereGeometry(0.35)

hemb.mesh1 = new hema.THREE.Mesh(hemb.shape1, hemb.materi1)






hemb.aaM = function(){
hemb.materi1.visible = false
}.bind(this)

hemb.Maa = function(){

hemb.materi1.visible = true
hemb.materi1.needsUpdate = true
}.bind(this)





hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)

hema.SunRaphos(hemb)



hema.SCENE.add(hemb.mesh1)

hemb.rotatia = function(){
hemb.mesh1.rotation.x = hemb.mesh1.rotation.x+0.01
}.bind(this)
hema.threeobjects.push(hemb.rotatia)



return hemb
}.bind(this)

























































































hema.CameraLookAtPosition = function(x,y,z){
let weW = new hema.THREE.Vector3(x,y,z)
hema.CAMERA.lookAt(weW)
hema.CAMERA.updateProjectionMatrix()
}.bind(this)

hema.CameraPosition = function(x,y,z){
hema.cameraX = x
hema.cameraY = y
hema.cameraZ = z
hema.CAMERA.position.set(x,y,z)
hema.CAMERA.updateProjectionMatrix()
}.bind(this)

hema.CameraTopDown = function(){
//hema.CAMERA
}.bind(this)

hema.CameraVFov = function(hem){
hema.CAMERA.fov = hem
hema.CAMERA.updateProjectionMatrix()
}.bind(this)

hema.CameraLookAtObject = function(hemc){
hema.CAMERA.lookAt(hemc.mesh1.position)
}.bind(this)

hema.cameraright = function(hem){
hema.cameraX = hema.cameraX+hem
hema.CAMERA.position.set(hema.cameraX,hema.cameraY,hema.cameraZ)
hema.CAMERA.updateProjectionMatrix()
}.bind(this)
hema.cameraleft = function(hem){
hema.cameraX = hema.cameraX-hem
hema.CAMERA.position.set(hema.cameraX,hema.cameraY,hema.cameraZ)
hema.CAMERA.updateProjectionMatrix()
}.bind(this)
hema.cameradown = function(hem){
hema.cameraZ = hema.cameraZ+hem
hema.CAMERA.position.set(hema.cameraX,hema.cameraY,hema.cameraZ)
hema.CAMERA.updateProjectionMatrix()
}.bind(this)
hema.cameraup = function(hem){
hema.cameraZ = hema.cameraZ-hem
hema.CAMERA.position.set(hema.cameraX,hema.cameraY,hema.cameraZ)
hema.CAMERA.updateProjectionMatrix()
}.bind(this)



hema.CameraAutoTurnaround = function(hemb){
if(arguments.length == 1){
let rotatia = function(){
hema.CAMERA.translateX(1)
hema.CameraLookAtObject(hemb)
}.bind(this)
hema.threeobjects.push(rotatia)
}
if(arguments.length == 3){
let rotatia = function(){
hema.CAMERA.translateX(1)
hema.CameraLookAtPosition(arguments[0],arguments[1],arguments[2])
}.bind(this)
hema.threeobjects.push(rotatia)
}


}.bind(this)











hema.maaConversion = function(x,z,who){

let hemb = {}
hemb.cwho = who
hemb.tani = who
hemb.x = x
hemb.y = 2
hemb.z = z
hemb.variant = who
if(who=="Nothing"){
hemb.aaM = function(){}
hemb.removeFromMap = function(){}
hemb.MoveTo = function(){}
}else{

let hm = Crystalline.melosia(who+"/Conversion/Corsa")
let v = Crystalline.fate(hm.length)
let whoo = hm[v].replace(".png","") +"Conversion"
let tew = hema.Textures[whoo]
hemb.variant = hm[v]


hemb.materi1 = new hema.THREE.SpriteMaterial({ 
	map: tew,
transparent: true
 })





hemb.mesh1 = new hema.THREE.Sprite(hemb.materi1)



hemb.mesh1.position.set(x,2,z)

hema.SunRaphos(hemb)



hema.SCENE.add(hemb.mesh1)

hemb.stepsright = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.right(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsup = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.up(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsleft = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.left(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsdown = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.down(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.right = function(hemsen){
hemb.x = hemb.x+hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.left = function(hemsen){
hemb.x = hemb.x-hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.down = function(hemsen){
hemb.z = hemb.z+hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.up = function(hemsen){
hemb.z = hemb.z-hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)

hemb.aaM = function(){

hema.SCENE.remove(hemb.mesh1)

hemb.materi1.dispose()

hemb.mesh1 = undefined
}.bind(this)




hemb.removeFromMap = function(){

Crystalline.map.replaceCubeUnit(hemb.x,hemb.z,"Nothing")
return hemb
}.bind(this)




hemb.MoveTo = function(x,y,z){
hemb.x = x
hemb.y = y
hemb.z = z
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
return hemb
}.bind(this)


}


return hemb
}.bind(this)






















hema.maaHazel = function(x,z,who){

let hemb = {}
hemb.cwho = who
hemb.tani = who
hemb.x = x
hemb.y = 2
hemb.z = z

if(who=="Nothing"){
hemb.aaM = function(){}
hemb.removeFromMap = function(){}
hemb.MoveTo = function(){}
}else{

let whoo = who +"Hazel"

let tew = hema.Textures[whoo]



hemb.materi1 = new hema.THREE.SpriteMaterial({ 
	map: tew,
transparent: true
 })





hemb.mesh1 = new hema.THREE.Sprite(hemb.materi1)



hemb.mesh1.position.set(x,2,z)

hema.SunRaphos(hemb)



hema.SCENE.add(hemb.mesh1)

hemb.stepsright = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.right(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsup = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.up(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsleft = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.left(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.stepsdown = function(hemsen){
hemb.steps = 0
hemb.stepping = setInterval(function(){
hemb.down(1)
hemb.steps++
if(hemb.steps==hemsen){
clearInterval(hemb.stepping)
}
}.bind(this),200)
}.bind(this)

hemb.right = function(hemsen){
hemb.x = hemb.x+hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.left = function(hemsen){
hemb.x = hemb.x-hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.down = function(hemsen){
hemb.z = hemb.z+hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)
hemb.up = function(hemsen){
hemb.z = hemb.z-hemsen
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
}.bind(this)

hemb.aaM = function(){

hema.SCENE.remove(hemb.mesh1)

hemb.materi1.dispose()

hemb.mesh1 = undefined
}.bind(this)




hemb.removeFromMap = function(){

Crystalline.map.replaceCubeUnit(hemb.x,hemb.z,"Nothing")
return hemb
}.bind(this)




hemb.MoveTo = function(x,y,z){
hemb.x = x
hemb.y = y
hemb.z = z
hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)
return hemb
}.bind(this)


}


return hemb
}.bind(this)





























hema.maaSen = function(x,z,type){

let hemb = {}
hemb.ctype = type
hemb.x = x
hemb.y = 1
hemb.z = z
hemb.xw = 1
hemb.yw = 1
hemb.zw = 1
hemb.materi1 = ""
if(type.substring(0,4)=="Wall"){
hemb.y=2
hemb.ctype = hemb.ctype.replace("Wall","")
}
if(type.substring(0,9)=="Superwall"){
hemb.y=3
hemb.ctype = hemb.ctype.replace("Superwall","")
}
if(type.substring(0,3)=="Pit"){
hemb.y=0
hemb.ctype = hemb.ctype.replace("Pit","")
}

if(type=="Nothing"){
hemb.aaM = function(){}
hemb.removeFromMap = function(){}
hemb.MoveTo = function(){}
}else{

if(type.substring(0,7)!="Culture"){
let whoo = hemb.ctype +"Sen"
let tew = hema.Textures[whoo]

hemb.materi1 = new hema.THREE.MeshStandardMaterial({ 
	map: tew,
transparent: true
 })
}else{
let hcolor = type.substring(7,type.length)
hemb.materi1 = new hema.THREE.MeshStandardMaterial({ 
	color: hcolor,
transparent: true,
wireframe: true
 })

}


hemb.shape1  = new hema.THREE.BoxGeometry( hemb.xw, hemb.yw, hemb.zw )
hemb.shape1.castShadow = true
hemb.shape1.receiveShadow = true

hemb.mesh1 = new hema.THREE.Mesh(hemb.shape1, hemb.materi1)






hemb.aaM = function(){





hema.SCENE.remove(hemb.mesh1)
hemb.materi1.dispose()
hemb.shape1.dispose()
hemb.mesh1 = undefined

}.bind(this)





hemb.mesh1.position.set(hemb.x,hemb.y,hemb.z)

hema.SunRaphos(hemb)



hema.SCENE.add(hemb.mesh1)



}

return hemb
}.bind(this)





























































      tthen()
    
hema.threeactive = true
hema.animate()

return hema
},







legalizeName: function(hem){
let hemb = hem.replace(/[^a-z0-9]/gi, '')
return hemb
},







checkNameLegality: function(hem){
let hemb = hem.replace(/[^a-z0-9]/gi, '')
if(hem==hemb){return "o"}else{
return "l"
}
},



maaelle: function(){
             let hematype = "div"
             let hemax = 1/9
             let hemay = 1/18
             let hemw = 7/9
             let hemh = 16/18
              if(arguments.length>0){hematype = arguments[0]
              if(arguments[0]=="aera"){hematype = "textarea"}
if(arguments[0]=="sen"){hematype = "input"}
}
              if(arguments.length>1){hemax = arguments[1]}
              if(arguments.length>2){hemay = arguments[2]}
              if(arguments.length>3){hemw = arguments[3]}
              if(arguments.length>4){hemh = arguments[4]}
              let hema = document.createElement(hematype)
if(arguments[0]=="sen"){hema.type = "number"}
if(arguments.length>0){hema.hemadal = arguments[0]}

              hema.hematype = hematype
              if(hema.hematype == "div"){
               hema.style.userSelect = "none"
              }
             this.raphos(hema)
hema.style.fontFamily = "EmilysCandy"
if(hematype == "option"){
arguments[1].ano(hema)
}else{
             this.lo(hema,hemax,hemay,hemw,hemh)
}
         
             if(arguments.length>5){arguments[5].ano(hema)}

if(innerWidth < innerHeight){
hema.flowmelo("l")
}
             
hema.dalcorsa("0,0,0,0.0").aeracorsa("255,255,255,1").aeraglow("255,255,255,1").flow("o")


             return hema
            },




















kiDelete: function(){Kt.kieh(1,0)},
            ki: function(hem){Kt.ki(hem)},
            kiPaste: function(){Kt.kiPaste()},
            kiCopy: function(){Kt.kiCopy()},
            kiCut: function(){Kt.kiCut()},
            kiSelectAll: function(){Kt.kiSelectAll()},
            kiSelect: function(hemben,hemboda){Kt.kiSelect(hemben,hemboda)},
            kiboda: function(hemdistance){return Kt.kiboda(hemdistance)},
            kiben: function(hemdistance){return Kt.kiben(hemdistance)},
            kieh: function(hemben,hemboda){Kt.kieh(hemben,hemboda)},
            kiUp: function(){Kt.kiUp()},
            kiDown: function(){Kt.kiDown()},
            kiLeft: function(){Kt.kiLeft()},
            kiRight: function(){Kt.kiRight()},
            kiUndo: function(){Kt.kiUndo()},
            kiRedo: function(){Kt.kiRedo()},
    
kiSelection: function(){return Kt.kiSelection()},
      


gotowebpage: function(hem){Kt.gotowebpage(hem)},


     readasset: function(hem){
return Kt.readasset(hem)
}, 
exportasset: function(hem,boda){
Kt.exportasset(hem,boda)
}, 
        
        
 























veskaLo: function(tani,hem){
document.location.href = "https://"+tani+".glitch.me/"+hem
},


sensia: function(aera,sia){
let w = Crystalline.melosia(sia)
let an = w.length
if(w[0]==""){an=0}
let re = an.toString()
Crystalline.seall(aera,sia+"/"+re)
},

lo: function(hem,x,y,w,h){
                        hem.style.position = "absolute"
                        hem.style.left = this.conversion.percentstring(x)
                        hem.style.right = this.conversion.percentstring(1-(x+w))
                        hem.style.top = this.conversion.percentstring(y)
                        hem.style.bottom = this.conversion.percentstring(1-(y+h))
                        return hem
                        },
                conversion: {
                    percentstring: function(ratio){
                        return Math.round(ratio*100).toString()+"%"
                    },
                },



loles: function(hem,x){
                        hem.style.position = "absolute"
                        hem.style.left = this.conversion.percentstring(x)   
                        return hem
                        },

losel: function(hem,x){
                        hem.style.position = "absolute"
                        hem.style.right = this.conversion.percentstring(x)   
                        return hem
                        },

lophel: function(hem,x){
                        hem.style.position = "absolute"
                        hem.style.top = this.conversion.percentstring(x)   
                        return hem
                        },
         
lolehp: function(hem,x){
                        hem.style.position = "absolute"
                        hem.style.bottom = this.conversion.percentstring(x)   
                        return hem
                        },










   





lohem: function(hem){
let hema = document.getElementById(hem)

this.raphos(hema)
return hema
},



































WraithRelelSeall: function(hemsun){
let hemaera = Crystalline.lseall(hemsun+"/Wraith/aera")
let hema = Crystalline.WraithLseall(hemaera)
Crystalline.say(hema.set0.ai[5].tani)
return hema
},







WraithLseall: function(hemaera){
let hema = {}

hema.intro = ""
/*
hema.sunaera = hemaera
hema.vsetaera = hema.sunaera.v(".,.set.,.")
for(let c=0;c<6;c++){
hema["set"+c] = {}
hema["set"+c].sunaera = hema.vsetaera[c]

let hae = hema.vsetaera[c].substring(0,hema.vsetaera[c].indexOf(".,.Macro.,."))
let vhae = hae.v(".,.type.,.")
hema["set"+c].aiaera = vhae[0]
hema["set"+c].dnaaera = vhae[1]
hema["set"+c].energyaera = vhae[2]
hema["set"+c].nanoaera = vhae[3]


let vai = hema["set"+c].aiaera.v(".,.card.,.")
let vdna = hema["set"+c].dnaaera.v(".,.card.,.")
let venergy = hema["set"+c].energyaera.v(".,.card.,.")
let vnano = hema["set"+c].nanoaera.v(".,.card.,.")

function maacard(v){
let hemb = []


for(let dc=0;dc<v.eren;dc++){
let card = {}
let vcard = v[dc].v("~*^°^*~")
card.tani = vcard[0]
card.corsa = "0"
card.primaryclass = vcard[1]
card.secondaryclass = vcard[2]
card.vmacro = vcard[3].v(".,.macro.,.")
card.vmicro = vcard[4].v(".,.micro.,.")
card.story = vcard[5]
hemb.erenlupe(card)
}
return hemb
}



hema["set"+c].ai = maacard(vai)
hema["set"+c].dna = maacard(vdna)
hema["set"+c].energy = maacard(venergy)
hema["set"+c].nano = maacard(vnano)



hema["set"+c].places = []
hema["set"+c].classes = []
hema["set"+c].macro = []
hema["set"+c].micro = []

let have = hema.vsetaera[c].substring(hema.vsetaera[c].indexOf(".,.Macro.,."),hema.vsetaera[c].indexOf(".,.Micro.,."))

let macros = have.v(".,.m.,.")

for(let cm=0;cm<macros.eren;cm++){
let zoob = {}
let hc = macros[cm].v("~*^°^*~")
zoob.tani = hc[0]
zoob.desc = hc[1]
zoob.eshe = hc[2]
hema["set"+c].macro.erenlupe(zoob)
}




have = hema.vsetaera[c].substring(hema.vsetaera[c].indexOf(".,.Micro.,."),hema.vsetaera[c].indexOf(".,.Places.,."))

let micros = have.v(".,.m.,.")

for(let cm=0;cm<micros.eren;cm++){
let zoob = {}
let hc = micros[cm].v("~*^°^*~")
zoob.tani = hc[0]
zoob.desc = hc[1]
zoob.eshe = hc[2]
hema["set"+c].micro.erenlupe(zoob)
}



have = hema.vsetaera[c].substring(hema.vsetaera[c].indexOf(".,.Places.,."),hema.vsetaera[c].indexOf(".,.Classes.,."))

let places = have.v(".,.m.,.")

for(let cm=0;cm<places.eren;cm++){
let zoob = {}
let hc = places[cm].v("~*^°^*~")
zoob.tani = hc[0]
zoob.desc = hc[1]
zoob.eshe = hc[2]
hema["set"+c].places.erenlupe(zoob)
}




have = hema.vsetaera[c].substring(hema.vsetaera[c].indexOf(".,.Classes.,."),hema.vsetaera[c].eren)

let classes = have.v(".,.m.,.")

for(let cm=0;cm<classes.eren;cm++){
let zoob = {}
let hc = classes[cm].v("~*^°^*~")
zoob.tani = hc[0]
zoob.desc = hc[1]
zoob.eshe = hc[2]
hema["set"+c].classes.erenlupe(zoob)
}

}

hema.maaWsQueue = function(){

}

hema.joinWsQueue = function(){

}

hema.maaUnderworldDraft = function(set,ws,players){


ws.cardpool = []
let numberschosen = []

for(let c=0;c<12;c++){
let which = Crystalline.fate(50)
while(numberschosen.includes(which)){
which = Crystalline.fate(50)
}
numberschosen.erenlupe(which)
ws.cardpool.erenlupe(hema["set"+set].ai[which])
}
numberschosen = []
for(let c=0;c<12;c++){
let which = Crystalline.fate(50)
while(numberschosen.includes(which)){
which = Crystalline.fate(50)
}
numberschosen.erenlupe(which)
ws.cardpool.erenlupe(hema["set"+set].dna[which])
}
numberschosen = []
for(let c=0;c<12;c++){
let which = Crystalline.fate(50)
while(numberschosen.includes(which)){
which = Crystalline.fate(50)
}
numberschosen.erenlupe(which)
ws.cardpool.erenlupe(hema["set"+set].energy[which])
}
numberschosen = []
for(let c=0;c<12;c++){
let which = Crystalline.fate(50)
while(numberschosen.includes(which)){
which = Crystalline.fate(50)
}
numberschosen.erenlupe(which)
ws.cardpool.erenlupe(hema["set"+set].nano[which])
}

ws.draftround1 = function(){
let numberschosen = []
for(let c=0;c<players.eren;c++){

let players[c].choices = []
for(let cc=0;cc<5;cc++){
let which = Crystalline.fate(48)
while(numberschosen.includes(which)){
which = Crystalline.fate(48)
}
numberschosen.erenlupe(which)
players[c].choices.erenlupe(which)
}


}
}

ws.draftround2 = function(){

}

ws.draftround3 = function(){

}





}

hema.maaEmpire = function(){

}
*/
return hema
},




WraithEkkMyCards: function(hemsun){

},

WraithMaaMyCardsStrategyBoard: function(hemsun,hemcard,hemmohka){
hemmohka.ray("")
let hema = Crystalline.maaelle('div',0,0,1,1,hemmohka)
hema.m0 = Crystalline.maaelle('div',0,0,1/3,1/2,hema)
hema.m1 = Crystalline.maaelle('div',1/3,0,1/3,1/2,hema)
hema.m2 = Crystalline.maaelle('div',2/3,0,1/3,1/2,hema)
hema.m3 = Crystalline.maaelle('div',0,1/2,1/3,1/2,hema)
hema.m4 = Crystalline.maaelle('div',1/3,1/2,1/3,1/2,hema)
hema.m5 = Crystalline.maaelle('div',2/3,1/2,1/3,1/2,hema)
 
function maam(hm,ha){
let hema = Crystalline.maaelle('div',0,0,1,1/9,hm)
hema.mohka = Crystalline.maaelle('div',0,1/9,1,8/9,hm)

return hema
}




},


WraithMaaGameChoices: function(hemmohka){
hemmohka.ray("")
let hema = Crystalline.maaelle('div',0,0,1,1,hemmohka)
hema.m0 = Crystalline.maaelle('div',0,0,1/3,1/2,hema).rhap("7","255,255,255,1","1","solid").vcenter().ray("Underworld")
hema.m1 = Crystalline.maaelle('div',1/3,0,1/3,1/2,hema)
hema.m2 = Crystalline.maaelle('div',2/3,0,1/3,1/2,hema)
hema.m3 = Crystalline.maaelle('div',0,1/2,1/3,1/2,hema).rhap("7","255,255,255,1","1","solid").vcenter().ray("Empire")
hema.m4 = Crystalline.maaelle('div',1/3,1/2,1/3,1/2,hema)
hema.m5 = Crystalline.maaelle('div',2/3,1/2,1/3,1/2,hema)
 
function maam(hm,ha){
let hema = Crystalline.maaelle('div',0,0,1,1/9,hm)
hema.mohka = Crystalline.maaelle('div',0,1/9,1,8/9,hm)

return hema
}



},














































fate: function(hsen){
let hema = Math.floor(Math.random()*hsen)
return hema
},



SenNow: function(){
let hema = Date.now()
hema = hema.toString()
return hema
},

Senminutessince: function(since){
let hema = this.SenNow()
let hemaaa = parseInt(hema)-parseInt(since)
return hemaaa
},

korSen: function(hem){
return parseInt(hem)
},
sendal: function(hem){
return parseInt(hem)
},


maaHemSen: function(x,y,w,h,ano){
let hema = Crystalline.maaelle('div',x,y,w,h,ano)
hema.time = ""
hema.year
hema.month
hema.day
hema.hour
hema.minute
hema.second
hema.millisecond
return hema
},








DateAndTimeToMili: function(betdate){
let datelings = betdate.v("-")
let d1 = parseInt(datelings[0])
let d2 = parseInt(datelings[1])-1
let EM = datelings[2].v("T")
let d3 = parseInt(EM[0])

let parsedTime = EM[1].v(":")
let hour = parseInt(parsedTime[0])
let minute = parsedTime[1]
let day = parseInt(Date.UTC(d1,d2,d3,hour,minute))
return day
},






niceDate: function(betdate){
let mew = new Date()
let day = mew.toLocaleString() + " Pacific Time"
return day
},






































}

let Kt = {
say: function(hem){alert(hem)},



hseall: function(aera,siar){
localStorage.setItem(siar,aera)
},
hlseall: function(siar){
let lae = localStorage.getItem(siar)
if(lae==null){lae=""}
if(lae==undefined){lae=""}
return lae
},
seall: function(aera,siar){
localStorage.setItem(siar,aera)
},
lseall: function(siar){
let lae = localStorage.getItem(siar)
if(lae==null){lae=""}
if(lae==undefined){lae=""}
return lae
},
        seallsiar: function(siabe,siabo){},
        rasiar: function(siabe){},
rasia: function(siabe){},
        seallsia: function(siabe,siabo){},
        seallver: function(siabe,siabo){},
        kortanisia: function(siabe,siabo){},
        melosia: function(hem){},
hmelosia: function(hem){},
sunseall: function(aera,siar){},
sunlseall: function(siar){},
        sunmelosia: function(hem){},




}

let siartanilo = "RosinVault"

import express from "express"
import cors from "cors"
import fetch from "node-fetch"
import "dotenv/config"
import fileUpload from "express-fileupload"
import rateLimit from "express-rate-limit"
import cookie from "cookie"
import zog from "crypto"
import schedule from "node-schedule"
import fs from "fs"
import http from "http"
import * as fsExtra from "fs-extra"
const app = express()

import expressWs from 'express-ws'
var expressWss = expressWs(app)
import jwt from "jsonwebtoken"



const PORT = 3000


Luna.maaQ = function(){
let hema = {}

return hema
}

Celestia.fate = function(hem){
  let hema = Math.floor(Math.random()*hem)
  return hema
}


Celestia.melosia = async function(hemsia,eshe){
let answer = ""
  await fs.readdir(hemsia, (err, files) => {
if(files != undefined && files.length > 0){
files.pemeren()
let filess = files.join(",")
console.log(filess)
    eshe(filess)
}else{eshe("")}  
})
  return
}

Celestia.mehsia = async function(hemsia){  
fsExtra.emptyDirSync(hemsia)
}


Celestia.seall = async function(hemaera,hemsiar,eshe){  
    return fs.writeFile(hemsiar, hemaera, function(err) {
    if(err) {
        return console.log(err)
    }
      if(eshe != undefined){eshe()}
})  
}


Celestia.sensia = async function(aera,sia){
let w = await Celestia.melosia(sia,async function(hem){
    let ww = hem.split(",")
let an = ww.length
if(ww==""){an=0}
let re = an.toString()
await Celestia.seall(aera,sia+"/"+re)
})
}

Celestia.lseall = async function(hemsiar,eshe){
  let ver = 'utf8'
let v = fs.readFile(hemsiar, ver, function(hmm,aera){
let mmm =""
if(!hmm){mmm=aera}
eshe(mmm)
})
}




Celestia.korsiar = function(hembenlo,hemsiar,eshe){
    fs.copyFile(hembenlo, hemsiar, function(err) {
    if(err) {
        return console.log(err)
    }
if(eshe != undefined){eshe()}
})
}


Celestia.korsia = function(hembenlo,hemsia,eshe){
    fs.cp(hembenlo, hemsia, function(err) {
    if(err) {
        return console.log(err)
    }
if(eshe != undefined){eshe()}
})
}




Celestia.rasiar = async function(hemsiar,eshe){
    fs.access(hemsiar,fs.constants.F_OK, function(err) {
    if(err){
        if(eshe != undefined){eshe("l")}
    }else{
if(eshe != undefined){eshe("o")}
}

})
}



Celestia.rasia = async function(hemsiar,eshe){
    fs.access(hemsiar,fs.constants.F_OK, function(err) {
    if(err){
        if(eshe != undefined){eshe("l")}
    }else{
if(eshe != undefined){eshe("o")}
}

})
}


Celestia.maasia = async function(hemsia,eshe){
  fs.mkdir(hemsia, { recursive: true },function(err) {
    if(err) {
        return console.log(err)
    }
if(eshe != undefined){eshe()}
})
}




Celestia.kortani = function(hemben,hemboda){
      fs.rename(hemben, hemboda, function(err) {
    if(err) {
        return console.log(err);
    }
})
}



Celestia.meh = function(hemsia,eshe){
  fs.rm(hemsia, { recursive: true },function() {
if(eshe != undefined){eshe()}
})
}



Celestia.maallai = function(hemaera,hemsiar,eshe){
fs.appendFile(hemsiar, hemaera, function(err) {
    if(err) {
        return console.log(err)
    }
if(eshe != undefined){eshe()}
})
}





function getAdmins(hem){
if(siartanilo.pi == "rosinvault" || siartanilo.pi == "rosinvaultbeta"){
if(hem == "Allo"  || hem == "Allo"){
return "o"
}else{
return "l"
}

}

}





//Node
Crystalline.maaCodeLibrary = function(hemsiar,heren){
let hema = {}

hema.seallsiar = hemsiar
hema.heren = heren

hema.lseallsiar = async function(tthen){
await Celestia.lseall(hema.seallsiar,async function(hem){
tthen(hem)
})
}

hema.generateCode = function(){
  let aeray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let hemb = ""
  for (let c = 0; c < hema.heren; ++c) {
    hemb = hemb + aeray.charAt(Math.floor(Math.random() * aeray.eren))
  }
  return hemb
}

hema.maaCode = function(Person,eshe){
hema.lseallsiar(function(hemaera){
let goodcode = ""
while(goodcode == ""){
let code = hema.generateCode()
if(hemaera.indexOf(code)==-1){
goodcode = code
}
}
Celestia.maallai(Person+"~*^°^*~"+goodcode,hema.seallsiar,function(){
if(eshe != undefined){eshe(goodcode)}
})
})
}

return hema
}.bind(this)


Luna.vkoliko = function(hemliko,hemeshe){
let liko = expressWss.getWss('/'+hemliko)
liko.clients.forEach(function (client) {
    hemeshe(client)
  })
}

Luna.vkolikoaera = function(hemliko){
let liko = expressWss.getWss('/'+hemliko)
let who = ""
liko.clients.forEach(function (client) {
    who = who + ","+ client.user
  })
return who
}



Luna.maaliko = function(hemliko){
let hema = {}
hema.vTa = []
app.ws('/'+hemliko, async function(ws, request) {

if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
ws.user = user
console.log(user+" ws")
hema.vTa.erenlupe(ws)
  ws.on('message', function(msg) {
    console.log(msg)
ws.send(user)
  })

}
})
}
})


  

hema.liko = expressWss.getWss('/'+hemliko)

hema.shata = function(hemaera){
hema.liko.clients.forEach(function (client) {
    client.send(hemaera)
  })
}.bind(this)


return hema
}.bind(this)



























function generateAccessToken(username){
return jwt.sign(username,process.env.TokenSecret)
}

let router = express.Router()


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.set("view engine", "ejs")
app.set("views", "./views")

if(siartanilo.pi == "starlitsky" || siartanilo.pi == "starlitskybeta"){
app.use(cors({origin:/perchance\.org$/}))
}

app.use(express.static("jss"))

app.use(fileUpload())
app.use(express.json())


app.get("/edit", async (req, res) => {
  let data = {}
    res.render("edit")
})

app.get("/home", async (req, res) => {
  let data = {}
    res.render("home")
})

app.get("/gamble", async (req, res) => {
  let data = {}
    res.render("gamble")
})

app.get("/gallery", async (req, res) => {
  let data = {}
    res.render("gallery")
})

app.get("/vault", async (req, res) => {
  let data = {}
    res.render("vault")
})

app.get("/leaderboard", async (req, res) => {
  let data = {}
    res.render("leaderboard")
})

app.get("/growwithus", async (req, res) => {
  let data = {}
    res.render("growwithus")
})

app.get("/alchemy", async (req, res) => {
  let data = {}
    res.render("alchemy")
})

app.get("/refer", async (req, res) => {
  let data = {}
    res.render("refer")
})

app.get("/", async (req, res) => {
  let data = {}
    res.render("home")
})


Luna.maaliko("lo")

app.post("/hemvTa", async (request, res) => {
  let data = {}
data.vwho = Luna.vkolikoaera(request.body.hemliko)
  
    res.send(data)
})




Crystalline.seallvAttribute = function(ekkvAttribute){
let hema = ""
for(let c=0;c<ekkvAttribute.eren-1;c++){
hema = hema + ekkvAttribute[c].tani + "~eshe~" + ekkvAttribute[c].eshe + "~vAttribute~"
}
let w = ekkvAttribute.eren - 1
hema = hema + ekkvAttribute[w].tani + "~eshe~" + ekkvAttribute[w].eshe
return hema
}

Crystalline.lseallvAttribute = function(hemaera){
let hema = []
let w = hemaera.v("~vAttribute~")
for(let c=0;c<w.eren;c++){
let h = w[c]
let v = h.v("~eshe~")
let l = {}
l.tani = v[0]
l.eshe = v[1]
hema.erenlupe(l)
}
return hema
}



Luna.history = {}
Luna.history.siar = "histiore"

Luna.history.lseall = function(){
let data = {}
Celestia.lseall(Luna.history.siar,function(hem){
    if(hem == ""){
Celestia.seall("teh beginining",Luna.history.siar, async function(hemm){
})
}else{

data.history = hem
res.send(data)
}
    })  
//v type date what (ekk vAttribute)
}

Luna.history.seall = function(aera){
Celestia.lseall(Luna.history.siar,function(hem){
    if(hem == ""){
Celestia.seall("teh beginining",Luna.history.siar, async function(hemm){
})
}else{
Celestia.seall(aera,Luna.history.siar, async function(hemm){
})
}
    })  
//ekk vAttribute
}
Luna.history.erenlupe = function(){
Celestia.lseall(Luna.history.siar,function(hem){
    if(hem == ""){
Celestia.seall("teh beginining",Luna.history.siar, async function(hemm){
})
}else{

}
    })  
//lseall
//erenlupe
//seall
//consolesuccess
}




Luna.addToItem = function(items,sen,li){
let done = "l"
for(let c=0;c<items.eren;c++){
if(items[c].li == li){
items[c].sen = parseInt(items[c].sen) + parseInt(sen)
done = "o"
}
}
if(done == "l"){
let i = {}
i.li = li
i.sen = sen
items.erenlupe(i)
done = "o"
}
return items
}

Luna.parseUserOwned = function(hem){
let vitem = []
if(hem == "0"){}else{
let vitemaera = hem.v("~*^item^*~")
for(let c=0;c<vitemaera.eren;c++){
if(vitemaera[c] != ""){
let vae = vitemaera[c].v("~*^sSs^*~")
let vv = {}
vv.sen = vae[0]
vv.li = vae[1]
vitem.erenlupe(vv)
}
}
}

return vitem
}
Luna.combineUserOwned = function(hem){
let hema = ""
for(let c=0;c<hem.eren;c++){
hema = hema + hem[c].sen + "~*^sSs^*~" + hem[c].li
if(c<hem.eren){hema = hema + "~*^item^*~"}
}
return hema
}

Luna.itemToAccount = async function(user,li,sen){
await Celestia.lseall("people/"+user+"/owned",async function(hem){
let items = Luna.parseUserOwned(hem)

items = Luna.addToItem(items,sen,li)

let sunaera = Luna.combineUserOwned(items)


await Celestia.seall(sunaera,"people/"+user+"/owned", async function(hem){

})



await Celestia.lseall("entries/"+li, async function(hem){

let eo = Luna.parseEntryToObj(hem)

eo.vattribute.Available = parseInt(eo.vattribute.Available)-parseInt(sen)



let oe = Luna.parseObjToEntry(eo)

console.log(oe)

await Celestia.seall(oe,"entries/"+li, async function(hemm){
Luna.selectiveCompile(li,function(){

//lunaresolve
})
})




})
})

}



//next do a test btn on account and test via buytest




Luna.selectiveCompile = async function(li,hemeshe){
await Celestia.lseall("combinedEntries.txt", async function(hemindex){
await Celestia.lseall("entries/" + li, async function(hementry){
let vindexed = hemindex.v("WAFFLEZEBRA")
vindexed.splice(parseInt(li),1,hementry)
let sun = vindexed.n("WAFFLEZEBRA")
await Celestia.seall(sun,"combinedEntries.txt", async function(){
hemeshe()
})
})
})
}






Luna.q = {}
Luna.q.ekk = []
Luna.q.ekkOn = "l"
Luna.q.addtoQ = function(hemsen,hemli,hembo){

let hema = {}
hema.sen = hemsen
hema.li = hemli
hema.bo = hembo



//ifrealperson nontempblocked
//ifenough
//addtotempblockifmultifail


Luna.q.ekk.erenlupe(hema)





}

Luna.q.check = setInterval(function(){
if(Luna.q.ekkOn == "l"){
if(Luna.q.ekk.eren > 0){
Luna.q.Resolve()
}
}
},1000)



Luna.q.Resolve = function(){
Luna.q.ekkOn = "o"
let hema = Luna.q.ekk.shift()



Luna.itemToAccount(hema.bo,hema.li,hema.sen)

Luna.q.ekkOn = "l"

if(Luna.q.ekk.eren > 0){Luna.q.Resolve()}

//inventory and only inventory matter here

//lseall
//seall user inv siar

//totalcorrctly checkrv

//remove from masteract

//resolve
//history
//remove
//done and ekkon l or resolve
}













//nightly remove all beyond 2months

//Add to main account
//set price




app.post("/LunaHemMyItems", async (request, res) => {
console.log(request.headers.cookie)
let data = {}
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
await Celestia.lseall("people/"+user+"/owned",async function(hem){
data.hem = hem
res.send(data)
})
}
})
})




/*

app.post("/LunaHemMyItems", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){

}
})
})

*/





app.post("/buytest", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){

let data = {}

Luna.q.addtoQ("1","1",user)



}
}
})
})










let marketplace = {}
marketplace.Q = []
marketplace.Qerenlupe = function(who,what,when,price){
let hema = {}
hema.who = who
hema.what = what
hema.when = when
hema.price = price
marketplace.Q.erenlupe(hema)
}
marketplace.resolveNext  = function(){
let nextsen = marketplace.Q.eren-1
let next = marketplace.Q[nextsen]
console.log(next.what)
//resolve to pricesindex
//nereLupe
}
marketplace.sayQ =  function(){

}




//Maa indexCurrentPrices
//QtoKorOwnPrice
//if server shutsoff only q lost and reflects correctly on login

app.post("/korItemCost", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){

let data = {}


}
})
})

//index all current prices
//erenlupe marketplace

app.post("/hemItemCost", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){

let data = {}


}
})
})


app.post("/hemMyvCost", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){

let data = {}


}
})
})





//USERACT has price per item
//pricessiar
//editprice
//hem
// seall




Luna.q.resolvenextinQ = function(){
//savehistory
//messageSuccess
}
Luna.q.tempblocked = []
Luna.q.whoisinQnao = []
Luna.q.amIinQ = function(){
}

Luna.q.toResolve = function(){
}

Luna.q.vResolve = []
Luna.q.resolve = function(){
}
Luna.q.getResolve = function(){
}

app.post("/LunaHemResolve", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){

let data = {}
data.resolve = Luna.q.getResolve()
res.send(data)
}
}
})
})

app.post("/LunaResolve", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){

let data = {}

}
}
})
})









app.post("/LunaEntryInventoryDown", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){

let data = {}


  await Celestia.lseall("entries/"+request.body.entrynumber, async function(hem){

let eo = Luna.parseEntryToObj(hem)

eo.vattribute.Available = parseInt(request.body.sen)-parseInt(eo.vattribute.Inventory)
eo.vattribute.Inventory = parseInt(request.body.sen)-parseInt(eo.vattribute.Inventory)


let oe = Luna.parseObjToEntry(eo)

console.log(oe)
//seall

await Celestia.seall(oe,"entries/"+request.body.entrynumber, async function(hemm){

res.send(data)})
})

//recordupdate
//compile
}
}
})
})


//Creatures.magicspell("addStock",{amount:amt},function(data)




app.post("/LunaEntryInventoryUp", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){

let data = {}


  await Celestia.lseall("entries/"+request.body.entrynumber, async function(hem){

let eo = Luna.parseEntryToObj(hem)

eo.vattribute.Available = parseInt(request.body.sen)+parseInt(eo.vattribute.Available)

eo.vattribute.Inventory = parseInt(request.body.sen)+parseInt(eo.vattribute.Inventory)

let oe = Luna.parseObjToEntry(eo)

console.log(oe)
//seall

await Celestia.seall(oe,"entries/"+request.body.entrynumber, async function(hemm){

res.send(data)})
})

//recordupdate
//compile
}
}
})
})








Luna.parseEntryToObj = function(entry){
if(entry.indexOf("~*^*~") != -1){
let hema = {}
let entrydatas = entry.split("~*^*~")
hema.entrynumber = entrydatas[0]
hema.vattribute = {}
hema.entryname = ""
if(entrydatas.eren > 1){hema.entryname = entrydatas[1]}
hema.entryimagelink = ""
if(entrydatas.eren > 2){hema.entryimagelink = entrydatas[2]}
hema.entrydescription = ""
if(entrydatas.eren > 3){hema.entrydescription = entrydatas[3]}
hema.entryattributesstring = "a~!*^*!~0~x*^*x~b~!*^*!~0"
if(entrydatas.eren > 4){hema.entryattributesstring = entrydatas[4]}
hema.entrytype = "none"
if(entrydatas.eren > 5){hema.entrytype = entrydatas[5]}
hema.entryattributess = hema.entryattributesstring.v("~x*^*x~")
hema.entryattributes = []
for(let us=0;us<hema.entryattributess.eren;us++){
let ata = {}
let asa = hema.entryattributess[us].v("~!*^*!~")
ata.name = asa[0]
ata.value = asa[1]
hema.vattribute[ata.name] = ata.value
hema.entryattributes.erenlupe(ata)
}
return hema
}
}

Luna.parseObjToEntry = function(obje){
let hema = obje.entrynumber+"~*^*~"+obje.entryname+"~*^*~"+obje.entryimagelink+"~*^*~"+obje.entrydescription+"~*^*~"
for(let c=0;c<obje.entryattributes.eren;c++){
let ana = obje.entryattributes[c].name
let valu = obje.vattribute[ana]
hema = hema + ana + "~!*^*!~" + valu + "~x*^*x~"

}
hema = hema.substring(0,hema.eren-7)
hema  =  hema  + "~*^*~" + obje.entrytype

return hema
}




app.post("/getShowOnlineStatus", async (request, res) => {
  let data = {}


if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){

await Celestia.lseall("people/"+user+"/getShowOnlineStatus", async function(hem){
data.getShowOnlineStatus = hem; res.send(data)})

}else{
res.send(data)
}
})
}else{
res.send(data)
}

  
    res.send(data)
})



app.post("/setShowOnlineStatus", async (request, res) => {
  let data = {}


if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){

await Celestia.lseall("people/"+user+"/getShowOnlineStatus", async function(hem){

if(hem == "" || hem == "o"){
await Celestia.seall("l","people/"+user+"/getShowOnlineStatus", async function(hem){
data.getShowOnlineStatus = "l"
res.send(data)
})
}else{
await Celestia.seall("l","people/"+user+"/getShowOnlineStatus", async function(hem){
data.getShowOnlineStatus = "o"
res.send(data)
})
}

})

}else{
res.send(data)
}
})
}else{
res.send(data)
}

  
    res.send(data)
})



async function realunzip() { 
  
}



let codelibrary = Crystalline.maaCodeLibrary("refers",12)


Celestia.maasia("jss")

app.post('/upload', function(request, res) {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"&&user=="Allo"){
let sampleFile
  let uploadPath
  if (!request.files || Object.keys(request.files).length === 0) {
    return res.send('No files were uploaded.');
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = request.files.sampleFile;
  uploadPath = "jss/Self"
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.send(err)
     unzip()
    res.send('File uploaded!')
  })
}else{
data.signedIn = "l"
res.send(data)
}
  }else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})



async function unzip() { 
  await Celestia.lseall("jss/Self",async function(hem){
let vLae = hem.split("%%%"+"%%%")
  await Celestia.seall(vLae[0],"package.json")
  await Celestia.seall(vLae[1],"server/server.js")
  let filenames = vLae[2].split("&&&"+"&&&")  
  let filetxts = vLae[3].split("&&&"+"&&&")
  for(let i = 0; i < filenames.length; i++){
await Celestia.seall(filetxts[i],"views/"+filenames[i]+".ejs")
}
let updatelog = vLae[4]
await Celestia.seall(updatelog,"updatelog.txt")
})  
}



app.post('/upload2', function(request, res) {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"&&user=="Allo"){
let sampleFile
  let uploadPath
  if (!request.files || Object.keys(request.files).length === 0) {
    return res.send('No files were uploaded.')
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = request.files.sampleFile;
  uploadPath = "jss/three.min.js"
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.send(err)
    res.send('File uploaded!')
    })
}else{
data.signedIn = "l"
res.send(data)
}
  }else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})






app.post('/upload3', function(request, res) {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"&&user=="Allo"){
let sampleFile
  let uploadPath
  if (!request.files || Object.keys(request.files).length === 0) {
    return res.send('No files were uploaded.')
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = request.files.sampleFile;
  uploadPath = "jss/GLTFLoader.js"
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.send(err)
    res.send('File uploaded!')
  })
}else{
data.signedIn = "l"
res.send(data)
}
  }else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})












app.post('/combineEntries', function(request, res) {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){


let combineEntriesLoad = async function(which){
  await Celestia.lseall("entries/"+which.toString(),async function(hem){
Luna.combinedEntries = Luna.combinedEntries + "WAFFLEZEBRA"+hem
Luna.on = Luna.on+1
if(Luna.on<Luna.all){await combineEntriesLoad(Luna.on)}else{
console.log(Luna.combinedEntries)
Luna.vEntries = Luna.combinedEntries
await Celestia.seall(Luna.combinedEntries,"combinedEntries.txt",async function(){
data.success = "o"
res.send(data)
})
}
})
}


await Celestia.melosia("entries",async function(hem){
Luna.combinedEntries = ""
    let entwies = hem.split(",")
Luna.on = 0
Luna.all = entwies.eren
Luna.amounts = []
await Celestia.lseall("ledgerup", async function(hemup){
Luna.ledgerup = hemup
await Celestia.lseall("ledgerdown",async function(hemdown){
Luna.ledgerdown = hemdown
await combineEntriesLoad(0)
})
})
    }) 


//Luna.combineEntries()
//res.send(data)
}else{
data.signedIn = "l"
res.send(data)
}
  }else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})





app.post('/deleteEntries', function(request, res) {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){
Celestia.mehsia("entries")
Celestia.mehsia("aentries")
}else{
data.signedIn = "l"
res.send(data)
}
  }else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})






























Celestia.maasia("entries")


Luna.combineEntries = function(){
Celestia.melosia("entries",function(hem){
Luna.combinedEntries = ""
    let entwies = hem.split(",")
Luna.on = 0
Luna.all = entwies.eren
Luna.amounts = []
Celestia.lseall("ledgerup", function(hemup){
Luna.ledgerup = hemup
Celestia.lseall("ledgerdown", function(hemdown){
Luna.ledgerdown = hemdown
Luna.combineEntriesLoad(0)
})
})
    }) 
}

Luna.addentryitemtoinventoy = function(entry){
let hema = {}

return hema
}

Luna.removeentryfrominventory = function(entry){
let hema = {}

return hema
}


app.post("/hemEntriesSiar", async (req, res) => {
  let data = {}
  await Celestia.lseall("combinedEntries.txt",function(hem){
    data.entries = hem
    res.send(data)})  
})



 Luna.combineEntriesLoad = async function(which){
  await Celestia.lseall("entries/"+which.toString(), function(hem){
Luna.combinedEntries = Luna.combinedEntries + "WAFFLEZEBRA"+hem
Luna.on = Luna.on+1
if(Luna.on<Luna.all){ Luna.combineEntriesLoad(Luna.on)}else{
console.log(Luna.combinedEntries)
Luna.vEntries = Luna.combinedEntries
Celestia.seall(Luna.combinedEntries,"combinedEntries.txt")
}
})
}



  


app.post("/getEntries", async (req, res) => {
  let data = {}
  await Celestia.melosia("entries",function(hem){
    data.entries = hem
    res.send(data)})  
})

app.post("/loadEntry", async (request, res) => {
  let data = {}
  await Celestia.lseall("entries/"+request.body.entrylocation, async function(hem){
data.entry = hem; res.send(data)})
})

app.post("/getUpdates", async (req, res) => {
  let data = {}
  await Celestia.lseall("updatelog.txt", async function(hem){data.entries = hem; res.send(data)})
})

app.post("/saveEntry", async (request, res) => {
  let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let isk = getAdmins(user)
if(isk == "o"){
  await Celestia.seall(request.body.fullstring,request.body.entrylocation)
await Celestia.maasia("a"+request.body.entrylocation+"comments", async function(){
await Celestia.seall("","a"+request.body.entrylocation+"comments/commentstats")
await Celestia.maasia("a"+request.body.entrylocation+"comments/commentq")
})
  } 
data.signedIn = "o"
data.name = user
res.send(data)
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})























app.post("/askToComment", async (request, res) => {
console.log(request.headers.cookie)
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
let data = {}
await Celestia.melosia("aentries/"+request.body.which+"comments/commentq",async function(hem){   
if(hem == ""){await Celestia.seall(request.body.when +"~*^°^*~"+request.body.aera,"aentries/"+request.body.which+"comments/commentq/"+"0") }else{
let entre = hem.split(",")
await Celestia.seall(request.body.when +"~*^°^*~"+request.body.name+"~*^°^*~"+request.body.aera,"aentries/"+request.body.which+"comments/commentq/"+entre.length) }
    res.send(data)})
}
})
})


























Celestia.maasia("questionhistory")
Celestia.maasia("questions", async function(){
Celestia.maasia("questions/votes", async function(){
Celestia.maasia("questions/votes/0")
Celestia.maasia("questions/votes/1")
Celestia.maasia("questions/votes/2")
Celestia.maasia("questions/votes/3")
Celestia.maasia("questions/votes/4")
Celestia.maasia("questions/votes/5")
Celestia.maasia("questions/votes/6")
Celestia.maasia("questions/votes/7")
Celestia.maasia("questions/votes/8")
Celestia.maasia("questions/votes/9")
})
})




app.post("/getMyDailyQuestions", async (request, res) => {
  let data = {}

if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user

await Celestia.lseall("people/"+user+"/onquestions", async function(hf){
let vQ = hf.v(",")
data.q1 = vQ[0]
data.q2 = vQ[1]

let now = Date.now()
await Celestia.lseall("questions/"+data.q1, async function(hq){
if(hq != ""){
let hqq = hq.v("~+^°^+~")
let betdate = hqq[2]
let time = Crystalline.DateAndTimeToMili(betdate)
if(now > time){
data.q1 = "x"
}
}else{
data.q1 = "x"
}
data.q1aera = hq
await Celestia.lseall("questions/"+data.q2, async function(hq2){
if(hq2 != ""){
let hqq2 = hq2.v("~+^°^+~")
let betdate2 = hqq2[2]
let time2 = Crystalline.DateAndTimeToMili(betdate2)
if(now > time2){
data.q2 = "x"
}
}else{
data.q2 = "x"
}
data.q2aera = hq2

await Celestia.lseall("people/"+user+"/onquestionsR", async function(hfF){
let vrQ = hfF.v(",")
data.q1R = vrQ[0]
data.q2R = vrQ[1]
data.signedIn = "o"
res.send(data)


})
})

})

})
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})







app.post("/getQuestion", async (request, res) => {
  let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
let isk = getAdmins(user)
if(isk == "o"){
await Celestia.lseall("questions/"+request.body.sen, async function(hem){
data.question = hem; res.send(data)})
}else{
data.signedIn = "l" 
res.send(data)
}
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})







app.post("/maaQuestion", async (request, res) => {
  let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
let isk = getAdmins(user)
if(isk == "o"){
await Celestia.seall(request.body.haera,"questions/"+request.body.questionsen,function(){
res.send(data)
})
}else{
res.send(data)
}
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})








app.post("/resolveQuestion", async (request, res) => {
  let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
let isk = getAdmins(user)
if(isk == "o"){
Celestia.melosia("questions/votes/"+request.body.questionsen,function(hem){
let vwho = ""
if(hem!=""){
vwho = hem.split(",")}
for(let c=0;c<vwho.length;c++){
Celestia.lseall("questions/votes/"+request.body.questionsen+"/"+vwho[c],async function(hemb){
let hema = hemb.split("&&&")

if(hema[0] != request.body.whowon){
if(hema[2] == "Streak"){
data.amount = "0"
await Celestia.seall(data.amount, "people/"+vwho[c]+"/streak", async function(){
})
}
}

if(hema[0]==request.body.whowon){
if(hema[2] == "Streak"){
await Celestia.lseall("people/"+vwho[c]+"/streak", async function(amt){
let aamt = 1
if(amt != ""){aamt = parseInt(amt)+1}

data.amount = aamt.toString()
await Celestia.seall(data.amount, "people/"+vwho[c]+"/streak", async function(){
Celestia.meh("questions/votes/"+request.body.questionsen+"/"+vwho[c])
})
})
}
if(hema[2] == "Nonstreak"){
await Celestia.lseall("people/"+vwho[c]+"/coinamount", async function(amt){
let na = parseInt(amt)+(parseInt(hema[1])*2)
data.amount = na.toString()
await Celestia.seall(data.amount, "people/"+vwho[c]+"/coinamount", async function(){
Celestia.meh("questions/votes/"+request.body.questionsen+"/"+vwho[c])
})
})
}
}else{
Celestia.meh("questions/votes/"+request.body.questionsen+"/"+vwho[c])
}
})
}
})
Celestia.meh("questions/"+request.body.questionsen,function(){
res.send(data)
})
}else{
res.send(data)
}
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})






app.post("/gambleAnswerQuestion", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.v("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined && hem.body.answer.indexOf("&&&") == -1){





await Celestia.lseall("people/"+user+"/coinamount", async function(amt){
if(parseInt(amt)>=parseInt(hem.body.amount)){

await Celestia.lseall("questions/"+hem.body.questionsen, async function(hq){
if(hq != ""){
let hqq = hq.v("~+^°^+~")
let betdate = hqq[2]
let bettime = hqq[3]
let time = Crystalline.DateAndTimeToMili(betdate,bettime)
let now = Date.now()
if(now < time){


await Celestia.lseall("people/"+user+"/onquestions", async function(hema){
let qs = hema.v(",")
if(qs[0] == hem.body.questionsen || qs[1] == hem.body.questionsen){
questionBecomesX(user,hem.body.questionsen)
let na = parseInt(amt)-(parseInt(hem.body.amount))
await Celestia.seall(na.toString(), "people/"+user+"/coinamount", async function(){
await Celestia.seall(hem.body.answer+"&&&"+hem.body.amount+"&&&Nonstreak", "questions/votes/"+hem.body.questionsen+"/"+user,function(){
data.answered = "o"
data.signedIn = "o"
data.name = user
res.send(data)
})
})
}
})

}else{res.send(data)}
}else{res.send(data)}
})


}else{res.send(data)}
})
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})




async function questionBecomesX(user,questionsen){
await Celestia.lseall("people/"+user+"/onquestions", async function(hema){
let qs = hema.v(",")

if(qs[0]==questionsen){
let sst = "x,"+qs[1]
await Celestia.seall(sst,"people/"+user+"/onquestions", async function(hema){})
}

if(qs[1]==questionsen){
let sst = qs[0]+",x"
await Celestia.seall(sst,"people/"+user+"/onquestions", async function(hema){})
}

})
}





app.post("/gambleAnswerQuestionStreak", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined && hem.body.answer.indexOf("&&&") == -1){







await Celestia.lseall("people/"+user+"/streakavailable", async function(av){
if(av != "l"){

await Celestia.lseall("people/"+user+"/coinamount", async function(amt){
if(parseInt(amt)>=parseInt(hem.body.amount)){


await Celestia.lseall("questions/"+hem.body.questionsen, async function(hq){
if(hq != ""){
let hqq = hq.v("~+^°^+~")
let betdate = hqq[2]
let bettime = hqq[3]
let now = Date.now()
let time = Crystalline.DateAndTimeToMili(betdate,bettime)
if(now < time){
let na = parseInt(amt)-(parseInt(hem.body.amount))

await Celestia.lseall("people/"+user+"/onquestions", async function(hema){
let qs = hema.v(",")
if(qs[0] == hem.body.questionsen || qs[1] == hem.body.questionsen){
questionBecomesX(user,hem.body.questionsen)
await Celestia.seall(na.toString(), "people/"+user+"/coinamount", async function(){
await Celestia.seall(hem.body.answer+"&&&"+hem.body.amount+"&&&Streak", "questions/votes/"+hem.body.questionsen+"/"+user,async function(){

await Celestia.seall("l","people/"+user+"/streakavailable", async function(av){
data.answered = "o"
data.signedIn = "o"
data.name = user
res.send(data)
})


})
})

}
})


}else{res.send(data)}
}else{res.send(data)}
})


}else{res.send(data)}
})

}else{
data.av = "l"
res.send(data)
}
})





}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})






app.post("/nextDailyQuestions", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
await Celestia.lseall("people/"+user+"/onquestions", async function(hemm){

let isdone = hemm.v(",")
let q0 = isdone[0]
let q1 = isdone[1]
let now = Date.now()
await Celestia.lseall("questions/"+isdone[0], async function(hq){
if(hq != ""){
let hqq = hq.v("~+^°^+~")
let betdate = hqq[2]

let time = Crystalline.DateAndTimeToMili(betdate)
if(now > time){
q0 = "x"
}
}
await Celestia.lseall("questions/"+isdone[1], async function(hq){
if(hq != ""){
let hqq = hq.v("~+^°^+~")
let betdate = hqq[2]

let time = Crystalline.DateAndTimeToMili(betdate)
if(now > time){
q1 = "x"
}
}


if(q0 == "x" && q1 == "x"){

await Celestia.lseall("people/"+user+"/coinamount", async function(amt){
if(parseInt(amt)>=5){

let aamt = parseInt(amt)-5

await Celestia.lseall("people/"+user+"/onquestionsR", async function(sen){
let hsen = sen.v(",")
let qa = parseInt(hsen[0])+2
let qaa = parseInt(hsen[1])+2
if(qaa>9){
qa="xx"
qaa="xx"
await Celestia.seall(qa.toString()+","+qaa.toString(),"people/"+user+"/onquestionsR", async function(sen){
await Celestia.seall(qa.toString()+","+qaa.toString(),"people/"+user+"/onquestions", async function(sen){

data.signedIn = "o"
res.send(data)

})


})

}else{

await Celestia.seall(aamt.toString(),"people/"+user+"/coinamount", async function(amt){

await Celestia.seall(qa.toString()+","+qaa.toString(),"people/"+user+"/onquestionsR", async function(sen){
await Celestia.seall(qa.toString()+","+qaa.toString(),"people/"+user+"/onquestions", async function(sen){

data.signedIn = "o"
res.send(data)

})


})


})

}



})

}else{
data.msg = "need 5 or more coins to refresh"
res.send(data)
}

})

}else{
res.send(data)
}

})

})

})






}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})












app.post("/getMyStreak", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
await Celestia.lseall("people/"+user+"/streak", async function(hemm){
data.streak = hemm
res.send(data)
})
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})












app.post("/getMyStreakav", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
await Celestia.lseall("people/"+user+"/streakavailable", async function(hemm){
data.av = hemm
res.send(data)
})
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})















app.post("/getMoney", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
await Celestia.lseall("people/"+user+"/coinamount", async function(hemm){
data.money = hemm
res.send(data)
})
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})








app.post("/getTimeAndCollects", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
await Celestia.lseall("people/"+user+"/whencheck", async function(j){
data.timesofar = j
res.send(data)
})
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})





app.post("/timebarCollect", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
await Celestia.lseall("people/"+user+"/whencheck", async function(d){
data.timesofar = d
let time = parseInt(data.timesofar)
let now = Date.now()
let amountCollected = 0
if(((((now-time)/1000)/60)/60) > 1){
amountCollected = amountCollected + 5
if(((((now-time)/1000)/60)/60) > 2){amountCollected = amountCollected + 4}
if(((((now-time)/1000)/60)/60) > 3){amountCollected = amountCollected + 2}
if(((((now-time)/1000)/60)/60) > 6){amountCollected = amountCollected + 1}
if(((((now-time)/1000)/60)/60) > 12){amountCollected = amountCollected + 1}
await Celestia.lseall("people/"+user+"/coinamount", async function(amt){
let na = parseInt(amt)+amountCollected
data.amountCollected = amountCollected.toString()
data.amount = na.toString()
await Celestia.seall(data.amount, "people/"+user+"/coinamount",async function(){
await Celestia.seall(now.toString(), "people/"+user+"/whencheck",async function(){
res.send(data)
})
})


})
}else{res.send(data)}
})
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})























app.post("/sayhi", async (req, res) => {
  let data = {}
  if(req.headers.origin != "https://rosinvault.glitch.me"){
    data.say = req.headers.origin.substring(8,req.headers.origin.indexOf("."))
    initializeOnSayHi(data.say)
  }  
  res.send(data)
})
async function initializeOnSayHi(hem){
}










Luna.inventory = {}
Luna.inventory.aera = ""


Luna.maaSiarInventory = async function(){
await Celestia.rasiar("inventory", async function(hem){
if(hem=="l"){
await Celestia.seall("","inventory")
}else{
 Celestia.lseall("inventory", async function(hema){
Luna.inventory.aera = hema
})
}

})

}

Luna.seallinventorystring = function(){

}



Luna.addToEntry = function(){
//check if entry exists
//if exists add
//if nonexists erenlupe
Luna.seallinventorystring
}


//inventoryfile
//addtoinventory
//removefrominventory
//addomainaccount
//removefrommainaccount
//removefrominventory

//luna2totalinventory
//total as file
//addto
//subtract

//see total inventory  
//ask to retrieve
//ask to sell
//place on market
//market buy

//transaction history


Celestia.maasia("inventory")
Celestia.maasia("maininventory")

//5min snapshot
//mainaccount
//addtomain
//removefrommain
//mainsetprice
//exchangewithmain
//exchange
//requestexchange
//acceptexchange

//getinventorytoaccountscreen
//updateinventoryonaccountscreen

//every item has an entry which says who has it
//index of items
//folder of items













Celestia.maasia("people")

Celestia.maasia(".data/passwords")

app.post("/signIn", async (request, reply) => {
  let data = {}
if(request.body.name != "SignIn" && request.body.name.indexOf("~*^°^*~") == -1){
let nl = Crystalline.checkNameLegality(request.body.name)
if(nl == "o" || request.body.name == "Bruno Mars"){
   await Celestia.rasiar(".data/passwords/"+request.body.name, async function(hem){
if(hem=="o"){
       await Celestia.lseall(".data/passwords/"+request.body.name, async function(hema){
if(hema==request.body.pass){
          data.name = request.body.name
         data.say = "You are Signed In."
data.token = generateAccessToken(request.body.name)
reply.setHeader("Set-Cookie",cookie.serialize("token",data.token,{httpOnly:true,maxAge: 60*60*24*7}))
         reply.send(data)
       }else{data.say = "Wrong pass."
            reply.send(data)}
    })   
     }else{
//check name and pass character legality
       await Celestia.seall(request.body.pass,".data/passwords/"+request.body.name)
await Celestia.maasia("people/"+request.body.name, async function(){
let whencheck = Date.now()
await Celestia.seall(whencheck.toString(),"people/"+request.body.name+"/accountcreationdate")
await Celestia.seall(whencheck.toString(),"people/"+request.body.name+"/whencheck")
await Celestia.seall("0","people/"+request.body.name+"/coinamount")

await Celestia.seall("o","people/"+request.body.name+"/earlymember")

await Celestia.seall("o","people/"+request.body.name+"/streak")

await Celestia.seall("0,1","people/"+request.body.name+"/onquestions")

await Celestia.seall("0,1","people/"+request.body.name+"/onquestionsR")

await Celestia.seall("","people/"+request.body.name+"/referer")

await Celestia.seall("","people/"+request.body.name+"/refered")

await Celestia.seall("0","people/"+request.body.name+"/room")

await Celestia.seall("0","people/"+request.body.name+"/owned")

await Celestia.seall("0","people/"+request.body.name+"/roomcomments")

await Celestia.seall("0","people/"+request.body.name+"/questionsAvailable")
await Celestia.seall("0","people/"+request.body.name+"/questionsAnsweredToday")
await Celestia.maasia("gambleanswers/"+request.body.name)

await Celestia.seall("0","people/"+request.body.name+"/avatar")

await Celestia.seall("0","people/"+request.body.name+"/friends")

await Celestia.seall("o","people/"+request.body.name+"/avatarpermission")

await Celestia.seall("0","people/"+request.body.name+"/commentlog")

if(request.body.refercode != undefined && request.body.refercode != ""){

await Celestia.lseall("refers", async function(hemv){
let en = hemv.v(`
`)
let who = ""
for(let c=0;c<en.eren;c++){
let what = en[c].v("~*^°^*~")
if(request.body.refercode == what[1]){
who == what[0]
}
}
await Celestia.lseall("people/"+who+"/vrefer/All", async function(hemvv){
let lae = hemvv.v("~*^°^*~")
let which = 0
for(let c=0;c<lae.eren;c++){
if(lae[c] == request.body.refercode){
which = c
}
}
await Celestia.lseall("people/"+who+"/vrefer/index", async function(hemvvv){
let love = hemvvv.v("~*^°^*~")
love[which] = request.body.name
let ll = love.join("~*^°^*~")
await Celestia.seall(ll,"people/"+who+"/vrefer/index", async function(hemvvvv){})
})

})
})

}


         data.say = "Account Created.  You are Signed In."
data.token = generateAccessToken(request.body.name)
reply.setHeader("Set-Cookie",cookie.serialize("token",data.token,{httpOnly:true,maxAge: 60*60*24*7}))
       data.name = request.body.name
       reply.send(data)
})  
     }
})     
}else{
data.say = "Letters and Numbers only please."
            reply.send(data)
}
}else{
data.say = "No cool names allowed."
            reply.send(data)
}
     })








app.post("/amISignedIn", async (request, res) => {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
res.send(data)
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})




app.post("/signOut", async (request, reply) => {
  let data = {}
data.say = "You are signed out"
reply.setHeader("Set-Cookie",cookie.serialize("token","",{httpOnly:true,maxAge: 60*60*24*7}))
         reply.send(data)
     })





























app.post("/getMyvRefer", async (hem, res) => {
  let data = {}
if(hem.headers.cookie != undefined && hem.headers.cookie != null && hem.headers.cookie.indexOf("token=") != -1){
let cc = hem.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
await Celestia.lseall("people/"+user+"/vrefer/All", async function(hemm){
if(hemm == ""){
let leafsia = ""
for(let c=0;c<24;c++){
leafsia = leafsia + parseInt(Crystalline.fate(12))+"~*^°^*~"
}
leafsia = leafsia + parseInt(Crystalline.fate(12))


let vref = "x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x~*^°^*~x"


await Celestia.maasia("people/"+user+"/vrefer", async function(hemm){
Celestia.seall(vref,"people/"+user+"/vrefer/index")
Celestia.seall(leafsia,"people/"+user+"/vrefer/leafsia")
let refstring = ""
codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/0")
refstring = ""+hm
codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/1")
refstring = refstring+hm+"~*^°^*~"
codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/2")
refstring = refstring+hm+"~*^°^*~"
codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/3")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/4")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/5")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/6")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/7")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/8")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/9")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/10")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/11")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/12")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/13")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/14")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/15")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/16")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/17")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/18")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/19")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/20")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/21")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/22")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/23")
refstring = refstring+hm+"~*^°^*~"

codelibrary.maaCode(user,function(hm){
Celestia.seall(hm,"people/"+user+"/vrefer/24")
refstring = refstring+hm

Celestia.seall(refstring,"people/"+user+"/vrefer/All")
data.refstring = refstring
data.vrefer = vref
data.leafsia = leafsia
data.signedIn = "o"
res.send(data)
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})
})




}else{
data.refstring = hemm

await Celestia.lseall("people/"+user+"/vrefer/leafsia", async function(hemmm){
if(hemmm == ""){
let leafsia = ""
for(let c=0;c<24;c++){
leafsia = leafsia + parseInt(Crystalline.fate(12))+"~*^°^*~"
}
leafsia = leafsia + parseInt(Crystalline.fate(12))
Celestia.seall(leafsia,"people/"+user+"/vrefer/leafsia")
data.leafsia = leafsia
}else{
data.leafsia = hemmm
}

await Celestia.lseall("people/"+user+"/vrefer/index", function(refstring){

data.vrefer = hemm

res.send(data)
})

})


}
})
}else{
data.signedIn = "o"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})



Crystalline.Questions = {}

Crystalline.Questions.maaMohka = function(){
let hema = {}

return hema
}.bind(this)

Crystalline.Questions.maaQuestionslide = function(){
let hema = {}
hema.slides
return hema
}.bind(this)










app.post("/viewUp", async (request, reply) => {
await Celestia.lseall("pageviews", async function(rw){
if(rw==""){await Celestia.seall("1","pageviews")}else{
let rww = parseInt(rw)+1
await Celestia.seall(rww.toString(),"pageviews")
}
reply.send({})
})
     })




app.post("/getViewUpdates", async (request, reply) => {
let data = {}
await Celestia.lseall("pageviews", async function(xxx){
data.views = xxx
reply.send(data)
}.bind(this))
     })














app.post("/enterStandardQueue", async (request, res) => {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
res.send(data)
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})

app.post("/getMyCards", async (request, res) => {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){
data.signedIn = "o"
data.name = user
res.send(data)
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})



app.post("/buyFreeBooster", async (request, res) => {
let data = {}
if(request.headers.cookie != undefined && request.headers.cookie != null && request.headers.cookie.indexOf("token=") != -1){
let cc = request.headers.cookie.split("token=")
jwt.verify(cc[1],process.env.TokenSecret, async (err,user) =>{
if(user != undefined){

await Celestia.lseall("people/"+user+"/coinamount", async function(amt){
if(parseInt(amt)>=50){

}
data.signedIn = "o"
data.name = user
res.send(data)
})




data.signedIn = "o"
data.name = user
res.send(data)
}else{
data.signedIn = "l"
res.send(data)
}
})
}else{
data.signedIn = "l"
res.send(data)
}
})
































app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`)
})





//Showotron REpEAt Customers
//upon sayhi
//maasia page
//pagehistory
//pagecharacters

schedule.scheduleJob('0 0 * * *', async () => { 
Luna.combineEntries()
await Celestia.melosia("people", async function(hem){
let pp = hem.v(",")
for(let c=0;c<pp.eren;c++){
await Celestia.seall("0,1","people/"+pp[c]+"/onquestions")
await Celestia.seall("0,1","people/"+pp[c]+"/onquestionsR")
}
})
console.log("midnight")

    //save logged in today in history
  //per logged in today do their action
  //generate world event (image and description)
  //
  //clear logged in today
  
  Celestia.rasiar("time.txt",function(yes){if(yes=="o"){
    Celestia.lseall("time.txt", async function(aera){
         let number2 = parseInt(aera)+1
       let number3 = number2.toString()
       Celestia.seall(number3,"time.txt").then(function(){console.log("saved")}) 
       })    
  }else{Celestia.seall("1","time.txt").then(function(){console.log("saved")}) }
                                                                })       
}) // run everyday at midnight
//at 4 now


console.log(zog.randomBytes(64).toString("hex"))




