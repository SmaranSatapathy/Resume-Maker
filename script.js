const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const fullName=document.getElementById("fullname")

function showName()
{
    const firstName=fname.value.trim()
    const lastName=lname.value.trim()

    fullName.textContent=`${firstName} ${lastName}`
}

fname.addEventListener("input",showName)
lname.addEventListener("input",showName)

document.getElementById("mail").addEventListener("input",e=>{
    document.getElementById("email").textContent=e.target.value
})

document.getElementById("phone").addEventListener("input",e=>{
    document.getElementById("phn").textContent=e.target.value
})

document.getElementById("summary").addEventListener("input",e=>{
    document.getElementById("profile_summary").textContent=e.target.value
})

document.getElementById("")

let edu_count=2
const skillsInputs = document.querySelectorAll('input[name="skills"]');
const resumeSkills = document.getElementById("interests");

    function updateSkillsPreview() {
      const checkList = document.querySelectorAll('input[name="skills"]:checked');
      const selectedSkills = Array.from(checkList).map(x => x.value);

      resumeSkills.textContent = selectedSkills.length > 0 
        ? selectedSkills.join(", ") 
        : "Skills: None selected";
    }

// Attach event listener to each skill checkbox
skillsInputs.forEach(input => {
    input.addEventListener("change", updateSkillsPreview);
});

const eduSection = document.getElementById("edu_section");
const resumeEdu = document.getElementById("education");
const addEduBtn = document.getElementById("add_edu");

    // Function to update live preview
    function updateEduPreview() {
      let eduHTML = "";
      for (let i = 1; i <= edu_count; i++) {
        const college = document.getElementById(`edu${i}`)?.value || "";
        const marks = document.getElementById(`mark${i}`)?.value || "";

        if (college.trim() !== "" || marks.trim() !== "") {
          eduHTML += `<b>${college}</b> <br>Marks Obtained: ${marks}<br>`;
        }
      }

      resumeEdu.innerHTML = eduHTML !== "" 
        ? "" + eduHTML 
        : "None added yet!!";
    }

    // Add new education input fields
    addEduBtn.addEventListener("click", () => {
      edu_count++;
      const newDiv = document.createElement("div");
      newDiv.classList.add('extra_edu')
      newDiv.innerHTML = `
        <input type="text" id="edu${edu_count}" placeholder="Enter college name" class="edu">
        <input type="number" id="mark${edu_count}" placeholder="Enter marks" class="edu">
      `;
      eduSection.appendChild(newDiv);

      // Attach event listeners to new inputs
      newDiv.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateEduPreview);
      });
    });

    // Attach live update listeners to existing inputs
    document.querySelectorAll(".edu").forEach(input => {
      input.addEventListener("input", updateEduPreview);
    });

    // for experience
    let exp_count=0;
    const exp_section=document.getElementById("experience")
    const exp_ans=document.getElementById("exp")

function updateExperiencePreview() {
      let expHTML = "";
      for (let i = 1; i <= exp_count; i++) {
        const company = document.getElementById(`company${i}`)?.value || "";
        const role = document.getElementById(`role${i}`)?.value || "";
        const time = document.getElementById(`time${i}`)?.value || "";

        let duration=""
        if(time>=12)
            duration=`${Math.floor(time/12)} years`
        else
            duration=`${time} months`

        if (company.trim() !== "" || role.trim() !== "" || time.trim() !== "") {
          expHTML += `Worked in <b>${company}</b> as <b>${role}</b> for ${duration} .<br>`;
        }
      }

      resume_exp.innerHTML = expHTML !== "" 
        ? "<h2>Experience</h2><br>" + expHTML 
        : "";
    }

    exp_ans.addEventListener("change",()=>{
        if(exp_ans.checked)
        {
            const add_exp=document.createElement("button")
            add_exp.id="add_exp"
            add_exp.textContent="Add Experience"
            add_exp.type="button"

            exp_section.append(add_exp)

            add_exp.addEventListener("click",()=>{
                exp_count++
                const expDiv=document.createElement("div")
                expDiv.classList.add("exp_entry")
                expDiv.innerHTML=`
                <input type="text" placeholder="Enter Company Name" id="company${exp_count}" style="width:100%">
                <br>
                <input type="text" placeholder="Enter Role" id="role${exp_count}" style="width:100%"> <br>
                <input type="number" placeholder="Years/Months of Experience" id="time${exp_count}" style="width:100%"> <br><br>
                `

                exp_section.appendChild(expDiv)

                expDiv.querySelectorAll("input").forEach(input => {
                    input.addEventListener("input", updateExperiencePreview);
                });
            })
        }
        else
            exp_section.remove()
    })

// For Projects:
let project_count = 0;
const form_project = document.getElementById("form_project");
const resume_projects = document.getElementById("resume_projects");

// Function to update projects in preview
function updateProjectPreview() {
      let projectHTML = "";
      for (let i = 1; i <= project_count; i++) {
        const title = document.getElementById(`project${i}`)?.value || "";
        const from = document.getElementById(`from${i}`)?.value || "";
        const to = document.getElementById(`to${i}`)?.value || "";
        const desc = document.getElementById(`des${i}`)?.value || "";

        if (title.trim() !== "" || desc.trim() !== "") {
          projectHTML += `
            <b>${title}</b> : ${from} to ${to}<br>
            ${desc}<br>
          `;
        }
      }

      resume_projects.innerHTML = projectHTML !== "" 
        ? "" + projectHTML 
        : "No Projects added yet";
    }

// Add new project form
document.getElementById("project_btn").addEventListener("click", () => {
    project_count++;
    const project_div = document.createElement("div");
    project_div.classList.add("project_list");
    project_div.innerHTML = `
    <br>
    <input type="text" placeholder="Enter project title" id="project${project_count}">  
    <label>From <input type="date" id="from${project_count}"></label> 
    <label>To <input type="date" id="to${project_count}"></label> <br>
    <textarea placeholder="Describe your project..." id="des${project_count}"></textarea> <br>
      `;

    form_project.appendChild(project_div);

    // Attach live preview update listeners
    project_div.querySelectorAll("input, textarea").forEach(input => {
        input.addEventListener("input", updateProjectPreview);
      });
});


// for reset
const reset_btn=document.getElementById("reset")
reset_btn.addEventListener("click",()=>{
    document.querySelectorAll("input,textarea,select").forEach(x=>{
        if(x.type==='checkbox'||x.type==='radio')
            x.checked=false
        else
            x.value=""
    })

    document.getElementById("fullname").innerHTML="Name"
    document.getElementById("contact").innerHTML=""
    

    document.getElementById("profile_summary").innerHTML=""
    document.getElementById("education").innerHTML=""
    edu_count=2

    document.getElementById("interests").innerHTML=""

    document.getElementById("resume_projects").innerHTML=""
    project_count=0

    document.getElementById("resume_exp").innerHTML="<h2>Experience</h2>"
    exp_count=0
})

document.getElementById("download").addEventListener("click", () => {
    const resume = document.getElementById("resume");

    html2canvas(resume, {
        scale: 3,   // higher scale = sharper image
        useCORS: true
    }).then(canvas => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF("p", "mm", "a4");

        const imgData = canvas.toDataURL("image/png", 1.0);

        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();

        // keep aspect ratio but fit into one page
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // if image is taller than page, shrink it to fit height
        let finalWidth = imgWidth;
        let finalHeight = imgHeight;

        if (imgHeight > pdfHeight) {
            finalHeight = pdfHeight;
            finalWidth = (canvas.width * finalHeight) / canvas.height;
        }

        // center the content
        const x = (pdfWidth - finalWidth) / 2;
        const y = (pdfHeight - finalHeight) / 2;

        doc.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
        doc.save(`${fullName.textContent} Resume.pdf`);
    });
});



