$(document).ready(function() {
  var jObj={"Person":[
            {"FirstName":"Sagarchand",
            "LastName":"Samal",
            "Phone":"9040819543",
            "DOB":"22/07/1995",
            "Address":"Bhubaneswar"},
            {"FirstName":"Deviparsad",
            "LastName":"Guru",
            "Phone":"9040114543",
            "DOB":"12/09/1992",
            "Address":"Jajpur"},
            {"FirstName":"Rakesh",
            "LastName":"Biswal",
            "Phone":"9854587887",
            "DOB":"22/09/1993",
            "Address":"Dhenkanal"},
            {"FirstName":"Rakesh",
            "LastName":"Mohanty",
            "Phone":"8714854584",
            "DOB":"17/11/1985",
            "Address":"Jatni"},
            {"FirstName":"Asutosh",
            "LastName":"Yadav",
            "Phone":"9875876517",
            "DOB":"22/09/1987",
            "Address":"UP"},
            ]
           }
    $.each(jObj.Person,function(i, data) {
      var tdata = `<tr>
        <td>${i+1}</td>
        <td>${data.FirstName}</td>
        <td>${data.LastName}</td>
        <td>${data.DOB}</td>
        <td>${data.Phone}</td>
        <td>${data.Address}</td>
      </tr>`

      $("#tdatas").append(tdata);
    });
});
