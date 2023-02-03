var titleEl,  yearEl, ratedEl;

// This .on("click") function will trigger the AJAX Call
$(".find-movie").on("click", function(event) {
   //      // Preventing the submit button from trying to submit the form
   //   // We're optionally using a form so the user may hit Enter to search instead of clicking the button
      event.preventDefault();
   //   // Here we grab the text from the input box
      var movie = $("#movie-input").val();
   //     // Here we construct our URL http://www.omdbapi.com/?apikey=[yourkey]&
       var queryURL = "http://www.omdbapi.com/?t=" + movie + "=&apikey=7d82ee7f";
       $.ajax({
           url: queryURL,
           method: "GET"
         }).then(function(response){
           console.log(response);
            var tr = $("<tr>");
           // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
             titleEl = $("<td>").text(response.Title);
             yearEl = $("<td>").text(response.Year);
             ratedEl = $("<td>").text(response.Rated);
            // console.log("Title: " + response.Title)
            // console.log("Year: " + yearEl)
            // console.log("Rated: " + ratedEl)
             // Append the td elements to the new table row
            tr.append(titleEl, yearEl, ratedEl);
            // Append the table row to the tbody element
            $("tbody").append(tr);

           
         });
   // console.log(movie)
   // console.log("meow")
   
    });
