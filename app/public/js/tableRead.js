async function readTable() {

    const res = await fetch('/api/v1/employees');
    const tableData = await res.json();

    tableData.data.map(data => {
    let table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data['fullName'];
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data['email'];
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data['age'];
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<button type="button" class="btn btn-success btn-xs" onClick="onEdit(this)">&nbsp; Edit &nbsp;</button>
                       <button type="button" class="btn btn-danger btn-xs" onClick="onDelete(this)">Delete</a>`;
    });
}

onEdit = (td) => {
    if (confirm('Are you sure to update this record ?')) {
        selectedRow = td.parentElement.parentElement;
        prev_formData['fullName']  = selectedRow.cells[0].innerHTML;
        prev_formData['email']  = selectedRow.cells[1].innerHTML;
        prev_formData['age']  = selectedRow.cells[2].innerHTML;

        document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
        document.getElementById("email").value = selectedRow.cells[1].innerHTML;
        document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    }
}

async function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        selectedRow = td.parentElement.parentElement;
        prev_formData['fullName']  = selectedRow.cells[0].innerHTML;
        prev_formData['email']  = selectedRow.cells[1].innerHTML;
        prev_formData['age']  = selectedRow.cells[2].innerHTML;

        const params = {
            prev: {
                fullName: prev_formData['fullName'].value,
                email: prev_formData['email'].value,
                age: prev_formData['age'].value
            }
        };
        try{
            const res = await fetch('/api/v1/employees',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            window.location.href = '/index.html';
        } catch(err) {
            console.log(err);
            return;
        }
        
    }
}

readTable();