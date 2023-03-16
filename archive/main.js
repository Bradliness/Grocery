function saveToTextFile(data) {
  $.ajax({
    url: "save.php",
    type: "POST",
    data: {data: data},
    success: function(response) {
      console.log(response);
    },
    error: function(xhr, status, error) {
      console.log("Error: " + error.message);
    }
  });
}

