$('.slider').each(function() { // for each slider run this function (might have more than one)
  var $this = $(this);
  var $group = $this.find('.slide-group');
  var $slides = $this.find('.slide');
  var buttonArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft;
    var slideLeft;
    
    advance(); 
    
    if ($group.is('animated') || currentIndex === newIndex) { 
      return; 
    }
    
    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');
    
    //moving the slide positions
    if(newIndex > currentIndex) { 
      slideLeft = '100%'; 
      animateLeft = '-100%'; 
    } else { 
      slideLeft = '-100%'; 
      animateLeft = '100%'; 
    }
    
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'});
    $group.animate( {left: animateLeft}, function() {
      $slides.eq(currentIndex).css( {display: 'none'} ); 
      $slides.eq(newIndex).css( {left: 0} ); 
      $group.css( {left: 0} ); 
      currentIndex = newIndex; 
    });//end of group animate
    
  } // end of move function
  
  
  function advance() { //sets the timer and moves using index
    clearTimeout(timeout); 
    timeout = setTimeout(function(){
      if (currentIndex < ($slides.length - 1)) { 
        move(currentIndex + 1); 
      } else {
        move(0); 
      }
    }, 4000); 
  } // end of function advance
  
  $.each($slides, function(index) { //for each slide in the object, run the function
    var $button = $('<i class="fa fa-circle" aria-hidden="true"></i>');
    if (index === currentIndex) {
      $button.addClass('active'); //if the index of the slide matches currentIndex, make it active
    }
    $button.on('click', function(){
      move(index); //when button is clicked, move to the slide using the index
    })
    .appendTo($this.find('.slide-buttons')); //add button to button div
    buttonArray.push($button); // add button to array
  }); //end of button making function
  
  advance(); // after all the buttons and everything is created, make the slider move!
  
});// end of .each function



//=======================function creating officer info
var officers = [];
//add image of the officer as well!
function officerInfo(pic, name, age, position, island, flag, quote) {
  this.pic = pic;
  this.name = name;
  this.age = age;
  this.position = position;
  this.island = island;
  this.flag = flag;
  this.quote = quote;
}

function intoArray () {
  var dez = new officerInfo("dez.jpg", "Desiree Gross", "Senior", "President", "Palau", "flag-palau.jpg", "I love MIC because ladi ladi ladi dah");
  var jerusa = new officerInfo("jerusa.jpg", "Jerusa Salas", "Sophomore", "Vice President & Political Chair", "Guam?", "guam.jpg", "I love MIC because ladi ladi ladi dah");
  var kenny = new officerInfo("kenny.jpg", "Kenny Nguyen", "Sophomore", "Secretary", "", "", "I love MIC because ladi ladi ladi dah");
  var rachael = new officerInfo("rachael.jpg", "Rachael Tamngin", "Senior", "Micronesia Night Chair", "Yap", "flag-yap.jpg", "I love MIC because ladi ladi ladi dah");
  var madisen = new officerInfo("madisen.jpg", "Madisen Arurang", "Sophomore", "Treasurer", "Palau", "flag-palau.jpg", "I love MIC because ladi ladi ladi dah");
  var priscilla = new officerInfo("priscilla.jpg", "Priscilla Donkor", "Senior?", "Public Relations", "Ghana?", "ghana.jpg", "I love MIC because ladi ladi ladi dah");
  var zoya = new officerInfo("zoya.jpg", "Zoya Hartman", "Junior", "MOM Chair", "Hawaii?", "hawaii.jpg", "I love MIC because ladi ladi ladi dah");
  var raeleen = new officerInfo("raeleen.jpg", "Raeleen Camacho", "Sophomore", "Historian", "Guam?", "guam.jpg", "I love MIC because ladi ladi ladi dah");
  
  officers.push.apply(officers, [dez, jerusa, kenny, rachael, madisen, priscilla, zoya, raeleen]);
}
                      
intoArray();
console.log(officers);

// is there a better way to do this??
$(officers).each(function () {
  var newRow = $('<div class="row officer">').appendTo('.officer-div');
  var officerImage = $('<div class="col-xs-4"><img class="pic" src="images/' + this.pic + '"></div>').appendTo(newRow);
  
  var officerInfoDiv = $('<div class="col-xs-8 officer-info">').appendTo(newRow);
  var officerInfo = $('<ul>').appendTo(officerInfoDiv);
  $(officerInfo).append(
  $('<li class="name"><h4>' + this.name + '</h4></li>'),
  $('<li class="flag"><img src="images/' + this.flag + '"></li>'),
  $('<li class="position">' + this.position + '</li>'),
  $('<li class="age">' + this.age + '</li>'),
  $('<li class="quote">"' + this.quote + '"</li>'));
  
});


//================sticky header 

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});