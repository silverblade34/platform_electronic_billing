<template>
    <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Comprobantes</h1>
        <router-link to="createvouchers">
            <v-btn class="text-none" size="small" color="indigo-lighten-2">
                <v-icon icon="mdi-plus"></v-icon>
                Nuevo
            </v-btn>
        </router-link>
    </div>
    <div class="py-5">
        <TableVoucher :desserts="dataTable" @approve-item="onApproveItem" @edit-item="onEditItem" @pdf-item="onPdfItem"
            @delete-item="onDeleteItem" @approval-request="onApprovalRequest" />
    </div>
</template>
<script>
import { onMounted, ref, watch } from "vue";
import TableVoucher from "@/components/vouchers/TableVouchers.vue";
import { findAllVoucherApi, deleteVoucherApi } from '@/api/VoucherService';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import { useRouter } from 'vue-router';
import store from '@/store';

export default ({
    props: {
        reloadTable: Boolean
    },
    components: {
        TableVoucher
    },
    emits: ['create-cotizacion', 'edit-item', 'pdf-item', 'approve-item', 'approval-request'],
    setup(props, { emit }) {
        const dataTable = ref([]);
        const router = useRouter();

        onMounted(async () => {
            await reloadData()
        })

        watch(() => props.reloadTable, (newVal) => {
            if (newVal) {
                reloadData()
            }
        })

        const reloadData = async () => {
            findAllVoucherApi(store.state.token)
                .then(response => {
                    dataTable.value = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        }

        const onEditItem = (item) => {
            const id = item.item.id;
            router.push({ name: 'updatevouchers', params: { id } });
        }

        const onApproveItem = (item) => {
            emit('approve-item', { item })
        }

        const onApprovalRequest = (item) => {
            emit('approval-request', { item })
        }

        const onPdfItem = (item) => {
            emit('pdf-item', { item })
        }

        const onDeleteItem = (item) => {
            confirmBasic(async () => {
                deleteVoucherApi(item.item.id, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            reloadData()
                        }, 'success', 'Logrado', "El comprobante se ha eliminado correctamente")
                    })
                    .catch(() => {
                        basicAlert(() => {
                            reloadData()
                        }, 'error', 'Error', "Hubo un error al eliminar el comprobante")
                    })
            }, '¿Estás seguro de eliminar este comprobante?', 'Aceptar');
        }

        return {
            dataTable,
            onApprovalRequest,
            onPdfItem,
            onApproveItem,
            onDeleteItem,
            onEditItem
        }
    }
})
</script>