export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'icon', title: 'Icon Class (FontAwesome)', type: 'string' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
    ]
}
