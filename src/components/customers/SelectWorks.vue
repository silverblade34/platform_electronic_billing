<template>
    <div class="w-full">
        <div class="w-full rounded h-[16rem] overflow-y-auto p-2 border container_scroll" id="grupos-disponibles">
            <p v-for="group in listGroupsInitial" :key="group.name"
                class="p-2 pl-2 text-sm my-1 ease-in duration-100 cursor-pointer rounded-sm" :class="{
                    'bg-blue-200': selectedItems.includes(group.name),
                    'bg-gray-100 hover:bg-gray-200': !selectedItems.includes(group.name),
                }" @click="toggleSelection(group.name, $event)">
                {{ truncateText(group.name) }}
            </p>
        </div>
    </div>
</template>
<script>
import { ref, watch } from "vue"

export default ({
    props: {
        listGroups: Array,
        nameGrupo: String
    },
    emits: ['list-seleccionados'],
    setup(props, { emit }) {
        const listGroupsInitial = ref(props.listGroups)
        const selectedItems = ref([]);
        watch(() => props.listGroups, (newVal) => {
            listGroupsInitial.value = newVal;
        })

        watch(() => selectedItems.value, (newVal) => {
            emit('list-seleccionados', newVal)
        })

        const toggleSelection = (group, event) => {
            // Toggle de selección de grupos disponibles
            if (event.ctrlKey || event.metaKey) {
                // Si se presiona Ctrl (o Command en macOS) + clic, selecciona múltiples elementos
                if (selectedItems.value.includes(group)) {
                    const indexToRemove = selectedItems.value.indexOf(group);
                    selectedItems.value.splice(indexToRemove, 1);
                } else {
                    selectedItems.value.push(group);
                    emit('list-seleccionados', selectedItems.value)
                }
            } else {
                // Si no se presiona Ctrl + clic, selecciona solo el elemento actual
                selectedItems.value = [group];
            }
        }
        const toggleSelectionAll = () => {
            selectedItems.value = listGroupsInitial.value.map(group => group.name)
        }

        const truncateText = (text) => {
            if (text && text.length > 20) {
                return text.slice(0, 20) + '...';
            }
            return text;
        };
        return {
            selectedItems,
            listGroupsInitial,
            toggleSelectionAll,
            toggleSelection,
            truncateText
        }
    }
})
</script>