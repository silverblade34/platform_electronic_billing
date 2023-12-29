<template>
    <div class="rounded-lg bg-white elevation-1 p-8 lg:grid lg:grid-cols-4 gap-2 block">
        <div>
            <span>Tipo de comprobante</span>
            <v-select label="Seleccionar" class="pt-4"
                :items="['FACTURA ELECTRÓNICA', 'BOLETA DE VENTA ELECTRÓNICA', 'NOTA DE VENTA']" color="blue"
                v-model="voucher_type"></v-select>
        </div>
        <div>
            <span>Cliente
                <ModalCreateCustomer @create-item="createCustomers" />
            </span>
            <v-autocomplete label="Seleccionar" class="pt-2" :items="listCustomers.map(customer => customer.legal_name)"
                color="blue" v-model="customer"></v-autocomplete>
        </div>
        <div>
            <span>Moneda</span>
            <v-select label="Seleccionar" class="pt-4" :items="['PEN', 'USD']" color="blue" v-model="currency"></v-select>
        </div>
        <div>
            <span>Condición de pago</span>
            <v-select label="Seleccionar" class="pt-4" :items="['Contado', 'Crédito']" color="blue"
                v-model="condition"></v-select>
        </div>
        <div>
            <span>Fecha de emisión</span>
            <v-text-field type="date" hide-details class="pt-4" color="blue" v-model="date_created"></v-text-field>
        </div>
        <div>
            <span>Fecha de vencimiento</span>
            <v-text-field type="date" hide-details class="pt-4" color="blue" v-model="due_date"></v-text-field>
        </div>
        <div>
            <span>Establecimiento</span>
            <v-select label="Seleccionar" class="pt-4" :items="listEstablishment.map(establishment => establishment.name)"
                color="blue" v-model="establishment"></v-select>
        </div>
        <div>
            <span>Almacén</span>
            <v-select label="Seleccionar" class="pt-4" :items="listStore.map(store => store.name)" color="blue"
                v-model="store"></v-select>
        </div>
        <div class="col-span-2 pt-2">
            <span>Producto
                <ModalCreateProcuct @create-item="createProduct" />
            </span>
            <AutocompleteProduct :itemsProduct="listProducts.map(product => product.description)"
                @selected-item="onSelectedProduct" />
        </div>
        <v-table class="col-span-4">
            <thead>
                <tr>
                    <th class="text-left">
                        #
                    </th>
                    <th class="text-left">
                        Descripción
                    </th>
                    <th class="text-left">
                        Cantidad
                    </th>
                    <th class="text-left">
                        Precio unitario
                    </th>
                    <th class="text-left min-w-[5rem]">
                        Total
                    </th>
                    <th class="text-center">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in voucherProducts" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.description }}</td>
                    <td>
                        <v-text-field type="number" v-model="item.amount" density="compact" hide-details class="max-w-[50%]"
                            variant="underlined" color="blue"></v-text-field>
                    </td>
                    <td>
                        <v-text-field type="number" v-model="item.unit_price" density="compact" hide-details
                            class="max-w-[50%]" variant="underlined" color="blue"></v-text-field>
                    </td>
                    <td>
                        {{ siglaMoney }} {{ item.total.toFixed(2) }}
                    </td>
                    <td class="text-center">
                        <span @click="removeProduct(index)">
                            <v-btn icon="mdi-delete-empty" size="small" variant="text" color="red"></v-btn>
                            <v-tooltip activator="parent" location="top">Quitar</v-tooltip>
                        </span>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <div class="flex justify-end w-full col-span-4 pt-4">
            <div>
                <div class="text-gray-400 font-bold title_views flex">
                    <span class="w-full">Subtotal: </span>
                    <div class="w-full text-end">{{ siglaMoney }} {{
                        total }}</div>
                </div>
                <div class="text-gray-400 font-bold title_views flex">
                    <span class="w-full">I.G.V. 18%:</span>
                    <div class="w-full text-end">{{ siglaMoney }} {{
                        ((total / 100) * 18).toFixed(2) }} </div>
                </div>
                <div class="text-gray-400 font-bold title_views flex">
                    <span class="w-full">Total:</span>
                    <div class="w-full text-end"> {{ siglaMoney }} {{
                        (Number(total) + Number((total / 100) * 18)).toFixed(2) }} </div>
                </div>
                <div class="flex gap-2 pt-4">
                    <v-btn class="text-none" color="blue-grey-lighten-2" @click="cancelQuote">Cancelar</v-btn>
                    <v-btn class="text-none" color="indigo-lighten-2" @click="acceptQuote">Aceptar</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { onMounted, ref, watch } from "vue";
import { basicAlert } from '@/helpers/SweetAlert';
import { findAllCustomerApi, createCustomerApi } from '@/api/CustomerService';
import { findAllProductsApi, createProductsApi } from '@/api/ProductService';
import { findAllEstablishmentApi } from '@/api/EstablishmentService';
import { findAllStoreApi } from '@/api/StoreService';
import ModalCreateProcuct from "@/components/products/ModalCreateProduct.vue";
import ModalCreateCustomer from "../customers/ModalCreateCustomer.vue";
import AutocompleteProduct from '@/components/vouchers/AutocompleteProduct.vue';
import storeV from '@/store';

export default ({
    components: {
        ModalCreateCustomer,
        ModalCreateProcuct,
        AutocompleteProduct
    },
    props: {
        itemEdit: Object
    },
    emits: ['cancel-quote', 'accept-quote'],
    setup(props, { emit }) {
        // Listas usada para los select
        const listProducts = ref([]);
        const listCustomers = ref([]);
        const listStore = ref([]);
        const listEstablishment = ref([]);
        // Campos para la creación/edición del voucher
        const voucherProducts = ref([]);
        const total = ref(0.0);
        const voucher_type = ref('');
        const currency = ref('');
        const siglaMoney = ref('');
        const condition = ref('');
        const date_created = ref('');
        const due_date = ref('');
        const rol = ref('');
        // Campos referencia a entidades del voucher
        const store = ref('');
        const storeId = ref(null);
        const customer = ref('');
        const customerId = ref(null);
        const establishment = ref('');
        const establishmentId = ref(null);

        const obtenerFechaEnFormatoISO = () => {
            const fechaActual = new Date();
            const year = fechaActual.getFullYear();
            const month = String(fechaActual.getMonth() + 1).padStart(2, '0');
            const day = String(fechaActual.getDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
        }

        watch(() => props.itemEdit, async (newVal) => {
            await reloadData()
            if (newVal && Object.keys(newVal).length > 0) {
                fillOutTheFields(newVal)
            }
        })

        const fillOutTheFields = (voucher) => {
            total.value = voucher.total
            voucher_type.value = voucher.voucher_type
            currency.value = voucher.currency
            condition.value = voucher.condition
            date_created.value = voucher.date_created.split("T")[0]
            due_date.value = voucher.due_date.split("T")[0]
            customer.value = voucher.client.legal_name
            store.value = voucher.store.name
            establishment.value = voucher.establishment.name
            voucherProducts.value = voucher.elements.map(item => {
                const productData = item.product
                const { product, ...rest } = item;
                rest.description = productData.description
                return rest
            })
        }

        onMounted(async () => {
            rol.value = storeV.state.rol
            await reloadData()
            date_created.value = obtenerFechaEnFormatoISO();
            due_date.value = obtenerFechaEnFormatoISO();
            if (props.itemEdit && Object.keys(props.itemEdit).length > 0) {
                fillOutTheFields(props.itemEdit)
            }
        })

        const reloadData = async () => {
            const [productResponse, storeResponse, customersResponse, establishmentResponse] = await Promise.all([
                findAllProductsApi(storeV.state.token),
                findAllStoreApi(storeV.state.token),
                findAllCustomerApi(storeV.state.token),
                findAllEstablishmentApi(storeV.state.token)
            ])
            listProducts.value = productResponse.data
            listCustomers.value = customersResponse.data
            listEstablishment.value = establishmentResponse.data
            listStore.value = storeResponse.data;
        }

        const createCustomers = async (data) => {
            if (data.document_type != "" && data.document_number != "") {
                await createCustomerApi(data, storeV.state.token)
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

        const createProduct = async (data) => {
            if (data.cod_product != "" && data.description != "" && data.price_list != "") {
                await createProductsApi(data, storeV.state.token)
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

        const removeProduct = (index) => {
            voucherProducts.value.splice(index, 1); // Elimina el producto del arreglo
        };

        watch(() => currency.value, (newVal) => {
            if (newVal == "PEN") {
                siglaMoney.value = "S/."
            } else if (newVal == "USD") {
                siglaMoney.value = "$ "
            }
        })

        watch(() => customer.value, (newVal) => {
            if (newVal) {
                const customer = listCustomers.value.find(customer => customer.legal_name == newVal)
                customerId.value = customer.id
            }
        })

        watch(() => establishment.value, (newVal) => {
            if (newVal) {
                establishmentId.value = listEstablishment.value.find(establishment => establishment.name == newVal).id
            }
        })

        watch(() => store.value, (newVal) => {
            if (newVal) {
                storeId.value = listStore.value.find(store => store.name == newVal).id
            }
        })

        const onSelectedProduct = (data) => {
            const product = {
                description: data.item,
                amount: 1,
                unit_price: 0.0,
                total: 0.0,
                product: listProducts.value.find(product => product.description == data.item).id
            }
            voucherProducts.value.push(product);
        }

        watch(
            () => voucherProducts.value,
            (newListedProducts) => {
                let totalItems = 0
                newListedProducts.forEach((product) => {
                    // Calcula el total para cada producto en base a amount y price
                    product.total = Number((product.amount * product.unit_price).toFixed(2));
                    totalItems += product.total
                });
                total.value = totalItems
            },
            { deep: true } // Observa cambios en profundidad dentro de los objetos
        );

        const cancelQuote = () => {
            date_created.value = due_date.value = condition.value = store.value = currency.value = total.value = ""
            voucherProducts.value = []
            emit('cancel-quote')
        }

        const acceptQuote = () => {
            if (date_created.value != "" && due_date.value != "" && condition.value != "" &&
                currency.value != "" && store.value != "" && total.value != "" && voucherProducts.value.length > 0) {
                emit('accept-quote', {
                    "date_created": date_created.value + " " + "00:00",
                    "due_date": due_date.value + " " + "00:00",
                    "condition": condition.value,
                    "voucher_type": voucher_type.value,
                    "currency": currency.value,
                    "total": total.value,
                    "client": customerId.value,
                    "store": storeId.value,
                    "establishment": establishmentId.value,
                    "elements": voucherProducts.value,
                })
            } else {
                basicAlert(() => { }, 'warning', 'Advertencia', "Hay campos que están sin seleccionar o rellenar")
            }
        }

        return {
            createCustomers,
            cancelQuote,
            removeProduct,
            acceptQuote,
            createProduct,
            onSelectedProduct,
            voucher_type,
            siglaMoney,
            rol,
            customer,
            total,
            establishment,
            listProducts,
            voucherProducts,
            currency,
            condition,
            date_created,
            due_date,
            store,
            listCustomers,
            listEstablishment,
            listStore
        }
    }
})
</script>
