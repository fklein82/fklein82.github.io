// Timeline Expand/Collapse functionality - Show first 3, hide rest with "Show more" button
document.addEventListener('DOMContentLoaded', function() {
    console.log('Timeline script loaded');
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    console.log('Found timeline items:', timelineItems.length);

    if (!timeline || timelineItems.length <= 3) {
        console.log('Not enough items for show more button');
        return;
    }

    // Hide items after the first 3
    timelineItems.forEach((item, index) => {
        if (index >= 3) {
            item.style.display = 'none';
            item.classList.add('hidden-experience');
        }
    });

    // Create "Show more" button
    const showMoreBtn = document.createElement('button');
    showMoreBtn.className = 'show-more-btn';
    showMoreBtn.innerHTML = `
        <span class="show-more-text">Show ${timelineItems.length - 3} more experiences</span>
        <svg class="show-more-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
    `;

    // Insert button after timeline
    timeline.parentNode.insertBefore(showMoreBtn, timeline.nextSibling);

    // Button click handler
    let isExpanded = false;
    showMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;

        timelineItems.forEach((item, index) => {
            if (index >= 3) {
                if (isExpanded) {
                    item.style.display = 'block';
                    // Animate in
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });

        // Update button text and icon
        const showMoreText = showMoreBtn.querySelector('.show-more-text');
        const showMoreIcon = showMoreBtn.querySelector('.show-more-icon');

        if (isExpanded) {
            showMoreText.textContent = 'Show less';
            showMoreIcon.style.transform = 'rotate(180deg)';
        } else {
            showMoreText.textContent = `Show ${timelineItems.length - 3} more experiences`;
            showMoreIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Set initial transition properties
    timelineItems.forEach((item, index) => {
        if (index >= 3) {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
        }
    });
});
