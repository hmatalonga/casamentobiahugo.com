<template>
  <div>
    <header class="absolute inset-x-0 top-0 z-50">
      <NavBar />
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden" aria-hidden="true">
        <div class="relative bg-hero bg-no-repeat bg-cover bg-center min-h-screen"></div>
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-4 sm:flex sm:justify-center">
          <NuxtImg class="min-w-48 w-1/4 md:w-1/5 lg:w-1/6 xl:max-w-xl h-auto" src="/images/logo_bird_small.png"
            placeholder />
        </div>
        <div class="text-center">
          <span
            class="box-decoration-slice bg-gradient-to-r from-emerald-600 text-white px-2 text-balance text-5xl font-serif font-semibold tracking-tight sm:text-7xl">
            A Historic Setting</br> for a Modern Love Story</span>
          <!-- <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Data to enrich your online business</h1>
          <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div> -->
        </div>
      </div>
    </div>

    <main>
      <div class="relative top-10 bg-pattern">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="prose mx-auto max-w-3xl lg:prose-lg">
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