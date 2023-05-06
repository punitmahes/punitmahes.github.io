// Smooth scrolling
$('nav a').on('click', function(event) {
    if (this.hash !== '') {
    event.preventDefault();
    
    const hash = this.hash;
    
    $('html, body').animate(
    {
    scrollTop: $(hash).offset().top
    },
    800
    );
    }
    });
    
    // Form submission
    $('form').on('submit', function(event) {
    event.preventDefault();
    
    // Send form data to server
    });
    
    // Dark mode toggle
    $('#mode-toggle').on('click', function() {
    $('body').toggleClass('dark-mode');
    });
    