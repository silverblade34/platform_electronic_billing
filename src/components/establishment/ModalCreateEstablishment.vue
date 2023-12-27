<template>
    <v-btn size="small" class="text-none" color="blue" @click="dialog = true"><v-icon icon="mdi-plus"></v-icon>
        Nuevo</v-btn>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-400 font-bold title_views">CREAR ESTABLECIMIENTO</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Nombre" prepend-inner-icon="mdi-badge-account" color="blue"
                        v-model="name"></v-text-field>
                    <v-text-field variant="outlined" label="Dirección" prepend-inner-icon="mdi-sign-direction" color="blue"
                        v-model="direction"></v-text-field>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="dialog = false">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="createItem">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { ref } from 'vue'
export default {
    emits: ['create-item'],
    setup(_, { emit }) {
        const dialog = ref(false);
        const name = ref('');
        const direction = ref('');

        const createItem = () => {
            emit('create-item', {
                name: name.value,
                direction: direction.value
            })
            name.value = direction.value = ""
            dialog.value = false
        }
        return {
            dialog,
            name,
            direction,
            createItem
        }
    }
}
</script>