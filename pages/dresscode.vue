<template>
  <div class="bg-white">
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Dress Code</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">Dress Code</h1>
        </div>
        <!-- <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contactos</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Caso tenha alguma dúvida, não hesite em nos contactar.</p>
        </div> -->
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div>
            <p class="text-base/8 text-gray-600">Como ainda vamos estar no verão, vestidos leves, com cores alegres e
              tecidos frescos são super bem-vindos! Para os rapazes, não precisam estar com fato completo, mas sem uso
              de gangas (calças jeans), please 🤎</p>
            <p class="mt-4 text-base/8 text-gray-600">Evitem brilhos exagerados, branco (claro!) e preto. Queremos um
              dia cheio de luz e cor! 🌼</p>
            <p class="mt-4 text-base/8 text-gray-600">E ah, só uma dica: para quem é friorenta, levar algum casaco para
              de noite.</p>
          </div>
          <div class="grid grid-cols-2 items-center gap-3 py-8 sm:gap-6 sm:grid-cols-3">
            <NuxtImg class="w-full h-auto" src="/images/dress_men1.jpeg" placeholder />
            <NuxtImg class="w-full h-auto" src="/images/dress_women3.jpeg" placeholder />
            <NuxtImg class="w-full h-auto" src="/images/dress_men2.jpeg" placeholder />
            <NuxtImg class="w-full h-auto" src="/images/dress_women2.jpeg" placeholder />
            <NuxtImg class="w-full h-auto" src="/images/dress_men3.jpeg" placeholder />
            <NuxtImg class="w-full h-auto" src="/images/dress_women1.jpeg" placeholder />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Dress Code | Casamento Bia & Hugo',
})
</script>

<style></style>