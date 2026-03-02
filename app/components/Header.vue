<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = <NavigationMenuItem[]>[
    { label: "Accueil", to: "/" },
    { label: "A Propos", to: "/about" },
    { label: "Projets", to: "/projects" },
    { label: "Contact", to: "/contact" }
]
</script>

<template>
    <UHeader title="" class="sticky">
        <UNavigationMenu :items="items" color="neutral" />
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>