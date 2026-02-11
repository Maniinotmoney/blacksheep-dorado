export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Pet Parent Name',
            type: 'string',
        },
        {
            name: 'petName',
            title: 'Pet Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: Rule => Rule.min(1).max(5).precision(1),
        },
        {
            name: 'reviewText',
            title: 'Review Text',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'petName',
            media: 'image',
        },
    },
}
