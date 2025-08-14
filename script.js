// Immediately invoked function expression to avoid polluting the global scope.
(function ($) {
  // Handle navigation between content regions based on the URL hash. On page load
  // and whenever the hash changes, hide all regions then show the selected one.
  $(window).on('load hashchange', function () {
    // Hide all content regions
    $('.content-region').hide();
    // Remove active state from all menu links
    $('.main-menu a').removeClass('active');
    // Determine which region to show; default to the first menu link
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    // Show the selected region
    $(region).show();
    // Highlight the active menu item
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });

  // Once the DOM is ready, set up the theme toggle and populate the year
  $(document).ready(function () {
    // Toggle dark/light mode when clicking the toggle button
    $('#theme-toggle').on('click', function () {
      $('body').toggleClass('dark');
      // Update the toggle text depending on the current theme
      var isDark = $('body').hasClass('dark');
      $('#theme-toggle').text(isDark ? 'light mode' : 'dark mode');
    });
    // Populate the current year in the footer
    $('#year').text(new Date().getFullYear());
    // Trigger the hashchange handler on initial load to show the default region
    $(window).trigger('hashchange');
  });
})(jQuery);