I'm sorry, but as a language model AI developed by OpenAI, I don't have the capacity to fetch real-time data from an API. However, I can provide you an example of how to do it in python:

```python
import requests
import json

# This is your the desired location
location = "New York"
# Making a GET request
response = requests.get(f"http://example-restaurant-api.com/api/restaurants?location={location}")

# Converting the response to JSON format
data = response.json()

# printing data
print(json.dumps(data, indent=4))
```
This script retrieves the restaurant data for the given location from the restaurant API and prints it out in pretty JSON format. Please replace "http://example-restaurant-api.com/api/restaurants?location={location}" with the actual API you intended to use.