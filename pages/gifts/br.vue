<template>
  <div class="bg-white">
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Aos amigos e família de Recife 💌</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">Aos amigos e família de Recife 💌</h1>
          <p class="mt-4 text-base/8 text-gray-600">Nossa lista de presentes está aqui embaixo. Pode selecionar o que
            quiser oferecer e receberá o link do pix copia e cola automaticamente. Por favor, deixa uma nota para
            sabermos quem está a presentear, afinal vamos querer agradecer a todos!</p>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="(product, index) in products" :key="product.id" :href="product.href" class="group"
              @click="openModal(index)">
              <NuxtImg :src="product.imageSrc" :alt="product.imageAlt"
                class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
              <h3 class="mt-4 text-lg font-semibold text-center text-gray-700">{{ product.name }}</h3>
              <p class="mt-1 text-lg text-center text-gray-900">{{ product.price }}</p>
            </a>
          </div>
          <UModal v-model="isOpen">
            <div class="rounded-lg bg-white px-4 pb-4 pt-5 text-left sm:my-4 sm:p-6">
              <div>
                <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                  <GiftIcon class="size-6 text-emerald-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-lg font-semibold text-gray-900">{{ selectedProduct.name }}</h3>
                  <h3 class="text-lg text-gray-900">{{ selectedProduct.price }}</h3>
                  <div class="mt-2">
                    <p class="text-base text-gray-500">Beatriz de Brito Coêlho</p>
                    <p class="text-base text-gray-500">CPF: 09455761459</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button"
                  class="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  @click="copy(selectedProduct.pix)">
                  <span v-if="!copied">Pix Copia e Cola</span>
                  <span v-else>Copiado!</span>
                </button>
              </div>
            </div>
          </UModal>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { GiftIcon } from '@heroicons/vue/24/outline'

const source = ref('09455761459')
const { copy, copied } = useClipboard({ source })

const isOpen = ref(false)
const productIndex = ref(0)

useHead({
  title: 'Lista de Presentes | Casamento Bia & Hugo',
})

const products = [
  {
    id: 1,
    name: 'Safari em Zanzibar',
    href: '#',
    imageSrc: '/images/gift_safari.jpg',
    imageAlt: "Safari em Zanzibar",
    price: 'R$1000',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com52040000530398654071000.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510I5nLdf9mnj63049009',
  },
  {
    id: 2,
    name: 'Café super faturado da Bia',
    href: '#',
    imageSrc: '/images/gift_coffee.jpg',
    imageAlt: "Café super faturado da Bia",
    price: 'R$100',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406100.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510YuRiqFL3SK6304E3F0',
  },
  {
    id: 3,
    name: '1 Ano de Netflix',
    href: '#',
    imageSrc: '/images/gift_netflix.jpg',
    imageAlt: "1 Ano de Netflix",
    price: 'R$400',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406400.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510T5U5ckDYXG63049E6E',
  },
  {
    id: 4,
    name: 'Aula de culinária para o Hugo',
    href: '#',
    imageSrc: '/images/gift_cooking.jpg',
    imageAlt: "Aula de culinária para o Hugo",
    price: 'R$150',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406150.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510dvYWUhin6R6304DFED',
  },
  {
    id: 5,
    name: '1 Ano de Pilates para a Bia',
    href: '#',
    imageSrc: '/images/gift_pilates.jpg',
    imageAlt: "1 Ano de Pilates para a Bia",
    price: 'R$300',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406300.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510ELhhsuigeI6304D14B',
  },
  {
    id: 6,
    name: '1 Ano de Academia para o Hugo',
    href: '#',
    imageSrc: '/images/gift_gym.jpg',
    imageAlt: "1 Ano de Academia para o Hugo",
    price: 'R$200',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406200.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510ckkDi6ozsX63041BBD',
  },
  {
    id: 7,
    name: 'Para fazer o seu pedido de casamento na festa',
    href: '#',
    imageSrc: '/images/gift_bride.jpg',
    imageAlt: "Para fazer o seu pedido de casamento na festa",
    price: 'R$100.000',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865407100000.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510I5nLdf9mnj63049009',
  },
  {
    id: 8,
    name: 'Para a creche da Brownie durante a Lua de Mel',
    href: '#',
    imageSrc: '/images/gift_dog.jpg',
    imageAlt: "Para a creche da Brownie durante a Lua de Mel",
    price: 'R$600',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406600.005802BR5923Beatriz de Brito Coelho6009SAO PAULO621405103gNVteI81u63042A22',
  },
  {
    id: 9,
    name: '"Eu não vou embora!" Ajuda para hora extra dos fornecedoress',
    href: '#',
    imageSrc: '/images/gift_party.jpg',
    imageAlt: '"Eu não vou embora!" Ajuda para hora extra dos fornecedoress',
    price: 'R$700',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406700.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510xFUYQ6HqJm6304B7A2',
  },
  {
    id: 10,
    name: 'Massagem de casal no Resort',
    href: '#',
    imageSrc: '/images/gift_massage.jpg',
    imageAlt: 'Massagem de casal no Resort',
    price: 'R$500',
    isOpen: false,
    pix: '00020126460014BR.GOV.BCB.PIX0124bbc.psicologia@gmail.com5204000053039865406500.005802BR5923Beatriz de Brito Coelho6009SAO PAULO62140510nzVxOvwVyx630416FA',
  },
]

const selectedProduct = computed(() => {
  return products[productIndex.value]
})

function openModal(index: number) {
  productIndex.value = index
  isOpen.value = true
}
</script>

<style></style>
