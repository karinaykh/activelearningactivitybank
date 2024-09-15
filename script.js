document.addEventListener('DOMContentLoaded', () => {
    const activitiesContainer = document.getElementById('activitiesContainer');
    console.log('Activities loaded:', activities.length);
    const searchInput = document.getElementById('searchInput');
    const durationFilter = document.getElementById('durationFilter');
    const interactionFilter = document.getElementById('interactionFilter');
    const cognitiveFilter = document.getElementById('cognitiveFilter');

    function filterActivities() {
        const searchText = searchInput.value.toLowerCase();
        const selectedDuration = durationFilter.value;
        const selectedInteraction = interactionFilter.value;
        const selectedCognitive = cognitiveFilter.value;

        console.log('Filters:', { searchText, selectedDuration, selectedInteraction, selectedCognitive });

        const filteredActivities = activities.filter(activity => {
            const matchesSearch = activity.title.toLowerCase().includes(searchText) ||
                (activity.description && activity.description.toLowerCase().includes(searchText));
            const matchesDuration = selectedDuration === '' || activity.durationCategory === selectedDuration;
            const matchesInteraction = selectedInteraction === '' || activity.tags.includes(selectedInteraction);
            const matchesCognitive = selectedCognitive === '' || activity.tags.includes(selectedCognitive);

            console.log('Activity:', activity.title, {
                matchesSearch,
                matchesDuration,
                matchesInteraction,
                matchesCognitive,
                durationCategory: activity.durationCategory,
                tags: activity.tags
            });

            return matchesSearch && matchesDuration && matchesInteraction && matchesCognitive;
        });

        console.log('Filtered Activities:', filteredActivities.length);

        displayActivities(filteredActivities);
    }

    searchInput.addEventListener('input', filterActivities);
    durationFilter.addEventListener('change', filterActivities);
    interactionFilter.addEventListener('change', filterActivities);
    cognitiveFilter.addEventListener('change', filterActivities);

    // Initial display
    displayActivities(activities);
});

function displayActivities(activitiesToDisplay) {
    activitiesContainer.innerHTML = '';
    console.log('Displaying activities:', activitiesToDisplay.length);
    activitiesToDisplay.forEach((activity, index) => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.dataset.category = activity.durationCategory;

        // Assign color based on duration category
        switch (activity.durationCategory) {
            case 'Quick Activities (5-15 minutes)':
                cardHeader.style.backgroundColor = '#4CAF50'; // Softer green
                break;
            case 'Medium Activities (15-30 minutes)':
                cardHeader.style.backgroundColor = '#FFA726'; // Soft orange
                break;
            case 'Extended Activities (30+ minutes)':
                cardHeader.style.backgroundColor = '#42A5F5'; // Soft blue
                break;
            case 'Student-Created Activities':
                cardHeader.style.backgroundColor = '#7E57C2'; // Soft purple
                break;
            default:
                cardHeader.style.backgroundColor = '#78909C'; // Soft blue-grey
        }
        cardHeader.style.color = 'white'; // Consistent text color
        console.log('Applied style:', cardHeader.style.backgroundColor);

        // Add title and icon
        let headerContent = `<h5 class="card-title mb-0">${activity.title} ${activity.icon}</h5>`;
        
        // Add author for student-created activities
      
        cardHeader.innerHTML = headerContent;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Card Text Preview
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = activity.shortDescription;

        cardBody.appendChild(cardText);

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');

        const cardTags = document.createElement('div');
        cardTags.classList.add('card-tags');

        const interactionTags = ['individual', 'pair', 'group'];
        const cognitiveTags = ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'];

        activity.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.textContent = `#${tag}`;
            if (interactionTags.includes(tag)) {
                tagSpan.classList.add('interaction-tag');
            } else if (cognitiveTags.includes(tag)) {
                tagSpan.classList.add('cognitive-tag');
            } else {
                tagSpan.classList.add('other-tag');
            }
            cardTags.appendChild(tagSpan);
        });

        cardFooter.appendChild(cardTags);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);

        // Add click event to open modal
        card.addEventListener('click', () => {
            const modal = new bootstrap.Modal(document.getElementById('activityModal'));
            document.getElementById('activityModalLabel').textContent = `${activity.title} ${activity.icon}`;
            let modalContent = `
                <p><strong>Duration:</strong> ${activity.duration}</p>
                <p><strong>Format:</strong> ${activity.format}</p>
                <p><strong>Description:</strong> ${activity.description}</p>
            `;
            
            // Add author information if it exists
            if (activity.author) {
                modalContent += `<p><strong>Creator: </strong> ${activity.author}</p>`;
            }
            
            if (activity.whyUseIt) {
                modalContent += `<p><strong>Why use it:</strong> ${activity.whyUseIt}</p>`;
            }
            if (activity.materialsNeeded && activity.materialsNeeded.length > 0) {
                modalContent += `<p><strong>Materials Needed:</strong></p><ul>`;
                activity.materialsNeeded.forEach(item => {
                    modalContent += `<li>${item}</li>`;
                });
                modalContent += `</ul>`;
            }
            if (activity.steps && activity.steps.length > 0) {
                modalContent += `<p><strong>Steps:</strong></p><ol>`;
                activity.steps.forEach(step => {
                    modalContent += `<li>${step}</li>`;
                });
                modalContent += `</ol>`;
            }
            if (activity.variations && activity.variations.length > 0) {
                modalContent += `<p><strong>Variations:</strong></p><ul>`;
                activity.variations.forEach(variation => {
                    modalContent += `<li>${variation}</li>`;
                });
                modalContent += `</ul>`;
            }
            if (activity.tips) {
                modalContent += `<p><strong>Tips:</strong> ${activity.tips}</p>`;
            }
            document.querySelector('.modal-body').innerHTML = modalContent;
            modal.show();
        });

        col.appendChild(card);
        activitiesContainer.appendChild(col);
    });
}

    // ... rest of the function ...

