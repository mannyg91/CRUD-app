document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:5000/getAll') //when document is loaded, get
        .then(response => response.json())
        .then(data => loadHTMLTable(data['data']));

    loadHTMLTable([]); //passes in empty array
})

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    console.log(data);

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}


addNameBtn = document.getElementById("add-name-btn");