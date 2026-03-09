<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
    {
        label: 'A propos de moi',
        to: '/about',
        color: 'neutral',
        ui: { base: 'flex-1 justify-center' }
    },
    {
        label: 'Mes projets',
        to: '/projects',
        color: 'neutral',
        ui: { base: 'flex-1 justify-center' }
    }
])
</script>

<template>
    <UPageHero title="Salomé Frick" description="Développeuse Web Front-End & UX Designer" :links="links" :ui="{
        wrapper: 'flex flex-col items-center',
        footer: 'w-1/3 flex',
        links: 'w-full'
    }" />
</template>