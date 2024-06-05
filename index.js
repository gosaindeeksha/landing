 // JavaScript to synchronize the carousels

 document.getElementById('prev-but').addEventListener('click', function() {
    $('#carousel1').carousel('prev');
    $('#carousel2').carousel('prev');
    $('#carousel3').carousel('prev');
});

document.getElementById('next-but').addEventListener('click', function() {
    $('#carousel1').carousel('next');
    $('#carousel2').carousel('next');
    $('#carousel3').carousel('prev');
});



