<template>
    <div class="w-full mt-2.5">
        <div class="w-full block lg:grid gap-2">
            <div class="container_autocomplete col-span-2">
                <v-autocomplete v-model="selectedItem" :items="filteredItems" hide-details
                    placeholder="Seleccionar productos" @keydown.tab.stop.prevent="addTag"
                    @keydown.enter.stop.prevent="addTag" @update:search="updateValueInput" color="blue"
                    clearable></v-autocomplete>
            </div>
            <div class="w-full flex gap-2 min-h-[2rem] pt-1 lg:pt-0">
                <v-btn variant="outlined" v-for="(tag, index) in tags" :key="index" color="blue" size="small"
                    class="no-cursor-pointer">
                    {{ tag }}
                    <span @click="removeTag(index)" class="remove-tag">X</span>
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, computed, watch } from 'vue';

export default {
    props: {
        itemsProduct: Array
    },
    emits: ['selected-item'],
    setup(props, { emit }) {
        const items = ref([])
        const selectedItem = ref("");
        const newTag = ref("");
        const tags = ref([]);

        watch(() => props.itemsProduct, (newVal) => {
            items.value = newVal
        })

        const filteredItems = computed(() => { 
            if (tags.value.length > 0) {
                const filterTags = tags.value.map(tag => new RegExp(tag, 'i'));
                return items.value.filter(item => {
                    return filterTags.every(tagRegex => tagRegex.test(item));
                });
            }else{
                return props.itemsProduct
            }
        });

        const updateValueInput = (data) => {
            newTag.value = data;
        };

        const addTag = () => {
            if (newTag.value.trim() !== "") {
                tags.value.push(newTag.value.trim());
                newTag.value = "";
                selectedItem.value = ""
            }
        };

        const removeTag = (index) => {
            tags.value.splice(index, 1);
        };

        watch(() => selectedItem.value, (newVal) => {
            if (newVal) {
                emit('selected-item', { item: newVal })
            }
            selectedItem.value = ""
        })

        return {
            items,
            selectedItem,
            newTag,
            tags,
            filteredItems,
            updateValueInput,
            addTag,
            removeTag
        };
    }
};
</script>
  
<style>
.no-cursor-pointer {
    cursor: default !important;
}

.tag {
    display: inline-block;
    margin: 0 5px 5px 0;
    padding: 5px 15px;
    border-radius: 4px;
}

.remove-tag {
    margin-left: 10px;
    cursor: pointer;
}

.container_autocomplete {
    width: 100%;
}
</style>
  