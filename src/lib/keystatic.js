import { getCollection, getEntry } from 'astro:content';

export const getSystemStyles = async () => {
    try {
        const entry = await getEntry('settings', 'system-styles');
        if (!entry || !entry.data || !entry.data.properties) return {};

        const styles = {};
        entry.data.properties.forEach(item => {
            if (item.key) {
                styles[item.key] = { value: item.value, type: item.type };
            }
        });
        return styles;
    } catch (e) {
        console.error("Error reading system styles from Astro collections:", e);
        return {};
    }
};

export const getLandingBlocks = async () => {
    try {
        const allBlocks = await getCollection('blocks');
        if (!allBlocks) return [];

        // Sort by orderId
        allBlocks.sort((a, b) => (a.data.orderId || 0) - (b.data.orderId || 0));

        return allBlocks.map(block => ({
            id: block.id,
            name: block.data.name || block.id,
            componentName: block.data.componentName || '',
            orderId: block.data.orderId || 0,
            title: block.data.title || '',
            subtitle: block.data.subtitle || '',
            media: block.data.media?.src || block.data.media || '',
            ctaText: block.data.ctaText || '',
            ctaLink: block.data.ctaLink || '',
            secondaryCtaText: block.data.secondaryCtaText || '',
            secondaryCtaLink: block.data.secondaryCtaLink || '',
            checklists: block.data.checklists || '',
        }));
    } catch (e) {
        console.error("Error reading landing blocks from Astro collections:", e);
        return [];
    }
};
