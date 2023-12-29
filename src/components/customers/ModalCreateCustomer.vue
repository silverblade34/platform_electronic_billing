<template>
    <v-btn size="small" class="text-none" color="indigo-lighten-2" @click="dialog = true"><v-icon icon="mdi-plus"></v-icon>
        Nuevo</v-btn>
    <v-dialog v-model="dialog" width="650" @click:outside="closeItem">
        <v-card>
            <v-toolbar>
                <span class="px-4 w-full text-center text-teal-500 font-bold title_views">CREAR CLIENTE</span>
            </v-toolbar>
            <v-card-text>
                <v-col cols="12">
                    <v-select variant="outlined" label="Tipo de documento" :items="['DNI', 'RUC']" color="teal"
                        v-model="document_type" prepend-inner-icon="mdi-format-list-bulleted-type"></v-select>
                    <v-text-field variant="outlined" label="N° documento" prepend-inner-icon="mdi-barcode" color="teal"
                        v-model="document_number" counter maxlength="11" @input="customerValidate()"
                        hide-details></v-text-field>
                    <span class="text-xs pl-3 pb-3 text-red-400">{{ messageValidate }}</span>
                    <v-text-field variant="outlined" label="Nombre legal" prepend-inner-icon="mdi-domain" color="teal"
                        v-model="legal_name"></v-text-field>
                    <v-text-field variant="outlined" label="Nombre comercial" prepend-inner-icon="mdi-form-textbox"
                        color="teal" v-model="tradename"></v-text-field>
                    <div class="grid grid-cols-2 gap-2">
                        <v-text-field variant="outlined" label="Pais" prepend-inner-icon="mdi-flag" color="teal"
                            v-model="country"></v-text-field>
                        <v-text-field variant="outlined" label="Departamento" prepend-inner-icon="mdi-map" color="teal"
                            v-model="department"></v-text-field>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <v-text-field variant="outlined" label="Provincia" prepend-inner-icon="mdi-map-marker-multiple"
                            color="teal" v-model="province"></v-text-field>
                        <v-text-field variant="outlined" label="Distrito" prepend-inner-icon="mdi-map-marker-path"
                            color="teal" v-model="district"></v-text-field>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <v-text-field variant="outlined" label="Teléfono" prepend-inner-icon="mdi-phone" color="teal"
                            v-model="phone"></v-text-field>
                        <v-text-field variant="outlined" label="Correo" prepend-inner-icon="mdi-email" color="teal"
                            v-model="email"></v-text-field>
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
import { consultationDniRuc } from '@/api/SunatService';
import { ref, watch } from 'vue';

export default {
    emits: ['create-item'],
    setup(_, { emit }) {
        const dialog = ref(false);
        const document_type = ref('');
        const document_number = ref('');
        const legal_name = ref('');
        const tradename = ref('');
        const country = ref('');
        const department = ref('');
        const province = ref('');
        const district = ref('');
        const phone = ref('');
        const email = ref('');
        const messageValidate = ref('');

        const createItem = () => {
            emit("create-item", {
                "document_type": document_type.value,
                "document_number": document_number.value,
                "legal_name": legal_name.value,
                "tradename": tradename.value,
                "country": country.value,
                "department": department.value,
                "province": province.value,
                "district": district.value,
                "phone": phone.value,
                "email": email.value,
            })
            closeItem();
        }

        const closeItem = () => {
            dialog.value = false
            document_type.value = document_number.value = tradename.value = phone.value = email.value = ""
            legal_name.value = department.value = province.value = district.value = country.value = ""
        }

        watch(() => document_type.value, () => {
            customerValidate()
        })

        const customerValidate = () => {
            if (document_number.value.length == 8 || document_number.value.length == 11) {
                if (document_type.value == "RUC") {
                    const data = {
                        "tipo_documento": "ruc",
                        "numero": document_number.value
                    }
                    consultationDniRuc(data)
                        .then(response => {
                            messageValidate.value = ""
                            legal_name.value = response.data.data.nombre
                            department.value = response.data.data.departamento
                            province.value = response.data.data.provincia
                            district.value = response.data.data.distrito
                            country.value = "PERÚ"
                        })
                        .catch(error => {
                            legal_name.value = department.value = province.value = district.value = country.value = ""
                            messageValidate.value = error.response.data.data
                        })
                } else {
                    const data = {
                        "tipo_documento": "dni",
                        "numero": document_number.value
                    }
                    consultationDniRuc(data)
                        .then(response => {
                            legal_name.value = response.data.data.nombres
                            messageValidate.value = ""
                        })
                        .catch(error => {
                            legal_name.value = department.value = province.value = district.value = country.value = ""
                            messageValidate.value = error.response.data.data
                        })
                }
            }
        }

        return {
            dialog,
            document_type,
            document_number,
            messageValidate,
            legal_name,
            tradename,
            country,
            department,
            province,
            district,
            phone,
            email,
            customerValidate,
            createItem,
            closeItem
        }
    }
}
</script>