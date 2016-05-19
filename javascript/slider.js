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
function officerInfo(name, age, position, island, flag, quote) {
  this.name = name;
  this.age = age;
  this.position = position;
  this.island = island;
  this.flag = flag;
  this.quote = quote;
}

function intoArray () {
  var jane = new officerInfo("Jane Doe", 24, "President", "Yap", "flag-yap.jpg", "I love MIC because ladi ladi ladi dah");
  var john = new officerInfo("John Doe", 20, "Historian", "Yap", "../images/flag-yap.jpg", "I love MIC because ladi ladi ladi dah");
  
  officers.push.apply(officers, [jane, john]);
}
                      
intoArray();
console.log(officers);

// is there a better way to do this??
$(officers).each(function () {
  $('.officer-div').append(
  $('<h4 class="name">' + this.name + '</h4>'),
  $('<ul>'),
  $('<li class="age">Age: ' + this.age + '</li>'),
  $('<li class="position">Officer Position: ' + this.position + '</li>'),
  $('<li class="island">Related Island(s): ' + this.island + '</li>'),
  $('<li class="flag"><img src="images/' + this.flag + '"></li>'),
  $('<li class="quote">"' + this.quote + '"</li>'),
  $('</ul>')
  );
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