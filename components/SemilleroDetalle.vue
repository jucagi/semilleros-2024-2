<!-- components/SemilleroDetalle.vue -->
<template>
    <Dialog :visible="visible" :modal="true" :style="{ width: '70vw' }" @hide="$emit('close')" :closable="true">
      <template #header>
        <h2>{{ semillero.nombre }}</h2>
      </template>
      <p><strong>Facultad:</strong> {{ semillero.facultad }}</p>
      <p><strong>Programa:</strong> {{ semillero.programa }}</p>
      <p><strong>Grupo:</strong> {{ semillero.grupo }}</p>
      <h3>Temáticas</h3>
      <ul>
        <li v-for="(tematica, index) in semillero.tematicas" :key="index">{{ tematica }}</li>
      </ul>
      <p><strong>Misión:</strong> {{ semillero.mision }}</p>
      <p><strong>Visión:</strong> {{ semillero.vision }}</p>
      <!-- Agrega más secciones según sea necesario -->
      <Button label="Cerrar" @click="$emit('close')" />

    </Dialog>
  </template>
  
  <script setup>
    const props = defineProps({
        semillero: {
            type: Object,
            required: true
        },
        visible: {
            type: Boolean,
            required: true
        }
    })

  </script> 
  
  <style scoped>
  /* Estilos personalizados */
  </style>
  