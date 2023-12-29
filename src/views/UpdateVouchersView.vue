<template>
    <div class="flex justify-between">
        <div class="flex items-center">
            <span>
                <v-btn icon="mdi-chevron-left" size="small" variant="text" @click="goBack"></v-btn>
                <v-tooltip activator="parent" location="top">Regresar</v-tooltip>
            </span>
            <span class="font-bold lg:text-2xl text-xl text-gray-400"> Editar comprobante</span>
        </div>
    </div>
    <div class="py-5 text-sm">
        <FormVoucher @cancel-quote="goBack" @accept-quote="updateVoucher" :itemEdit="itemEdit" />
    </div>
</template>
<script>
import { ref, onMounted, watch } from 'vue';
import { getCurrentInstance } from 'vue';
import { updateVoucherApi, findOneVoucherApi } from '@/api/VoucherService';
import FormVoucher from "@/components/vouchers/FormVoucher.vue";
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import store from '@/store';

export default ({
    props: {
        id: String
    },
    components: {
        FormVoucher,
    },
    setup(props) {
        const itemEdit = ref({});
        const instance = getCurrentInstance();

        onMounted(() => {
            onEditItem(props.id)
        })

        watch(() => props.id, (newVal) => {
            onEditItem(newVal)
        })

        const onEditItem = async (voucherId) => {
            const data = {
                "id_voucher": voucherId
            }
            await findOneVoucherApi(data, store.state.token)
                .then(response => {
                    itemEdit.value = response.data.data
                })
                .catch(() => {
                    basicAlert(() => {
                        goBack()
                    }, 'error', 'Error', "Hubo un error al buscar el voucher")
                })
        }

        const updateVoucher = (data) => {
            confirmBasic(async () => {
                await updateVoucherApi(itemEdit.value.id, data, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            goBack()
                        }, 'success', 'Logrado', "El comprobante se ha editado correctamente")
                    })
                    .catch(() => {
                        basicAlert(() => {
                            goBack()
                        }, 'error', 'Error', "Hubo un error al editar el comprobante")
                    })

            }, '¿Estás seguro de editar este comprobante?', 'Aceptar');
        }

        const goBack = () => {
            if (instance && instance.proxy && instance.proxy.$router) {
                instance.proxy.$router.go(-1);
            }
        }

        return {
            updateVoucher,
            goBack,
            itemEdit
        }
    }
})
</script>