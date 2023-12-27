<template>
    <v-btn size="small" class="text-none" color="blue" @click="dialog = true"><v-icon icon="mdi-plus"></v-icon>
        Nuevo</v-btn>
    <v-dialog v-model="dialog" width="550" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-teal-500 font-bold title_views">CREAR PRODUCTO</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-text-field variant="outlined" label="Codigo producto" color="teal" v-model="cod_product"
                        prepend-inner-icon="mdi-barcode"></v-text-field>
                    <v-text-field variant="outlined" label="Descripción" prepend-inner-icon="mdi-text-box-plus" color="blue"
                        v-model="description"></v-text-field>
                    <v-text-field type="number" variant="outlined" label="Precio" prepend-inner-icon="mdi-cash" color="blue"
                        v-model="price_list"></v-text-field>
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
        const cod_product = ref('');
        const description = ref('');
        const price_list = ref('');

        const createItem = () => {
            emit("create-item", {
                "cod_product": cod_product.value,
                "description": description.value,
                "price_list": price_list.value,
                "email": "user@example.com",
                "state": true
            })
            closeItem();
        }

        const closeItem = () => {
            dialog.value = false
            cod_product.value = description.value = price_list.value = ""
        }


        return {
            dialog,
            cod_product,
            description,
            price_list,
            createItem,
            closeItem
        }
    }
}
</script>