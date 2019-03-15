$(document).ready(() => {
  $('.menu-button').on('click',() => {
    $('#nav-dropdown').slideToggle('slow');
  });
	
  $(".login-button").on("click", () => {
    $(".login-form").slideToggle();
  });
  
  $(".arrow-one").on("click", () => {
    $(".shoe-details-one").toggle();
  });
  
  $(".sizes-one").on("click", () => {
    $(".text-one").fadeIn(1000);
  });
  
  $(".arrow-two").on("click", () => {
    $(".shoe-details-two").toggle();
  });
  
  $(".sizes-two").on("click", () => {
    $(".text-two").fadeIn();
  });
  
  $(".arrow-three").on("click", () => {
    $(".shoe-details-three").toggle();
  });
  
  $(".sizes-three").on("click", () => {
    $(".text-three").fadeIn(1000);
  });
  
});

(document).ready(() => {
    $('.hide-button').on('click', () => {
      $('.first-image').hide();
    });
    
    $('.show-button').on('click', () => {
      $('.first-image').show();
    });
    
    $('.toggle-button').on('click', () => {
      $('.first-image').toggle();
    });
    
    $('.fade-out-button').on('click', () => {
        $('.fade-image').fadeOut(500);
    });
    
    $('.fade-in-button').on('click', () => {
        $('.fade-image').fadeIn(4000);
    });
    
  });

  
  $('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);
  });
  
  $('.fade-toggle-button').on('click', () => {
     $('.fade-image').fadeToggle("fast", "linear");
  });
});



$('.up-button').on('click', () => {
    $('.slide-image').slideUp(100);
});

$('.down-button').on('click', () => {
$('.slide-image').slideDown("slow");
});

$('.slide-toggle-button').on('click', () => {
$('.slide-image').slideToggle();
});
