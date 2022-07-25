
const HTTP = new XMLHttpRequest();
const team_id = 39;
const api_url = `https://api.opendota.com/api/teams/${team_id}`
HTTP.open('GET', api_url);

HTTP.send();

HTTP.onload = function() {
    if (HTTP.status === 200) {
        console.log(HTTP.responseText);
        team_data = JSON.parse(HTTP.responseText);
        console.log(team_data);
document.getElementsByTagName("body")[0].innerHTML = `<h1>${team_data["team_id"]}</h1>`
    }
    }
