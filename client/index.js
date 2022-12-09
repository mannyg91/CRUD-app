document.addEventListener('DOMContentLoaded', function() {
    loadHTMLTable([]); //passes in empty array
})

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
    let tableHTML = "";

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}


addNameBtn = document.getElementById("add-name-btn");