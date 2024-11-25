<!-- components/SemilleroCard.vue -->
<template>
    <Card class="mb-4">
      <template #title>
        {{ semillero.nombre }}
      </template>
      <template #subtitle>
        {{ semillero.programa }} - {{ semillero.facultad }}
      </template>
      <template #content>
        <p><strong>Grupo:</strong> {{ semillero.grupo }}</p>
        <!-- Más detalles según sea necesario -->
        <Button label="Ver Detalles" @click="$emit('verDetalles', semillero)" />
      </template>
    </Card>
  </template>
  
  <script setup>
    const props = defineProps ({
        semillero: {
            type: Object,
            required: true
        }
    })
  </script>
  
  <style scoped>
  .mb-4 {
    margin-bottom: 1rem;
  }
  </style>
  