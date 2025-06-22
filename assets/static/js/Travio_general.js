document.addEventListener("DOMContentLoaded", function () {
    console.log("📢 DOM Content Loaded!");

    var formElement = document.getElementById("location");

    if (!formElement) {
        console.error("❌ Form not found! Check if the ID is correct.");
        return;
    }

    console.log("✅ Form found:", formElement);

    formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("🚀 Form submission triggered!");

        var formData = new FormData(formElement);
        var jsonData = {};  
        
        // Convert FormData to JSON
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        console.log("📤 Sending Form Data:", jsonData);

        fetch("http://127.0.0.1:5000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData) 
        })
        .then(response => response.json())
        .then(data => {
            console.log("✅ Response received:", data);
            alert(data.message || "Email sent successfully!");

            if (formElement && typeof formElement.reset === "function") {
                formElement.reset();
            }
        })
        .catch(error => {
            console.error("❌ Error sending email:", error);
            alert("Error sending email.");
        });
    });
});



$(document).on('mouseenter', '.hasDropdown.holidays', function(){
    $('.holidays_dropdown').show();
}).on('mouseleave', '.hasDropdown.holidays', function(){
    $('.holidays_dropdown').hide();
});

$(document).on('mouseenter', '.holidays_dropdown_container .tier_1 li', function(){
    $('.tier_1 li').removeClass('active');
    $(this).addClass('active');

    var itemName = $(this).attr('data-itemName');

    $('.holidays_dropdown .submenu').hide();
    $('.'+itemName).show();
});

//=====COLLECTIONS DROPDOWN=====//

$(document).on('mouseenter', '.hasDropdown.collections', function(){
    $('.collections_dropdown').show();
}).on('mouseleave', '.hasDropdown.collections', function(){
    $('.collections_dropdown').hide();
});

$(document).on('mouseenter', '.collections_tier_1_item', function(){
  $('.collections_tier_1_item').removeClass('active');
  $(this).addClass('active');

  var itemName = $(this).attr('data-collection-type');

  $('.collections_dropdown .tier_2_container').hide();
  $('.'+itemName).show();
});

//=====MORE DROPDOWN=====//

$(document).on('mouseenter', '.hasDropdown.more', function(){
    $('.more_dropdown').show();
}).on('mouseleave', '.hasDropdown.more', function(){
    $('.more_dropdown').hide();
});

//=====SITE PROPERTY SELECTOR DROPDOWN=====//

$(document).on('mouseenter', '.hasDropdown.sitePropertySelector', function(){
    $('.sitePropertySelector_dropdown').show();
}).on('mouseleave', '.hasDropdown.sitePropertySelector', function(){
    $('.sitePropertySelector_dropdown').hide();
});



//=====MOBILE MENU OPEN CLOSE=====//
// $(document).on('click', '.mobile_menu_button', function(){
//     $('.layover').show();
//     $('.mobile_menu').animate({
//         left:'0'
//     }, 200);
//     $('.mobile_menu').addClass('active');
//     $('.supercontainer').css({
//         "-webkit-transform":"translate(85%,0)"
//     });
// });

//=====MOBILE MENU NAVIGATION=====//
$(document).on('click', '.tier_1 .hasdropdown', function(){
    var classname= $(this).attr('data-name');

    $('.tier_2').animate({
        'left':'0'
    }, 200);
    $('.tier_2 ul').hide();
    $('.tier_2 .'+classname+'').show();
});
$(document).on('click', '.tier_2 .tier_back', function(){
    $('.tier_2').animate({
        'left':'100%'
    }, 200);
    setTimeout(function(){
        $('.tier_2 ul').hide();
    }, 300);
});

$(document).on('click', '.tier_2 .hasdropdown', function(){
    var classname= $(this).attr('data-name');

    $('.tier_3').animate({
        'left':'0'
    }, 200);
    $('.tier_3 ul').hide();
    $('.tier_3 .'+classname+'').show();
});
$(document).on('click', '.tier_3 .tier_back', function(){
    $('.tier_3').animate({
        'left':'100%'
    }, 200);
    setTimeout(function(){
        $('.tier_3 ul').hide();
    }, 300);
});
