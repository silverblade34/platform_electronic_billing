<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" color="teal">
                <div class="p-2 pt-10 flex items-center justify-center gap-2">
                    <img :src="logoBilling" class="w-6" />
                    <span v-if="!rail" class="font-bold text-2xl">Mixercon</span>
                </div>
                <v-list density="compact" nav class="pt-10">
                    <router-link to="/home">
                        <v-list-item @click="selectItem('/home')" prepend-icon="mdi-view-dashboard" title="Home" value="home"
                            :class="{ 'selected-item': selectedItem === '/home' }"></v-list-item>
                    </router-link>
                    <router-link to="/customers"> <v-list-item @click="selectItem('/customers')" prepend-icon="mdi-domain"
                            title="Clientes" value="customers"
                            :class="{ 'selected-item': selectedItem === '/customers' }"></v-list-item></router-link>
                    <router-link to="/products"> <v-list-item @click="selectItem('/products')" prepend-icon="mdi-shape-plus"
                            title="Productos" value="products"
                            :class="{ 'selected-item': selectedItem === '/products' }"></v-list-item> </router-link>
                </v-list>
            </v-navigation-drawer>
            <v-main class="h-screen bg-slate-50">
                <div class="w-full bg-white flex justify-between items-center px-3 shadow-sm">
                    <v-btn variant="text" icon="mdi-menu" color="blue-grey-lighten-1" class="cursor-pointer"
                        @click.stop="rail = !rail"></v-btn>
                    <div class="flex gap-2 items-center">
                        <div class="flex items-center text-start text-xs">
                            <v-list>
                                <v-list-item class="text-start text-xs item-personalizado" :prepend-avatar="avatarPath"
                                    title="Hola, Juan" subtitle="Administrador">
                                </v-list-item>
                            </v-list>
                        </div>
                        <MenuAsPopover />
                    </div>
                </div>
                <section class="overflow-y-auto section_main" :class="isMobile ? 'p-4' : 'p-8'">
                    <router-view />
                </section>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import avatarImage from "@/assets/iconuser_hombre.png";
import LogoBilling from "@/assets/login/BillingLogo.png";
import MenuAsPopover from '@/components/general/MenuAsPopover.vue';

export default {
    components: {
        MenuAsPopover,
    },
    data() {
        return {
            avatarPath: avatarImage,
            logoBilling: LogoBilling,
        }
    },
    setup() {
        const isMobile = ref(false);
        const drawer = ref(true)
        const rail = ref(true)
        const selectedItem = ref(null)
        const router = useRoute(); // Obtener la ruta actual

        onMounted(() => {
            const currentRoute = router.fullPath;
            selectedItem.value = currentRoute
            handleResize();
            window.addEventListener("resize", handleResize);
        })

        const selectItem = (item) => {
            selectedItem.value = item
        }

        const handleResize = () => {
            isMobile.value = window.innerWidth <= 500; // Define aquí el ancho máximo para considerar como pantalla pequeña
        };

        return {
            isMobile,
            drawer,
            rail,
            selectedItem,
            selectItem
        }
    }
}
</script>
<style>
.v-list-item-title {
    font-size: 14px !important;
}

.v-list-item-subtitle {
    font-size: 13px !important;
}

.selected-item {
    background-color: #2dd4be70 !important;
    /* Cambia el fondo del item seleccionado según tu preferencia */
    /* Agrega estilos adicionales para indicar que el elemento está seleccionado */
}

.section_main {
    overflow-y: auto !important;
    height: 100%;
    padding-bottom: 5rem !important;
}
</style>