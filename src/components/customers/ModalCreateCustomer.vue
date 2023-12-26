<template>
    <v-btn size="small" class="text-none" color="blue" @click="dialog = true"><v-icon icon="mdi-plus"></v-icon>
        Nuevo</v-btn>
    <v-dialog v-model="dialog" width="550" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-teal-400 font-bold title_views">CREAR CLIENTE</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-select variant="outlined" label="Tipo de documento" :items="['DNI', 'RUC']" color="teal"
                        v-model="store" prepend-inner-icon="mdi-format-list-bulleted-type"></v-select>
                    <v-text-field variant="outlined" label="Ruc" prepend-inner-icon="mdi-barcode" color="teal" v-model="ruc"
                        counter maxlength="11"></v-text-field>
                    <v-text-field variant="outlined" label="Razón social" prepend-inner-icon="mdi-domain" color="teal"
                        v-model="businessName"></v-text-field>
                    <v-text-field variant="outlined" label="Nombre comercial" prepend-inner-icon="mdi-form-textbox"
                        color="teal" v-model="businessName"></v-text-field>
                    <div class="grid grid-cols-2 gap-2">
                        <v-autocomplete variant="outlined" label="País" :items="countrys" color="teal"
                            v-model="store" prepend-inner-icon="mdi-flag-variant-outline"></v-autocomplete>
                        <v-select variant="outlined" label="Tipo de documento" :items="['DNI', 'RUC']" color="teal"
                            v-model="store" prepend-inner-icon="mdi-format-list-bulleted-type"></v-select>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <v-select variant="outlined" label="Tipo de documento" :items="['DNI', 'RUC']" color="teal"
                            v-model="store" prepend-inner-icon="mdi-format-list-bulleted-type"></v-select>
                        <v-select variant="outlined" label="Tipo de documento" :items="['DNI', 'RUC']" color="teal"
                            v-model="store" prepend-inner-icon="mdi-format-list-bulleted-type"></v-select>
                    </div>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey-lighten-2" variant="tonal" @click="closeItem">
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
import { ref } from 'vue';

export default {
    emits: ['create-item'],
    setup(_, { emit }) {
        const dialog = ref(false);
        const ruc = ref('');
        const businessName = ref('');
        const isMobile = ref(false);
        const countrys = ref(['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica',
            'Cuba', 'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicaragua', 'Paraguay',
            'Panamá', 'Perú', 'Uruguay', 'Venezuela']);

        const createItem = () => {
            emit("create-item", {
                ruc: ruc.value,
                businessName: businessName.value,
            })
            closeItem();
        }

        const closeItem = () => {
            ruc.value = businessName.value = ""
            dialog.value = false
        }

        return {
            countrys,
            dialog,
            isMobile,
            ruc,
            businessName,
            createItem,
            closeItem
        }
    }
}
</script>