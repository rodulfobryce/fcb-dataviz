console.log("Hello World");

// Current date for the title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();
console.log(currentDate);
// dateElement.innerHTML = currentDate;

let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// Rapid API code to retrieve trending twitter topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'c94b1ea271mshedfe712ce75e376p10e705jsnef120e44097e',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

async function fetchTwitterTrends() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

fetchTwitterTrends();

// // Dummy data to comment out
// let myPost = {
// 	name: "Lee Sung Kyung",
// 	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
// 	volume: 31799,
// 	followers: 38956734
// };

// console.log(myPost);
// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);
// console.log(myPost.followers);

// let graphData = [
// 	{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
// 	{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// ];

// console.log(graphData);
// console.log(graphData[0]);
// console.log(graphData[1].name);

// console.log(graphData);
// // We can use push() method to add elements in an array.
// graphData.push(myPost);
// console.log(graphData);

// DUMMY DATA END

let graphData =[];

// Fetch request allows us to retrieve the data from twitter trends api server

fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);
	console.log(graphData.length);

//For loops are used to do repititive task, in this case to print out each individual element in the graphData array and their respective properties.
for (let i = 0; i < 25; i++) {
		graphData.push(
			{
				"name": data.trends[i].name,
				"volume": data.trends[i].volume
			}
		)
	};

// This allows us to return only the name of the twitter trend object
let topics = graphData.map(object => {
	console.log(object);
	console.log(object.name);
		return object.name;
});

console.log(topics);

let volumes = graphData.map(object => {
	return object.volume;
});

console.log(volumes);

// Chart Template from ChartJS
const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volumes,
        borderWidth: 2,
        backgroundColor: [
	      	'rgba(255, 99, 132, 0.2)',
	      	'rgba(255, 159, 64, 0.2)',
	      	'rgba(255, 205, 86, 0.2)',
	      	'rgba(75, 192, 192, 0.2)',
	      	'rgba(54, 162, 235, 0.2)',
	      	'rgba(153, 102, 255, 0.2)',
	      	'rgba(201, 203, 207, 0.2)'
	      ],
        borderColor: ['rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'],
        hoverBackgroundColor: ['rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)']
      }],

    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})


