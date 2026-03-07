import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: import.meta.env?.DEV
        ? { kind: 'local' }
        : { kind: 'github', repo: 'krsdntr/krisdigitalstudio' },
    collections: {
        blog: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Published Date' }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Technology', value: 'Technology' },
                        { label: 'Business', value: 'Business' },
                        { label: 'Design', value: 'Design' },
                        { label: 'Marketing', value: 'Marketing' },
                    ],
                    defaultValue: 'Technology',
                }),
                tags: fields.array(fields.text({ label: 'Tag' }), {
                    label: 'Tags',
                    itemLabel: props => props.value,
                }),
                excerpt: fields.text({ label: 'Excerpt', multiline: true }),
                featured: fields.checkbox({ label: 'Featured Article' }),
                cover: fields.image({
                    label: 'Cover Image',
                    directory: 'src/assets/images/blog',
                    publicPath: '../../assets/images/blog/',
                }),
                coverUrl: fields.url({ label: 'Cover Image URL (Unsplash, dll)' }),
                content: fields.markdoc({ label: 'Content', extension: 'md' }),
            },
        }),
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Completion Date' }),
                industry: fields.text({ label: 'Industry' }),
                techStack: fields.array(fields.text({ label: 'Tech' }), {
                    label: 'Tech Stack',
                    itemLabel: props => props.value,
                }),
                liveUrl: fields.url({ label: 'Live URL' }),
                description: fields.text({ label: 'Short Description', multiline: true }),
                cover: fields.image({
                    label: 'Cover Image',
                    directory: 'src/assets/images/projects',
                    publicPath: '../../assets/images/projects/',
                }),
                coverUrl: fields.url({ label: 'Cover Image URL (Unsplash, dll)' }),
                content: fields.markdoc({ label: 'Content', extension: 'md' }),
            },
        }),
        products: collection({
            label: 'Digital Products',
            slugField: 'title',
            path: 'src/content/products/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                price: fields.integer({ label: 'Price (Rp)', defaultValue: 0 }),
                discountPrice: fields.integer({ label: 'Discount Price (Rp)', defaultValue: 0 }),
                productType: fields.select({
                    label: 'Product Type',
                    options: [
                        { label: 'Template', value: 'Template' },
                        { label: 'Course', value: 'Course' },
                        { label: 'Asset', value: 'Asset' },
                        { label: 'E-Book', value: 'E-Book' },
                    ],
                    defaultValue: 'Template',
                }),
                description: fields.text({ label: 'Short Description', multiline: true }),
                features: fields.array(fields.text({ label: 'Feature' }), {
                    label: 'Features List',
                    itemLabel: props => props.value,
                }),
                checkoutUrl: fields.url({ label: 'Checkout URL' }),
                isFreebie: fields.checkbox({ label: 'Is Freebie?' }),
                cover: fields.image({
                    label: 'Cover Image',
                    directory: 'src/assets/images/products',
                    publicPath: '../../assets/images/products/',
                }),
                content: fields.markdoc({ label: 'Content', extension: 'md' }),
            },
        }),
        blocks: collection({
            label: 'Landing Page Blocks',
            slugField: 'name',
            path: 'src/content/blocks/*',
            format: { data: 'json' },
            schema: {
                name: fields.slug({ name: { label: 'Internal Name (e.g., hero, faq)' } }),
                componentName: fields.text({ label: 'React Component Name' }),
                orderId: fields.integer({ label: 'Order ID (for sorting)' }),
                title: fields.text({ label: 'Title Block' }),
                subtitle: fields.text({ label: 'Subtitle/Content Block', multiline: true }),
                media: fields.image({
                    label: 'Media/Image',
                    directory: 'src/assets/images/blocks',
                    publicPath: '../../assets/images/blocks/',
                }),
                ctaText: fields.text({ label: 'Call to Action Text' }),
                ctaLink: fields.text({ label: 'Call to Action Link' }),
                secondaryCtaText: fields.text({ label: 'Secondary CTA Text' }),
                secondaryCtaLink: fields.text({ label: 'Secondary CTA Link' }),
                checklists: fields.text({ label: 'Checklists (comma separated)', multiline: true }),
            },
        }),
    },
    singletons: {
        systemStyles: singleton({
            label: 'System Styles & Config',
            path: 'src/content/settings/system-styles',
            format: { data: 'json' },
            schema: {
                properties: fields.array(
                    fields.object({
                        key: fields.text({ label: 'Key' }),
                        value: fields.text({ label: 'Value' }),
                        type: fields.text({ label: 'Type (e.g., Color, Text, Select)' }),
                    }),
                    { label: 'Style Properties', itemLabel: props => props.fields.key.value }
                )
            }
        })
    }
});
