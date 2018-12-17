var $grid;
var isoOptions;

$(function () {
    // Set the Isotope Grid Options
    isoOptions = {
        // options
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: '.col-md-4'
        }
    };

    // Initialize the Isotope Grid
    $grid = $('.grid-container').isotope(isoOptions);

    // The Filter Button Click. This will filter the Isotope Grid by the class selected
    $('.button-filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        currentFilter = filterValue; // Keep a variable set for the currently selected filter
        $grid.isotope({ filter: filterValue });
    });
});