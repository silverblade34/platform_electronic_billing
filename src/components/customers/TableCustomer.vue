<template>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1 text-sm">
        <template v-slot:[`item.createdAt`]="{ item }">
            {{ formatCreatedAt(item.createdAt) }}
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <div class="flex gap-1 justify-center">
                <span @click="editItem(item)">
                    <v-btn icon="mdi-pencil" size="small" variant="text" color="green"></v-btn>
                    <v-tooltip activator="parent" location="top">Editar</v-tooltip>
                </span>
                <span @click="deleteItem(item)">
                    <v-btn icon="mdi-delete-empty" size="small" variant="text" color="red"></v-btn>
                    <v-tooltip activator="parent" location="top">Eliminar</v-tooltip>
                </span>
            </div>
        </template>
    </v-data-table>
</template>
<script>
import { VDataTable } from 'vuetify/labs/VDataTable';
export default ({
    props: {
        desserts: Array
    },
    components: {
        VDataTable,
    },
    emits: ['delete-item', 'edit-item'],
    data() {
        return {
            headers: [
                { title: 'N° de documento', align: 'start', key: 'document_number' },
                { title: 'Tipo de documento', align: 'start', key: 'document_type' },
                { title: 'Nombre legal', key: 'legal_name' },
                { title: 'Telefono', align: 'start', key: 'phone' },
                { title: 'Correo', align: 'center', key: 'email' },
                { title: 'Acciones', align: 'center', key: 'actions' },
            ]
        }
    },
    setup(_, { emit }) {
        const editItem = (item) => {
            emit('edit-item', { item })
        }

        const deleteItem = (item) => {
            emit('delete-item', { item })
        }
        const formatCreatedAt = (dateString) => {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const createdAt = new Date(dateString).toLocaleDateString('es-PE', options);
            return createdAt;
        }
        return {
            formatCreatedAt,
            editItem,
            deleteItem
        }
    }
})
</script>