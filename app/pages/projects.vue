<script setup lang="ts">
const projectDesc = 'Retrouvez ici certains de mes projets de développement web et de conception UX/UI. \
                    La plupart ont été réalisés pour des projets universitaires appelés des SAE (Situations d\'Apprentissage et d\'Évaluation).'

const projects = ref([
    {
        title: 'Projet 1',
        description: 'Description du projet 1',
        date: '2023',
        link: '/',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg'
    }
])
</script>

<template>
    <section class="w-full h-full flex flex-col justify-center items-center">
        <UPageHero title="Mes projets" :description="projectDesc" orientation="horizontal" reverse :ui="{
            container: 'lg:py-32 lg:flex lg:flex-row',
        }">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
                alt="fraise" class="rounded-full w-80 aspect-square object-cover">
        </UPageHero>
        <div class="mx-40">
            <UPageCard v-for="(project, index) in projects" :key="index" :title="project.title"
                :description="project.description" :to="project.link" orientation="horizontal" variant="naked"
                :reverse="index % 2 === 1">
                <template #leading>
                    <span class="text-sm text-muted">
                        {{ new Date(project.date).getFullYear() }}
                    </span>
                </template>
                <template #footer>
                    <ULink :to="project.link" class="text-sm text-primary flex items-center">
                        Voir le projet
                        <UIcon name="i-lucide-arrow-right"
                            class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
                    </ULink>
                </template>
                <img :src="project.image" :alt="project.title" class="object-cover w-full h-48 rounded-lg">
            </UPageCard>
        </div>
    </section>
</template>