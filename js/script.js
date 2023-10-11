<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, 'easeOutBounce', function() {
        window.location.hash = hash;
      });
    }
  });
});
