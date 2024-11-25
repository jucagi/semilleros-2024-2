<template>
  <div class="bienvenida-container">
    <Card>
      <template #header>
        <h1>Bienvenidos al Proyecto de Semilleros de Investigación</h1>
      </template>
      <p>
        Nos complace darles la bienvenida al proyecto de Semilleros de Investigación de la Universidad de Córdoba, Colombia. Este es un espacio dedicado a la innovación, la investigación y el desarrollo académico.
      </p>
      <Button label="Conoce más" icon="pi pi-info-circle" class="p-button-outlined" />
    </Card>
  </div>
</template>

<script setup>

</script>

<style scoped>
.bienvenida-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

h1 {
  color: #007ad9;
  text-align: center;
}

p {
  font-size: 1.2em;
  text-align: center;
  margin: 20px 0;
}

.p-button-outlined {
  display: block;
  margin: 0 auto;
}
</style>
