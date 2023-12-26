<template>
    <div class="flex justify-between">
        <h1 class="font-medium lg:text-2xl text-xl title_views text-gray-500">Clientes</h1>
        <ModalCreateCustomerVue @create-item="onCreateItem"/>
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
            console.log(responseCustomer)
            dataCustomer.value = responseCustomer.data.data
        }

        const onCreateItem = async (data) => {
            console.log(data)
            if (data.ruc != "" && data.businessName != "") {
                await createCustomerApi(data, store.state.token)
                    .then(response => {
                        basicAlert(() => {
                            loadData()
                        }, 'success', 'Logrado', response.data.message)
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
            if (data.ruc != "" && data.businessName != "") {
                await updateCustomerApi(itemEdit.value.item.id, data, store.state.token)
                    .then(response => {
                        basicAlert(() => {
                            loadData()
                        }, 'success', 'Logrado', response.data.message)
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
                    .then(response => {
                        basicAlert(() => {
                            loadData()
                        }, 'success', 'Logrado', response.data.message)
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