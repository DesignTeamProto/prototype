
// iNav options
jQuery(document).iNav({
	/**
	 *  TODO Codeur Start:
	 *  - Optional settings here, see defaults in '/js/jquery.inav.js'
	 *  - For example, to push extra elements in the responsive navigation:
	 *      navContainers: [jQuery('#js-mainmenu'), jQuery('#js-topmenu')]
	 *  - Always push jQuery objects with an ID in the above array
	 */
});

// Set a class on the html tag so we can style a smaller variant of the header (more info in jquery.header.js)
jQuery(window).on('load resize scroll', function(){
	setHeader(200, 1024);
});

// When all resources are loaded...
jQuery(window).on('load', function(){
	//Check if the user is loggedin
	if($('body').is('#js-loggedin')) {
		$('#js-page-loader').show();

		setTimeout(function(){
			$('body').removeClass('modal-open');
			$('#js-page-loader').addClass('hide');
		}, 1500);
	}


	// Remove class when Javascript is loaded
	jQuery('body').removeClass('preload');
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setCaretPosition(ctrl, pos)
{
	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}
 
$.fn.resizableInput = function(el, factor) {
	if (el) {
	  var int = Number(factor) || 7.7;
	  
	  function resize() {
	  	el.style.width = ((el.value.length+1) * int) + 'px';
	  }
	  resize();
	}
};

$(document).on('input', '.resizable',function(e) {
	var id = $(this).attr("id");
	$.fn.resizableInput(document.getElementById(id),9);
});
/*
** Returns the caret (cursor) position of the specified text field.
** Return value range is 0-oField.value.length.
*/
function doGetCaretPosition (oField) {

  // Initialize
  var iCaretPos = 0;

  // IE Support
  if (document.selection) {

    // Set focus on the element
    oField.focus();

    // To get cursor position, get empty selection range
    var oSel = document.selection.createRange();

    // Move selection start to 0 position
    oSel.moveStart('character', -oField.value.length);

    // The caret position is selection length
    iCaretPos = oSel.text.length;
  }

  // Firefox support
  else if (oField.selectionStart || oField.selectionStart == '0')
    iCaretPos = oField.selectionStart;

  // Return results
  return iCaretPos;
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

jQuery(document).ready(function(){
	var offset = 250;	 
	var duration = 300;

	//TEMPORARY NAVIGATION
	$('#js-mainmenu a, #js-nav-wrapper a').click(function(event) {
		event.preventDefault();

		var component = $(this).attr('href').replace(/\//g, ''),
			scrollpoint = '#'+component,
			offset = 0,
			headerHeight = $('.page-header').height() - 1;

		//Check scrolling position
		if(component != '') 
			offset = $(scrollpoint).offset().top - headerHeight;

		//Remove the active class and then add the class to the clicked item
		$(this).parent().parent().children().removeClass('active');
		$(this).parent().addClass('active');

		//Animate
		$('html, body').animate( { scrollTop: offset}, 750, 'swing');

		//Close mobile menu if open
		$('#js-nav-trigger').prop('checked', false);

		return false;
	});

	//Check if there is a hash in the URL
	if(window.location.hash) {
		event.preventDefault();
		var hash = window.location.hash;
	}
	 
	if ($('#js-backtotop').length) {
	    var scrollTrigger = 500, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#js-backtotop').addClass('show');
	            } else {
	                $('#js-backtotop').removeClass('show');
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#js-backtotop').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
});

//Check if element contains scrollbar
$.fn.hasScrollBar = function() {
    return this.get(0).scrollHeight > this.get(0).clientHeight;
}