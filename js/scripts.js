console.log(Date()); //***

//Listening for links that don't need to be followed.
jQuery('body').on('click keypress', '.doNotFollowLink', function(event)
{
    var code = event.key || event.code; //Get keycode.
    if (event.type != 'click' && code != ' ' && code != 'Enter') //Check for click, space, and enter. (in that order)
        return; //If it isn't any of those, don't worry about it.
    
    if (jQuery(this).hasClass("disabledButton"))
        return;

    event.preventDefault();
    event.stopPropagation();

    var linkObject = jQuery(this);
    var givenURL = jQuery(linkObject).attr('href');

    var querySeparator = "&";
    if (!givenURL.includes("?"))
        var querySeparator = "?";

    if (jQuery(linkObject).attr('retrieveContent') != 'true')
        return;
    else
    {
        givenURL = givenURL + querySeparator + 'onlyMainContent';
        querySeparator = "&";
    }

    //AJAX call to the PHP page.
    jQuery.ajax({url: givenURL, type: 'POST',
        success: function(data)
        {
            if(data)
            {
                //Data has been returned.
                jQuery('main').html(data);

                if (!jQuery(linkObject).hasClass('selectedStatic'))
                {
                    jQuery('[select-group="' + jQuery(linkObject).attr("select-group") + '"]').removeClass('selectedButton');
                    jQuery(linkObject).addClass('selectedButton');
                }
            }
        }
    });
});









