var xhr = new XMLHttpRequest();
var url = './patients.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    var patients = xhr.response.patients;
    var patientsDiv = document.getElementById('patients');

    patients.forEach(function(patient) {
        var patientDiv = document.createElement('div');
        patientDiv.classList.add('patient');

        var pName = document.createElement('h3');
        pName.textContent = patient.name;
        
        var pAge = document.createElement('p');
        pAge.textContent = `Age: ${patient.age}`;



        patientDiv.appendChild(pName)
        patientDiv.appendChild(pAge);

        patientsDiv.appendChild(patientDiv)
    });

    
}

xhr.send();