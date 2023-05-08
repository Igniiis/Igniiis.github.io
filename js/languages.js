//Function to hide and show html (jquery like)
function edit(obj, style){
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.display = style;
      }
}

// Attach onchange event to the language switch.
var langSwitch = document.getElementById('lang-switch');


//function to change automatiquely the language
function changeLanguage(language){
    edit(document.querySelectorAll('[lang]'), 'none');
    // Show text of the language specified
    edit(document.querySelectorAll('[lang="'+language+'"]'), 'block');
}



let fr = true;
let en = false;
function toggleLanguage(){
  console.log(fr + '   ' + en);
  if(fr){
    changeLanguage('en');
    en=true;
    fr=false;
    return;
  }
  if(en){
    console.log(fr + ' ' + en);
    changeLanguage('fr');
    en=false;
    fr=true;
    return;
  }
}





//At the start :


//check language of browser :
var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);
if (userLang == 'fr' || userLang == 'fr-FR') {
  //if french detected, we prompt french language
  changeLanguage('fr');
  fr = true;
  en = false;
}else if(userLang =='en' || userLang =='en-EN'){
  //if english detected, we prompt english language
  changeLanguage('en');
  fr = false;
  en = true;
}else{
  //if another language detected, we prompt english language by default
  changeLanguage('en');
  fr = false;
  en = true;
}



