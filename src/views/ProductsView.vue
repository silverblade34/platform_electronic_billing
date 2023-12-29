<template>
    <div class="flex justify-between">
        <h1 class="font-bold lg:text-2xl text-xl text-gray-400">Productos</h1>
        <ModalCreateProductVue @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableProductsVue :desserts="dataProduct" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditProductVue :itemEdit="itemEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false"
        @edit-item="onUpdateItem" />
</template>
<script>
/* eslint-disable */
import { findAllProductsApi, createProductsApi, updateProductsApi, deleteProductsApi } from '@/api/ProductService';
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import ModalCreateProductVue from '@/components/products/ModalCreateProduct.vue';
import ModalEditProductVue from '@/components/products/ModalEditProduct.vue';
import TableProductsVue from '@/components/products/TableProducts.vue';
import { onMounted, ref } from "vue";
import store from '@/store';

export default ({
    components: {
        TableProductsVue,
        ModalCreateProductVue,
        ModalEditProductVue
    },
    setup() {
        const dataProduct = ref([]);
        const itemEdit = ref({});
        const dialogEdit = ref(false);

        onMounted(() => {
            loadData()
        })

        const loadData = async () => {
            const responseProduct = await findAllProductsApi(store.state.token)
            dataProduct.value = responseProduct.data
        }

        const onCreateItem = async (data) => {
            if (data.cod_product != "" && data.description != "" && data.price_list != "") {
                await createProductsApi(data, store.state.token)
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
            if (data.cod_product != "" && data.description != "" && data.price_list != "") {
                await updateProductsApi(itemEdit.value.item.id, data, store.state.token)
                    .then(() => {
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
                await deleteProductsApi(item.item.id, store.state.token)
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
            dataProduct,
            itemEdit,
            onDeleteItem,
            onUpdateItem,
            onEditItem,
            onCreateItem,
        }
    }
})
</script>