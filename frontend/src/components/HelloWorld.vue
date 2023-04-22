<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue';
import PrimeButton from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import HelloWorldService from '/@/Services/HelloWorldService';

defineProps<{ msg: string }>();
const service = ref(new HelloWorldService());

interface TableRow {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const countUpButton = ref();
const dt = ref<TableRow[]>([]);
const isDisplayTable = computed(() => dt.value.length > 0);

onMounted(async () => {
    const todos = await service.value.GetTodos();
    if (todos) {
        dt.value = todos.data;
        countUpButton.value.$el.focus();
    }
});

const count = ref(0);
</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'HelloWorld',
});
</script>
<template>
    <div>
        <h1>{{ msg }}</h1>

        <div class="card">
            <prime-button
                ref="countUpButton"
                :label="'count up ' + count"
                @click="count++"
                data-testid="countup-button"
            />
        </div>
        <div v-if="isDisplayTable">
            <data-table
                :value="dt"
                paginator
                :rows="5"
                :rowsPerPageOptions="[5, 10, 20, 50]"
                tableStyle="min-width: 50rem"
            >
                <column :field="'userId'" :header="'userId'" />
                <column :field="'id'" :header="'id'" />
                <column :field="'title'" :header="'title'" />
                <column :field="'completed'" :header="'completed'" />
            </data-table>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
::v-deep(.p-paginator) {
    border-radius: 0%;
}
</style>
