const express = require('express'); // Import Express framework

const app = express(); // Create an Express application
const port = 3000; // Define the port number for the server

// Example JSON data (you could also read this from a file)
const storyData = {
  story: [
    {
      storyid: "story001",
      pages: [
        {
          pagenum: 1,
          image: "image1.jpg",
          translations: [
            {
              lang: "en",
              audio: "audio_en_page1.mp3",
              text: "Once upon a time..."
            },
            {
              lang: "sw",
              audio: "audio_sw_page1.mp3",
              text: "Hapo zamani za kale..."
            }
          ]
        },
        {
          pagenum: 2,
          image: "image2.jpg",
          translations: [
            {
              lang: "en",
              audio: "audio_en_page2.mp3",
              text: "The adventure begins."
            },
            {
              lang: "sw",
              audio: "audio_sw_page2.mp3",
              text: "Safari inaanza."
            }
          ]
        }
      ]
    }
  ]
};

// Route to handle the GET request
app.get('/get-story', (req, res) => {
  res.json(storyData); // Send the JSON data
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});