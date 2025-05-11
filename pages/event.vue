<template>
  <div>
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
            <p class="mt-2 text-base/8 text-gray-600">Nosso casamento foi pensado para juntar um pouquinho de Portugal
              com um bocado de Pernambuco — afinal, se é
              pra celebrar, que seja do nosso jeitinho, né?
              Como a turma de Recife vai chegar em peso (e a gente sabe que vocês não brincam em serviço quando o
              assunto
              é festa), resolvemos compartilhar uma linha do tempo da programação para ninguém ser pego de surpresa.
              Spoiler: vai ter muita hora pra dançar, rir e aproveitar!
              Venham preparados para horas de alegria, com sotaque misturado, coração quente e histórias
              boas
              para lembrar.</p>
            <p class="mt-6">Com carinho,</p>
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
            <p class="text-base/8 text-gray-900">Nosso casamento foi pensado para juntar um pouquinho de Portugal
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
  { name: '14:15 - Início da Cerimônia 💒', description: '', href: '#', status: 'current' },
  { name: '15:00 - Fotos, Finger Foods & Música', description: 'Após a cerimônia, seguimos com as fotos. Durante este tempo, serão servidos finger foods da culinária portuguesa, já para começarem a sentir o gostinho tuga! Também teremos DJ para entrar no clima. 🪩', href: '#', status: 'upcoming' },
  { name: '16:30 - Recepção Gastronômica', description: 'Aqui, todos sentam-se à mesa e desfrutam de uma refeição tradicional - garantimos que será uma experiência única. 🍷', href: '#', status: 'upcoming' },
  { name: '18:00 - Início da Pista de Dança (Banda + DJ)', description: 'Após a recepção gastronômica, a pista de dança se abre com a banda ao vivo e, em seguida, o DJ assume. A festa começa a esquentar! 🍾', href: '#', status: 'upcoming' },
  { name: '00:00 - Corte do Bolo', description: 'Tradição em Portugal, que para além do corte de bolo, fazem também brindes ao casal! 🥂', href: '#', status: 'upcoming' },
  { name: '00:30 - Ceia', description: 'Um casamento português precisa de comida (e a noiva taurina agradece)! Após o corte do bolo, servimos uma ceia com uma oferta de snacks para manter os sobreviventes na ativa. 💃🕺', href: '#', status: 'upcoming' },
  { name: '01:00 até 04:00 - Música e Continuação da Festa', description: 'A festa segue com música animada, onde todos podem continuar dançando até o final da festa. Provavelmente a base de muito café! Queremos ver quem vai aguentar até o fim ☕️ ✨', href: '#', status: 'upcoming' },
]
</script>

<style></style>