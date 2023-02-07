<<<<<<< HEAD

=======
>>>>>>> 755e31243ae771273146765bf6d9967e8b2a8cbb
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
<<<<<<< HEAD
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
   
 
  
   
   
   
 
   
   
=======
            var tableBody = $("tbody tr");

           // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
            
            var titleEl = $("<td>").text(response.Title);
            var yearEl = $("<td>").text(response.Year);
            var ratedEl = $("<td>").text(response.Rated);

             //Get the  row of the tbody element
             var firstCol = $("tbody tr").eq(0);

             // // Get the first column of the first row
             var nameRow = firstCol.find("td").eq(0);
             var yearRow = firstCol.find("td").eq(1);
             var ratingRow = firstCol.find("td").eq(2);

             $(titleEl).appendTo(nameRow);
            $(yearEl).appendTo(yearRow);
            $(ratedEl).appendTo(ratingRow);
                           
          
          
         });
  
   
    });

   //  var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

   //  // Insert a row at the end of table
   //  var newRow = tbodyRef.insertRow();
    
   //  // Insert a cell at the end of the row
   //  var newCell = newRow.insertCell();
    
   //  // Append a text node to the cell
   //  var newText = document.createTextNode('new row');
   //  newCell.appendChild(newText);
  
   //Get the  row of the tbody element
// var firstCol = $("tbody tr").eq(0);
// var secondCol = $("tbody tr").eq(1);
// var thirdCol = $("tbody tr").eq(2);
// var fourthCol = $("tbody tr").eq(3);
// var fifthCol = $("tbody tr").eq(4);

// // Get the first column of the first row
// var nameRow = firstCol.find("td").eq(0);
// var yearRow = firstCol.find("td").eq(1);
// var rattingRow = firstCol.find("td").eq(2);

   // var titlesEl = "<tr><td>titleEl</td> </tr>";
   // var yearsEl = "<tr><td>yearEl</td> </tr>";
   // var ratedsEl = "<tr><<td>ratedEl</td> </tr>";

   // var tableBody = $("tbody tr");

 

   // tableBody.each(function(index, element) {
   //    var nameRow = $(element).find("td").eq(0);
   //    var yearRow = $(element).find("td").eq(1);
   //    var ratingRow = $(element).find("td").eq(2);

    
   //    // Add text to each row

      
   //  })

   //  for (i = 0; i < tableBody.length; i++){
   //    if (tableBody[i] === "" ){
   //       onsole.log("The first td element is empty");
   //       $(titlesEl).appendTo(nameRow);
   //       $(yearsEl).appendTo(yearRow);
   //       $(ratedsEl).appendTo(ratingRow);
   //    } else {
   //       console.log("The first td element is not empty");
   //       console.log(tableBody[i])
   //    }
   
   //  }

   


   

//var newRowContent = "<tr><td>titleEl</td><td>yearEl</td><td>ratedEl</td> </tr>";
>>>>>>> 755e31243ae771273146765bf6d9967e8b2a8cbb
