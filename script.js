document.addEventListener('DOMContentLoaded', () => {
    const subjectsContainer = document.getElementById('subjects-container');
    const calculateBtn = document.getElementById('calculate-btn');

    // Grade mapping for CGPA calculation
    const gradeMapping = {
        'O': 10,
        'A+': 9,
        'A': 8,
        'B+': 7,
        'B': 6,
        'RA': 0 // "RA" indicates a failing grade
    };

    // Function to create subject inputs dynamically
    function createSubjectInputs(subjects) {
        subjects.forEach(subject => {
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'subject';
            subjectDiv.innerHTML = `
                <label>${subject.name} (${subject.credit} credits):</label>
                <div class="radio-container">
                    ${Object.keys(gradeMapping).map(grade => `
                        <label>
                            <input type="radio" name="${subject.name}" value="${gradeMapping[grade]}" data-credit="${subject.credit}" data-grade="${grade}">
                            ${grade}
                        </label>`).join('')}
                </div>
            `;
            subjectsContainer.appendChild(subjectDiv);
        });
    }

    // Function to calculate CGPA
    function calculateCGPA() {
        const selectedGrades = subjectsContainer.querySelectorAll('input[type="radio"]:checked');
        let totalPoints = 0;
        let totalCredits = 0;

        selectedGrades.forEach(input => {
            const gradeValue = parseFloat(input.value);
            const credit = parseInt(input.dataset.credit);

            if (input.dataset.grade === 'RA') return; // Skip "RA" grades

            totalPoints += gradeValue * credit;
            totalCredits += credit;
        });

        const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
        document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;

        // Add a note below the CGPA result
        const noteElement = document.getElementById('cgpa-note');
        noteElement.innerText = "[Note: This CGPA Calculation value will be same as in your Mark Sheet]";
    }

    // Function to update the subject list based on user input
    function updateSubjects() {
        const regulation = document.getElementById('regulation').value;
        const department = document.getElementById('department').value;
        const numSemesters = parseInt(document.getElementById('num-semesters').value);

        if (!regulation || !department || isNaN(numSemesters)) {
            alert("Please select Regulation, Department, and Number of Semesters.");
            return;
        }

        // Clear previous subjects
        subjectsContainer.innerHTML = '';

        for (let semester = 1; semester <= numSemesters; semester++) {
            const semesterLabel = document.createElement('h3');
            semesterLabel.textContent = `Semester ${semester}`;
            subjectsContainer.appendChild(semesterLabel);

            if (subjects[regulation]?.[department]?.[semester]) {
                createSubjectInputs(subjects[regulation][department][semester]);

                // Add a horizontal line for clarity
                const separator = document.createElement('hr');
                subjectsContainer.appendChild(separator);
            } else {
                const noSubjectsMessage = document.createElement('p');
                noSubjectsMessage.textContent = `No subjects found for Semester ${semester}.`;
                noSubjectsMessage.style.color = 'red';
                subjectsContainer.appendChild(noSubjectsMessage);
            }
        }

        calculateBtn.style.display = 'block'; // Show the calculate button
    }

    // Event Listeners
    document.getElementById('show-subjects-btn').addEventListener('click', updateSubjects);
    calculateBtn.addEventListener('click', calculateCGPA);
});
