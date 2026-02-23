<script setup lang="ts">
const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
]
</script>

<template>
    <UHeader>
        <UNavigationMenu :links="links" />
    </UHeader>
</template>