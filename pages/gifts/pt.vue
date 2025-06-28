<template>
  <div class="bg-white">
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Lista de Presentes</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">Lista de Presentes</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li v-for="person in people" :key="person.name"
              class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 flex-col p-8">
                <NuxtImg class="mx-auto size-32 shrink-0 rounded-full" :src="person.imageUrl" :alt="person.name"
                  placeholder />
                <h3 class="mt-6 text-sm font-medium text-gray-900">{{ person.name }}</h3>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <div class="flex w-0 flex-1 bg-green-50">
                    <button @click="copyMbWay(person.telephone)"
                      class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <CreditCardIcon class="size-5 text-gray-400" aria-hidden="true" />
                      MB WAY
                    </button>
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
import { useClipboard } from '@vueuse/core'
import { CreditCardIcon } from '@heroicons/vue/20/solid'

const toast = useToast()
const source = ref('937116008')
const { copy } = useClipboard({ source })

useHead({
  title: 'Lista de Presentes | Casamento Bia & Hugo',
})

function copyMbWay(telephone: string) {
  copy(telephone)
  alert('MB WAY copiado!')
}

const people = [
  {
    name: 'Bia Coêlho',
    title: 'A mente criativa',
    role: 'Noiva',
    telephone: '937116008',
    imageUrl: '/images/profile_bia.jpg',
  },
  {
    name: 'Hugo Matalonga',
    title: 'O programador',
    role: 'Noivo',
    telephone: '918208235',
    imageUrl: '/images/profile_hugo.jpg',
  },
]
</script>

<style></style>