// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function(){  
// $(".devour-it").on("click", "burgersToEat", function(event) {
//     event.preventDefault();
    
//     var id = $(this).data("id");

// console.log(id);
//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//     }).then(
//       function(newData) {
//         console.log("changed devour", newData);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });



  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

    // Send the DELETE request.
    // $.ajax("/api/burgers/" + id, {
    //   type: "DELETE"
    // }).then(
    //   function() {
    //     console.log("deleted cat", id);
        // Reload the page to get the updated list
        // location.reload();
  //     }
  //   );
  // });

// })
$( document ).ready(function() {
  console.log( "jquery is ready!" );
  $(".burgersToEat").on("click",function(event){
      event.preventDefault();
      console.log("devour this one");
     
      var id = $(this).attr("data-id");
      console.log(id);

      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );



  });


  $("#addBurger").on("click", function(event) {
    event.preventDefault();
    console.log("clicked add");
    var newBurgerName = $("#new_burger_name").val().trim();
 
     if(newBurgerName.length > 0)
     {
      var newBurger = {
        burger_name: newBurgerName
      };

      console.log("sending", newBurger);
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );

     }

  });




});