// Timeline Expand/Collapse functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Timeline script loaded');
    const timelineItems = document.querySelectorAll('.timeline-item');
    console.log('Found timeline items:', timelineItems.length);

    timelineItems.forEach((item, index) => {
        const header = item.querySelector('.timeline-header');
        const description = item.querySelector('.timeline-description');

        console.log(`Item ${index}:`, { header: !!header, description: !!description });

        if (!header || !description) {
            console.warn(`Missing header or description for item ${index}`);
            return;
        }

        // Add expandable class to timeline item
        item.classList.add('expandable');

        // Collapse all items except the first 2 (most recent experiences)
        if (index >= 2) {
            description.classList.add('collapsed');
            console.log(`Item ${index} collapsed`);
        } else {
            item.classList.add('expanded');
            console.log(`Item ${index} expanded`);
        }

        // Make header cursor pointer
        header.style.cursor = 'pointer';

        // Add click handler to header to toggle expand/collapse
        header.addEventListener('click', function(e) {
            console.log('Header clicked', index);
            // Don't toggle if clicking on a link
            if (e.target.tagName === 'A') {
                console.log('Click on link, ignoring');
                return;
            }

            const isCollapsed = description.classList.contains('collapsed');
            console.log('Is collapsed:', isCollapsed);

            if (isCollapsed) {
                description.classList.remove('collapsed');
                item.classList.add('expanded');
                console.log('Expanded item', index);
            } else {
                description.classList.add('collapsed');
                item.classList.remove('expanded');
                console.log('Collapsed item', index);
            }
        });
    });
});
