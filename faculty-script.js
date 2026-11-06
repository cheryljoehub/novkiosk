// ==============================
// Meet Your Professors
// ==============================

function goBack() {
    window.history.back();
}

let facultyData = [];

const departmentsSection = document.getElementById("departments");
const facultySection = document.getElementById("facultySection");
const facultyGrid = document.getElementById("facultyGrid");
const facultyTitle = document.getElementById("facultyTitle");

const profileWindow = document.getElementById("profileWindow");

const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profilePosition = document.getElementById("profilePosition");
const profileDepartment = document.getElementById("profileDepartment");

const office = document.getElementById("office");
const hours = document.getElementById("hours");
const education = document.getElementById("education");
const courses = document.getElementById("courses");
const research = document.getElementById("research");
const projects = document.getElementById("projects");
const funfact = document.getElementById("funfact");

const websiteButton = document.getElementById("websiteButton");

let currentWebsite = "";

// ======================================
// Load Faculty JSON
// ======================================

fetch("data/faculty.json")
.then(response => response.json())
.then(data => {

    facultyData = data;

    console.log("Faculty Loaded");

})
.catch(error=>{

    console.error(error);

});

// ======================================
// Department Buttons
// ======================================

document.querySelectorAll(".department").forEach(button=>{

    button.addEventListener("click",()=>{

        const department = button.dataset.department;

        showDepartment(department);

    });

});

// ======================================

function showDepartment(department){

    departmentsSection.style.display = "none";

    facultySection.style.display = "block";

    facultyTitle.innerHTML = department + " Faculty";

    facultyGrid.innerHTML = "";

    const professors = facultyData.filter(p=>p.department===department);

    if(professors.length===0){

        facultyGrid.innerHTML="<h2>No Faculty Available</h2>";

        return;

    }

    professors.forEach(person=>{

        const card=document.createElement("div");

        card.className="facultyCard";

        card.innerHTML=`

            <img src="${person.image}">

            <div class="facultyInfo">

                <h3>${person.name}</h3>

                <p>${person.title}</p>

            </div>

        `;

        card.onclick=()=>{

            openProfile(person);

        }

        facultyGrid.appendChild(card);

    });

}

// ======================================
// Home Button
// ======================================

document.getElementById("homeButton").onclick=()=>{

    facultySection.style.display="none";

    departmentsSection.style.display="block";

};

// ======================================
// Profile Window
// ======================================

function openProfile(person){

    profileWindow.style.display="flex";

    profileImage.src=person.image;

    profileName.innerHTML=person.name;

    profilePosition.innerHTML=person.title;

    profileDepartment.innerHTML=person.department;

    office.innerHTML=person.office;

    hours.innerHTML=person.hours;

    education.innerHTML=person.education;

    funfact.innerHTML=person.funFact;

    currentWebsite=person.website;

    courses.innerHTML="";

    research.innerHTML="";

    projects.innerHTML="";

    person.courses.forEach(course=>{

        courses.innerHTML+=`<li>${course}</li>`;

    });

    person.research.forEach(item=>{

        research.innerHTML+=`<li>${item}</li>`;

    });

    person.projects.forEach(item=>{

        projects.innerHTML+=`<li>${item}</li>`;

    });

}

// ======================================
// Close Window
// ======================================

document.getElementById("closeProfile").onclick=()=>{

    profileWindow.style.display="none";

}

// ======================================
// Faculty Website
// ======================================

websiteButton.onclick=()=>{

    window.open(currentWebsite,"_blank");

}

// ======================================
// Live Search
// ======================================

document.getElementById("search").addEventListener("keyup",function(){

    const search=this.value.toLowerCase();

    facultyGrid.innerHTML="";

    facultySection.style.display="block";

    departmentsSection.style.display="none";

    facultyTitle.innerHTML="Search Results";

    const results=facultyData.filter(person=>{

        return person.name.toLowerCase().includes(search)

        ||

        person.department.toLowerCase().includes(search)

        ||

        person.title.toLowerCase().includes(search);

    });

    if(results.length===0){

        facultyGrid.innerHTML="<h2>No Results Found</h2>";

        return;

    }

    results.forEach(person=>{

        const card=document.createElement("div");

        card.className="facultyCard";

        card.innerHTML=`

        <img src="${person.image}">

        <div class="facultyInfo">

            <h3>${person.name}</h3>

            <p>${person.department}</p>

        </div>

        `;

        card.onclick=()=>{

            openProfile(person);

        }

        facultyGrid.appendChild(card);

    });

    if(search===""){

        facultySection.style.display="none";

        departmentsSection.style.display="block";

    }

});

// ======================================
// Close profile by clicking outside
// ======================================

profileWindow.addEventListener("click",(e)=>{

    if(e.target===profileWindow){

        profileWindow.style.display="none";

    }

});