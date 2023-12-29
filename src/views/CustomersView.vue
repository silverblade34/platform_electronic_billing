<template>
    <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Clientes</h1>
        <ModalCreateCustomerVue @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableCustomerVue :desserts="dataCustomer" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditCustomerVue :itemEdit="itemEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false"
        @edit-item="onUpdateItem" />
</template>
<script>
/* eslint-disable */
import { findAllCustomerApi, createCustomerApi, updateCustomerApi, deleteCustomerApi } from '@/api/CustomerService';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import ModalCreateCustomerVue from '@/components/customers/ModalCreateCustomer.vue';
import ModalEditCustomerVue from '@/components/customers/ModalEditCustomer.vue';
import TableCustomerVue from '@/components/customers/TableCustomer.vue';
import { onMounted, ref } from "vue";
import store from '@/store';

export default ({
    components: {
        TableCustomerVue,
        ModalCreateCustomerVue,
        ModalEditCustomerVue
    },
    setup() {
        const dataCustomer = ref([]);
        const itemEdit = ref({});
        const dialogEdit = ref(false);

        onMounted(() => {
            loadData()
        })

        const loadData = async () => {
            const responseCustomer = await findAllCustomerApi(store.state.token)
            dataCustomer.value = responseCustomer.data
        }

        const onCreateItem = async (data) => {
            if (data.document_type != "" && data.document_number != "") {
                await createCustomerApi(data, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            loadData()
                        }, 'success', 'Logrado', "Se ha creado correctamente")
                    })
                    .catch(error => {
                        basicAlert(() => { }, 'error', 'Error', error.message)
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Error', "Los campos no deben estar vacios")
            }
        }

        const onEditItem = (item) => {
            dialogEdit.value = true
            itemEdit.value = item
        }

        const onUpdateItem = async (data) => {
            dialogEdit.value = false
            if (data.document_type != "" && data.document_number != "") {
                await updateCustomerApi(itemEdit.value.item.id, data, store.state.token)
                    .then(response => {
                        basicAlert(() => {
                            loadData()
                        }, 'success', 'Logrado', "Se ha editado correctamente")
                    })
                    .catch(error => {
                        basicAlert(() => { }, 'error', 'Error', error.message)
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Error', "Los campos no deben estar vacios")
            }
        }

        const onDeleteItem = (item) => {
            confirmBasic(async () => {
                await deleteCustomerApi(item.item.id, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            loadData()
                        }, 'success', 'Logrado', "Se ha eliminado correctamente")
                    })
                    .catch(error => {
                        basicAlert(() => { }, 'error', 'Error', error.message)
                    })
            }, '¿Estás seguro de eliminar este cliente?', 'Aceptar');
        }

        return {
            dialogEdit,
            dataCustomer,
            itemEdit,
            onDeleteItem,
            onUpdateItem,
            onEditItem,
            onCreateItem,
        }
    }
})
</script>