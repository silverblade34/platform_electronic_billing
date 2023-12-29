<template>
    <div class="flex justify-between">
        <div class="flex items-center">
            <span>
                <v-btn icon="mdi-chevron-left" size="small" variant="text" @click="goBack"></v-btn>
                <v-tooltip activator="parent" location="top">Regresar</v-tooltip>
            </span>
            <span class="font-bold lg:text-2xl text-xl text-gray-400"> Crear comprobante</span>
        </div>
    </div>
    <div class="py-5 text-sm">
        <FormVoucher @cancel-quote="goBack" @accept-quote="createVoucher" />
    </div>
</template>
<script>
import { getCurrentInstance } from 'vue';
import {createVoucherApi} from '@/api/VoucherService';
import FormVoucher from "@/components/vouchers/FormVoucher.vue";
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import store from '@/store';

export default ({
    components: {
        FormVoucher,
    },
    setup() {
        const instance = getCurrentInstance();

        const createVoucher = (data) => {
            console.log(data)
            confirmBasic(async () => {
                await createVoucherApi(data, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            goBack()
                        }, 'success', 'Logrado', "El comprobante se ha creado correctamente")
                    })
                    .catch(() => {
                        basicAlert(() => {
                            goBack()
                        }, 'error', 'Error', "Hubo un error al crear el comprobante")
                    })

            }, '¿Estás seguro de registrar este comprobante?', 'Aceptar');
        }

        const goBack = () => {
            if (instance && instance.proxy && instance.proxy.$router) {
                instance.proxy.$router.go(-1);
            }
        }

        return {
            createVoucher,
            goBack
        }
    }
})
</script>