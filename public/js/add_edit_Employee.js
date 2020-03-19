const employeeForm = document.getElementById('employee-form');
let formData = {};
formData["fullName"] = document.getElementById("fullName");
formData["email"] = document.getElementById("email");
formData["age"] = document.getElementById("age");
let prev_formData = {};
prev_formData['fullName'] = '';
prev_formData['email'] = '';
prev_formData['age'] = '';

let selectedRow = null;

async function onFormSubmit(e) {
    e.preventDefault();
    if(formData['fullName'].value == '' || formData['email'].value == ''|| formData['age'].value == '') return;

    if(selectedRow == null)
    {
        const sendBody = {
            fullName: formData['fullName'].value,
            email: formData['email'].value,
            age: formData['age'].value
        };

        try{
            const res = await fetch('/api/v1/employees',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendBody)
            });
            alert('Employee added!');
        } catch(err) {
            console.log(err);
            return;
        }
    } else {
        const params = {
            prev: {
                fullName: prev_formData['fullName'].value,
                email: prev_formData['email'].value,
                age: prev_formData['age'].value
            },
            newOne: {
                fullName: formData['fullName'].value,
                email: formData['email'].value,
                age: formData['age'].value
            }
        };

        try{
            const res = await fetch('/api/v1/employees',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            alert('Employee udated!');
        } catch(err) {
            console.log(err);
            return;
        }
    }

    window.location.href = '/index.html';
}

employeeForm.addEventListener('submit', onFormSubmit)
