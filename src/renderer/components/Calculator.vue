<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {sum} from "@shared/sum";

const number1 = ref(0);
const number2 = ref(0);

const resDirect = computed(() => sum(number1.value, number2.value));
const resMain = ref<number | null>(null)

watch([number1, number2], async () => {
  if (!window.electronAPI) {
    return
  }

  resMain.value = await window.electronAPI.sum(number1.value, number2.value)
}, { immediate: true })
</script>

<template>
  <h3>Sum</h3>
  <input type="number" v-model="number1" />
  <span>+</span>
  <input type="number" v-model="number2" />
  <h3>Result</h3>
  <p>renderer process: {{ resDirect }}</p>
  <p>main process: {{ resMain ?? 'null' }}</p>
</template>