<template>
  <div>
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Com carinho, cada um à sua maneira 💌</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">Com carinho, cada um à sua maneira 💌
          </h1>
          <p class="mt-4 text-base/8 text-gray-600">Em Portugal, é comum levar um envelope com a prenda em dinheiro no
            dia do
            casamento.</p>
          <p class="mt-4 text-base/8 text-gray-600">Sabemos que para quem vem de Recife, o euro não está dos mais
            amigáveis, então também deixamos sugestões de prendas para quem vem de
            fora.</p>
          <p class="mt-2 text-base/8 text-gray-600">👇 Escolhe de onde vens pra ver as opções:</p>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex flex-col justify-center items-center space-y-4">
            <NuxtLink to="/gifts/pt"
              class="rounded-md bg-blue-400 no-underline px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
              Sou de Portugal</NuxtLink>
            <NuxtLink to="/gifts/br"
              class="rounded-md bg-violet-400 no-underline px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400">
              Sou de Recife</NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Lista de Presentes | Casamento Bia & Hugo',
})
</script>

<style></style>