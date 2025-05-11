<template>
  <div>
    <header class="absolute inset-x-0 top-0 z-50">
      <NavBar />
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden" aria-hidden="true">
        <div class="relative bg-hero bg-no-repeat bg-cover bg-center min-h-screen"></div>
      </div>
      <div class="mx-auto max-w-3xl">
        <div class="min-h-screen flex justify-center items-center">
          <div class="text-center">
            <h3 class="text-white font-display text-2xl sm:text-3xl">06.09.2025</h3>
            <div class="mt-9 mb-3">
              <h1 class="text-white font-display uppercase tracking-wider text-6xl sm:text-7xl">Beatriz &amp; Hugo</h1>
            </div>
            <h3 class="text-white font-note text-4xl sm:text-5xl">Portugal</h3>
          </div>
        </div>
      </div>
    </div>

    <main>
      <!-- <div class="bg-pattern">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="prose mx-auto max-w-3xl">
            <h1 class="font-serif text-center text-gray-700">A Historic Setting <br> for a Modern Love Story.</h1>
            <p class="font-sans text-center text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit sapien quam, eget efficitur
              quam
              auctor eu. Curabitur at lectus pharetra, facilisis turpis nec, rhoncus sem. Vestibulum volutpat lectus
              quis
              ligula tincidunt, ut fringilla justo fringilla. Nulla gravida nisl quis mauris malesuada, quis condimentum
              metus pharetra. Quisque in maximus elit. Sed porta tincidunt purus id ullamcorper. Duis iaculis ante ac
              purus sodales, ut sollicitudin risus porttitor. Nulla et leo ipsum. Nulla fringilla nunc quis augue
              lobortis, sit amet rutrum turpis facilisis.
            </p>
            <p class="font-sans text-center text-gray-700">
              Nam dignissim risus purus, et scelerisque risus fringilla nec. Phasellus nisi sem, dictum non tincidunt
              eu,
              tempor eu turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Aenean tempor tortor in ultrices bibendum. Curabitur accumsan ex justo, quis fringilla massa varius id.
              Vestibulum sed dapibus enim, nec rutrum erat. In at eros risus. Donec mattis sit amet odio et ullamcorper.
              Quisque dignissim ullamcorper hendrerit.
            </p>
          </div>
        </div>
      </div> -->
      <div class="bg-stone-50">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid sm:grid-cols-3">
            <div class="sm:col-span-1 mb-6 sm:mb-0">
              <NuxtImg class="w-auto rounded-lg h-auto mx-auto" src="/images/hero3.jpeg" placeholder />
            </div>
            <div class="sm:col-span-2">
              <div class="prose mx-auto max-w-xl px-3 py-4">
                <h1 class="font-serif text-gray-700">Oi, família e amigos!</h1>
                <p class="font-sans text-gray-700">
                  Nosso casamento foi pensado para juntar um pouquinho de Portugal
                  com um bocado de Pernambuco — afinal, se é
                  pra celebrar, que seja do nosso jeitinho, né?
                  Como a turma de Recife vai chegar em peso (e a gente sabe que vocês não brincam em serviço quando o
                  assunto
                  é festa), resolvemos compartilhar uma linha do tempo da programação para ninguém ser pego de surpresa.
                  Spoiler: vai ter muita hora pra dançar, rir e aproveitar!
                  Venham preparados para horas de alegria, com sotaque misturado, coração quente e histórias
                  boas
                  para lembrar.
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
      <!-- <div class="bg-stone-50">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-3">
            <div class="col-span-2">
              <div class="prose mx-auto max-w-xl px-3 py-4">
                <h1 class="font-serif text-gray-700">A Historic Setting <br> for a Modern Love Story.</h1>
                <p class="font-sans text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit sapien quam, eget
                  efficitur
                  quam
                  auctor eu. Curabitur at lectus pharetra, facilisis turpis nec, rhoncus sem. Vestibulum volutpat lectus
                  quis
                  ligula tincidunt, ut fringilla justo fringilla. Nulla gravida nisl quis mauris malesuada, quis
                  condimentum
                  metus pharetra. Quisque in maximus elit. Sed porta tincidunt purus id ullamcorper. Duis iaculis ante
                  ac
                  purus sodales, ut sollicitudin risus porttitor. Nulla et leo ipsum. Nulla fringilla nunc quis augue
                  lobortis, sit amet rutrum turpis facilisis.
                </p>
                <p class="font-sans text-gray-700">
                  Nam dignissim risus purus, et scelerisque risus fringilla nec. Phasellus nisi sem, dictum non
                  tincidunt
                  eu,
                  tempor eu turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.
                  Aenean tempor tortor in ultrices bibendum. Curabitur accumsan ex justo, quis fringilla massa varius
                  id.
                  Vestibulum sed dapibus enim, nec rutrum erat. In at eros risus. Donec mattis sit amet odio et
                  ullamcorper.
                  Quisque dignissim ullamcorper hendrerit.
                </p>
              </div>
            </div>
            <div class="col-span-1">
              <NuxtImg class="w-auto rounded-lg h-auto" src="/images/hero3.jpeg" placeholder />
            </div>
          </div>
        </div>
      </div> -->
    </main>
  </div>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';

// https://cambiumfarms.com/
useHead({
  title: 'Casamento Bia & Hugo',
})
</script>

<style></style>