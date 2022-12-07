<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { useCounterStore } from '../stores/counter';

defineProps<{
  msg: string;
}>();
onMounted(() => {
  console.log('mounted');
});

const counter = useCounterStore();

const pi = ref(0);

watchEffect(() => {
  console.log(counter.count);

  console.log(pi.value);
});

const onIncrement = () => {
  counter.increment();
};

const onPiIncrement = () => {
  pi.value++;
};

// watchEffect(() => console.log(count.value));
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>COUNT: {{ counter.count }}</h3>
    <button @click="onIncrement">onIncrement</button>
    <button @click="onPiIncrement">onPiIncrement</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
