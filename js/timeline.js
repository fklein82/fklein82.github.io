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

    // Create a wrapper for hidden items
    const hiddenItemsWrapper = document.createElement('div');
    hiddenItemsWrapper.className = 'timeline-hidden-items';
    hiddenItemsWrapper.style.display = 'none';

    // Move items after the first 3 into the wrapper
    const itemsToMove = [];
    timelineItems.forEach((item, index) => {
        if (index >= 3) {
            itemsToMove.push(item);
        }
    });

    // Insert wrapper after 3rd item
    if (timelineItems[2]) {
        timelineItems[2].parentNode.insertBefore(hiddenItemsWrapper, timelineItems[2].nextSibling);

        // Move items into wrapper
        itemsToMove.forEach(item => {
            hiddenItemsWrapper.appendChild(item);
        });
    }

    // Create "Show more" button as a timeline item
    const showMoreItem = document.createElement('div');
    showMoreItem.className = 'timeline-item timeline-show-more';
    showMoreItem.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content show-more-content">
            <button class="show-more-btn">
                <span class="show-more-text">View ${itemsToMove.length} earlier experiences</span>
                <svg class="show-more-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
            </button>
        </div>
    `;

    // Insert button after wrapper
    hiddenItemsWrapper.parentNode.insertBefore(showMoreItem, hiddenItemsWrapper.nextSibling);

    // Button click handler
    const showMoreBtn = showMoreItem.querySelector('.show-more-btn');
    let isExpanded = false;

    showMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;

        const showMoreText = showMoreBtn.querySelector('.show-more-text');
        const showMoreIcon = showMoreBtn.querySelector('.show-more-icon');

        if (isExpanded) {
            hiddenItemsWrapper.style.display = 'block';
            showMoreText.textContent = 'Hide earlier experiences';
            showMoreIcon.style.transform = 'rotate(180deg)';

            // Scroll to show more button
            setTimeout(() => {
                showMoreItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        } else {
            hiddenItemsWrapper.style.display = 'none';
            showMoreText.textContent = `View ${itemsToMove.length} earlier experiences`;
            showMoreIcon.style.transform = 'rotate(0deg)';

            // Scroll back to show more button
            setTimeout(() => {
                showMoreItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    });
});
