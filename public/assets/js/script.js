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

        $(".mainpic").attr("src", "assets/img/burger.gif")

        setTimeout(function(){
            document.getElementById("mainpic").setAttribute("src", "assets/img/burger_s.gif")
            }, 2000)
    })
})