<script setup lang="ts">
const projectDesc = 'Retrouvez ici certains de mes projets de développement web et de conception UX/UI. \
                    La plupart ont été réalisés pour des projets universitaires appelés des SAE (Situations d\'Apprentissage et d\'Évaluation).'

const projects = ref([
    {
        title: 'Application de recettes',
        description: 'Lors d\'un cours de développement mobile, nous avons du nous entraîner à réaliser des maquettes à destination d\'applications mobiles. \
                        En effet, les enjeux de design et d\'accessibilité ne sont pas du tout les mêmes que pour un site internet. ',
        date: '2025',
        link: 'https://embed.figma.com/proto/UCZqMThQLRA8FYFvKuZhhF/DI5?page-id=0%3A1&node-id=1-2&viewport=140%2C137%2C1.35&scaling=scale-down&content-scaling=fixed&embed-host=share',
        image: '/images/app-recettes.png'
    },
    {
        title: 'Vers un ciel plus vert',
        description: 'A nouveau dans le cadre d\'une SAE de groupe sur le thème de la ssobriété énergétique, nous avons du réaliser un site infogrphique sur le thème de notre choix. \
                        Avec mon groupe, nous avons choisi la consommation énergétique des avions. Chacun de nous a du faire des recherches de données quant au thème. \
                        Pour ma part, j\'ai choisi la part de carburant consommée dans les courts courriers. J\'ai ensuite pris en charge une grande partie de l\'itégration du site.',
        date: '2025',
        link: '',
        image: '/images/ciel-vert.png'
    },
    {
        title: 'L\'Europe sur la défensive',
        description: 'Ce projet de conception UX et développement web a été réalisé dans le cadre d\'une SAE en partenariat avec le Centre Universitaire d\'École de Journalisme (CUEJ) de Strasbourg. \
                        L\'objectif était de réaliser un CMS à l\'aide de Laravel afin que les élèves du CUEJ puissent publier des articles. \
                        J\'y ai réalisé les maquettes graphiques, le CMS (principalement la partie visible), ainsi que l\'affichage de quelques composants des articles.',
        date: '2024',
        link: 'https://cuej.info/mini-sites/europe2024/',
        image: '/images/europe-defensive.png'
    },
    {
        title: 'Refonte du site de la Sig Association',
        description: 'L\'objectif de cette SAE d\'UX et de webdesign était de réaliser, en groupe, la refonte du site internet de la Sig Association, club de basket féminin basé à Strasbourg Illkirch-Graffenstaden. \
                     Pour ma part, j\'ai pu réaliser la charte graphique ainsi que les  wireframes du site sur Figma. Nous avons ensuite fait le webdesign, en s\'appuyant sur la charte graphique. ',
        date: '2024',
        link: 'https://embed.figma.com/proto/5hAScV70jQQf9SLKu0Ocsb/SA%C3%89-302?page-id=1%3A4&node-id=278-2218&viewport=1450%2C367%2C0.08&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=278%3A2218&embed-host=share',
        image: '/images/sig-association.png'
    }
])
</script>

<template>
    <section class="w-full h-full flex flex-col justify-center items-center">
        <UPageHero title="Mes projets" :description="projectDesc" orientation="horizontal" reverse :ui="{
            container: 'lg:py-32 lg:flex lg:flex-row',
        }">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="fraise" class="rounded-full w-80 aspect-square object-cover">
        </UPageHero>
        <div class="mx-40 flex flex-col gap-16">
            <UPageCard v-for="(project, index) in projects" :key="index" :title="project.title"
                :description="project.description" :to="project.link" orientation="horizontal" variant="naked"
                :reverse="index % 2 === 1" target="_blank" class="group" :ui="{
                    container: 'lg:flex lg:flex-row gap-x-12',
                    wrapper: 'max-sm:order-last'
                }">
                <template #leading>
                    <span class="text-sm text-muted">
                        {{ new Date(project.date).getFullYear() }}
                    </span>
                </template>
                <template #footer>
                    <ULink :to="project.link" class="text-sm text-primary flex items-center">
                        Voir le projet
                        <UIcon name="lucide:arrow-right"
                            class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
                    </ULink>
                </template>
                <img :src="project.image" :alt="project.title"
                    class="object-cover aspect-video h-48 rounded-lg transition-all group-hover:scale-110 group-hover:shadow-xl">
            </UPageCard>
        </div>
    </section>
</template>