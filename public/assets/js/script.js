$(document).ready(function() {
    $(".devour-form").on("submit", function(event) {
        event.preventDefault();

        var burgerId = $(this).children(".burgerId").val();
        console.log(burgerId);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burgerId
        }).then(function(data) {
            location.reload();
        })
    })
})