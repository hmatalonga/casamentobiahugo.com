<template>
  <div>
    <header>
      <div class="bg-pink-950 py-8">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex flex-col justify-center items-center">
            <h1 class="font-display text-3xl text-center text-amber-100 sm:text-5xl">Bia & Hugo</h1>
            <NuxtImg class="w-auto rounded-lg h-auto mt-4 sm:mt-6 lg:mt-8 md:w-2/3 lg:w-1/2" src="/images/hero5.jpeg" placeholder />
            <h2 class="font-note text-4xl text-center text-amber-100 -rotate-6 sm:text-6xl">Vamos casar!</h2>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="border-t-2 border-amber-100 bg-pink-950">
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <NuxtLink to="/event" class="font-display text-xl underline text-amber-100 text-center">Evento</NuxtLink>
            <NuxtLink to="/accommodation" class="font-display text-xl underline text-amber-100 text-center">Alojamento</NuxtLink>
            <NuxtLink to="/contacts" class="font-display text-xl underline text-amber-100 text-center col-span-full sm:col-auto">Contactos</NuxtLink>
          </div>
        </div>
      </div>
      <div class="bg-stripes">
        <div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="border-8 border-amber-100">
            <div class="bg-amber-100 border-2 border-pink-950 py-16">
            <div class="flex flex-col justify-center items-center">
              <div class="font-display text-4xl text-center">6 de Setembro 2025</div>
              <div class="font-note text-2xl mt-2 text-center">Casa Salgueiro, Labruge, Portugal</div>
              <NuxtLink to="/rsvp" class="rounded-full bg-pink-950 px-12 py-2.5 mt-16 font-display underline text-lg text-amber-100 shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">RSVP</NuxtLink>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
// https://cambiumfarms.com/
useHead({
  title: 'Casamento Bia & Hugo',
})
</script>

<style></style>