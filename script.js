const jobContainer = document.getElementById("jobContainer");
const jobForm = document.getElementById("jobForm");
const searchInput = document.getElementById("searchInput");

let jobs = [
{
title: "Frontend Developer",
company: "TechCorp",
location: "New York",
type: "Full-Time",
description: "Build modern web interfaces using React."
},
{
title: "Backend Developer",
company: "DataSoft",
location: "Remote",
type: "Remote",
description: "Work with Node.js APIs and databases."
},
{
title: "UI Designer",
company: "Creative Studio",
location: "California",
type: "Contract",
description: "Design beautiful user interfaces."
}
];

function renderJobs(jobList) {

jobContainer.innerHTML = "";

if (jobList.length === 0) {
jobContainer.innerHTML = "<p>No jobs found.</p>";
return;
}

jobList.forEach(job => {

const jobCard = document.createElement("div");
jobCard.classList.add("job-card");

jobCard.innerHTML = `
<h3>${job.title}</h3>
<p><strong>${job.company}</strong></p>
<p>${job.location}</p>
<span class="job-type">${job.type}</span>
<p>${job.description}</p>
`;

jobContainer.appendChild(jobCard);

});
}

jobForm.addEventListener("submit", function(e){

e.preventDefault();

const newJob = {
title: document.getElementById("title").value,
company: document.getElementById("company").value,
location: document.getElementById("location").value,
type: document.getElementById("type").value,
description: document.getElementById("description").value
};

jobs.unshift(newJob);

renderJobs(jobs);

jobForm.reset();

});

searchInput.addEventListener("input", function(){

const searchTerm = searchInput.value.toLowerCase();

const filteredJobs = jobs.filter(job =>
job.title.toLowerCase().includes(searchTerm) ||
job.company.toLowerCase().includes(searchTerm) ||
job.location.toLowerCase().includes(searchTerm)
);

renderJobs(filteredJobs);

});

renderJobs(jobs);
