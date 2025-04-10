<template>
  <div>
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Contactos</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">Contactos</h1>
        </div>
        <!-- <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contactos</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Caso tenha alguma dúvida, não hesite em nos contactar.</p>
        </div> -->
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ul role="list"
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li v-for="person in people" :key="person.email"
              class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 flex-col p-8">
                <NuxtImg class="mx-auto size-32 shrink-0 rounded-full" :src="person.imageUrl" :alt="person.name"
                  placeholder />
                <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
                <dl class="mt-1 flex grow flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-sm text-gray-500">{{ person.title }}</dd>
                  <dt class="sr-only">Role</dt>
                  <dd class="mt-3">
                    <span
                      class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{
                        person.role }}</span>
                  </dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <div class="flex w-0 flex-1">
                    <a :href="`mailto:${person.email}`"
                      class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <EnvelopeIcon class="size-5 text-gray-400" aria-hidden="true" />
                      Email
                    </a>
                  </div>
                  <div class="-ml-px flex w-0 flex-1">
                    <a :href="`tel:${person.telephone}`"
                      class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <PhoneIcon class="size-5 text-gray-400" aria-hidden="true" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    name: 'Bia Brito',
    email: 'britocbeatriz@gmail.com',
    title: 'A mente criativa',
    role: 'Noiva',
    telephone: '+351 937 116 008',
    imageUrl: '/images/profile_bia.jpg',
  },
  {
    name: 'Hugo Matalonga',
    title: 'O programador',
    role: 'Noivo',
    email: 'hmatalonga@gmail.com',
    telephone: '+351 918 208 235',
    imageUrl: '/images/profile_hugo.jpg',
  },
  // More people...
]
</script>

<style></style>