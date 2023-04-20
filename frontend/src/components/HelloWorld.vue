<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import PrimeButton from 'primevue/button';
const countUpButton = ref();

defineProps<{ msg: string }>();

onMounted(async () => {
    const json = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => json);
    countUpButton.value.$el.focus();
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
            <!-- <button ref="countUpButton" data-testid="countup-button"></button> -->
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
