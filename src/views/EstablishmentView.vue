<template>
    <div class="flex justify-between">
        <h1 class="font-medium lg:text-2xl text-xl title_views text-gray-500">Establecimiento</h1>
        <ModalCreateEstablishment @create-item="onCreateItem" />
    </div>
    <div class="py-5">
        <TableEstablishment :desserts="dataEstablishment" @edit-item="onEditItem" @delete-item="onDeleteItem" />
    </div>
    <ModalEditEstablishment :itemEdit="storeEdit" :openModal="dialogEdit" @cancel-item="dialogEdit = false" @edit-item="editItem" />
</template>
<script>
import TableEstablishment from "@/components/establishment/TableEstablishment.vue";
import { findAllEstablishmentApi, createEstablishmentApi, updateEstablishmentApi, deleteEstablishmentApi } from '@/api/EstablishmentService';
import ModalCreateEstablishment from "@/components/establishment/ModalCreateEstablishment.vue";
import { onMounted, ref } from "vue";
import { basicAlert, confirmBasic } from '@/helpers/SweetAlert';
import ModalEditEstablishment from "@/components/establishment/ModalEditEstablishment.vue";
import store from '@/store';

export default ({
    components: {
        TableEstablishment,
        ModalCreateEstablishment,
        ModalEditEstablishment
    },
    setup() {
        const dataEstablishment = ref([]);
        const storeEdit = ref({})
        const dialogEdit = ref(false);

        onMounted(() => {
            reloadData()
        })

        const reloadData = async () => {
            await findAllEstablishmentApi(store.state.token)
                .then(response => {
                    dataEstablishment.value = response.data
                })
        }

        const onCreateItem = async (data) => {
            if (data.name != "" && data.direction != "") {
                await createEstablishmentApi(data, store.state.token)
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
                await updateEstablishmentApi(storeEdit.value.item.id, data, store.state.token)
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
                await deleteEstablishmentApi(item.item.id, store.state.token)
                    .then(() => {
                        basicAlert(() => {
                            reloadData()
                        }, 'success', 'Logrado', "Se ha eliminado correctamente")
                    })
            }, '¿Estás seguro de eliminar este almacén?', 'Aceptar');
        }

        return {
            dataEstablishment,
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