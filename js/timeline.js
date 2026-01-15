// Timeline Expand/Collapse functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        const header = item.querySelector('.timeline-header');
        const description = item.querySelector('.timeline-description');

        if (!header || !description) return;

        // Add expandable class to timeline item
        item.classList.add('expandable');

        // Collapse all items except the first 2 (most recent experiences)
        if (index >= 2) {
            description.classList.add('collapsed');
        } else {
            item.classList.add('expanded');
        }

        // Make header cursor pointer
        header.style.cursor = 'pointer';

        // Add click handler to header to toggle expand/collapse
        header.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link
            if (e.target.tagName === 'A') return;

            const isCollapsed = description.classList.contains('collapsed');

            if (isCollapsed) {
                description.classList.remove('collapsed');
                item.classList.add('expanded');
            } else {
                description.classList.add('collapsed');
                item.classList.remove('expanded');
            }
        });
    });
});
