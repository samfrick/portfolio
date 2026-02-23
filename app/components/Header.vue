<script setup lang="ts">
const links = [
    { label: "Accueil", href: "/" },
    { label: "A Propos", href: "/about" },
    { label: "Projets", href: "/projects" },
    { label: "Contact", href: "/contact" }
]
</script>

<template>
    <UHeader title="Portfolio">
        <UNavigationMenu :links="links" />
    </UHeader>
</template>