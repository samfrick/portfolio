<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const aboutMe = 'Motivée, dynamique, curieuse et attentive, je suis actuellement étudiante en 3ème année de BUT Métiers du Multimédia et de l\'Internet, à l\'IUT de Haguenau (Bas-Rhin). \
                Je suis actuellement alternante développeuse web front-end chez Logitud Solutions. \
                J\'ai développé un sens de l\'écoute et un esprit créatif grâce à la musique (saxophone), que je pratique depuis plus de 14 ans.'

const itemsSchool = ref<TimelineItem[]>([
    {
        date: 'Septembre 2023 - Ajourd\'hui',
        title: 'BUT Métiers du Multimédia et de l\'Internet',
        description: 'IUT de Haguenau - Parcours : Développement web & Dispositifs Interactifs',
        icon: 'i-lucide-laptop'
    },
    {
        date: 'Septembre 2020 - Juin 2023',
        title: 'Baccalauréat général - Mention Bien',
        description: 'Lycée Fustel de Coulanges, Strasbourg - Spécialités : Mathématiques & Physique-Chimie',
        icon: 'i-lucide-school'
    },
    {
        date: '2013 - 2024',
        title: 'Diplôme du COA (cycle orientation amateur)',
        description: 'Cité de la Musique et de la Danse, Strasbourg - Cursus : Saxophone',
        icon: 'i-lucide-piano'
    }
])

const itemsJob = ref<TimelineItem[]>([
    {
        date: 'Mars 2026 - Aujourd\'hui',
        title: 'Secrétaire de l\'Orchestre d\'Harmonie des Jeunes de Strasbourg - OHJS',
        description: 'Association - Rédaction de compte-rendu de réunion, participation à l\'organisation des événements, chargée de communication.',
        icon: 'i-lucide-square-code'
    },
    {
        date: 'Septembre 2025 - Aujourd\'hui',
        title: 'Alternante Développeuse web Front-end & Conceptrice UX',
        description: 'Logitud Solutions, Strasbourg - Conception et développement de logiciels métiers pour la fonction publique.',
        icon: 'i-lucide-square-code'
    },
    {
        date: 'Mars 2025 - Mars 2026',
        title: 'Présidente de l\'Amicale des Étudiants et des Anciens de l\'IUT de Haguenau - AEAIH',
        description: 'Association étudiante - Prise de décisions, organisation d\'événements...',
        icon: 'i-lucide-hand-heart'
    },
    {
        date: 'Avril 2025 - Juin 2025',
        title: 'Stagiaire Développeuse web Front-end',
        description: 'Agence de communication Izhak Interact, Strasbourg - Développement et mise à jour de sites pour de nombreux clients.',
        icon: 'i-lucide-square-code'
    },
    {
        date: 'Juillet 2023',
        title: 'Surveillante de salle',
        description: 'Musées de la ville de Strasbourg',
        icon: 'i-lucide-landmark'
    },
])
</script>

<template>
    <section class="w-full h-full">
        <UPageHero title="A propos de moi" :description="aboutMe" orientation="horizontal" :ui="{
            container: 'lg:py-32 lg:flex lg:flex-row',
        }">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
                alt="fraise" class="rounded-full w-80 aspect-square object-cover">
        </UPageHero>
        <div class="grid grid-cols-2 mx-40 gap-30">
            <div class="flex flex-col gap-5">
                <h2 class="text-3xl font-bold">Mes expériences pros et associatives</h2>
                <UTimeline :items="itemsJob" />
            </div>
            <div class="flex flex-col gap-5">
                <h2 class="text-3xl font-bold">Mes formations</h2>
                <UTimeline :items="itemsSchool" />
            </div>
        </div>
    </section>
</template>