<template>
  <div>
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
          <div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in products" :key="product.id" :href="product.href" class="group">
              <NuxtImg :src="product.imageSrc" :alt="product.imageAlt"
                class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]" />
              <h3 class="mt-4 text-lg font-semibold text-center text-gray-700">{{ product.name }}</h3>
              <p class="mt-1 text-lg text-center text-gray-900">{{ product.price }}</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const products = [
  {
    id: 1,
    name: 'Safari em Zanzibar',
    href: '#',
    imageSrc: '/images/gift_safari.jpg',
    imageAlt: "Safari em Zanzibar",
    price: 'R$500',
  },
  {
    id: 2,
    name: 'Café super faturado da Bia',
    href: '#',
    imageSrc: '/images/gift_coffee.jpg',
    imageAlt: "Café super faturado da Bia",
    price: 'R$200',
  },
  {
    id: 3,
    name: '1 Ano de Netflix',
    href: '#',
    imageSrc: '/images/gift_netflix.jpg',
    imageAlt: "1 Ano de Netflix",
    price: 'R$400',
  },
  {
    id: 4,
    name: 'Aula de culinária para o Hugo',
    href: '#',
    imageSrc: '/images/gift_cooking.jpg',
    imageAlt: "Aula de culinária para o Hugo",
    price: 'R$300',
  },
  {
    id: 5,
    name: '1 Ano de Pilates para a Bia',
    href: '#',
    imageSrc: '/images/gift_pilates.jpg',
    imageAlt: "1 Ano de Pilates para a Bia",
    price: 'R$300',
  },
  {
    id: 6,
    name: '1 Ano de Academia para o Hugo',
    href: '#',
    imageSrc: '/images/gift_gym.jpg',
    imageAlt: "1 Ano de Academia para o Hugo",
    price: 'R$300',
  },
  {
    id: 7,
    name: 'Para fazer o seu pedido de casamento na festa',
    href: '#',
    imageSrc: '/images/gift_bride.jpg',
    imageAlt: "Para fazer o seu pedido de casamento na festa",
    price: 'R$100.000',
  },
  {
    id: 8,
    name: 'Para a creche da Brownie durante a Lua de Mel',
    href: '#',
    imageSrc: '/images/gift_dog.jpg',
    imageAlt: "Para a creche da Brownie durante a Lua de Mel",
    price: 'R$700',
  },
  {
    id: 9,
    name: '"Eu não vou embora!" Ajuda para hora extra dos fornecedoress',
    href: '#',
    imageSrc: '/images/gift_party.jpg',
    imageAlt: '"Eu não vou embora!" Ajuda para hora extra dos fornecedoress',
    price: 'R$500',
  },
  {
    id: 10,
    name: 'Massagem de casal no Resort',
    href: '#',
    imageSrc: '/images/gift_massage.jpg',
    imageAlt: 'Massagem de casal no Resort',
    price: 'R$1000',
  },
  // More products...
]
</script>

<style></style>

<!--
* Para fazer um pedido de casamento na festa
* Um jantar romântico em x lugar
* Algum passeio dependendo do nosso destino
* Para a creche da Brownie
* Para um cafe superfaturado para a noiva 
* Aula de culinária para o noivo
* Taxa para jogar o buquê para alguém específico
* Prioridade no quarto de visita na casa dos noivos
* Aquela massagem no spa do hotel
* “Eu não vou embora”. Ajuda pra hora extra dos fornecedores
* 1 ano de pilates para a noiva
* 1 ano de academia para o noivo
* Ajudar os noivos a aposentarem mais cedo
* Despertador para a noiva
* Kit facas (algo assim apra hugo) - ou alguma outra coisa que tu aches engraçado
* 14 meses de aluguel (é uma piada com chaves)
* 12 meses de netflix
-->