<template>
  <div class="label">
    <template v-if="type !== 'checkbox'">
      <p>{{ txt }}</p>
      <input :type="type" :name="name" :placeholder="placeholder" />
    </template>
    <template v-if="type === 'checkbox'">
      <div class="checkbox_wrap">
        <input :type="type" :name="name" :id="name" />
        <label :for="name"></label>
      </div>
      <a href="#" class="link_underline"
        ><b>{{ txt }}</b></a
      >
    </template>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    type: String,
    name: String,
    txt: String,
    placeholder: String,
  },
  computed: {},
};
</script>
