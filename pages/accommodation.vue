<template>
  <div>
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Alojamento</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">Alojamento</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ul role="list" class="grid grid-cols-1 gap-6 auto-rows-fr sm:grid-cols-2">
            <li v-for="item in items" :key="item.id" class="col-span-1 divide-y divide-gray-200">
              <div class="overflow-hidden bg-white shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                  <div class="px-4 py-5 sm:px-6">
                    <a :href="item.link" class="text-lg font-medium leading-6 text-emerald-600 hover:text-emerald-500">{{
                      item.name }}</a>
                  </div>
                  <div class="px-4 py-5 sm:p-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Distância</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ item.distance }}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Tempo</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ item.time }}</dd>
                      </div>
                      <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">Qualidade</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ item.quality }}</dd>
                      </div>
                    </dl>
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
useHead({
  title: 'Alojamento | Casamento Bia & Hugo',
})

const items = [
  { id: 1, name: "Villa C Boutique Hotel", distance: "Aproximadamente 4-5 km", time: "10-15 minutos", quality: "Excelente para quem busca um ambiente moderno e sofisticado.", link: "https://www.villacboutiquehotel.com/" },
  { id: 2, name: "B&B HOTEL Porto Expo Aeroporto", distance: "Cerca de 4-5 km", time: "10-15 minutos", quality: "Econômico e confortável, com boa localização perto do aeroporto.", link: "https://www.villacboutiquehotel.com/" },
  { id: 3, name: "Park Hotel Porto Aeroporto", distance: "Aproximadamente 6 km", time: "10-15 minutos", quality: "Bom para quem busca praticidade e está perto do aeroporto.", link: "http://www.parkhotel.pt/pt/Menu/Hoteis/Porto-Aeroporto.aspx" },
  { id: 4, name: "Casa Mindela", distance: "Aproximadamente 5-6 km", time: "10-15 minutos", quality: "Um ambiente rústico e acolhedor, ideal para quem deseja tranquilidade.", link: "https://www.casamindela.pt/" },
  { id: 5, name: "Casa Velha", distance: "Aproximadamente 6-7 km", time: "15-20 minutos", quality: "Simples e charmosa, com um toque rural. Ideal para quem quer descansar.", link: "https://www.booking.com/hotel/pt/casa-velha-guesthouse.pt-pt.html" },
  { id: 6, name: "Smiling Places Guest House", distance: "Aproximadamente 7-8 km", time: "15-20 minutos", quality: "Aconchegante e descontraído, bom para quem procura algo mais informal e acessível.", link: "https://smiling-places.com/" },
  { id: 7, name: "Oporto Airport & Business Hotel", distance: "Aproximadamente 4-5 km", time: "10-15 minutos", quality: "Hotel moderno e funcional, com boas comodidades para hóspedes em viagens de negócios ou curta estadia.", link: "https://oportoairportbusinesshotel.com/" },
  { id: 8, name: "Hotel 3K Porto Aeroporto", distance: "Aproximadamente 6 km", time: "10-15 minutos", quality: "Boa opção econômica e confortável, ideal para quem precisa de proximidade ao aeroporto e não quer gastar muito.", link: "https://www.hotel3kporto.com/pt/index.html" },
  { id: 9, name: "Hotel Premium Porto Maia", distance: "Aproximadamente 8-9 km", time: "15-20 minutos", quality: "Hotel confortável de 4 estrelas, com boas comodidades, ideal para quem busca um ambiente mais tranquilo, mas perto da cidade.", link: "https://www.premiumportomaia.com/" },
]
</script>

<style></style>