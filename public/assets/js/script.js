$(document).ready(function() {
    $(".devour-form").on("submit", function(event) {
        

        var burgerId = $(this).children(".burger_id").val();
        console.log(burgerId);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burgerId
        }).then(function(data) {
            location.reload();
        })
    })
})