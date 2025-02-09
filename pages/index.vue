<template>
  <div>
    <div class="bg-hero bg-no-repeat bg-cover bg-center sm:h-screen">
      <div class="grid min-h-svh lg:min-h-full">
        <AppHeader />
        <div class="flex items-start justify-center">
          <NuxtImg class="min-w-48 w-1/4 md:w-1/5 lg:w-1/6 lg:max-w-lg h-auto" src="/images/logo_mask_white.png"
            placeholder />
        </div>
        <div
          class="flex flex-col items-center justify-center px-6 pb-6 lg:flex-row lg:justify-between lg:items-end lg:px-8 lg:pb-8">
          <div
            class="max-w-2xl font-serif font-light uppercase text-6xl text-center text-gray-200 lg:text-left lg:text-8xl">
            Rustic Elegance
          </div>
          <div
            class="max-w-2xl font-serif font-light uppercase text-6xl text-center text-gray-200 lg:text-right lg:text-8xl">
            Natural Serenity</div>
        </div>
      </div>
    </div>
    <div class="bg-pattern">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
        <div class="prose mx-auto max-w-3xl lg:prose-lg">
          <h1 class="font-serif text-center text-gray-700">A Historic Setting <br> for a Modern Love Story.</h1>
          <p class="font-sans text-center text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit sapien quam, eget efficitur quam
            auctor eu. Curabitur at lectus pharetra, facilisis turpis nec, rhoncus sem. Vestibulum volutpat lectus quis
            ligula tincidunt, ut fringilla justo fringilla. Nulla gravida nisl quis mauris malesuada, quis condimentum
            metus pharetra. Quisque in maximus elit. Sed porta tincidunt purus id ullamcorper. Duis iaculis ante ac
            purus sodales, ut sollicitudin risus porttitor. Nulla et leo ipsum. Nulla fringilla nunc quis augue
            lobortis, sit amet rutrum turpis facilisis.
          </p>
          <p class="font-sans text-center text-gray-700">
            Nam dignissim risus purus, et scelerisque risus fringilla nec. Phasellus nisi sem, dictum non tincidunt eu,
            tempor eu turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aenean tempor tortor in ultrices bibendum. Curabitur accumsan ex justo, quis fringilla massa varius id.
            Vestibulum sed dapibus enim, nec rutrum erat. In at eros risus. Donec mattis sit amet odio et ullamcorper.
            Quisque dignissim ullamcorper hendrerit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// https://cambiumfarms.com/
</script>

<style>
.bg-pattern {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233080a9' fill-opacity='0.12'%3E%3Cpath d='M84 23c-4.417 0-8-3.584-8-7.998V8h-7.002C64.58 8 61 4.42 61 0H23c0 4.417-3.584 8-7.998 8H8v7.002C8 19.42 4.42 23 0 23v38c4.417 0 8 3.584 8 7.998V76h7.002C19.42 76 23 79.58 23 84h38c0-4.417 3.584-8 7.998-8H76v-7.002C76 64.58 79.58 61 84 61V23zM59.05 83H43V66.95c5.054-.5 9-4.764 9-9.948V52h5.002c5.18 0 9.446-3.947 9.95-9H83v16.05c-5.054.5-9 4.764-9 9.948V74h-5.002c-5.18 0-9.446 3.947-9.95 9zm-34.1 0H41V66.95c-5.053-.502-9-4.768-9-9.948V52h-5.002c-5.184 0-9.447-3.946-9.95-9H1v16.05c5.053.502 9 4.768 9 9.948V74h5.002c5.184 0 9.447 3.946 9.95 9zm0-82H41v16.05c-5.054.5-9 4.764-9 9.948V32h-5.002c-5.18 0-9.446 3.947-9.95 9H1V24.95c5.054-.5 9-4.764 9-9.948V10h5.002c5.18 0 9.446-3.947 9.95-9zm34.1 0H43v16.05c5.053.502 9 4.768 9 9.948V32h5.002c5.184 0 9.447 3.946 9.95 9H83V24.95c-5.053-.502-9-4.768-9-9.948V10h-5.002c-5.184 0-9.447-3.946-9.95-9zM50 50v7.002C50 61.42 46.42 65 42 65c-4.417 0-8-3.584-8-7.998V50h-7.002C22.58 50 19 46.42 19 42c0-4.417 3.584-8 7.998-8H34v-7.002C34 22.58 37.58 19 42 19c4.417 0 8 3.584 8 7.998V34h7.002C61.42 34 65 37.58 65 42c0 4.417-3.584 8-7.998 8H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>