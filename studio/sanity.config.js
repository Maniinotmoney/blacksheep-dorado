import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Dorado Pets',

    projectId: 'wcfxpc98',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
