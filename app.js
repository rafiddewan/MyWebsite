window.setInterval(function() { ($('#icon').text() == 'RD_') ? $('#icon').text('RD') : $('#icon').text('RD_') }, 300);
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function(){
  $('#myVolunteerBtn').on('click', function() {
    $('#myVolunteerBtn').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myVolunteerBtn1').on('click',function() {
    this.blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myVolunteerBtn2').on('click',function() {
    $('#myVolunteerBtn2').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myVolunteerBtn3').on('click',function() {
    $('#myVolunteerBtn3').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myVolunteerBtn4').on('click',function() {
    $('#myVolunteerBtn4').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myVolunteerBtn5').on('click',function() {
    $('#myVolunteerBtn5').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myVolunteerBtn6').on('click',function() {
    $('#myVolunteerBtn6').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myAwardBtn1').on('click',function() {
    $('#myAwardBtn1').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myAwardBtn2').on('click',function() {
    $('#myAwardBtn2').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myAwardBtn3').on('click',function() {
    $('#myAwardBtn3').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
  $('#myAwardBtn4').on('click',function() {
    $('#myAwardBtn4').blur();
    var $el = $(this),
      textNode = this.lastChild;
    $el.find('span').toggleClass('glyphicon-fire glyphicon-tint');
    textNode.nodeValue = 'Read ' + ($el.hasClass('showRead') ? 'less' : 'more')
    $el.toggleClass('showRead');
  });
});
  

$('body').scrollspy({ target: '#navbar-collapse-main' })
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })  
$(document).ready(function() {
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
        $("#text").slideUp();
      }
    });
  });