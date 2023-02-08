// // This .on("click") function will trigger the AJAX Call
// $(".find-movie").on("click", function(event) {
//    //      // Preventing the submit button from trying to submit the form
//    //   // We're optionally using a form so the user may hit Enter to search instead of clicking the button
//       event.preventDefault();
//    //   // Here we grab the text from the input box
//       var movie = $("#movie-input").val();
//    //     // Here we construct our URL http://www.omdbapi.com/?apikey=[yourkey]&
//        var queryURL = "http://www.omdbapi.com/?t=" + movie + "=&apikey=7d82ee7f";
//        $.ajax({
//            url: queryURL,
//            method: "GET"
//          }).then(function(response){
//            console.log(response);
//             var tr = $("<tr>");
//             var tableBody = $("tbody tr");
 
//            // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
            
//             var titleEl = $("<td>").text(response.Title);
//             var yearEl = $("<td>").text(response.Year);
//             var ratedEl = $("<td>").text(response.Rated);
//             var clickDiv = $("<div>").on("mousedown", function() { mDown(this); }).text(response.Title);
 
           
 
//              //Get the  row of the tbody element
//              var firstCol = $("tbody tr").eq(0);
 
//              // // Get the first column of the first row
//              var nameRow = firstCol.find("td").eq(0);
//              var yearRow = firstCol.find("td").eq(1);
//              var ratingRow = firstCol.find("td").eq(2);
 
//             $(clickDiv).appendTo(nameRow);
//             $(yearEl).appendTo(yearRow);
//             $(ratedEl).appendTo(ratingRow);
                           
   
//          });
 
//     });
 
 
//    // Search Any Movie on Search Bar
//  form.addEventListener("submit", (e) => {
//    e.preventDefault();
 
//    const searchTerm = search.value;
//    selectedGenre = [];
//    setGenre();
//    if (searchTerm) {
//      getMovies(searchURL + "&query=" + searchTerm);
//    } else {
//      getMovies(API_URL);
//    }
//  });
 
//     function mDown(obj) {
//       obj.style.backgroundColor = "#1ec5e5";
//       var div = $(obj).text()
//       console.log(div)
//       // Search Any Movie on Search Bar
//  div.addEventListener("click", (e) => {
//    e.preventDefault();
 
//    const searchTerm =  div.text();
//    selectedGenre = [];
//    setGenre();
//    if (searchTerm) {
//      getMovies(searchURL + "&query=" + searchTerm);
//    } else {
//      getMovies(API_URL);
//    }
//  });
//     }
  

//  var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

   
  
//    //Get the  row of the tbody element
// var firstCol = $("tbody tr").eq(0);
// var secondCol = $("tbody tr").eq(1);
// var thirdCol = $("tbody tr").eq(2);
// var fourthCol = $("tbody tr").eq(3);
// var fifthCol = $("tbody tr").eq(4);

// // Get the column of the first row
// var nameRow = secondCol.find("td").eq(0);
// var yearRow = secondCol.find("td").eq(1);
// var rattingRow = secondCol.find("td").eq(2);

//    var titlesEl = "<tr><td>titleEl</td> </tr>";
//    var yearsEl = "<tr><td>yearEl</td> </tr>";
//    var ratedsEl = "<tr><<td>ratedEl</td> </tr>";

//    var tableBody = $("tbody tr td");
//    $(titlesEl).appendTo(nameRow);
//    $(yearsEl).appendTo(yearRow);
//    $(ratedsEl).appendTo(rattingRow);

 

//    tableBody.each(function(index, element) {
//       var nameRow = $(element).find("td").eq(0);
//       var yearRow = $(element).find("td").eq(1);
//       var ratingRow = $(element).find("td").eq(2);

      
//     })

//     for (i = 0; i < tableBody.length; i++){
//       if (tableBody[i] === "" ){
//          onsole.log("The first td element is empty");
//          $(titlesEl).appendTo(nameRow);
//          $(yearsEl).appendTo(yearRow);
//          $(ratedsEl).appendTo(ratingRow);
//       } else {
//          console.log("The first td element is not empty");
//          console.log(tableBody[i])
//       }
   
//     }
   //Get the  row of the tbody element
//    var firstCol = $("tbody tr").eq(0);
//    var secondCol = $("tbody tr").eq(1);
//    var thirdCol = $("tbody tr").eq(2);
//    var fourthCol = $("tbody tr").eq(3);
//    var fifthCol = $("tbody tr").eq(4);

    // var table = $(".myTable")
    // var rows = $("tbody tr")
    // for (let i = 0; i < rows.length; i++) {
    //     console.log(rows[i].textContent);
      
    //     var firstCol = $("tbody tr").eq(0);
    //     var secondCol = $("tbody tr").eq(1);
    //     var thirdCol = $("tbody tr").eq(2);
    //     var fourthCol = $("tbody tr").eq(3);
    //     var fifthCol = $("tbody tr").eq(4);
    //     console.log(firstCol.length);
      
    //     if (firstCol === "") {

    //       console.log("The first cell in row " + (i + 1) + " is empty");
    //       firstCol = $("tbody tr").eq(0);

    //        nameRow = firstCol.find("td").eq(0);
    //        yearRow = firstCol.find("td").eq(1);
    //        ratingRow = firstCol.find("td").eq(2);

    //     } else if (secondCol.text() === "") {
    //         secondCol = $("tbody tr").eq(1); 

    //         nameRow = secondCol.find("td").eq(0);
    //         yearRow = secondCol.find("td").eq(1);
    //         ratingRow = secondCol.find("td").eq(2);
    //     } else if (thirdCol.text() === "") {
    //         thirdCol = $("tbody tr").eq(2); 

    //         nameRow = thirdCol.find("td").eq(0);
    //         yearRow = thirdCol.find("td").eq(1);
    //         ratingRow = thirdCol.find("td").eq(2);
    //      } else if (fourthCol.text() === "") {
    //         fourthCol = $("tbody tr").eq(3); 

    //         nameRow = fourthCol.find("td").eq(0);
    //         yearRow = fourthCol.find("td").eq(1);
    //         ratingRow = fourthCol.find("td").eq(2);
    //      }else if (fifthCol.text() === "") {
    //         fifthCol = $("tbody tr").eq(4);

    //         nameRow = fifthCol.find("td").eq(0);
    //         yearRow = fifthCol.find("td").eq(1);
    //         ratingRow = fifthCol.find("td").eq(2);
    //      } else {
    //       console.log("The first cell in row " + (i + 1) + " is not empty");
    //     }
    //   }
     
      
      
      
      
      