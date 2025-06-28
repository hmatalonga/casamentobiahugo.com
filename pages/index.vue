<template>
  <div>
    <header>
      <NavBar />
    </header>

    <div class="fixed-bg bg-hero bg-no-repeat bg-cover sm:bg-center"></div>

    <div>
        <div class="mx-auto max-w-3xl px-6 lg:px-8">
          <div class="min-h-svh flex justify-center items-center">
            <div class="text-center">
              <h3 class="text-white font-display text-2xl sm:text-3xl">06.09.2025</h3>
              <div class="mt-9 mb-3">
                <h1 class="text-white font-display uppercase tracking-wider text-6xl sm:text-7xl">Beatriz &amp; Hugo
                </h1>
              </div>
              <h3 class="text-white font-note text-4xl sm:text-5xl">Portugal</h3>
            </div>
          </div>
        </div>

    </div>

    <main>
      <div class="bg-stone-50">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid sm:grid-cols-1">
            <div>
              <div class="prose mx-auto max-w-xl px-3 py-4">
                <h1 class="font-serif text-gray-700">Oi, família e amigos!</h1>
                <p class="font-sans text-gray-700 text-justify">
                  Nosso casamento é um encontro de Portugal com Pernambuco — uma celebração das nossas raízes, do nosso jeito.
                  Para quem vem de longe, preparamos algumas dicas no menu do site que podem ajudar na viagem.
                  E para todos, o link para confirmação de presença está logo abaixo, com todos os detalhes.
                </p>
                <p class="mt-6">Com carinho,</p>
                <h3 class="mt-1 font-semibold font-serif uppercase tracking-wider">Beatriz &amp; Hugo</h3>
                <p class="mt-6">
                  <NuxtLink to="https://forms.gle/yaq6wfJmgCYNhzdW8" target="_blank"
                    class="rounded-md bg-emerald-600 no-underline px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                    RSVP</NuxtLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Casamento Bia & Hugo',
})
</script>

<style>
.fixed-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Make it fill the viewport */
  z-index: -1; /* Ensure it's behind other content */
}
</style>