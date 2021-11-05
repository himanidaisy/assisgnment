test_data = '[["Pakistan", 23], ["Pakistan", 127], ["India", 3], ["India", 71], ["Australia", 31], ["India", 22], ["Pakistan", 81]]';
server_url = 'https://assessments.reliscore.com/api/cric-scores/';
const data = { username: 'server_url' };

fetch('https://assessments.reliscore.com/api/cric-scores/', {
  method: 'POST', // or 'PUT'
  headers: {
    id="src-server" 
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});