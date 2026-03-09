<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
    {
        date: 'Mar 15, 2025',
        title: 'Project Kickoff',
        description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
        icon: 'i-lucide-rocket'
    },
    {
        date: 'Mar 22 2025',
        title: 'Design Phase',
        description: 'User research and design workshops. Created wireframes and prototypes for user testing.',
        icon: 'i-lucide-palette'
    },
    {
        date: 'Mar 29 2025',
        title: 'Development Sprint',
        description: 'Frontend and backend development. Implemented core features and integrated with APIs.',
        icon: 'i-lucide-code'
    },
    {
        date: 'Apr 5 2025',
        title: 'Testing & Deployment',
        description: 'QA testing and performance optimization. Deployed the application to production.',
        icon: 'i-lucide-check-circle'
    }
])
</script>

<template>
    <section class="w-full h-full flex flex-col justify-center items-center">
        <UPageHero title="A propos de moi" description="Description sur moi" orientation="horizontal">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
                alt="fraise" class="rounded-full w-80 aspect-square object-cover">
        </UPageHero>
        <UTimeline :items="items" />
    </section>
</template>