<!-- pages/index.vue -->
<template>
    <div class="p-mt-4 p-px-4">
      <h1 class="p-text-center">Semilleros de Investigación - Universidad de Córdoba</h1>
      <div class="p-grid">
        <div class="p-col-12 p-md-6" v-for="(semillero, index) in semilleros" :key="index">
          <SemilleroCard :semillero="semillero" @verDetalles="mostrarDetalle(semillero.id - 1)" />
        </div>
      </div>
      <SemilleroDetalle :semillero="semilleroSeleccionado" :visible="dialogVisible" @close="cerrarDetalle" />
    </div>
  </template>
  
  <script setup>
    const {semilleros, obtenerSemillero} = useSemilleros()

    const semilleroSeleccionado = ref(null)
    const dialogVisible = ref(false)

    const mostrarDetalle = (idSemillero) => {
      semilleroSeleccionado.value = obtenerSemillero(idSemillero)
      dialogVisible.value = true
    }

    const cerrarDetalle = () => {
      dialogVisible.value = false
    }
  </script>
  
  <style>
  /* Estilos personalizados */
  </style>
  