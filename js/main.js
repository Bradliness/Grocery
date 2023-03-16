function saveData() {
    // Get the list of data from the HTML page
    var data = document.getElementById("itemList").value;

    // Convert the list of data to a JSON object
    var dataJSON = JSON.stringify(data);

    // Create a new Blob containing the data
    var blob = new Blob([data], { type: "text/html" });

    // Send the data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveData.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(dataJSON);

    // Create a link to the Blob and click it to initiate the download
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  //maybe the line below will worK?
  //link.rel = createObject(text)archive/archive.html
  link.download = "archive/archive.html";
  link.click();
}


/*
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', e => {
    if (e.target.checked) {
      e.target.nextElementSibling.classList.add('checked');
    } else {
      e.target.nextElementSibling.classList.remove('checked');
    }
  });
});
*/
