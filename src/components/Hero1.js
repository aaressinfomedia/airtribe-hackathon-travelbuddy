
import React, { useState, useEffect } from 'react';
const Hero1 = () => {
const [formData, setFormData] = useState({
name: '',
location: '',
budget: '',
days: ''
});

console.log(formData,"Typed")
const [apiResponse, setApiResponse] = useState(null);

const handleChange = (e) => {

const { name, value } = e.target;
setFormData({
...formData,
[name]: value
});
};

  
  
  const apiUrl = 'Process.env.REACT_APP_CLAUDE_API_KEY';
  
  fetch(apiUrl, {
    method: 'POST', // Specify the HTTP method
    headers: {
      'Content-Type': 'application/json', // Specify the content type
      // Add other headers as needed, such as authorization headers
    },
    body: JSON.stringify(formData), // Convert data to JSON format
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse response body as JSON
    })
    .then(data => {
      // Handle the response data
      console.log('Response from Claude API:', data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the request:', error);
    });
  

const handleSubmit = (e) => {
e.preventDefault();

// You can perhtmlForm any actions with the htmlForm data here, like sending it to an API, etc.

// Simulate API response htmlFor demonstration

setApiResponse({
content: [
{
type: 'text',
text: 'Here are a few popular destinations near Bangalore within a 500 km radius, along with their travel routes:\n' +
'\n' +
'1. Mysore (approx. 150 km):\n' +
' - Route: Bangalore -> Ramanagara -> Mandya -> Srirangapatna -> Mysore\n' +
' - Places to visit: Mysore Palace, Brindavan Gardens, Chamundeshwari Temple, and Zoo\n' +
'\n' +
'2. Coorg (approx. 265 km):\n' +
' - Route: Bangalore -> Ramanagara -> Channapatna -> Hunsur -> Kushalnagar -> Madikeri (Coorg)\n' +
" - Places to visit: Abbey Falls, Raja's Seat, Talacauvery, and Dubare Elephant Camp\n" +
'\n' +
'3. Ooty (approx. 280 km):\n' +
' - Route: Bangalore -> Hosur -> Krishnagiri -> Dharmapuri -> Ooty\n' +
' - Places to visit: Botanical Gardens, Doddabetta Peak, Ooty Lake, and Rose Garden\n' +
'\n' +
'4. Chikmagalur (approx. 245 km):\n' +
' - Route: Bangalore -> Tumkur -> Tiptur -> Arsikere -> Chikmagalur\n' +
' - Places to visit: Mullayanagiri, Baba Budangiri, Hebbe Falls, and Coffee plantations\n' +
'\n' +
'5. Hampi (approx. 370 km):\n' +
' - Route: Bangalore -> Tumkur -> Chitradurga -> Hospet -> Hampi\n' +
' - Places to visit: Virupaksha Temple, Vittala Temple, Hampi Bazaar, and Matanga Hill\n' +
'\n' +
'6. Pondicherry (approx. 320 km):\n' +
' - Route: Bangalore -> Hosur -> Krishnagiri -> Tiruvannamalai -> Viluppuram -> Pondicherry\n' +
' - Places to visit: Aurobindo Ashram, Auroville, French Quarter, and Seaside Promenade\n' +
'\n' +
'Remember to check the current COVID-19 related travel restrictions and guidelines behtmlFore planning your trip. Also, the distances mentioned are approximate and may vary slightly based on the exact route taken.'
}
]
});
console.log(apiResponse); // Print the API response to the console

};

return (
<section className="text-gray-600 body-font relative">
<form >
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    {apiResponse && (
<div>
<h2>Hi {formData.name}</h2>
<ul>
{apiResponse.content.map((item, index) => (
<li key={index}>
<h3>{index + 1}. {item.text.split('\n')[0]}</h3>
<p>{item.text.split('\n').slice(1).join('\n')}</p>
</li>
))}
</ul>
</div>
)}
    </div>
   <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Your Travel Buddy</h2>
      <p className="leading-relaxed mb-5 text-gray-600">Please enter your desired details</p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required minLength={3} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4"> 
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Starting Location</label>
        <input type="text" id="loation" name="location" value={formData.location} onChange={handleChange}  required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Budget htmlFor your tour</label>
        <input type="number" id="budget" name="budget" value={formData.budget} onChange={handleChange} required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Days to spend</label>
        <input type="number" id="days" value={formData.days} name="days" onChange={handleChange} required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Submit</button>
   
    </div>
 
  </div>
  </form>
</section>
);
};




export default Hero1;

