<template>
    <div class="flex justify-between">
        <h1 class="font-medium lg:text-2xl text-xl title_views text-gray-500">Almacén</h1>
        <ModalCreateStore @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableStore :desserts="dataStore" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditStore :itemEdit="storeEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false" @edit-item="editItem" />
</template>
<script>
import TableStore from "@/components/store/TableStore.vue";
import { findAllStoreApi, createStoreApi, updateStoreApi, deleteStoreApi } from '@/api/StoreService';
import ModalCreateStore from "@/components/store/ModalCreateStore.vue";
import { onMounted, ref } from "vue";
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import ModalEditStore from "@/components/store/ModalEditStore.vue";
import store from '@/store';

export default ({
    components: {
        TableStore,
        ModalCreateStore,
        ModalEditStore
    },
    setup() {
        const dataStore = ref([]);
        const storeEdit = ref({})
        const dialogEdit = ref(false);

        onMounted(() => {
            reloadData()
        })

        const reloadData = async () => {
            await findAllStoreApi(store.state.token)
                .then(response => {
                    dataStore.value = response.data
                })
        }

        const onCreateItem = async (data) => {
            if (data.name != "" && data.direction != "") {
                await createStoreApi(data, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            reloadData()
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
            storeEdit.value = item
        }

        const editItem = async (data) => {
            dialogEdit.value = false
            if (data.name != "" && data.direction != "") {
                await updateStoreApi(storeEdit.value.item.id, data, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            reloadData()
                        }, 'success', 'Logrado', "Se ha editado correctamente")
                    })
            } else {
                basicAlert(() => { }, 'warning', 'Error', "Los campos no deben estar vacios")
            }
        }

        const onDeleteItem = (item) => {
            confirmBasic(async () => {
                await deleteStoreApi(item.item.id, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            reloadData()
                        }, 'success', 'Logrado', "Se ha eliminado correctamente")
                    })
            }, '¿Estás seguro de eliminar este almacén?', 'Aceptar');
        }

        return {
            dataStore,
            dialogEdit,
            storeEdit,
            onCreateItem,
            onDeleteItem,
            onEditItem,
            editItem
        }
    }
})
</script>