<template>
  <div class="bg-white">
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Evento</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">Evento</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div>
            <h2 class="text-xl/7 font-semibold text-emerald-600">Oi, família e amigos!</h2>
            <p class="mt-2 text-base/8 text-gray-600">Nosso casamento vai seguir o estilo português, com uma programação
              que dura muitas horas — e, claro, com muito de Recife no meio da festa!
            </p>
            <p class="mt-2 text-base/8 text-gray-600">Pra ninguém ser pego de surpresa (especialmente quem vem de fora),
              preparamos uma linha do tempo com tudo
              que vai rolar.</p>
            <p class="mt-2 text-base/8 text-gray-600">Spoiler: vai ter muita música, dança e alegria do começo ao fim!
              🪩</p>
            <p class="mt-6 text-gray-600">Com carinho,</p>
            <p class="mt-1 font-semibold">Beatriz &amp; Hugo</p>
          </div>
          <nav class="py-10" aria-label="Progress">
            <ol role="list" class="overflow-hidden">
              <li v-for="(step, stepIdx) in steps" :key="step.name"
                :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']">
                <template v-if="step.status === 'complete'">
                  <div v-if="stepIdx !== steps.length - 1"
                    class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-emerald-600" aria-hidden="true" />
                  <a :href="step.href" class="group relative flex items-start">
                    <span class="flex h-9 items-center">
                      <span
                        class="relative z-10 flex size-8 items-center justify-center rounded-full bg-emerald-600 group-hover:bg-emerald-800">
                        <CheckIcon class="size-5 text-white" aria-hidden="true" />
                      </span>
                    </span>
                    <span class="ml-4 flex min-w-0 flex-col">
                      <span class="text-sm font-medium">{{ step.name }}</span>
                      <span class="text-sm text-gray-500">{{ step.description }}</span>
                    </span>
                  </a>
                </template>
                <template v-else-if="step.status === 'current'">
                  <div v-if="stepIdx !== steps.length - 1"
                    class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                  <a :href="step.href" class="group relative flex items-start" aria-current="step">
                    <span class="flex h-9 items-center" aria-hidden="true">
                      <span
                        class="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-emerald-600 bg-white">
                        <span class="size-2.5 rounded-full bg-emerald-600" />
                      </span>
                    </span>
                    <span class="ml-4 flex min-w-0 flex-col">
                      <span class="text-sm font-medium text-emerald-600">{{ step.name }}</span>
                      <span class="text-sm text-gray-500">{{ step.description }}</span>
                    </span>
                  </a>
                </template>
                <template v-else>
                  <div v-if="stepIdx !== steps.length - 1"
                    class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                  <a :href="step.href" class="group relative flex items-start">
                    <span class="flex h-9 items-center" aria-hidden="true">
                      <span
                        class="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                        <span class="size-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                      </span>
                    </span>
                    <span class="ml-4 flex min-w-0 flex-col">
                      <span class="text-sm font-medium text-gray-500">{{ step.name }}</span>
                      <span class="text-sm text-gray-500">{{ step.description }}</span>
                    </span>
                  </a>
                </template>
              </li>
            </ol>
          </nav>
          <div>
            <p class="text-base/8 text-gray-600">Nosso casamento foi pensado para juntar um pouquinho de Portugal
              Esperamos muito que você venha e aproveite cada momento. Serão 15h de festa, então vamos juntos fazer cada
              parte
              valer a pena 💖</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

useHead({
  title: 'Evento | Casamento Bia & Hugo',
})

const steps = [
  { name: '13:30 - Recepção & Boas Vindas', description: 'Este é o momento de chegada de todos os convidados, com direito a umas boas taças de champanhe! Momento de descontração, que também será de grande ajuda para o noivo não ficar tão nervoso. 😉', href: '#', status: 'complete' },
  { name: '14:00 - Início da Cerimônia 💒', description: '', href: '#', status: 'current' },
  { name: '14:45 - Fotos, Finger Foods & Música', description: 'Após a cerimônia, seguimos com as fotos. Durante este tempo, serão servidos finger foods da culinária portuguesa, já para começarem a sentir o gostinho tuga! Também teremos DJ para entrar no clima. 🪩', href: '#', status: 'upcoming' },
   { name: '16:30 - Banda ao Vivo', description: 'Hora da banda ao vivo. É hora de ver os noivos descerem na "boquinha da garrafa"! 🍾', href: '#', status: 'upcoming' },
  { name: '18:30 - Recepção Gastronômica', description: 'Aqui, todos sentam-se à mesa e desfrutam de uma refeição tradicional 🍷', href: '#', status: 'upcoming' },
  { name: '20:30 - Abertura da Pista de Dança', description: 'A pista de dança vai abrir, e a festa vai comecar! 🎉', href: '#', status: 'upcoming' },
  { name: '23:30 - Corte do Bolo', description: 'Tradição em Portugal, que para além do corte de bolo, fazem também brindes ao casal! 🥂', href: '#', status: 'upcoming' },
  { name: '00:30 - Ceia', description: 'Um casamento português precisa de comida (e a noiva taurina agradece)! Após o corte do bolo, servimos uma ceia, com snacks para manter os sobreviventes na ativa. 💃🕺', href: '#', status: 'upcoming' },
  { name: '01:00 até 04:00 - Música e Continuação da Festa', description: 'A festa segue com música animada, onde todos podem continuar dançando até o final da festa. Provavelmente a base de muito café! Queremos ver quem vai aguentar até o fim ☕️ ✨', href: '#', status: 'upcoming' },
]
</script>

<style></style>