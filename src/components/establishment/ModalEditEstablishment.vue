<template>
    <v-dialog v-model="dialog" width="500" @click:outside="cancelItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-400 font-bold title_views">EDITAR ESTABLECIMIENTO</span>
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
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="cancelItem">
                    Cancelar
                </v-btn>
                <v-btn color="blue-lighten-1" variant="tonal" @click="editItem">
                    Aceptar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { ref, watch } from 'vue';

export default {
    props: {
        itemEdit: Object,
        openModal: Boolean
    },
    emits: ['edit-item', 'cancel-item'],
    setup(props, { emit }) {
        const dialog = ref(false);
        const name = ref('');
        const direction = ref('');

        watch(() => props.openModal, (newVal) => {
            dialog.value = newVal
        })

        watch(() => props.itemEdit, (newVal) => {
            if (Object.keys(newVal).length !== 0) {
                name.value = newVal.item.name
                direction.value = newVal.item.direction
            }
        })

        const editItem = () => {
            emit('edit-item', {
                name: name.value,
                direction: direction.value
            })
            name.value = direction.value = ""
        }

        const cancelItem = () => {
            emit('cancel-item')
        }

        return {
            dialog,
            name,
            direction,
            editItem,
            cancelItem
        }
    }
}
</script>