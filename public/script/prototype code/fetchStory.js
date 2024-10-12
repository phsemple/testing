<script>
  function fetchStory(storyId) {
    // Construct the URL with the story ID as a parameter
    const url = `/get-story/${storyId}`; // Using a URL path parameter

    // Perform the fetch request
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Handle the JSON data
        // You can also update the UI with the fetched data here
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
</script>

const express = require('express');
const app = express();

// Define the endpoint with a dynamic parameter
app.get('/get-story/:id', (req, res) => {
  const storyId = req.params.id;
  // Fetch or process the story with the given ID
  const story = getStoryById(storyId); // Assume you have a function that gets the story by ID

  if (story) {
    res.json(story);
  } else {
    res.status(404).json({ error: 'Story not found' });
  }
});

function getStoryById(id) {
  // Example function to get a story by ID
  // Replace this with your actual logic to fetch a story from a database or file
  const stories = {
    213: { id: 213, title: 'Story 213', content: 'This is the content of story 213' },
    // other stories...
  };
  return stories[id];
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});