<template>
    <article class="p-6 flex flex-col gap-4 border-brand-gray-50 border rounded-xl rounded-br-3xl max-w-[396px]">
        <header class="flex items-center gap-2">
            <img src="@/assets/announcement.svg" />
            <div class="flex flex-col gap-0.5 max-w-[260px]">
                <h2 class="text-2xl font-black leading-[30px] -tracking-[2%]">Campaigns</h2>
                <p class="truncate font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
                    consequatur, autem
                    maiores odio voluptatum iure perspiciatis temporibus cupiditate aliquam magni deleniti? Beatae
                    deleniti, iusto quo quam ea quae incidunt amet.</p>
            </div>
            <button>
                <img src="@/assets/right-arrow.svg" />
            </button>
        </header>
        <section class="grid grid-cols-2 divide-x border-brand-gray-50">
            <div class="flex flex-col">
                <p class="text-[39px] font-bold">100m</p>
                <p class="font-medium text-sm">Running</p>
            </div>
            <div class="flex flex-col pl-6">
                <p class="text-[39px] font-bold">9m</p>
                <p class="font-medium text-sm">Scheduled</p>
            </div>
        </section>
    </article>
</template>

<script setup lang="ts"></script>

<style scoped></style>