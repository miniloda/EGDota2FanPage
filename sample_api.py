import requests
# "team_id":39 is EG's team id
team_id = 39
team_request = requests.get("https://api.opendota.com/api/teams/{team_id}".format(team_id=team_id))
print(team_request.status_code)
team_data = team_request.json()


