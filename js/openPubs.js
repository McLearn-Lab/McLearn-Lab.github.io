/**
 * parse the URL and determine which publications to open.
 * Used when clicking on a link to a project from the homepage
 */

$(document).ready(function() {
    //parse url for open="" parameter
    var urlParams = new URLSearchParams(window.location.search);
    var openSection = urlParams.get('open');

    if (openSection) {
      //open collapsed section
      $('#' + openSection).addClass('in');

      //make triangle point downwards
      $('#' + openSection + '-toggler').attr('aria-expanded', 'true');
      $('#' + openSection)[0].scrollIntoView({
        behavior: 'smooth'
      });
    }
  });