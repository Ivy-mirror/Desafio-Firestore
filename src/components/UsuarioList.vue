<script setup>
import { useUsuariosStore } from '@/stores/usuarios'
//on Mounted es el hook que nos permite traer información en el ciclo de vida del componente
import { onMounted } from 'vue'

const usuariosStore = useUsuariosStore()
onMounted(() => {
  usuariosStore.fetchUsuarios()
})
function handleDelete(id) {
  useUsuariosStore.deleteUsuario(id)
}
</script>

<template>
  <h2 class="text-center">Administrar usuarios</h2>
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(usuario, idx) in useUsuariosStore.usuarios" :key="usuario.id">
        <th scope="row">{{ idx + 1 }}</th>
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.correo }}</td>
        <td>
          <button class="btn btn-danger" @click="handleDelete(usuario.id)">Eliminar usuario</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
