<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = <NavigationMenuItem[]>[
    { label: "A Propos", to: "/about" },
    { label: "Projets", to: "/projects" },
    { label: "Contact", to: "/contact" }
]
</script>

<template>
    <UFooter>
        <template #left>
            <p class="text-muted text-sm">Salomé Frick © {{ new Date().getFullYear() }}</p>
        </template>

        <UNavigationMenu :items="items" variant="link" />

        <template #right>
            <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/samfrick"
                target="_blank" aria-label="GitHub" />
            <UButton icon="i-simple-icons-linkedin" color="neutral" variant="ghost"
                to="https://www.linkedin.com/in/salomé-frick-636034294" target="_blank" aria-label="LinkedIn" />
        </template>
    </UFooter>
</template>
