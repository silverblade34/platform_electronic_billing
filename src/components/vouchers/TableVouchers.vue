<template>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1 text-sm">
        <template v-slot:[`item.date_created`]="{ item }">
            {{ formatCreatedAt(item.date_created) }}
        </template>
        <template v-slot:[`item.state_sunat`]="{ item }">
            <v-chip color="indigo">{{ item.state_sunat }}</v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <div class="flex gap-1">
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
                { title: '#', align: 'start', key: 'id' },
                { title: 'Cliente', align: 'start', key: 'client.legal_name' },
                { title: 'Establecimiento', align: 'start', key: 'establishment.name' },
                { title: 'Almacén', align: 'start', key: 'store.name' },
                { title: 'Moneda', align: 'start', key: 'currency' },
                { title: 'Total', key: 'total' },
                { title: 'Fecha de emisión', align: 'center', key: 'date_created' },
                { title: 'Estado en la SUNAT', key: 'state_sunat' },
                { title: 'Acciones', key: 'actions' },
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