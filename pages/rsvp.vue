<template>
  <div>
    <NavBar />
    <div class="py-10">
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">RSVP</h1>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 text-center">RSVP</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <form>
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base/7 font-semibold text-gray-900 text-center">Confirmação de Presença</h2>
              <p class="mt-1 text-sm/6 text-gray-600 text-center">Contexto sobre formulário.</p>

              <div class="mt-10 space-y-10">
                <fieldset>
                  <legend class="text-sm/6 font-semibold text-gray-900">Confirma a presença no dia 6 de Setembro 2025?
                  </legend>
                  <p class="mt-1 text-sm/6 text-gray-600">Por favor responda até ao dia 31 de Junho.</p>
                  <div class="mt-6 space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input id="rspv-reply-yes" name="rspv-reply" type="radio" checked
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-emerald-600 checked:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                      <label for="rspv-yes" class="block text-sm/6 font-medium text-gray-900">Sim</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input id="rspv-reply-no" name="rspv-reply" type="radio"
                        class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-emerald-600 checked:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                      <label for="rspv-reply-no" class="block text-sm/6 font-medium text-gray-900">Não</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            <div class="mt-10 space-y-12">

              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-gray-900">Convidado(s)</h2>
                <p class="mt-1 text-sm/6 text-gray-600">Dados pessoais e restrições alimentares.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="col-span-full">
                    <label for="guests" class="block text-sm/6 font-medium text-gray-900">Nome dos Confirmado(s)</label>
                    <p class="mt-2 text-sm/6 text-gray-600">Nome completo dos confirmados. Se vier em casal, por favor
                      coloque ambos os nomes. Escreva um nome por linha.</p>
                    <div class="mt-3">
                      <textarea name="guests" id="guests" rows="3"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="alergies" class="block text-sm/6 font-medium text-gray-900">Alergias Alimentares</label>
                    <p class="mt-2 text-sm/6 text-gray-600">Indique se tem alguma alergia.</p>
                    <div class="mt-3">
                      <textarea name="alergies" id="alergies" rows="3"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                    </div>

                  </div>

                  <div class="col-span-full">
                    <fieldset>
                      <legend class="text-sm/6 font-semibold text-gray-900">Dieta Alimentar
                      </legend>
                      <p class="mt-1 text-sm/6 text-gray-600">Indique se tem alguma preferência alimentar.</p>
                      <div class="mt-6 space-y-6">
                        <div class="flex items-center gap-x-3">
                          <input id="diet-reply-meat" name="diet-reply" type="radio" checked
                            class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-emerald-600 checked:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                          <label for="diet-reply-meat"
                            class="block text-sm/6 font-medium text-gray-900">Carnívoro</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                          <input id="diet-reply-vegan" name="diet-reply" type="radio"
                            class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-emerald-600 checked:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                          <label for="diet-reply-vegan" class="block text-sm/6 font-medium text-gray-900">Vegan</label>
                        </div>
                        <div class="flex items-center gap-x-3">
                          <input id="diet-reply-vegetarian" name="diet-reply" type="radio"
                            class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-emerald-600 checked:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                          <label for="diet-reply-vegetarian"
                            class="block text-sm/6 font-medium text-gray-900">Vegetariano</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div class="col-span-full">
                    <label for="about" class="block text-sm/6 font-medium text-gray-900">Comentários</label>
                    <p class="mt-2 text-sm/6 text-gray-600">Mencione qualquer outro assunto que gostaria de comentar.
                    </p>
                    <div class="mt-3">
                      <textarea name="about" id="about" rows="3"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancelar</button>
              <button type="submit"
                class="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Confirmar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'RSVP | Casamento Bia & Hugo',
})
</script>

<style></style>