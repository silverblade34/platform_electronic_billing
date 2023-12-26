<template>
    <v-dialog v-model="dialog" width="650" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-blue-400 font-bold title_views">EDITAR CLIENTE</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Ruc" prepend-inner-icon="mdi-card-account-details" color="blue"
                        v-model="ruc" counter maxlength="11"></v-text-field>
                    <v-text-field variant="outlined" label="Razón social" prepend-inner-icon="mdi-domain" color="blue"
                        v-model="businessName"></v-text-field>
                    <div class="w-full flex gap-1 items-center">
                        <div class="w-full">
                            <v-btn density="compact" class="w-full mb-2 text-none" color="blue-lighten-1" variant="tonal">
                                OBRAS LIBRES
                            </v-btn>
                            <SelectWorksVue :listGroups="itemsAvailable" @list-seleccionados="emitSelectedItemsAvailable"
                                nameGrupo="Obras libres" />
                        </div>
                        <div>
                            <div>
                                <v-btn icon="mdi-arrow-right" variant="text" size="small" color="indigo"
                                    @click.prevent="moveSelectedItemsToAssigned"></v-btn>
                                <v-tooltip activator="parent" location="top">Agregar</v-tooltip>
                            </div>
                            <div>
                                <v-btn icon="mdi-arrow-left" variant="text" size="small" color="indigo"
                                    @click.prevent="moveSelectedItemsToAvailable"></v-btn>
                                <v-tooltip activator="parent" location="top">Quitar</v-tooltip>
                            </div>
                        </div>
                        <div class="w-full">
                            <v-btn density="compact" class="w-full mb-2 text-none" color="blue-lighten-1" variant="tonal">
                                OBRAS ASIGNADAS
                            </v-btn>
                            <SelectWorksVue :listGroups="itemsAssigned" @list-seleccionados="emitSelectedItemsAssigned"
                                nameGrupo="Obras asignadas" />
                        </div>
                    </div>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="closeItem">
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
import SelectWorksVue from './SelectWorks.vue';

export default {
    components: {
        SelectWorksVue
    },
    props: {
        itemEdit: Object,
        openModal: Boolean
    },
    emits: ['edit-item', 'cancel-item'],
    setup(props, { emit }) {
        const dataWorksAll = ref([]);
        const dialog = ref(false);
        const ruc = ref('');
        const businessName = ref('');
        const selectedItemsAvailable = ref([]);
        const selectedItemsAssigned = ref([])
        const itemsAssigned = ref([])
        const itemsAvailable = ref([]);

        watch(() => props.openModal, async (newVal) => {
            dialog.value = newVal
        })

        watch(() => props.itemEdit, (newVal) => {
            const worksAssigned = newVal.item.works ? newVal.item.works : []
            if (Object.keys(newVal).length !== 0) {
                ruc.value = newVal.item.ruc
                businessName.value = newVal.item.businessName
                itemsAssigned.value = worksAssigned.map(work => ({ name: work.name }))
            }
        })


        const editItem = () => {
            const idWorksAssigned = itemsAssigned.value.map(workAssigned => {
                const work = dataWorksAll.value.find(work => work.name == workAssigned.name)
                return {
                    workId: work.id
                }
            })
            emit("edit-item", {
                ruc: ruc.value,
                businessName: businessName.value,
                selectedWorks: idWorksAssigned
            })
            closeItem();
        }

        const closeItem = () => {
            ruc.value = businessName.value = ""
            emit('cancel-item')
        }

        const emitSelectedItemsAssigned = (data) => {
            selectedItemsAssigned.value = data
        }
        const emitSelectedItemsAvailable = (data) => {
            selectedItemsAvailable.value = data
        }
        // Asignar grupos de etiqueta
        const moveSelectedItemsToAssigned = () => {
            if (selectedItemsAvailable.value.length != 0) {
                const newItemsAssigned = selectedItemsAvailable.value.map(group => ({ name: group }))
                itemsAssigned.value.push(...newItemsAssigned)
                itemsAvailable.value = itemsAvailable.value
                    .filter((group) => {
                        return newItemsAssigned.findIndex((groupassigned) => groupassigned.name === group.name) === -1
                    })
            }
        }
        // Quitar de la asignacion los grupos de etiqueta
        const moveSelectedItemsToAvailable = () => {
            if (selectedItemsAssigned.value.length != 0) {
                const newItemsAvailable = selectedItemsAssigned.value.map(group => ({ name: group }))
                itemsAvailable.value.push(...newItemsAvailable)
                itemsAssigned.value = itemsAssigned.value
                    .filter((group) => {
                        return newItemsAvailable.findIndex((groupavailable) => groupavailable.name === group.name) === -1
                    })
            }
        }

        return {
            dialog,
            ruc,
            businessName,
            editItem,
            closeItem,
            itemsAvailable,
            itemsAssigned,
            emitSelectedItemsAssigned,
            emitSelectedItemsAvailable,
            moveSelectedItemsToAssigned,
            moveSelectedItemsToAvailable
        }
    }
}
</script>