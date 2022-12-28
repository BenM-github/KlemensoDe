const searchBar = document.querySelector('#block-klemenso-search')
const searchBarInputField = document.querySelector('.block-search').document.querySelector('.js-form-item')

searchBar.addEventListener('mouseover', ()=> {
    searchBarInputField.style.display = 'block'
    searchBarInputField.style.width = '100%'
})
searchBar.addEventListener('mouseout', ()=> {
    searchBarInputField.style.display = 'none'
    searchBarInputField.style.width = '0'
})


/*
    // Search block old
    $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').css({'width' : '0px', 'display' : 'none'});
    var value = document.getElementById('edit-search-block-form-1').value;

    $("#edit-search-block-form-1").blur(function() {
        if (this.value == '') {this.value = value;}
        $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').animate({
            width: '0px',
            display : 'none'
        }, 'slow', function() {
            $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').css({'width' : '0px', 'display' : 'none'});
        });
    });

    $("#edit-search-block-form-1").focus(function() {
        if (this.value == value) {this.value = '';}
    });

    $("#edit-search-submit, #edit-search-block-form-1-wrapper").hover(
        function() {
            $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').css({'margin-right' : '0px'});
        },
        function() {
            $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').css({'margin-right' : '-10px'});
        }
    );

    $("#search-block-form").hoverIntent({
         over: function () {
            $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').css({'display' : 'block', 'margin-right' : '0px'});
            $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').animate({
                width: '220px'
            }, 'slow', function() {
                $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').css({'width' : '220px'});
            });
         },
         timeout: 800,
         out: function () {
            if(document.getElementById('edit-search-block-form-1').value == value) {
                $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').animate({
                    width: '0px',
                    display : 'none'
                }, 'slow', function() {
                    $('#edit-search-block-form-1, #edit-search-block-form-1-wrapper').css({'width' : '0px', 'display' : 'none'});
                });
            }
         }
    });
  
    $("#edit-search-submit").click(function() {
        if(document.getElementById('edit-search-block-form-1-wrapper').style.display == 'none' ||
            document.getElementById('edit-search-block-form-1').value == value ||
            document.getElementById('edit-search-block-form-1').value == '') {
            
            return false;
        }
    });
    /////////////////////////////////
*/