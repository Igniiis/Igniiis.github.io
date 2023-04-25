//Function to hide and show html
function edit(obj, style){
    for (var i = 0; i < obj.length; i++) {
        obj[i].style.display = style;
      }
}

// Attach onchange event to the language switch.
var langSwitch = document.getElementById('lang-switch');
langSwitch.addEventListener('change', function() {
  var lang = langSwitch.value;

  edit(document.querySelectorAll('[lang]'), 'none');
  edit(document.querySelectorAll('[lang="'+lang+'"]'), 'block');
});


//function to change automatiquely the language
function changeLanguage(language){
    edit(document.querySelectorAll('[lang]'), 'none');
    // Show text of the language specified
    edit(document.querySelectorAll('[lang="'+language+'"]'), 'block');
}


//call the function at start
changeLanguage('fr');


let fr=true;
let en=false;