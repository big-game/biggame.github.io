
var progressText = "DOVRŠENO";
var days = ["Svake nedjelje", "Svakog ponedjeljka", "Svakog utorka", "Svake srijede", "Svakog četvrtka", "Svakog petka", "Svake subote"];
var months = ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"];


function commentDate(days) {
  var now = new Date()
  now.setDate(now.getDate() - days);
  month = now.getMonth();
  daym = now.getDate();
  if (daym < 10) { daym = "0" + daym };
  return daym + ". " + months[month];
}

function introDay() {
	var now = new Date();
	return days[now.getDay()];
}

$(window).on('load',function(){
  $('#introModal').modal('show');
});

$(document).ready(function() {

  $('#q1 input, #q1 button').click(function(){
    $('#q1').delay(300).hide(0, function(){
      $('#q2').show(0);
    });
  });

  $('#q2 input, #q2 button').click(function(){
    $('#q2').delay(300).hide(0, function(){
      $('#q3').show(0);
    });
  });

  $('#q3 input, #q3 button').click(function(){
    $('#q3').delay(300).hide(0, function(){
      $('#q4').show(0);
    });
  });

  $('#q4 input, #q4 button').click(function(){
    $('.intro, #q4').delay(300).slideUp(function(){
      $('.validation').slideDown(function(){
        window.scrollTo(0, 0);
        validateAnswers();
      });
    });
  });

  function validateAnswers() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 25;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% " + progressText);

        if (current_progress >= 25) { $('.vc1').hide(0, function(){$('.vr1').show();}); }
        if (current_progress >= 50) { $('.vc2').hide(0, function(){$('.vr2').show();}); }
        if (current_progress >= 75) { $('.vc3').hide(0, function(){$('.vr3').show();}); }
        if (current_progress >= 100) { InitializeConfetti(); }

        if (current_progress >= 100) {
          clearInterval(interval);
          $('.validation').hide(0, function(){
            $('.prizes').slideDown();
          })
        }
            
    }, 1200);
  }

});
